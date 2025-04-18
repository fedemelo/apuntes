import React from "react";
import { Link } from "react-router-dom";
import { kebabCase } from "change-case";
import removeAccents from "remove-accents";
import { AppBar, Button, Container, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import existingNotes from "@/apuntes/existingNotes.json";

interface MobileNavBarProps {
  openMenuId: string | null;
  handleClick: (menuId: string) => (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

export default function MobileNavBar({ openMenuId, handleClick, handleClose }: MobileNavBarProps) {
  const buttonStyles = {
    fontSize: '1rem',
    width: '100%',
    justifyContent: 'flex-start',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  };

  const menuItemStyles = {
    fontSize: '0.9rem',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  };

  const homeRoute = "/apuntes/";

  return (
    <AppBar position="static" className="navigation-bar">
      <Container>
        <Toolbar disableGutters className="toolbar" sx={{ flexDirection: 'column' }}>
          <Button
            component={Link}
            to={homeRoute}
            color="inherit"
            sx={{ ...buttonStyles, marginTop: '10px' }}
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

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
                  sx={buttonStyles}
                >
                  {topic}
                </Button>
                <Menu
                  id={`${kebabCaseTopic}-menu`}
                  anchorEl={document.getElementById(`${kebabCaseTopic}-button`)}
                  open={openMenuId === kebabCaseTopic}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": `${kebabCaseTopic}-button` }}
                  PaperProps={{ style: { width: '100%' } }}
                >
                  {subtopics.map(({ name, description }) => {
                    const kebabCaseSubtopic = kebabCase(removeAccents(name));

                    const menuItem = (
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to={`${homeRoute}${kebabCaseTopic}/${kebabCaseSubtopic}`}
                        sx={menuItemStyles}
                      >
                        {name}
                      </MenuItem>
                    );

                    return description ? (
                      <Tooltip key={kebabCaseSubtopic} title={description} arrow>
                        {menuItem}
                      </Tooltip>
                    ) : (
                      <React.Fragment key={kebabCaseSubtopic}>{menuItem}</React.Fragment>
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