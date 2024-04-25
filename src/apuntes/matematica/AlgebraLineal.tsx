import InlineDefinition from "@/components/notes/environments/InlineDefinition";
import NoteDocument from "@/components/notes/NoteDocument";
import M from "@/math/ASCIIMath";

const AlgebraLineal = () => (
    <NoteDocument>
        <h1>Álgebra lineal</h1>
        <p>
            El <em>álgebra</em> es la rama de la matemática que estudia la noción de cantidad de forma abstracta, representándola mediante símbolos y objetos matemáticos.
        </p>
        <p>
            El <em>álgebra lineal</em> se ocupa del estudio de objetos matemáticos específicos: ecuaciones lineales, transformaciones lineales, funciones lineales, vectores y matrices. Muchos de ellos surgen de generalizar las propiedades de una línea recta (de allí el nombre de <i>lineal</i>):
        </p>
        <h2>Prerrequisitos</h2>
        <p>
            Para una comprensión exitosa del álgebra lineal es indispensable contar con conocimientos previos en aritmética y álgebra elemental. En particular, se requiere un dominio de los siguientes temas:
            <ul>
                <li>Operaciones aritméticas entre números reales, expresados ya sea como enteros, decimales o fracciones.</li>
                <li>
                    Teoría de conjuntos básica, en particular la definición de conjuntos en forma extensiva e intensiva (también denominada <i>por comprensión</i>) y las operaciones básicas que existen entre ellos, como unión e intersección.
                </li>
                <li>Manipulación de expresiones algebraicas elementales, en concreto factorización de polinomios de primer y segundo grado y resolución de ecuaciones lineales y cuadráticas.</li>
            </ul>
        </p>
        <p>Adicionalmente, para leer estos apuntes, es recomendable estar familiarizado con la notación utilizada para representar sumatorias, productorias y conjuntos.</p>
        <h2>Ecuaciones lineales</h2>
        <InlineDefinition concept="Ecuación lineal">
            Una <em>ecuación lineal</em> o <em>ecuación de primer grado</em> es una ecuación en donde las variables tienen grado <M>1</M> o menor. La forma general de una ecuación lineal es
        </InlineDefinition>
        <M block>a_1x_1+a_2x_2+cdots+a_nx_n=b.</M>
        <InlineDefinition concept="Variable, Coeficiente">
            donde el conjunto <M>{"{x_i}_(1 leq i leq n)"}</M> es el conjunto de <em>variables</em> o <em>incógnitas</em>, <M>{"{a_i}_(1 leq i leq n)"}</M> es el conjunto de <em>coeficientes</em> y la constante <M>b</M> se denomina <em>término independiente</em>. Los coeficientes deben satisfacer que <M>sum_(i=1)^(n) a_i ne 0</M> para que la ecuación sea no trivial, es decir, cuente con al menos una variable.
        </InlineDefinition>
        <p>
            Por convención, las constantes se denotan usando las primeras letras del alfabeto y las variables se denotan usando las últimas. Si una ecuación tiene tres o menos variables, es convención denotarlas usando las letras <M>x</M>, <M>y</M> y <M>z</M>, en lugar de <M>x_i</M>. Análogamente, los coeficientes se denotarían por <M>a</M>, <M>b</M> y <M>c</M>.
        </p>
        <p>
            Toda ecuación lineal tiene al menos un conjunto ordenado de números reales que la satisfacen. Si una ecuación lineal tiene <M>n</M> variables, sus soluciones consisten de <M>n</M> elementos. Dos ecuaciones con la misma solución se denominan <em>equivalentes</em>.
        </p>
        <p>
            Toda ecuación lineal con una variable, con forma general <M> ax=b </M>, tiene solución única: <M> x=b/a </M>. Dicha solución se interpreta geométricamente como un punto en <M>RR</M>, la recta real
        </p>
    </NoteDocument>
);

export default AlgebraLineal;
