import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Link } from "react-router-dom";
import { snakeCase } from "change-case";
import removeAccents from "remove-accents";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import "./NavigationBar.css";
import existingApuntes from "@/apuntes/existingApuntes.json";
export default function NavigationBar() {
    const [openMenuId, setOpenMenuId] = React.useState(null);
    const handleClick = (categoryId) => (_event) => {
        if (openMenuId === categoryId) {
            setOpenMenuId(null);
        }
        else {
            setOpenMenuId(categoryId);
        }
    };
    const handleClose = () => {
        setOpenMenuId(null);
    };
    return (_jsx(AppBar, { position: "static", className: "navigation-bar", children: _jsx(Container, { children: _jsx(Toolbar, { disableGutters: true, className: "toolbar", children: Object.entries(existingApuntes).map(([topic, subtopics]) => {
                    const snakecaseTopic = snakeCase(removeAccents(topic));
                    return (_jsxs(React.Fragment, { children: [_jsx(Button, { className: "topic-button", id: `${snakecaseTopic}-button`, "aria-controls": openMenuId === snakecaseTopic ? `${topic}-menu` : undefined, "aria-haspopup": "true", "aria-expanded": openMenuId === snakecaseTopic ? "true" : undefined, onClick: handleClick(snakecaseTopic), color: "inherit", children: topic }), _jsx(Menu, { id: `${snakecaseTopic}-menu`, anchorEl: document.getElementById(`${snakecaseTopic}-button`), open: openMenuId === snakecaseTopic, onClose: handleClose, MenuListProps: { "aria-labelledby": `${snakecaseTopic}-button` }, children: subtopics.map((subtopic) => {
                                    const snakeCaseSubtopic = snakeCase(removeAccents(subtopic));
                                    return (_jsx(MenuItem, { onClick: handleClose, component: Link, to: `/apuntes/${snakecaseTopic}/${snakeCaseSubtopic}`, children: subtopic }, snakeCaseSubtopic));
                                }) })] }, topic));
                }) }) }) }));
}
