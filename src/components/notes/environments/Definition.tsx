import React from "react";
import ReactDomServer from "react-dom/server";

import "./BoxStyles.css";
import "./DefinitionStyles.css";

import removeAccents from "remove-accents";
import { snakeCase } from "change-case";

interface DefinitionProps {
    children: React.ReactNode;
    concept: React.ReactNode | string;
    id?: string;
}

export default function Definition({ children, concept, id }: DefinitionProps) {
    id = id || generateIdAutomatically(concept);

    return (
        <div className="definition-container">
            <div className="definition-box">
                <div className="definition-title" id={id}>
                    <strong>{concept}</strong>
                </div>
                {children}
            </div>
            <div className="concept-side" id={id}>
                <strong>{concept}</strong>
            </div>
        </div>
    );
}

export function generateIdAutomatically(concept: React.ReactNode | string) {
    let idString = "";

    if (typeof concept === "string") {
        idString = concept;
    } else if (React.isValidElement(concept) && typeof concept.props.children === "string") {
        idString = concept.props.children;
    } else {
        const conceptAsString = ReactDomServer.renderToStaticMarkup(concept);
        // Automatic ID generation fails if the concept is not a string or an element with a string as children
        // Most notably, this will fail if the concept contains a Math component
        throw new Error(
            `Failed to generate automatic ID for the definition of concept '${conceptAsString}'. Please provide an id prop manually.`
        );
    }

    return snakeCase(removeAccents(idString));
}
