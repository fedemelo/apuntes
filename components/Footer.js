import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography, Container } from '@mui/material';
export default function Footer() {
    return (_jsx(Box, { component: "footer", children: _jsxs(Container, { maxWidth: "sm", children: [_jsxs(Typography, { variant: "body1", color: "text.secondary", align: "center", children: ["\u00A9 ", new Date().getFullYear(), " Federico Melo Barrero"] }), _jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", sx: { mt: 1 }, children: "Todos los apuntes son propiedad de su autor." })] }) }));
}
;
