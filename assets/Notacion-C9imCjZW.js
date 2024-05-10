import{j as e,A as n}from"./index-yWy88T1L.js";import{L as s,E as i}from"./LaTeX-BaRJ2XNT.js";import{N as o}from"./BoxStyles-CAhkJ1Jf.js";const l=()=>e.jsxs(o,{children:[e.jsx("h1",{children:"Notación"}),e.jsxs("h2",{children:["Números naturales, incluyendo y excluyendo al ",e.jsx(n,{children:"0"})]}),e.jsxs("p",{children:["El símbolo ",e.jsx(n,{children:"NN"})," denota los números naturales. No existe actualmente una convención extendida que indique si ",e.jsx(n,{children:"0 in NN"})," o si ",e.jsx(n,{children:"0 notin NN"}),". Como solución a esa ambigüedad, en estos apuntes siempre se indica explícitamente si se incluye el ",e.jsx(n,{children:"0"}),", escribiendo ",e.jsx(n,{children:"NN cup {0}"}),", o si se excluye, escribiendo ",e.jsx(s,{children:"\\N \\setminus \\{0\\}"}),". Si en algún punto no se hace esa distinción, es porque no es relevante en el contexto."]}),e.jsx("h2",{children:"Notación de conjuntos"}),e.jsx("h3",{children:"Conjunto potencia"}),e.jsxs("p",{children:["Uso la notación ",e.jsx(n,{children:"2^A"})," para denotar el conjunto potencia de ",e.jsx(n,{children:"A"}),": el conjunto de todos los subconjuntos de ",e.jsx(n,{children:"A"}),".",e.jsx(n,{block:!0,children:"2^A = {B  |  x in B implies x in A}"}),"Opto por esa notación debido a que:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{children:"|2^A|=2^{|A|}"})}),e.jsxs("li",{children:["Existe una biyección del conjunto potencia de ",e.jsx(n,{children:"A"})," con el conjunto de todas las funciones desde ",e.jsx(n,{children:"A"})," a cualquier conjunto dado de cardinalidad 2."]})]}),e.jsxs("p",{children:["Creo que la notación se puede entender de manera intuitiva, por lo que la prefiero sobre otras notaciones comunes como ",e.jsx(s,{children:"\\mathcal{P}(A)"}),", que proviene de ",e.jsx("i",{children:"power set"}),"."]}),e.jsxs("h3",{children:["Conjunto de subconjuntos de cardinalidad ",e.jsx(n,{children:"n"})]}),e.jsxs("p",{children:["Sea ",e.jsx(n,{children:"A"})," un conjunto y ",e.jsx(n,{children:"n in NN"})," tal que ",e.jsx(n,{children:"|A| geq n"}),". Uso la notación ",e.jsx(n,{children:"((A),(n))"}),"para representar el conjunto de todos los subconjuntos de ",e.jsx(n,{children:"A"})," de tamaño ",e.jsx(n,{children:"n"}),".",e.jsx(n,{block:!0,children:"((A),(n)) = {B : B subseteq A ^^ |B| = n}"}),"Eso se debe a que la cantidad de subconjuntos de ",e.jsx(n,{children:"A"})," de tamaño ",e.jsx(n,{children:"n"})," se calcula mediante combinatoria. Consiste en elegir ",e.jsx(n,{children:"n"})," elementos a partir de ",e.jsx(n,{children:"|A|"})," elementos, lo cual, expresado con la notación tradicional de combinatoria, se escribe como:"]}),e.jsx(s,{block:!0,children:"\\binom{|A|}{n} = \\frac{|A|!}{n!(|A|-n)!}"}),e.jsx("p",{children:"Así pues, al emplear la notación que uso, se tiene que"}),e.jsx(n,{block:!0,children:"|((A),(n))| = ((|A|),(n))."}),e.jsxs("p",{children:["Por ende, la prefiero antes que otras notaciones como ",e.jsx(n,{children:"A^((n))"}),". A mi juicio, es una notación que se puede entender intuitivamente, al igual que ",e.jsx(n,{children:"2^A"})," para el conjunto potencia."]}),e.jsx("h2",{children:"Notación para módulos"}),e.jsxs("p",{children:["Para expresar equivalencias en clases de equivalencia, es común escribir",e.jsx(n,{block:!0,children:"x equiv y quad (mod k)."}),"En lugar de eso, yo empleo la concisa notación",e.jsx(n,{block:!0,children:"x equiv_k y."})]}),e.jsxs(i,{children:[e.jsx(i.Title,{children:"Paridad"}),e.jsxs("p",{children:["Como ejemplo de la notación expuesta recién, para escribir que ",e.jsx(n,{children:"k"})," es par, se escribe ",e.jsx(n,{children:"k equiv_2 0"}),", en lugar de escribir ",e.jsx(n,{children:"k equiv 0 quad (mod 2)"})," y más aún en lugar de escribir ",e.jsx(n,{children:"exists m in NN (k = 2m)"}),"."]})]})]});export{l as default};
