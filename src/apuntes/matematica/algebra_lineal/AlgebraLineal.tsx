import InlineDefinition from "@/components/notes/environments/InlineDefinition";
import NoteDocument from "@/components/notes/NoteDocument";
import { Acknowledgements, Prerequisites } from "@/components/notes/environments/Accordions";
import M from "@/math/ASCIIMath";
import { Notation } from "@/components/notes/environments/StickyNotes";


const AlgebraLineal = () => (
  <NoteDocument>
    <h1>Álgebra Lineal</h1>
    <p>
      El <em>álgebra</em> es la rama de la matemática que estudia la noción de cantidad de forma abstracta, representándola mediante símbolos y objetos matemáticos.
    </p>
    <p>
      El <em>álgebra lineal</em> se ocupa del estudio de objetos matemáticos específicos, varios de los cuales surgen de generalizar las propiedades de una línea recta (de allí el nombre de <i>lineal</i>). Algunos de esos objetos matemáticos son ecuaciones lineales, transformaciones lineales, funciones lineales, vectores o matrices.
    </p>

    <Prerequisites>
      <p>Para una comprensión exitosa del álgebra lineal, es indispensable contar con conocimientos previos en aritmética y álgebra elemental. En particular, se requiere un dominio de los siguientes temas:</p>
      <ul>
        <li>Operaciones aritméticas entre números reales, expresados ya sea como enteros, decimales o fracciones.</li>
        <li>
          Teoría de conjuntos básica, en particular la definición de conjuntos en forma extensiva e intensiva (también denominada <i>por comprensión</i>) y las operaciones básicas que existen entre ellos, como unión e intersección.
        </li>
        <li>Manipulación de expresiones algebraicas elementales, en concreto factorización de polinomios de primer y segundo grado, al igual que resolución de ecuaciones lineales y cuadráticas.</li>
      </ul>
      <p>Adicionalmente, para leer estos apuntes, es recomendable estar familiarizado con la notación utilizada para representar sumatorias, productorias y conjuntos.</p>
    </Prerequisites>

    <Acknowledgements>
      <p>Agradezco a los siguientes profesores por enseñarme los conceptos de álgebra lineal:</p>
      <ul>
        <li>Andrés Fernando Reyes Lega, profesor de Introducción a la Física en mi primer semestre en la Universidad de los Andes.</li>
        <li>Carolina Benedetti Velásquez, profesora de Álgebra Lineal 1 en mi segundo semestre en la Universidad de los Andes.</li>
        <li>Nicolás Betancourt Cardona, profesor complementario de Álgebra Lineal 1 en mi segundo semestre en la Universidad de los Andes.</li>
      </ul>
    </Acknowledgements>

    <h2>Ecuaciones lineales</h2>
    <InlineDefinition concept="Ecuación lineal">
      Una <em>ecuación lineal</em> o <em>ecuación de primer grado</em> es una ecuación en donde las variables tienen grado <M>1</M> o menor. La forma general de una ecuación lineal es
    </InlineDefinition>
    <M block>a_1x_1+a_2x_2+cdots+a_nx_n=b.</M>
    <InlineDefinition concept="Variable, Coeficiente">
      donde el conjunto <M>{"{x_i}_(1 leq i leq n)"}</M> es el conjunto de <em>variables</em> o <em>incógnitas</em>, <M>{"{a_i}_(1 leq i leq n)"}</M> es el conjunto de <em>coeficientes</em> y la constante <M>b</M> se denomina <em>término independiente</em>. Los coeficientes deben satisfacer que <M>sum_(i=1)^(n) a_i ne 0</M> para que la ecuación sea no trivial, es decir, cuente con al menos una variable.
    </InlineDefinition>

    <Notation>
      Por convención, las constantes se denotan usando las primeras letras del alfabeto y las variables se denotan usando las últimas. Si una ecuación tiene tres o menos variables, es convención denotarlas usando las letras <M>x</M>, <M>y</M> y <M>z</M>, en lugar de <M>x_i</M>. Análogamente, los coeficientes se denotarían por <M>a</M>, <M>b</M> y <M>c</M>.
    </Notation>

    <p>
      Toda ecuación lineal tiene al menos una <em>solución</em>: un conjunto ordenado de números reales que la satisfacen. Si una ecuación lineal tiene <M>n</M> variables, sus soluciones consisten de <M>n</M> elementos. Dos ecuaciones con la misma solución se denominan <em>equivalentes</em>.
    </p>
    <p>
      Toda ecuación lineal con una variable, con forma general <M> ax=b </M>, tiene solución única: <M> x=b/a </M>. Dicha solución se interpreta geométricamente como un punto en <M>RR</M>, la recta real.
    </p>
    <img src="./img/ecuacion_lineal_una_variable.svg" alt="Gráfica de una función lineal" />
    <p>
      Toda ecuación lineal con dos variables, con forma general <M> ax+by=c </M>, tiene infinitas soluciones. Cada una de estas soluciones se interpreta geométricamente como las coordenadas de un punto en <M>RR^2</M>, el plano euclidiano, de forma que el conjunto de soluciones describen una recta en el plano. Las ecuaciones lineales con dos variables generalmente se expresan en la forma canónica de la ecuación de la recta: <M> y=mx+b </M>, donde <M> m </M> es la pendiente de la recta y <M> b </M> es la ordenada al origen.
    </p>
  </NoteDocument>
);

export default AlgebraLineal;
