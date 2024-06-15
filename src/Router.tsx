import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Loader from "@/components/loader/Loader";
const Custom404 = React.lazy(() => import("@/pages/Custom404"));

const baseUrl = "apuntes";
const math = "matematica";
const differentialCalculus = "calculo-diferencial";
const vectorCalculus = "calculo-vectorial";
const linearAlgebra = "algebra-lineal";
const notation = "notacion";
const graphTheory = "teoria-de-grafos";
const gameTheory = "teoria-de-juegos";
export const DIFFERENTIAL_CALCULUS = `/${baseUrl}/${math}/${differentialCalculus}`;
export const VECTOR_CALCULUS = `/${baseUrl}/${math}/${vectorCalculus}`;
export const LINEAR_ALGEBRA = `/${baseUrl}/${math}/${linearAlgebra}`;
export const NOTATION = `/${baseUrl}/${math}/${notation}`;
export const GRAPH_THEORY = `/${baseUrl}/${math}/${graphTheory}`;
export const GAME_THEORY = `/${baseUrl}/${math}/${gameTheory}`;

const files = [
  {
    Component: React.lazy(() => import("@/pages/Home")),
    path: "/apuntes/"
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/calculo-diferencial/CalculoDiferencial")),
    path: DIFFERENTIAL_CALCULUS
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/calculo-vectorial/CalculoVectorial")),
    path: VECTOR_CALCULUS
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/algebra-lineal/AlgebraLineal")),
    path: LINEAR_ALGEBRA
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/notacion/Notacion")),
    path: NOTATION
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/teoria-de-grafos/TeoriaDeGrafos")),
    path: GRAPH_THEORY
  },
  {
    Component: React.lazy(() => import("@/apuntes/matematica/teoria-de-juegos/TeoriaDeJuegos")),
    path: GAME_THEORY
  }
];

const RedirectHandler = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      navigate(redirect);
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
