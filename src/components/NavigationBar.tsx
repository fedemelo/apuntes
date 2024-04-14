import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { existingNotes } from '@/notes/notesMetadata';


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
    <>
      {existingNotes.map((category) => (
        <React.Fragment key={category.name}>
          <Button
            id={`${category.name}-button`}
            aria-controls={openMenuId === category.name ? `${category.name}-menu` : undefined}
            aria-haspopup="true"
            aria-expanded={openMenuId === category.name ? 'true' : undefined}
            onClick={handleClick(category.name)}
          >
            {category.name}
          </Button>
          <Menu
            id={`${category.name}-menu`}
            anchorEl={document.getElementById(`${category.name}-button`)}
            open={openMenuId === category.name}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': `${category.name}-button` }}
          >
            {category.subjects.map((subject) => (
              <MenuItem key={subject} onClick={handleClose}>{subject}</MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      ))}
    </>
  );
}
