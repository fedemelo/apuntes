import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface MathProps {
    children: string;
    block?: boolean;
}

export function LaTeX({ children, block }: MathProps) {
    const formattedMath = block ? formatBlockMath(children) : children.trim();

    if (block) {
        return <BlockMath math={formattedMath} />;
    } else {
        return <InlineMath math={formattedMath} />;
    }
}

/**
 * Formats block math so that:
 * - There is no need to escape backslashes in the code, so math can be written with normal LaTeX syntax.
 * - Line breaks are allowed using \\ in the code, by enclosing the math in a gather* environment.
 * @param math
 * @returns The formatted math.
 */
function formatBlockMath(math: string): string {
    const lines = math
        .trim()
        .split("\n")
        .filter((line) => line.trim() !== "");
    return `\\begin{gather*}${lines.join(" \\\\ ")}\\end{gather*}`;
}
