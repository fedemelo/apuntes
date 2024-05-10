import React from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@/components/loader/Loader";

const Home = React.lazy(() => import("@/pages/Home"));
const CalculoDiferencial = React.lazy(() => import("@/apuntes/matematica/CalculoDiferencial"));
const AlgebraLineal = React.lazy(() => import("@/apuntes/matematica/AlgebraLineal"));
const Notacion  = React.lazy(() => import("@/apuntes/matematica/Notacion"));
const TeoriaDeGrafos = React.lazy(() => import("@/apuntes/matematica/TeoriaDeGrafos"));
const TeoriaDeJuegos = React.lazy(() => import("@/apuntes/matematica/TeoriaDeJuegos"));

export default function Router() {
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
            <Route
                key="apuntes"
                path="/apuntes/matematica/calculo_diferencial"
                element={
                    <React.Suspense fallback={<Loader />}>
                        <CalculoDiferencial />
                    </React.Suspense>
                }
            />
            <Route
                key="apuntes"
                path="/apuntes/matematica/algebra_lineal"
                element={
                    <React.Suspense fallback={<Loader />}>
                        <AlgebraLineal />
                    </React.Suspense>
                }
            />
            <Route
                key="apuntes"
                path="/apuntes/matematica/notacion"
                element={
                    <React.Suspense fallback={<Loader />}>
                        <Notacion />
                    </React.Suspense>
                }
            />
            <Route
                key="apuntes"
                path="/apuntes/matematica/teoria_de_grafos"
                element={
                    <React.Suspense fallback={<Loader />}>
                        <TeoriaDeGrafos />
                    </React.Suspense>
                }
            />
            <Route
                key="apuntes"
                path="/apuntes/matematica/teoria_de_juegos"
                element={
                    <React.Suspense fallback={<Loader />}>
                        <TeoriaDeJuegos />
                    </React.Suspense>
                }
            />
        </Routes>
    );
}
