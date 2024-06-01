import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import {macros} from './customLaTeXMacros';
interface LaTeXProps {
  children: string;
  block?: boolean;
}

export const r = String.raw;

export default function LaTeX({ children, block = false }: LaTeXProps) {
  const katexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (katexRef.current) {
      const options = { displayMode: block, macros };
      katex.render(children, katexRef.current, options);
    }
  }, [children, block]);

  return <span ref={katexRef} />;
}
