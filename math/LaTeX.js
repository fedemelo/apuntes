import { jsx as _jsx } from "react/jsx-runtime";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
export default function LaTeX({ children, block }) {
    const formattedMath = block ? formatBlockMath(children) : children.trim();
    if (block) {
        return _jsx(BlockMath, { math: formattedMath });
    }
    else {
        return _jsx(InlineMath, { math: formattedMath });
    }
}
/**
 * Formats block math so that line breaks are allowed using \\ in the code, by enclosing the math in a gather* environment.
 * @param math
 * @returns The formatted math.
 */
function formatBlockMath(math) {
    const lines = math
        .trim()
        .split("\n")
        .filter((line) => line.trim() !== "");
    return `\\begin{gather*}${lines.join(" \\\\ ")}\\end{gather*}`;
}
