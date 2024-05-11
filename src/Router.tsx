import React from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@/components/loader/Loader";

const Home = React.lazy(() => import("@/pages/Home"));

const CalculoDiferencial = React.lazy(() => import("@/apuntes/matematica/CalculoDiferencial"));
const AlgebraLineal = React.lazy(() => import("@/apuntes/matematica/AlgebraLineal"));
const Notacion = React.lazy(() => import("@/apuntes/matematica/Notacion"));
const TeoriaDeGrafos = React.lazy(() => import("@/apuntes/matematica/TeoriaDeGrafos"));
const TeoriaDeJuegos = React.lazy(() => import("@/apuntes/matematica/TeoriaDeJuegos"));

const notes = [
  [CalculoDiferencial, "calculo_diferencial"],
  [AlgebraLineal, "algebra_lineal"],
  [Notacion, "notacion"],
  [TeoriaDeGrafos, "teoria_de_grafos"],
  [TeoriaDeJuegos, "teoria_de_juegos"],
];

export default function Router() {
  console.log(CalculoDiferencial.name);

  return (
    <Routes>
      <Route
        key="home"
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
        }
      />
      {notes.map((note, index) => {
        const Note = note[0];
        return (
          <Route
            key={index}
            path={`/apuntes/matematica/${note[1]}`}
            element={
              <React.Suspense fallback={<Loader />}>
                <Note />
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}
