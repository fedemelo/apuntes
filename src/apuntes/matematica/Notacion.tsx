import Example from "@/components/notes/environments/Example";
import NoteDocument from "@/components/notes/NoteDocument";
import LaTeX from "@/math/LaTeX";
import M from "@/math/ASCIIMath";

const Notacion = () => (
    <NoteDocument>
        <h1>Notación</h1>

        <h2>
            Números naturales, incluyendo y excluyendo al <M>0</M>
        </h2>
        <p>
            El símbolo <M>NN</M> denota los números naturales. No existe actualmente una convención extendida que indique si <M>0 in NN</M> o si <M>0 notin NN</M>. Como solución a esa ambigüedad, en estos apuntes siempre se indica explícitamente si se incluye el <M>0</M>, escribiendo <M>{"NN cup {0}"}</M>, o si se excluye, escribiendo <LaTeX>{`\\N \\setminus \\{0\\}`}</LaTeX>. Si en algún punto no se hace esa distinción, es porque no es relevante en el contexto.
        </p>

        <h2>Notación de conjuntos</h2>

        <h3>Conjunto potencia</h3>
        <p>
            Uso la notación <M>2^A</M> para denotar el conjunto potencia de <M>A</M>: el conjunto de todos los subconjuntos de <M>A</M>.<M block>{"2^A = {B  |  x in B implies x in A}"}</M>
            Opto por esa notación debido a que:
        </p>
        <ul>
            <li>
                <M>{"|2^A|=2^{|A|}"}</M>
            </li>
            <li>
                Existe una biyección del conjunto potencia de <M>A</M> con el conjunto de todas las funciones desde <M>A</M> a cualquier conjunto dado de cardinalidad 2.
            </li>
        </ul>
        <p>
            Creo que la notación se puede entender de manera intuitiva, por lo que la prefiero sobre otras notaciones comunes como <LaTeX>{`\\mathcal{P}(A)`}</LaTeX>, que proviene de <i>power set</i>.
        </p>

        <h3>
            Conjunto de subconjuntos de cardinalidad <M>n</M>
        </h3>
        <p>
            Sea <M>A</M> un conjunto y <M>n in NN</M> tal que <M>|A| geq n</M>. Uso la notación <M>((A),(n))</M>
            para representar el conjunto de todos los subconjuntos de <M>A</M> de tamaño <M>n</M>.<M block>{"((A),(n)) = {B : B subseteq A ^^ |B| = n}"}</M>
            Eso se debe a que la cantidad de subconjuntos de <M>A</M> de tamaño <M>n</M> se calcula mediante combinatoria. Consiste en elegir <M>n</M> elementos a partir de <M>|A|</M> elementos, lo cual, expresado con la notación tradicional de combinatoria, se escribe como:
            <LaTeX block>{`\\binom{|A|}{n} = \\frac{|A|!}{n!(|A|-n)!}`}</LaTeX>
            Así pues, al emplear la notación que uso, se tiene que
            <M block>|((A),(n))| = ((|A|),(n)).</M>
            Por ende, la prefiero antes que otras notaciones como <M>A^((n))</M>. A mi juicio, es una notación que se puede entender intuitivamente, al igual que <M>2^A</M> para el conjunto potencia.
        </p>

        <h2>Notación para módulos</h2>
        <p>
            Para expresar equivalencias en clases de equivalencia, es común escribir
            <M block>x equiv y quad (mod k).</M>
            En lugar de eso, yo empleo la concisa notación
            <M block>x equiv_k y.</M>
        </p>
        <Example>
            <Example.Title>Paridad</Example.Title>
            <p>
                Como ejemplo de la notación expuesta recién, para escribir que <M>k</M> es par, se escribe <M>k equiv_2 0</M>, en lugar de escribir <M>k equiv 0 quad (mod 2)</M> y más aún en lugar de escribir <M>exists m in NN (k = 2m)</M>.
            </p>
        </Example>
    </NoteDocument>
);

export default Notacion;
