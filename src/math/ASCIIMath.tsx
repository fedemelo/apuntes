import { MathJax } from "better-react-mathjax";

interface MathProps {
    children: string;
    block?: boolean;
    dynamic?: boolean;
}

export default function ASCIIMath({ children, block, dynamic }: MathProps) {
    const math = `$${children.trim()}$`;
    if (block) {
        return dynamic ? (
            <MathJax dynamic style={{ textAlign: "center" }}>
                {math}
            </MathJax>
        ) : (
            <MathJax style={{ textAlign: "center" }}>{math}</MathJax>
        );
    } else {
        return dynamic ? (
            <MathJax inline dynamic>
                {math}
            </MathJax>
        ) : (
            <MathJax inline>{math}</MathJax>
        );
    }
}
