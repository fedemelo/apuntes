import React from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@/components/loader/Loader";


const mathUrl = "/apuntes/matematica/";
const files = [
    {
        Component: React.lazy(() => import("@/pages/Home")), 
        path: "/"
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/CalculoDiferencial")), 
        path: `${mathUrl}calculo_diferencial`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/AlgebraLineal")), 
        path: `${mathUrl}algebra_lineal`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/Notacion")), 
        path: `${mathUrl}notacion`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/TeoriaDeGrafos")), 
        path: `${mathUrl}teoria_de_grafos`
    },
    {
        Component: React.lazy(() => import("@/apuntes/matematica/TeoriaDeJuegos")), 
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
    </Routes>
  );
}
