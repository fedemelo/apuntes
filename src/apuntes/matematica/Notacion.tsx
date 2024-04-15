import NoteDocument from '@/components/NoteDocument';
import Math from '@/math/Math';

const Notacion = () => <NoteDocument>
    <h1>Notación</h1>

    <h2> Números naturales, incluyendo y excluyendo al <Math>0</Math></h2>
    <p>
        El símbolo <Math>\N</Math> denota los números naturales. No existe actualmente una convención extendida que indique si <Math>0 \in \N</Math> o si <Math>0 \notin \N</Math>. Como solución a esa ambigüedad, en estos apuntes siempre se indica explícitamente si se incluye el <Math>0</Math>, escribiendo <Math>{`\\N \\cup \\{0\\}`}</Math>, o si se excluye, escribiendo <Math>{`\\N \\setminus \\{0\\}`}</Math>. Si en algún punto no se hace la distinción, es porque no es relevante en el contexto.
    </p>

    <h2>Notación de conjuntos</h2>

    <h3>Conjunto potencia</h3>
    <p>
        Uso la notación <Math>2^A</Math> para denotar el conjunto potencia de <Math>A</Math>: el conjunto de todos los subconjuntos de <Math>A</Math>.
        <Math block>{`2^A = \\{B \\ | \\ x \\in B \\implies x \\in A\\}`}</Math>
        Opto por esa notación debido a que:
    </p>
    <ul>
        <li><Math>{`|2^A|=2^{|A|}`}</Math></li>
        <li>Existe una biyección del conjunto potencia de <Math>A</Math> con el conjunto de todas las funciones desde <Math>A</Math> a cualquier conjunto dado de cardinalidad 2.</li>
    </ul>
    <p>
        Creo que la notación se puede entender de manera intuitiva, por lo que la prefiero sobre otras notaciones comunes como <Math>{`\\mathcal{P}(A)`}</Math>, que proviene de <i>power set</i>.
    </p>

    <h3>Conjunto de subconjuntos de cardinalidad <Math>n</Math></h3>
    <p>
        Sea <Math>A</Math> un conjunto y <Math>n \in \N</Math> tal que <Math>|A|\geq n</Math>. Uso la notación <Math>{`\\begin{pmatrix}  A\\\\n \\end{pmatrix}`}</Math> para representar el conjunto de todos los subconjuntos de <Math>A</Math> de tamaño <Math>n</Math>.

        <Math block>{`\\begin{pmatrix}  A\\\\n \\end{pmatrix} = \\{B : B \\subseteq A \\land |B| = n\\}`}</Math>

        Eso se debe a que la cantidad de subconjuntos de <Math>A</Math> de tamaño <Math>n</Math> se calcula mediante combinatoria. Consiste en elegir <Math>n</Math> elementos a partir de <Math>|A|</Math> elementos, lo cual, expresado con la notación tradicional de combinatoria, se escribe como:

        <Math block>{`\\begin{pmatrix}|A|\\\\n\\end{pmatrix} = \\frac{|A|!}{n! \\, (|A|-n)!}`}</Math>

        Así pues, al emplear la notación que uso, se tiene que
        <Math block>{`\\left|\\begin{pmatrix}A\\\\n\\end{pmatrix}\\right| = \\begin{pmatrix}|A|\\\\ n\\end{pmatrix}.`}</Math>
        Por ende, la prefiero antes que otras notaciones como <Math>{`A^{(n)}`}</Math>. A mi juicio, es una notación que se puede entender intuitivamente, al igual que <Math>2^A</Math> para el conjunto potencia.
    </p>

    <h2>Notación para módulos</h2>
    <p>
        Para expresar equivalencias en clases de equivalencia, es común escribir
        <Math block>{`x \\equiv y \\quad (\\operatorname{mod} k).`}</Math>
        Para eso, yo empleo la concisa notación <Math>{`x\\equiv_k y.`}</Math>
    </p><p>
        Por ejemplo, para escribir que <Math>k</Math> es par, escribo <Math>{`k \\equiv_2 0`}</Math>, en lugar de escribir <Math>{`k \\equiv 0 \\quad (\\operatorname{mod} 2)`}</Math> y más aún en lugar de escribir <Math>{`\\exists m \\in \\N (k = 2m).`}</Math>
    </p>
</NoteDocument>

export default Notacion;