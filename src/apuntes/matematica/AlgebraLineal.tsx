import InlineDefinition from "@/components/notes/environments/InlineDefinition";
import NoteDocument from "@/components/notes/NoteDocument";
import { LaTeX } from "@/math/Math";

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
            Una <em>ecuación lineal</em> o <em>ecuación de primer grado</em> es una ecuación en donde las variables tienen grado <LaTeX>1</LaTeX> o menor. La forma general de una ecuación lineal es
        </InlineDefinition>
        <LaTeX block>a_1x_1+a_2x_2+\cdots+a_nx_n=b</LaTeX>
        <InlineDefinition concept="Variable, Coeficiente">
            donde el conjunto <LaTeX>{`\\{x_i\\}_\{1\\leq i \\leq n\}`}</LaTeX> es el conjunto de <em>variables</em> o <em>incógnitas</em>, <LaTeX>{`\\{a_i\\}_\{1\\leq i \\leq n\}`}</LaTeX> es el conjunto de <em>coeficientes</em> y la constante <LaTeX>b</LaTeX> se denomina <em>término independiente</em>. Los coeficientes deben satisfacer que <LaTeX>{`\\sum_{i=1}^{n} a_i \\neq 0`}</LaTeX> para que la ecuación sea no trivial, es decir, cuente con al menos una variable.
        </InlineDefinition>
        <p>
            Por convención, las constantes se denotan usando las primeras letras del alfabeto y las variables se denotan usando las últimas. Si una ecuación tiene tres o menos variables, es convención denotarlas usando las letras <LaTeX>x</LaTeX>, <LaTeX>y</LaTeX> y <LaTeX>z</LaTeX>, en lugar de <LaTeX>x_i</LaTeX>. Análogamente, los coeficientes se denotarían por <LaTeX>a</LaTeX>, <LaTeX>b</LaTeX> y <LaTeX>c</LaTeX>.
        </p>
        <p>
            Toda ecuación lineal tiene al menos un conjunto ordenado de números reales que la satisfacen. Si una ecuación lineal tiene <LaTeX>n</LaTeX> variables, sus soluciones consisten de <LaTeX>n</LaTeX> elementos. Dos ecuaciones con la misma solución se denominan <em>equivalentes</em>.
        </p>
        <p>
            Toda ecuación lineal con una variable, con forma general <LaTeX> ax=b </LaTeX>, tiene solución única: <LaTeX> x=frac(b)(a) </LaTeX>. Dicha solución se interpreta geométricamente como un punto en <LaTeX>\R</LaTeX>, la recta real
        </p>
    </NoteDocument>
);

export default AlgebraLineal;
