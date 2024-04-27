import { jsx as _jsx } from "react/jsx-runtime";
import "./Loader.scss";
import { useTheme } from "@mui/material/styles";
export default function Loader() {
    const theme = useTheme();
    return (_jsx("div", { className: "spinner-container", children: _jsx("div", { className: "loading-spinner", style: {
                borderTopColor: theme.palette.secondary.main,
            } }) }));
}
