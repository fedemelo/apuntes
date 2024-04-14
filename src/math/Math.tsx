import { MathJax } from 'better-react-mathjax';
import shortCommandsMap from './shortCommandsMap.json';

interface MathProps {
    children: string;
    block?: boolean;
}

export default function Math({ children, block }: MathProps) {

    const formattedMath = block ? formatBlockMath(children) : formatInlineMath(children);

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
function formatBlockMath(math: string): string {
    const lines = math.trim().split('\n').filter(line => line.trim() !== '');
    return `\\[\\begin{gather*}${replaceShortCommands(lines.join(' \\\\ '))}\\end{gather*}\\]`;
}

function formatInlineMath(math: string): string {
    return `\\(${replaceShortCommands(math.trim())}\\)`;
}

/**
 * Replaces short commands defined in the shortCommandsMap with their full LaTeX representation. 
 * @param math
 * @returns The math with short commands replaced.
 */
function replaceShortCommands(math: string): string {
    Object.entries(shortCommandsMap).forEach(([key, value]) => {
        console.log(key, value);
        const regExp = new RegExp(key, 'g');
        math = math.replace(regExp, value.replace("\\", ""));
    });
    console.log(math);
    return math;
}
