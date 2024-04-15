import NoteDocument from '@/components/notes/NoteDocument';
import Math from '@/math/Math';

const AlgebraLineal = () => <NoteDocument>
    <h1>Álgebra lineal</h1>
    <p>
        El álgebra es la rama de la matemática que estudia la noción de cantidad en general, representándola mediante símbolos. En concreto, el álgebra lineal estudia ecuaciones lineales, transformaciones lineales y sus representaciones mediante objetos matemáticos como vectores y matrices.
    </p>

    <h2>Ecuaciones lineales</h2>
    <p>
        Una <em>ecuación lineal</em> o <em>ecuación de primer grado</em> es una ecuación en donde todas las variables tienen grado 1 (despreciando las variables de grado 0). La forma general de una ecuación lineal es 
        <Math block>
            a_1x_1+a_2x_2+\cdots+a_nx_n=b
        </Math> 
        donde <Math>x_i</Math> son las <em>variables</em> o <em>incógnitas</em>, las constantes <Math>a_i</Math> son los <em>coeficientes</em> y la constante <Math>b</Math> es el <em>término independiente</em>.
    </p>

</NoteDocument>

export default AlgebraLineal;