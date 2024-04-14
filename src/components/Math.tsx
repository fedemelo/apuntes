import { MathJax } from 'better-react-mathjax';

interface MathProps {
    children: string;
    block?: boolean;
}

export default function Math({ children, block }: MathProps) {

    const formattedMath = block ? formatMathForBlock(children) : `\\(${children.trim()}\\)`;

    if (block) {
        return (
            <MathJax dynamic>
                {formattedMath}
            </MathJax>
        );
    } else {
        return (
            <MathJax inline dynamic>
                {formattedMath}
            </MathJax>
        );
    }
};

/**
 * Formats block math so that:
 * - There is no need to escape backslashes in the code, so math can be written with normal LaTeX syntax.
 * - Line breaks are allowed using \\ in the code, by enclosing the math in a gather* environment.
 * @param math
 * @returns The formatted math.
 */
function formatMathForBlock(math: string): string {
    const lines = math.trim().split('\n').filter(line => line.trim() !== '');
    return `\\[\\begin{gather*}${lines.join(' \\\\ ')}\\end{gather*}\\]`;
}