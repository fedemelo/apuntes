import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Example from "@/components/notes/environments/Example";
import NoteDocument from "@/components/notes/NoteDocument";
import LaTeX from "@/math/LaTeX";
import M from "@/math/ASCIIMath";
const Notacion = () => (_jsxs(NoteDocument, { children: [_jsx("h1", { children: "Notaci\u00F3n" }), _jsxs("h2", { children: ["N\u00FAmeros naturales, incluyendo y excluyendo al ", _jsx(M, { children: "0" })] }), _jsxs("p", { children: ["El s\u00EDmbolo ", _jsx(M, { children: "NN" }), " denota los n\u00FAmeros naturales. No existe actualmente una convenci\u00F3n extendida que indique si ", _jsx(M, { children: "0 in NN" }), " o si ", _jsx(M, { children: "0 notin NN" }), ". Como soluci\u00F3n a esa ambig\u00FCedad, en estos apuntes siempre se indica expl\u00EDcitamente si se incluye el ", _jsx(M, { children: "0" }), ", escribiendo ", _jsx(M, { children: "NN cup {0}" }), ", o si se excluye, escribiendo ", _jsx(LaTeX, { children: `\\N \\setminus \\{0\\}` }), ". Si en alg\u00FAn punto no se hace esa distinci\u00F3n, es porque no es relevante en el contexto."] }), _jsx("h2", { children: "Notaci\u00F3n de conjuntos" }), _jsx("h3", { children: "Conjunto potencia" }), _jsxs("p", { children: ["Uso la notaci\u00F3n ", _jsx(M, { children: "2^A" }), " para denotar el conjunto potencia de ", _jsx(M, { children: "A" }), ": el conjunto de todos los subconjuntos de ", _jsx(M, { children: "A" }), ".", _jsx(M, { block: true, children: "2^A = {B  |  x in B implies x in A}" }), "Opto por esa notaci\u00F3n debido a que:"] }), _jsxs("ul", { children: [_jsx("li", { children: _jsx(M, { children: "|2^A|=2^{|A|}" }) }), _jsxs("li", { children: ["Existe una biyecci\u00F3n del conjunto potencia de ", _jsx(M, { children: "A" }), " con el conjunto de todas las funciones desde ", _jsx(M, { children: "A" }), " a cualquier conjunto dado de cardinalidad 2."] })] }), _jsxs("p", { children: ["Creo que la notaci\u00F3n se puede entender de manera intuitiva, por lo que la prefiero sobre otras notaciones comunes como ", _jsx(LaTeX, { children: `\\mathcal{P}(A)` }), ", que proviene de ", _jsx("i", { children: "power set" }), "."] }), _jsxs("h3", { children: ["Conjunto de subconjuntos de cardinalidad ", _jsx(M, { children: "n" })] }), _jsxs("p", { children: ["Sea ", _jsx(M, { children: "A" }), " un conjunto y ", _jsx(M, { children: "n in NN" }), " tal que ", _jsx(M, { children: "|A| geq n" }), ". Uso la notaci\u00F3n ", _jsx(M, { children: "((A),(n))" }), "para representar el conjunto de todos los subconjuntos de ", _jsx(M, { children: "A" }), " de tama\u00F1o ", _jsx(M, { children: "n" }), ".", _jsx(M, { block: true, children: "((A),(n)) = {B : B subseteq A ^^ |B| = n}" }), "Eso se debe a que la cantidad de subconjuntos de ", _jsx(M, { children: "A" }), " de tama\u00F1o ", _jsx(M, { children: "n" }), " se calcula mediante combinatoria. Consiste en elegir ", _jsx(M, { children: "n" }), " elementos a partir de ", _jsx(M, { children: "|A|" }), " elementos, lo cual, expresado con la notaci\u00F3n tradicional de combinatoria, se escribe como:"] }), _jsx(LaTeX, { block: true, children: `\\binom{|A|}{n} = \\frac{|A|!}{n!(|A|-n)!}` }), _jsx("p", { children: "As\u00ED pues, al emplear la notaci\u00F3n que uso, se tiene que" }), _jsx(M, { block: true, children: "|((A),(n))| = ((|A|),(n))." }), _jsxs("p", { children: ["Por ende, la prefiero antes que otras notaciones como ", _jsx(M, { children: "A^((n))" }), ". A mi juicio, es una notaci\u00F3n que se puede entender intuitivamente, al igual que ", _jsx(M, { children: "2^A" }), " para el conjunto potencia."] }), _jsx("h2", { children: "Notaci\u00F3n para m\u00F3dulos" }), _jsxs("p", { children: ["Para expresar equivalencias en clases de equivalencia, es com\u00FAn escribir", _jsx(M, { block: true, children: "x equiv y quad (mod k)." }), "En lugar de eso, yo empleo la concisa notaci\u00F3n", _jsx(M, { block: true, children: "x equiv_k y." })] }), _jsxs(Example, { children: [_jsx(Example.Title, { children: "Paridad" }), _jsxs("p", { children: ["Como ejemplo de la notaci\u00F3n expuesta reci\u00E9n, para escribir que ", _jsx(M, { children: "k" }), " es par, se escribe ", _jsx(M, { children: "k equiv_2 0" }), ", en lugar de escribir ", _jsx(M, { children: "k equiv 0 quad (mod 2)" }), " y m\u00E1s a\u00FAn en lugar de escribir ", _jsx(M, { children: "exists m in NN (k = 2m)" }), "."] })] })] }));
export default Notacion;
