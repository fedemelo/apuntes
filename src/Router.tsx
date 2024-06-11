import React from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@/components/loader/Loader";


const Custom404 = React.lazy(() => import("@/pages/Custom404"));
const mathUrl = "/apuntes/matematica/";
const files = [
    {
        Component: React.lazy(() => import("@/pages/Home")), 
        path: "/apuntes/"
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/calculo_diferencial/CalculoDiferencial")), 
        path: `${mathUrl}calculo_diferencial`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/calculo_vectorial/CalculoVectorial")),
        path: `${mathUrl}calculo_vectorial`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/algebra_lineal/AlgebraLineal")), 
        path: `${mathUrl}algebra_lineal`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/notacion/Notacion")), 
        path: `${mathUrl}notacion`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/teoria_de_grafos/TeoriaDeGrafos")), 
        path: `${mathUrl}teoria_de_grafos`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/teoria_de_juegos/TeoriaDeJuegos")), 
        path: `${mathUrl}teoria_de_juegos`
    }
]

export default function Router() {
  return (
    <Routes>
      {files.map((file, index) => {
        return (
          <Route
            key={index}
            path={file.path}
            element={
              <React.Suspense fallback={<Loader />}>
                <file.Component />
              </React.Suspense>
            }
          />
        );
      })}
        <Route path="/apuntes/*" element={<Custom404 />} />
    </Routes>
  );
}
