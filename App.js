import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Router from "./Router";
import { ASCIIMathContext } from "./math/ASCIIMath";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
const theme = createTheme({
    palette: {
        primary: {
            main: "#004d40",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#f57c00",
            contrastText: "#ffffff",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
});
export default function App() {
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(NavigationBar, {}), _jsx(Box, { className: "main-content", children: _jsx(ASCIIMathContext, { children: _jsx(Router, {}) }) }), _jsx(Footer, {})] }));
}
