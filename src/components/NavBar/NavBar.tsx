import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  return isMobile ? (
    <MobileNavBar openMenuId={openMenuId} handleClick={handleClick} handleClose={handleClose} />
  ) : (
    <DesktopNavBar openMenuId={openMenuId} handleClick={handleClick} handleClose={handleClose} />
  );
}