import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./DefinitionStyles.css";
import { generateIdAutomatically } from "./Definition";
export default function InlineDefinition({ children, concept, id }) {
    id = id || generateIdAutomatically(concept);
    return (_jsxs("div", { className: "definition-container", children: [_jsx("p", { children: children }), _jsx("div", { className: "concept-side", id: id, children: _jsx("strong", { children: concept }) })] }));
}
