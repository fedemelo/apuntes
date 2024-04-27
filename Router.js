import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { pascalCase, snakeCase } from "change-case";
import removeAccents from "remove-accents";
import Loader from "@/components/loader/Loader";
import existingApuntes from "@/apuntes/existingApuntes.json";
const Home = React.lazy(() => import("@/pages/Home"));
export default function Router() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(React.Suspense, { fallback: _jsx(Loader, {}), children: _jsx(Home, {}) }) }, "home"), Object.entries(existingApuntes).map(([topic, subtopics]) => {
                const snakecaseTopic = snakeCase(removeAccents(topic));
                return subtopics.map((subtopic) => {
                    const snakeCaseSubtopic = snakeCase(removeAccents(subtopic));
                    const pascalCaseSubtopic = pascalCase(removeAccents(subtopic));
                    const compiledLocation = `../apuntes/${snakecaseTopic}/${pascalCaseSubtopic}.js`;
                    const CurrentNotes = React.lazy(() => import(/* @vite-ignore */ compiledLocation));
                    const path = `/apuntes/${snakecaseTopic}/${snakeCaseSubtopic}`;
                    return (_jsx(Route, { path: path, element: _jsx(React.Suspense, { fallback: _jsx(Loader, {}), children: _jsx(CurrentNotes, {}) }) }, path));
                });
            })] }));
}
