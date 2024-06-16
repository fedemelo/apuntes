// latexMacros.ts

const r = String.raw;

export const macros = {  
    // Miscellaneous symbols
    "\\colonminus": r`\coloneq`,
  
    // Operations
    "\\avg": r`\left< #1 \right>`,
    "\\sgn": r`\operatorname{sgn}`,
  
    // Functions
    "\\ran": r`\operatorname{ran}`,
    "\\dom": r`\operatorname{dom}`,
    "\\cod": r`\operatorname{cod}`,
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

    "\\d": r`\mathrm{d}`,

    "\\indint": r`\int #1 \: \mathrm{d} #2`,
    "\\defint": r`\int_{#3}^{#4} #1 \: \mathrm{d} #2`,

    // Exponential and logarithmic functions
    "\\lb": r`\operatorname{lb}`,
  
    // Circular and hyperbolic functions
    "\\uppi": r`\mathrm{\pi}`,
    
    "\\arccot": r`\operatorname{arccot}`,
    "\\arcsec": r`\operatorname{arcsec}`,
    "\\arccsc": r`\operatorname{arccsc}`,
    "\\sech": r`\operatorname{sech}`,
    "\\csch": r`\operatorname{csch}`,
    "\\arsinh": r`\operatorname{arsinh}`,
    "\\arcosh": r`\operatorname{arcosh}`,
    "\\artanh": r`\operatorname{artanh}`,
    "\\arcoth": r`\operatorname{arcoth}`,
    "\\arsech": r`\operatorname{arsech}`,
    "\\arcsch": r`\operatorname{arcsch}`,
  
    // Complex numbers
    "\\i": r`\mathrm{i}`,
    "\\Rep": r`\mathrm{Re}`,
    "\\Imp": r`\mathrm{Im}`,
  
    // Matrices
    "\\bmat": r`\bm{#1}`,
    "\\transpose": r`#1^{\mathrm{T}}`,
    "\\hermitian": r`#1^{\mathrm{H}}`,
    "\\rank": r`\operatorname{rank}`,
    "\\tr": r`\operatorname{tr}`,
    "\\norm": r`\left\lVert #1 \right\lVert`,
  
    // Scalars, vectors and tensors
    "\\bvec": r`\boldsymbol{{\mathbf{#1}}}`,
    "\\grad": r`\operatorname{grad}`,
    "\\div": r`\operatorname{div}`,
    "\\rot": r`\operatorname{rot}`,
  
    // Special functions
    "\\erf": r`\operatorname{erf}`,
    "\\erfc": r`\operatorname{erfc}`,
  
    // Additional commands
    "\\uveci": r`\bm{\hat{\textrm{\textbf{\i}}}}`,
    "\\uvecj": r`\bm{\hat{\textrm{\textbf{\j}}}}`,
    "\\uvec": r`\bm{\hat{\mathbf{#1}}}`,
    "\\proy": r`\operatorname{proy}`,
    "\\adj": r`\operatorname{adj}`,
    "\\im": r`\operatorname{im}`,
    "\\lcm": r`\operatorname{lcm}`,

    // TODO: Environments for matrices
  };
  