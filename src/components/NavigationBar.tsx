import * as React from "react";
import { Link } from "react-router-dom";

import { kebabCase } from "change-case";
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
    const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);

    const handleClick = (categoryId: string) => (_event: React.MouseEvent<HTMLButtonElement>) => {
        if (openMenuId === categoryId) {
            setOpenMenuId(null);
        } else {
            setOpenMenuId(categoryId);
        }
    };

    const handleClose = () => {
        setOpenMenuId(null);
    };

    return (
        <AppBar position="static" className="navigation-bar">
            <Container>
                <Toolbar disableGutters className="toolbar">
                    {Object.entries(existingApuntes).map(([topic, subtopics]) => {
                        const kebabCaseTopic = kebabCase(removeAccents(topic));
                        return (
                            <React.Fragment key={topic}>
                                <Button
                                    className="topic-button"
                                    id={`${kebabCaseTopic}-button`}
                                    aria-controls={openMenuId === kebabCaseTopic ? `${topic}-menu` : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenuId === kebabCaseTopic ? "true" : undefined}
                                    onClick={handleClick(kebabCaseTopic)}
                                    color="inherit"
                                >
                                    {topic}
                                </Button>
                                <Menu
                                    id={`${kebabCaseTopic}-menu`}
                                    anchorEl={document.getElementById(`${kebabCaseTopic}-button`)}
                                    open={openMenuId === kebabCaseTopic}
                                    onClose={handleClose}
                                    MenuListProps={{ "aria-labelledby": `${kebabCaseTopic}-button` }}
                                >
                                    {subtopics.map((subtopic) => {
                                        const kebabCaseSubtopic = kebabCase(removeAccents(subtopic));

                                        return (
                                            <MenuItem
                                                key={kebabCaseSubtopic}
                                                onClick={handleClose}
                                                component={Link}
                                                to={`/apuntes/${kebabCaseTopic}/${kebabCaseSubtopic}`}
                                            >
                                                {subtopic}
                                            </MenuItem>
                                        );
                                    })}
                                </Menu>
                            </React.Fragment>
                        );
                    })}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
