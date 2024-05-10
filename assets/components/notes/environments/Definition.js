import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDomServer from "react-dom/server";
import "./BoxStyles.css";
import "./DefinitionStyles.css";
import removeAccents from "remove-accents";
import { snakeCase } from "change-case";
export default function Definition({ children, concept, id }) {
    id = id || generateIdAutomatically(concept);
    return (_jsxs("div", { className: "definition-container", children: [_jsxs("div", { className: "definition-box", children: [_jsx("strong", { children: concept }), ". ", children] }), _jsx("div", { className: "concept-side", id: id, children: _jsx("strong", { children: concept }) })] }));
}
export function generateIdAutomatically(concept) {
    let idString = "";
    if (typeof concept === "string") {
        idString = concept;
    }
    else if (React.isValidElement(concept) && typeof concept.props.children === "string") {
        idString = concept.props.children;
    }
    else {
        const conceptAsString = ReactDomServer.renderToStaticMarkup(concept);
        // Automatic ID generation fails if the concept is not a string or an element with a string as children
        // Most notably, this will fail if the concept contains a Math component
        throw new Error(`Failed to generate automatic ID for the definition of concept '${conceptAsString}'. Please provide an id prop manually.`);
    }
    return snakeCase(removeAccents(idString));
}
