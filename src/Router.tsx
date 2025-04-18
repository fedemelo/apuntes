import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Loader from "@/components/loader/Loader";
const Custom404 = React.lazy(() => import("@/pages/Custom404"));

// Paths MUST coincide with the file structure in src
const basePath = "apuntes";
const discreteMathPath = "discrete-mathematics";
const foundationalMathPath = "foundational-mathematics";
const uniMathPath = "matematica-universitaria";

export const DIFFERENTIAL_CALCULUS = `/${basePath}/${uniMathPath}/calculo-diferencial`;
export const INTEGRAL_CALCULUS = `/${basePath}/${uniMathPath}/calculo-integral`;
export const VECTOR_CALCULUS = `/${basePath}/${uniMathPath}/calculo-vectorial`;
export const LINEAR_ALGEBRA = `/${basePath}/${uniMathPath}/algebra-lineal`;

export const NOTATION = `/${basePath}/${discreteMathPath}/notacion`;
export const GRAPH_THEORY = `/${basePath}/${discreteMathPath}/teoria-de-grafos`;
export const GAME_THEORY = `/${basePath}/${discreteMathPath}/teoria-de-juegos`;

export const ARITHMETIC = `/${basePath}/${foundationalMathPath}/arithmetic`;


const files = [
  {
    Component: React.lazy(() => import("@/pages/home/Home")),
    path: "/apuntes/"
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica-universitaria/calculo-diferencial/CalculoDiferencial")),
    path: DIFFERENTIAL_CALCULUS
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica-universitaria/calculo-integral/CalculoIntegral")),
    path: INTEGRAL_CALCULUS
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica-universitaria/calculo-vectorial/CalculoVectorial")),
    path: VECTOR_CALCULUS
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica-universitaria/algebra-lineal/AlgebraLineal")),
    path: LINEAR_ALGEBRA
  },
  {
    Component: React.lazy(() => import("@/apuntes/discrete-mathematics/notacion/Notacion")),
    path: NOTATION
  },
  {
    Component: React.lazy(() => import("@/apuntes/discrete-mathematics/teoria-de-grafos/TeoriaDeGrafos")),
    path: GRAPH_THEORY
  },
  {
    Component: React.lazy(() => import("@/apuntes/discrete-mathematics/teoria-de-juegos/TeoriaDeJuegos")),
    path: GAME_THEORY
  },
  {
    Component: React.lazy(() => import("@/apuntes/foundational-mathematics/arithmetic/Arithmetic")),
    path: `/${basePath}/${foundationalMathPath}/arithmetic`
  },
];

const RedirectHandler = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
};

export default function Router() {
  return (
    <>
      <RedirectHandler />
      <Routes>
        {files.map((file, index) => (
          <Route
            key={index}
            path={file.path}
            element={
              <React.Suspense fallback={<Loader />}>
                <file.Component />
              </React.Suspense>
            }
          />
        ))}
        <Route path="/apuntes/*" element={<Custom404 />} />
      </Routes>
    </>
  );
}
