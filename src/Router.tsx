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
        Component: React.lazy(() => import("@/apuntes/matematica/calculo-diferencial/CalculoDiferencial")), 
        path: `${mathUrl}calculo-diferencial`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/calculo-vectorial/CalculoVectorial")),
        path: `${mathUrl}calculo-vectorial`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/algebra-lineal/AlgebraLineal")), 
        path: `${mathUrl}algebra-lineal`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/notacion/Notacion")), 
        path: `${mathUrl}notacion`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/teoria-de-grafos/TeoriaDeGrafos")), 
        path: `${mathUrl}teoria-de-grafos`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/teoria-de-juegos/TeoriaDeJuegos")), 
        path: `${mathUrl}teoria-de-juegos`
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
