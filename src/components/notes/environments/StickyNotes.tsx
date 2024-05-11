import { Typography } from "@mui/material";
import AbstractStickyNote from "./AbstractStickyNote";

import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FunctionsIcon from '@mui/icons-material/Functions';


interface StickyNoteProps {
  children: React.ReactNode;
  id?: string;
}


const TipIcon = () => <EmojiObjectsIcon fontSize="large" />;

export function Tip({ children, id }: StickyNoteProps) {
  return (
    <AbstractStickyNote
      content={children}
      environmentName="Tip."
      environmentColor="var(--tip-color)"
      environmentIcon={<TipIcon />}
      id={id}
    />
  );
}


const WarningIcon = () => (
  <Typography
    fontWeight={1000}
    style={{
      fontSize: "2.5em",
      lineHeight: "1",
    }}
  >
    !
  </Typography>
);

export function Warning({ children, id }: StickyNoteProps) {
  return (
    <AbstractStickyNote
      content={children}
      environmentName="¡Ojo!"
      environmentColor="var(--warning-color)"
      environmentIcon={<WarningIcon />}
      id={id}
    />
  );
}


const NotationIcon = () => <FunctionsIcon fontSize="large" />;

export function Notation({ children, id }: StickyNoteProps) {
  return (
    <AbstractStickyNote
      content={children}
      environmentName="Notación."
      environmentColor="var(--notation-color)"
      environmentIcon={<NotationIcon />}
      id={id}
    />
  );
}
