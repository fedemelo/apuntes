import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface LaTeXProps {
  children: string;
  block?: boolean;
}

export default function LaTeX({ children, block = false }: LaTeXProps) {
  const katexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (katexRef.current) {
      const options = { displayMode: block };
      katex.render(children, katexRef.current, options);
    }
  }, [children, block]);

  return <span ref={katexRef} />;
}

export const r = String.raw;
