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
                        const snakecaseTopic = snakeCase(removeAccents(topic));
                        return (
                            <React.Fragment key={topic}>
                                <Button
                                    className="topic-button"
                                    id={`${snakecaseTopic}-button`}
                                    aria-controls={openMenuId === snakecaseTopic ? `${topic}-menu` : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenuId === snakecaseTopic ? "true" : undefined}
                                    onClick={handleClick(snakecaseTopic)}
                                    color="inherit"
                                >
                                    {topic}
                                </Button>
                                <Menu
                                    id={`${snakecaseTopic}-menu`}
                                    anchorEl={document.getElementById(`${snakecaseTopic}-button`)}
                                    open={openMenuId === snakecaseTopic}
                                    onClose={handleClose}
                                    MenuListProps={{ "aria-labelledby": `${snakecaseTopic}-button` }}
                                >
                                    {subtopics.map((subtopic) => {
                                        const snakeCaseSubtopic = snakeCase(removeAccents(subtopic));

                                        return (
                                            <MenuItem
                                                key={snakeCaseSubtopic}
                                                onClick={handleClose}
                                                component={Link}
                                                to={`/apuntes/${snakecaseTopic}/${snakeCaseSubtopic}`}
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
