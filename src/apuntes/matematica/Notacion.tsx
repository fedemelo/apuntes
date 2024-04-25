import Example from "@/components/notes/environments/Example";
import NoteDocument from "@/components/notes/NoteDocument";
import { LaTeX } from "@/math/Math";

const Notacion = () => (
    <NoteDocument>
        <h1>Notación</h1>

        <h2>
            {" "}
            Números naturales, incluyendo y excluyendo al <LaTeX>0</LaTeX>
        </h2>
        <p>
            El símbolo <LaTeX>\N</LaTeX> denota los números naturales. No existe actualmente una convención extendida que indique si <LaTeX>0 \in \N</LaTeX> o si <LaTeX>0 \notin \N</LaTeX>. Como solución a esa ambigüedad, en estos apuntes siempre se indica explícitamente si se incluye el <LaTeX>0</LaTeX>, escribiendo <LaTeX>{`\\N \\cup \\{0\\}`}</LaTeX>, o si se excluye, escribiendo <LaTeX>{`\\N \\setminus \\{0\\}`}</LaTeX>. Si en algún punto no se hace esa distinción, es porque no es relevante en el contexto.
        </p>

        <h2>Notación de conjuntos</h2>

        <h3>Conjunto potencia</h3>
        <p>
            Uso la notación <LaTeX>2^A</LaTeX> para denotar el conjunto potencia de <LaTeX>A</LaTeX>: el conjunto de todos los subconjuntos de <LaTeX>A</LaTeX>.<LaTeX block>{`2^A = \\{B \\ | \\ x \\in B \\implies x \\in A\\}`}</LaTeX>
            Opto por esa notación debido a que:
        </p>
        <ul>
            <li>
                <LaTeX>{`|2^A|=2^{|A|}`}</LaTeX>
            </li>
            <li>
                Existe una biyección del conjunto potencia de <LaTeX>A</LaTeX> con el conjunto de todas las funciones desde <LaTeX>A</LaTeX> a cualquier conjunto dado de cardinalidad 2.
            </li>
        </ul>
        <p>
            Creo que la notación se puede entender de manera intuitiva, por lo que la prefiero sobre otras notaciones comunes como <LaTeX>{`\\mathcal{P}(A)`}</LaTeX>, que proviene de <i>power set</i>.
        </p>

        <h3>
            Conjunto de subconjuntos de cardinalidad <LaTeX>n</LaTeX>
        </h3>
        <p>
            Sea <LaTeX>A</LaTeX> un conjunto y <LaTeX>n \in \N</LaTeX> tal que <LaTeX>|A|\geq n</LaTeX>. Uso la notación <LaTeX>{`\\begin{pmatrix}  A\\\\n \\end{pmatrix}`}</LaTeX> para representar el conjunto de todos los subconjuntos de <LaTeX>A</LaTeX> de tamaño <LaTeX>n</LaTeX>.<LaTeX block>{`\\begin{pmatrix}  A\\\\n \\end{pmatrix} = \\{B : B \\subseteq A \\land |B| = n\\}`}</LaTeX>
            Eso se debe a que la cantidad de subconjuntos de <LaTeX>A</LaTeX> de tamaño <LaTeX>n</LaTeX> se calcula mediante combinatoria. Consiste en elegir <LaTeX>n</LaTeX> elementos a partir de <LaTeX>|A|</LaTeX> elementos, lo cual, expresado con la notación tradicional de combinatoria, se escribe como:
            <LaTeX block>{`\\begin{pmatrix}|A|\\\\n\\end{pmatrix} = \\frac{|A|!}{n! \\, (|A|-n)!}`}</LaTeX>
            Así pues, al emplear la notación que uso, se tiene que
            <LaTeX block>{`\\left|\\begin{pmatrix}A\\\\n\\end{pmatrix}\\right| = \\begin{pmatrix}|A|\\\\ n\\end{pmatrix}.`}</LaTeX>
            Por ende, la prefiero antes que otras notaciones como <LaTeX>{`A^{(n)}`}</LaTeX>. A mi juicio, es una notación que se puede entender intuitivamente, al igual que <LaTeX>2^A</LaTeX> para el conjunto potencia.
        </p>

        <h2>Notación para módulos</h2>
        <p>
            Para expresar equivalencias en clases de equivalencia, es común escribir
            <LaTeX block>{`x \\equiv y \\quad (\\operatorname{mod} k).`}</LaTeX>
            Para eso, yo empleo la concisa notación <LaTeX>{`x\\equiv_k y.`}</LaTeX>
        </p>
        <Example>
            <Example.Title>Paridad</Example.Title>
            <p>
                Como ejemplo de la notación expuesta recién, para escribir que <LaTeX>k</LaTeX> es par, se escribe <LaTeX>{`k \\equiv_2 0`}</LaTeX>, en lugar de escribir <LaTeX>{`k \\equiv 0 \\quad (\\operatorname{mod} 2)`}</LaTeX> y más aún en lugar de escribir <LaTeX>{`\\exists m \\in \\N (k = 2m).`}</LaTeX>
            </p>
        </Example>
    </NoteDocument>
);

export default Notacion;
