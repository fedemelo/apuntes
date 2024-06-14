import { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

interface CopyLinkToClipboardProps {
  link: string;
  message: string;
  color: string;
}

export default function CopyLinkToClipboard({
  link,
  message,
  color
}: CopyLinkToClipboardProps) {

  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setOpen(true);
    } catch (err) {
      console.error("Error copying link: ", err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={message}
      >
        <IconButton
          aria-label="copy link"
          size="small"
          onClick={handleCopy}
        >
          <ContentCopyIcon sx={{ color: color, fontSize: 15 }} />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
