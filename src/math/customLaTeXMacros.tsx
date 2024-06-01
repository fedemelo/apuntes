// latexMacros.ts

const r = String.raw;

export const macros: Record<string, string> = {
    "\\abs": r`\left| #1 \right|`,
    // Miscellaneous symbols
    "\\colonhyphen": r`\coloneq`,
    // Operations
    "\\cbrt": r`\sqrt[3]{#1}`,
    "\\avg": r`\left< #1 \right>`,
    "\\sgn": r`\mathrm{sgn}`,
    // Functions
    "\\ran": r`\mathrm{ran}`,
    "\\dom": r`\mathrm{dom}`,
    "\\cod": r`\mathrm{cod}`,
    "\\inv": r`#1^{-1}`,
    // Calculus
    "\\der": r`\frac{\mathrm{d}#1}{\mathrm{d}#2}`,
    "\\tder": r`\tfrac{\mathrm{d}#1}{\mathrm{d}#2}`,
    "\\dder": r`\dfrac{\mathrm{d}#1}{\mathrm{d}#2}`,

    "\\nder": r`\frac{\mathrm{d}^{#1} #2}{\mathrm{d} #3^{#1}}`,
    "\\tnder": r`\tfrac{\mathrm{d}^{#1} #2}{\mathrm{d} #3^{#1}}`,
    "\\dnder": r`\dfrac{\mathrm{d}^{#1} #2}{\mathrm{d} #3^{#1}}`,
    "\\parder": r`\frac{\partial #1}{\partial #2}`,
    "\\tparder": r`\tfrac{\partial #1}{\partial #2}`,
    "\\dparder": r`\dfrac{\partial #1}{\partial #2}`,
    "\\nparder": r`\frac{\partial^{#1} #2}{\partial #3^{#1}}`,
    "\\tnparder": r`\tfrac{\partial^{#1} #2}{\partial #3^{#1}}`,
    "\\dnparder": r`\dfrac{\partial^{#1} #2}{\partial #3^{#1}}`,
    "\\du": r`\: \mathrm{d}`,
    "\\indint": r`\int #1 \: \mathrm{d} #2`,
    "\\defint": r`\int_{#3}^{#4} #1 \: \mathrm{d} #2`,
    // Exponential and logarithmic functions
    "\\lb": r`\mathrm{lb}`,
    // Circular and hyperbolic functions
    "\\arccot": r`\mathrm{arccot}`,
    "\\arcsec": r`\mathrm{arcsec}`,
    "\\arccsc": r`\mathrm{arccsc}`,
    "\\sech": r`\mathrm{sech}`,
    "\\csch": r`\mathrm{csch}`,
    "\\arsinh": r`\mathrm{arsinh}`,
    "\\arcosh": r`\mathrm{arcosh}`,
    "\\artanh": r`\mathrm{artanh}`,
    "\\arcoth": r`\mathrm{arcoth}`,
    "\\arsech": r`\mathrm{arsech}`,
    "\\arcsch": r`\mathrm{arcsch}`,
    // Complex numbers
    "\\iu": r`\mathrm{i}`,
    "\\Rep": r`\mathrm{Re}`,
    "\\Imp": r`\mathrm{Im}`,
    // Matrices
    "\\bmat": r`\bm{#1}`,
    "\\transpose": r`#1^{\mathrm{T}}`,
    "\\hermitian": r`#1^{\mathrm{H}}`,
    "\\rank": r`\mathrm{rank}`,
    "\\tr": r`\mathrm{tr}`,
    "\\norm": r`\left\lVert #1 \right\lVert`,
    // Scalars, vectors and tensors
    "\\bvec": r`\boldsymbol{{\mathbf{#1}}}`,
    "\\grad": r`\mathbf{grad}`,
    "\\div": r`\mathbf{div}`,
    "\\rot": r`\mathbf{rot}`,
    // Special functions
    "\\erf": r`\mathrm{erf}`,
    "\\erfc": r`\mathrm{erfc}`,
      // Additional commands
    "\\uveci": r`\bm{\hat{\textrm{\textbf{\i}}}}`,
    "\\uvecj": r`\bm{\hat{\textrm{\textbf{\j}}}}`,
    "\\uvec": r`\bm{\hat{\mathbf{#1}}}`,
    "\\proy": r`\mathrm{proy}`,
    "\\adj": r`\mathrm{adj}`,
    "\\im": r`\mathrm{im}`,
    "\\lcm": r`\mathrm{lcm}`,
    // TODO: Environments for matrices
  };
  