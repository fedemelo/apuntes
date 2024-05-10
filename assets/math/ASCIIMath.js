import { jsx as _jsx } from "react/jsx-runtime";
import { MathJax, MathJaxContext } from "better-react-mathjax";
export default function ASCIIMath({ children, block, dynamic }) {
    const math = `€${children.trim()}€`;
    if (block) {
        return dynamic ? (_jsx(MathJax, { dynamic: true, style: { textAlign: "center" }, children: math })) : (_jsx(MathJax, { style: { textAlign: "center" }, children: math }));
    }
    else {
        return dynamic ? (_jsx(MathJax, { inline: true, dynamic: true, children: math })) : (_jsx(MathJax, { inline: true, children: math }));
    }
}
export function ASCIIMathContext({ children }) {
    const asciiMathConfig = {
        loader: { load: ["input/asciimath", "output/chtml"] },
        asciimath: {
            fixphi: true,
            displaystyle: false,
            delimiters: [["€", "€"]],
        },
    };
    return _jsx(MathJaxContext, { config: asciiMathConfig, children: children });
}
