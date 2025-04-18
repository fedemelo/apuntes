import React from "react";
import { Link } from "react-router-dom";
import { kebabCase } from "change-case";
import removeAccents from "remove-accents";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import existingNotes from "@/apuntes/existingNotes.json";

export default function NavigationBar() {
    const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);

    const handleClick = (categoryId: string) => () => {
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
                    {Object.entries(existingNotes).map(([topic, subtopics]) => {
                        const kebabCaseTopic = kebabCase(removeAccents(topic));
                        return (
                            <React.Fragment key={topic}>
                                <Button
                                    className="topic-button"
                                    id={`${kebabCaseTopic}-button`}
                                    aria-controls={openMenuId === kebabCaseTopic ? `${kebabCaseTopic}-menu` : undefined}
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
                                    {subtopics.map(({ name, description }: { name: string, description: string }) => {
                                        const kebabCaseSubtopic = kebabCase(removeAccents(name));

                                        const menuItem = (
                                            <MenuItem
                                                onClick={handleClose}
                                                component={Link}
                                                to={`/apuntes/${kebabCaseTopic}/${kebabCaseSubtopic}`}
                                            >
                                                {name}
                                            </MenuItem>
                                        );

                                        return description ? (
                                            <Tooltip key={kebabCaseSubtopic} title={description} arrow>
                                                {menuItem}
                                            </Tooltip>
                                        ) : (
                                            <React.Fragment key={kebabCaseSubtopic}>
                                                {menuItem}
                                            </React.Fragment>
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