import React from "react";
import { Route, Routes } from "react-router-dom";

import { pascalCase, snakeCase } from 'change-case';
import removeAccents from 'remove-accents';

import Loader from "@/components/loader/Loader";

import { existingApuntes } from "./apuntes/existingApuntes";

const Home = React.lazy(() => import("@/pages/Home"));

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
            {Object.entries(existingApuntes).map(([topic, subtopics]) => {

                const snakecaseTopic: string = snakeCase(removeAccents(topic));

                return subtopics.map(subtopic => {

                    const snakeCaseSubtopic = snakeCase(removeAccents(subtopic));
                    const pascalCaseSubtopic = pascalCase(removeAccents(subtopic));

                    const locationInCode: string = `./apuntes/${snakecaseTopic}/${pascalCaseSubtopic}.tsx`;
                    const CurrentNotes = React.lazy(() => import(/* @vite-ignore */ locationInCode));
                    const path: string = `/apuntes/${snakecaseTopic}/${snakeCaseSubtopic}`;

                    return <Route
                        key={path}
                        path={path}
                        element={
                            <React.Suspense fallback={<Loader />}>
                                <CurrentNotes />
                            </React.Suspense>
                        }
                    />
                });
            }
            )}
        </Routes>
    );
}