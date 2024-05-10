import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './BoxStyles.css';
import './ExampleStyles.css';
const Example = ({ children }) => (_jsx("div", { className: "example-box", children: children }));
Example.Title = ({ children }) => (_jsxs("p", { className: "example-title", children: ["Ejemplo: ", children] }));
export default Example;
