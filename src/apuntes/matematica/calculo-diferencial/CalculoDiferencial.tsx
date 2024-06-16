import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import Properties from "@/components/notes/environments/Properties";
import { Notation, Tip, Warning } from "@/components/notes/environments/StickyNotes";
import NoteDocument from "@/components/notes/NoteDocument";
import Section from "@/components/notes/Section";
import { referenceById } from "@/components/utils/hyperlinkManager";
import M, { r } from "@/math/LaTeX";
import { DIFFERENTIAL_CALCULUS, VECTOR_CALCULUS } from "@/Router";

const CalculoDiferencial = () => (
  <NoteDocument>

    <h1>Cálculo Diferencial</h1>
    <p>
      El <em>cálculo diferencial</em> es la rama del cálculo que estudia el cambio en funciones continuas, en particular, la derivación. Estos apuntes estudian el cálculo diferencial en tres secciones:
    </p>
    <ol>
      <li>Definición y estudio de los límites. Esto posibilita la definición de derivada.</li>
      <li>Definición y estudio de la derivada.</li>
      <li>Aplicaciones de la derivada.</li>
    </ol>

    <p>
      En estos apuntes, se estudian exclusivamente funciones escalares, de una variable y con valores reales. El estudio de funciones vectoriales y de múltiples variables se aborda en los <a href={VECTOR_CALCULUS}>apuntes de cálculo vectorial</a>. El estudio del cálculo para funciones con valores complejos se aborda en las <a>notas de cálculo de variable compleja</a>.
    </p>

    {/* TODO: Add a note about the prerequisites for this course */}
    {/* % Álgebra elemental. */}
    {/* % Funciones escalares de una variable. */}
    {/* Conjuntos numéricos */}

    {/* <p>Agradezco a los siguientes profesores por enseñarme cálculo diferencial:</p> */}
    {/* % Alexander Murcia Mazo, profesor de Cálculo diferencial en primer semestre en la Universidad de los Andes. */}
    {/* % Jeisson Norberto Garzón León, profesor de física en noveno grado, trigonometría en décimo grado y cálculo en once grado en el Colegio San Carlos. */}

    <Section title="Límites">

      <p>El concepto de límite formaliza la noción de aproximarse a un valor tanto como se quiera sin tener que alcanzar el valor en sí. Es sencillo comprender la intuición del límite mediante un ejemplo.</p>
      <Example title={<>Límite cuando <M>x</M> tiende a <M>2</M></>} id="limite-cuando-x-tiende-a-2">
        Considérese la función <M>f(x)=x-2</M>. Se toman valores de <M>x</M> cercanos a <M>2</M>, por ejemplo <M>1.9</M>, <M>2.05</M> o cualquier otro valor arbitrariamente cercano. Si se utilizan esos valores para evaluar la función, siempre se obtiene como resultado un número cercano a <M>0</M>:
        <M block>
          {r`\begin{align*}
              f(1.9)=1.9-2=-0.1 \\ 
              f(2.05)=2.05-2=0.05.
            \end{align*}`}
          </M>
        Se dice, entonces, que el límite de <M>f(x)</M> cuando <M>x</M> tiende a <M>2</M> es igual a <M>0</M>. Eso se denota por <M>{r`\lim_{x \to 2} f(x) = 0`}</M>.
      </Example>
      <p>
        Generalizando lo anterior, si cuando <M>x</M> tiende a un valor <M>c</M> en el eje de abscisas, entonces <M>f(x)</M> tiende a un valor <M>L</M> en eje de ordenadas, se escribe <M block>{r`\lim_{x \to c} f(x) = L`}</M> y se dice que <M>L</M> es el límite de <M>f(x)</M> cuando <M>x</M> tiende a <M>c</M>.
      </p>
      <p>
        Dicho de otra forma: el límite existe si se puede acercar <M>f(x)</M> a un valor <M>L</M> tanto como se quiera, sin llegar a <M>L</M>, al elegir valores de <M>x</M> lo suficientemente cercanos a <M>c</M>.
      </p>

      {/* TODO: Explicar o al menos introducir que el límite bien podría no existir! */}

      <h3>Definición de límite</h3>
      <Tip>
        Como antesala a la definición, que trata distancias entre valores, es útil tener en mente lo siguiente:
        <ul>
          <li>La distancia entre dos valores <M>a</M> y <M>b</M> se puede expresar matemáticamente por <M>|a-b|</M> o por <M>|b-a|</M>. Es conveniente leer <M>|a-b|</M> como "la distancia entre <M>a</M> y <M>b</M>".</li>
          <li><M>{`0 < |a-b| < c`}</M> indica entonces que <M>a</M> y <M>b</M> están a menos de <M>c</M> unidades de distancia entre sí, pero nunca se tocan.</li>
        </ul>
      </Tip>
      <p>
        La definición busca formalizar qué tan cerca debe estar <M>f(x)</M> de <M>L</M> conforme <M>x</M> se acerca a <M>c</M>. Para ello, se toma <M>\varepsilon</M> para acotar la distancia vertical, entre <M>f(x)</M> y <M>L</M>, y <M>\delta</M> para acotar la distancia horizontal, entre <M>x</M> y <M>c</M>. La idea es que si la distancia horizontal entre <M>x</M> y <M>c</M> es menor que <M>\delta</M>, entonces la distancia vertical entre <M>f(x)</M> y <M>L</M> debe ser menor que <M>\varepsilon</M>. Eso se expresa como <M>{r`0 < |x-c| < \delta \implies |f(x)-L| < \varepsilon`}</M>. Si se puede encontrar un <M>\delta</M> para cada <M>\varepsilon</M> de forma que eso se cumpla, entonces el límite existe.
      </p>
      <Definition concept="Límite">
        Sea <M>f</M> una función definida en el intervalo abierto <M>(a,b)</M>, aunque no necesariamente en el número <M>c \in (a,b)</M>.
        <p>
          El <em>límite</em> de <M>f(x)</M> cuando <M>x</M> tiende a <M>c</M> existe y es igual a <M>L</M> si y solamente si para todo número real positivo <M>\varepsilon</M>, existe un número real positivo <M>\delta</M>, tal que para todo <M>x</M> en el dominio de <M>f</M>, si <M>x</M> está en el intervalo abierto <M>(c-\delta,c+\delta)</M> y es diferente de <M>c</M>, entonces <M>f(x)</M> está en el intervalo abierto <M>(L-\varepsilon,L+\varepsilon)</M>.</p>
        <p>

          Eso se puede expresar simbólicamente como:
          <M block>
            {r`\Big(\lim_{x \to c} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < \abs{x-c} < \delta \implies \abs{f(x)-L}<\varepsilon, \ \forall x \in \dom f\Big).`}
          </M>
        </p>
      </Definition>

      <Warning>
        A continuación, se presentan múltiples definiciones de distintos tipos de límites. Todas son esencialmente leves variaciones de la definición general de límite presentada arriba. Es crucial comprender la definición general antes de abordar las definiciones específicas.
      </Warning>

      <h3>Límites laterales</h3>

      <p>
        En el Ejemplo 1, se toman valores de <M>x</M> cercanos a <M>2</M> para mostrar que <M>{r`\lim_{x \to 2}f(x)=0`}</M> para la función <M>f(x)=x-2</M>. Ahora, supóngase que se toman valores cercanos a <M>2</M>, pero solo mayores que <M>2</M>, o sea, a la derecha del <M>2</M> en la recta real. Posibles candidatos son <M>2.1</M>, <M>2.05</M> o cualquier valor arbitrariamente cercano a <M>2</M>. Evaluando esos valores en la función, se obtiene un resultado similar a antes, mas se concluye que el límite de <M>f(x)</M> cuando <M>x</M> tiende a <M>2</M> por derecha es <M>0</M>.
      </p>
      <p>
        Si <M>f(x)</M> tiende a <M>L</M> a medida que <M>x</M> tiende a <M>c</M> y <M>{`x>c`}</M>, entonces <M>{r`\lim_{x \to c^+} f(x) = L`}</M>. Eso refleja el comportamiento de la función <M>f</M> a la derecha de <M>c</M>.
      </p>
      <p>
        Para denotar la distancia entre <M>x</M> y <M>c</M> solo para los <M>x</M> que son mayores que <M>c</M> , se usa <M>{r`0<x-c<\delta`}</M> en lugar de <M>{r`0<|x-c|<\delta`}</M>. Ese es realmente el único cambio respecto a la definición general de límite.
      </p>

      <Definition concept="Límite lateral por derecha">
        Sea <M>f</M> una función definida en el intervalo abierto <M>(a,b)</M>, aunque no necesariamente en el número <M>c \in (a,b)</M>, el límite cuando <M>x</M> tiende a <M>c</M> por derecha se define como:
        <M block>
          {r`\Big(\lim_{x \to c^+} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < x-c < \delta \implies \abs{f(x)-L} < \varepsilon, \ \forall x \in \dom f\Big).`}
        </M>
      </Definition>

      <p>
        El <em>límite lateral por izquierda</em> de <M>f(x)</M> cuando <M>x</M> tiende a <M>c</M> se define de forma análoga: es el valor al que tiende <M>f(x)</M> cuando <M>x</M> se acerca a <M>c</M>, pero solo desde la izquierda de <M>c</M>. La distancia se denota entonces por <M>{r`0<c-x<\delta`}</M>, pues ahora se consideran solo los <M>x</M> menores que <M>c</M>.
      </p>

      <Definition concept="Límite lateral por izquierda">
        Sea <M>f</M> una función definida en el intervalo abierto <M>(a,b)</M>, aunque no necesariamente en el número <M>c \in (a,b)</M>, el límite cuando <M>x</M> tiende a <M>c</M> por izquierda se define como:
        <M block>
          {r`\Big(\lim_{x \to c^-} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<c-x<\delta \implies \abs{f(x)-L}<\varepsilon, \ \forall x \in \dom f \Big).`}
        </M>
      </Definition>

      <h3>Inexistencia del límite</h3>

      <p>
        Si los límites laterales de una función cuando se tiende al mismo valor no son iguales, el límite general no existe. Eso se debe a que el contorno de <M>c</M> no tiende hacia un mismo valor. Ocurre cuando hay saltos, o crecimientos o decrecimientos abruptos hacia el infinito o menos infinito.
      </p>

      {/* TODO: Completar esto o explicarlo un tal mejor */}

      <M block>
        {r`\lim_{x \to c^-}f(x) \neq \lim_{x \to c^+}f(x) \implies \lim_{x\to c} f(x)  \text{ no existe.}`}
      </M>

      <h3>Límites al infinito</h3>

      <p>
        Hasta el momento, se han considerado límites en los que <M>x</M> tiende a un valor <M>{r`c \in \mathbb{R}`}</M>. Sin embargo, también es posible estudiar límites en los que <M>x</M> tiende a infinito o menos infinito, denominados límites al infinito. En estos casos, se estudia el comportamiento de la función cuando <M>x</M> crece o decrece sin límite. Eso se denota por <M>{r`\lim_{x \to \infty} f(x) = L`}</M> o <M>{r`\lim_{x \to -\infty} f(x) = L`}</M>.
      </p>

      <p>
        El primer límite, que tiende al infinito, señala que <M>f(x)</M> se puede acercar a un valor <M>L</M> tanto como se quiera si se toman valores de <M>x</M> lo suficientemente grandes. Como formalización de eso, la definición establece que para cualquier distancia máxima <M>\varepsilon</M> entre <M>f(x)</M> y <M>L</M>, siempre se puede encontrar un mínimo número <M>N</M> tal que para todos los <M>x</M> a partir de <M>N</M>, la distancia entre <M>f(x)</M> y <M>L</M> es menor que <M>\varepsilon</M>.
      </p>
      <Definition concept="Límite al infinito positivo">
        Sea <M>f</M> una función definida en <M>(a, \infty)</M>, el límite cuando <M>x</M> tiende a <M>\infty</M> se define como:
        <M block>
          {r`\Big(\lim_{x \to \infty} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists N \in \mathbb{R} \colon x>N \implies \abs{f(x)-L}<\varepsilon\Big).`}
        </M>
      </Definition>
      <Tip>
        Nótese que, a diferencia de en las definiciones anteriores, en estas definiciones <M>N</M> no es necesariamente un número positivo, pues ya no representa una distancia, sino un valor mínimo o máximo para <M>x</M>.
      </Tip>
      <p>
        Similarmente, el límite que tiende a menos infinito indica que se puede acercar <M>f(x)</M> a un valor <M>L</M> tanto como se quiera si se toman valores de <M>x</M> lo suficientemente grandes, pero negativos. La definición es análoga, pero se consideran valores de <M>x</M> menores que <M>N</M>.
      </p>


      <Definition concept="Límite al infinito negativo">
        Sea <M>f</M> una función definida en <M>(-\infty, b)</M>, el límite cuando <M>x</M> tiende a <M>-\infty</M> se define como:
        <M block>
          {r`\Big(\lim_{x \to -\infty} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists N \in \mathbb{R} \colon x<N \implies \abs{f(x)-L}<\varepsilon\Big).`}
        </M>
      </Definition>

      <h4>Asíntotas horizontales</h4>

      <p>
        La función <M>f</M> tendrá una <em>asíntota horizontal</em> <M>y=L</M> si cualquiera de los siguientes límites existe:
      </p>
      <ol>
        <li><M>{r`\lim_{x \to \infty}f(x)= L`}</M></li>
        <li><M>{r`\lim_{x \to -\infty}f(x)= L`}</M></li>
      </ol>
      <p>
        Es un comportamiento típico en funciones racionales. La gráfica de la función puede interceptar o cruzar la asíntota horizontal en algún punto. Sin embargo, a medida que <M>x</M> se torna muy grande (o muy pequeño, si el límite existente es el segundo), la función se acerca cada vez más a <M>L</M>, sin llegar a tomar nunca ese valor.
      </p>

      <h3>Límites infinitos</h3>

      <p>
        Los límites infinitos son todos aquellos que, al ser evaluados, son iguales a más o menos infinito, de la forma <M>{r`\lim_{x \to c}f(x)=\infty`}</M> o <M>{r`\lim_{x \to c}f(x)=-\infty`}</M>. En estos casos, la función <M>f(x)</M> crece o decrece sin límite a medida que <M>x</M> se acerca a <M>c</M>.
      </p>

      <p>
        La formalización de los límites infinitos es similar a la de los límites al infinito. El límite infinito positivo indica que si se toma un valor de <M>x</M> lo suficientemente cercano a <M>c</M>, entonces <M>f(x)</M> será tan grande como se quiera. Así pues, se estipula que para cualquier cota inferior <M>N</M>, por grande que sea, siempre se puede encontrar una distancia <M>\delta</M> tal que si <M>x</M> y <M>c</M> están a menos de esa distancia, entonces <M>f(x)</M> es mayor que <M>N</M>.
      </p>

      <Definition concept="Límite infinito positivo">
        Sea <M>f</M> una función definida en el intervalo abierto <M>(a,b)</M>, aunque no necesariamente en el número <M>c \in (a,b)</M>, el límite igual a más infinito se define como:
        <M block>
          {r`\Big(\lim_{x \to c} f(x) = \infty\Big) \iff \Big(\forall N \in \mathbb{R} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<\abs{x-c}<\delta \implies f(x)>N, \ \forall x \in \dom f \Big).`}
        </M>
      </Definition>

      <p>
        El límite infinito negativo es análogo, con la diferencia de que <M>f(x)</M> puede ser tan negativo como se quiera: siempre es menor que una cota superior <M>N</M> si <M>x</M> y <M>c</M> están a menos de una distancia <M>\delta</M> y esa distancia se puede encontrar para cualquier <M>N</M>.
      </p>

      <Definition concept="Límite infinito negativo">
        Sea <M>f</M> una función definida en el intervalo abierto <M>(a,b)</M>, aunque no necesariamente en el número <M>c \in (a,b)</M>, el límite igual a menos infinito se define como:
        <M block>
          {r`\Big(\lim_{x \to c} f(x) = -\infty\Big) \iff \Big(\forall N \in \mathbb{R} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<\abs{x-c}<\delta \implies f(x)<N, \ \forall x \in \dom f \Big).`}
        </M>
      </Definition>


      <h4>Asíntotas verticales</h4>
      <p>
        Similarmente a como sucede con las asíntotas horizontales, una función <M>f</M> tendrá una <em>asíntota vertical</em> <M>x=c</M> si cualquiera de los siguientes límites existe:
      </p>

      <ol>
        <li><M>{r`\lim_{x \to c^+}f(x)= \infty`}</M></li>
        <li><M>{r`\lim_{x \to c^+}f(x)= - \infty`}</M></li>
        <li><M>{r`\lim_{x \to c^-}f(x)= \infty`}</M></li>
        <li><M>{r`\lim_{x \to c^-}f(x)= - \infty`}</M></li>
      </ol>
      <p>

        Igual que antes, suele suceder en funciones racionales.
      </p>

      <h3>Continuidad</h3>

      <p>
        El concepto de continuidad se define formalmente mediante el uso de límites. Intuitivamente, una función es continua si no tiene cambios abruptos de valor. Gráficamente, es continua si su gráfica se puede realizar con un solo trazo. En términos más exactos, una función es continua si el límite de la función en un punto es igual a la imagen de la función en ese punto.
      </p>

      <Definition concept="Función continua">
        La función <M>f</M> es <em>continua</em> en el número <M>c</M> si <M>{r`\lim_{x \to c} f(x) = f(c)`}</M>.
      </Definition>

      <p>
        Si una función no es continua en un punto, se dice que es <em>discontinua</em> en ese punto. La discontinuidad puede deberse a varias razones y por ende ser de varios tipos, como se verá más adelante.
      </p>

      <Definition concept="Continuidad en un intervalo">
        La función <M>f</M> es continua en el intervalo abierto <M>(a,b)</M> si lo es en cada punto del intervalo.
      </Definition>
      <p>
        Si una función es continua en todos los valores de su dominio, se dice simplemente que es <em>continua</em>.
      </p>
      <p>
        Sean <M>f</M> y <M>g</M> funciones que son continuas en los valores <M>{r`a, c \in \mathbb{R}`}</M>, entonces las siguientes funciones son continuas en <M>a</M>:
      </p>
      <ul>
        <li><M>{`f+g`}</M>.</li>
        <li><M>{`fg`}</M>.</li>
        <li><M>{`c \, f`}</M>.</li>
      </ul>
      <p>
        Si adicionalmente se cumple que <M>g(a)\neq 0</M>, entonces también es continua la función
      </p>
      <ul>
        <li><M>{`f/g`}</M>.</li>
      </ul>
      <p>
        La definición de continuidad implica que una función continua en un intervalo <M>(a,b)</M> tendrá que pasar no sólo por todos lo puntos en el eje <M>x</M> dentro de ese intervalo, sino también por todos los puntos en el eje <M>y</M> dentro del intervalo <M>(f(a),f(b))</M>. Eso se expresa formalmente mediante el <em>teorema del valor intermedio</em>.
      </p>
      <Theorem name="Teorema del valor intermedio">
        Dada una función <M>f</M> continua en el intervalo abierto <M>(a,b)</M>, para cualquier valor <M>M</M> entre <M>f(a)</M> y <M>f(b)</M>, existe un número <M>c \in (a,b)</M> tal que <M>f(c)=M</M>.
      </Theorem>

      <h4>Continuidad lateral</h4>
      <p>
        A partir de la definición de continuidad, se pueden establecer definiciones para la continuidad lateral.
      </p>
      <Definition concept="Continuidad por derecha">
        La función <M>f</M> es <em>continua por derecha</em> en el número <M>c</M> si <M>{r`\lim_{x \to c^+} f(x) = f(c)`}</M>.
      </Definition>

      <Definition concept="Continuidad por izquierda">
        La función <M>f</M> es <em>continua por izquierda</em> en el número <M>c</M> si <M>{r`\lim_{x \to c^-} f(x) = f(c)`}</M>.
      </Definition>

      <h4>Tipos de discontinuidad</h4>
      <p>
        Se pueden distinguir esencialmente dos tipos de discontinuidad en una función:
      </p>
      <ul>
        <li><em>Discontinuidad removible.</em> La gráfica tiene un hueco, es decir, la función no está definida en un punto específico, pero sí a su alrededor. En este caso, el límite en ese punto sí existe, aunque haya discontinuidad.</li>
        <li><em>Discontinuidad esencial o no removible.</em> Se denomina no removible porque la restricción que supone en el dominio no puede ser removida mediante el uso de métodos algebraicos. Se bifurca en dos subtipos:
          <ul>
            <li><em>De salto.</em> La gráfica salta abruptamente de un valor a otro en algún punto. En ese punto, los límites laterales son finitos pero distintos, por lo que en ese punto no existe el límite.</li>
            <li><em>Infinita.</em> La gráfica cambia súbitamente de un valor finito a infinito en algún punto. Los límites laterales son distintos y no existe el límite.</li>
          </ul>
        </li>
      </ul>

      <h3>Cálculo de límites</h3>
      <p>

        La gran mayoría de límites no se pueden determinar trivialmente, por lo que para el cálculo de límites se utilizan varias técnicas, que en esencia son tres:
      </p>
      <ol>
        <li>Hacer uso de propiedades de los límites.</li>
        <li>Clasificar la función con base en su continuidad o discontinuidad para determinar la manipulación algebraica (y aritmética) a realizar.</li>
        <li>Caracterizar el tipo de límite.</li>
      </ol>
      <p>
        Una vez se introduzca la diferenciación, en adición a esos métodos se podrá hacer uso de la Regla de L'Hôpital para calcular límites de funciones indeterminadas.
      </p>

      <h4>Propiedades de los límites</h4>

      <p>
        Sea <M>{r`a \in \mathbb{R}`}</M> y sean <M>f</M> y <M>g</M> funciones definidas en un intervalo abierto que contiene a <M>c</M>. Si los límites <M>{r`L = \lim_{x \to c}f(x)`}</M> y <M>{r`M = \lim_{x \to c}g(x)`}</M> existen, entonces se cumplen las siguientes propiedades:
      </p>
      {/* 
        \begin{longtable}{lp{\textwidth/2-1.8cm}p{\textwidth/2}}
	\rule[1ex]{0pt}{2.5ex}i.&Límite de una constante: &\(\displaystyle \lim_{x \to c}a=a\). \\
	\rule[1ex]{0pt}{2.5ex}ii.&Límite de una variable: &\(\displaystyle \lim_{x \to c} x = c\). \\
	\rule[1ex]{0pt}{2.5ex}iii.&Propiedad homogénea del límite: &\(\displaystyle \lim_{x \to c}(c \cdot f(x)) = c \lim_{x \to c} f(x) \). \\
	\rule[1ex]{0pt}{2.5ex}iv.&Propiedad de linealidad del límite: &\(\displaystyle \lim_{x \to c} (f(x) \pm g(x))= \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)\). \\
	\rule[1ex]{0pt}{2.5ex}v.&Límite del producto: &\(\displaystyle \lim_{x \to c} (f(x) \cdot g(x)) = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x) \). \\
	\rule[1ex]{0pt}{3.5ex}vi.&Límite del cociente: &\(\displaystyle \lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c}f(x)}{\lim_{x \to c}g(x)} \text{ si } \lim_{x \to c}g(x) \ne 0 \). \\
	\rule[1ex]{0pt}{3.5ex}vii.&Límite de una potencia: &\(\displaystyle \lim_{x \to c}f(x)^{n }=\left(\lim_{x \to c}f(x) \right)^n \text{ si } n\in \mathbb{N}\). \\
	\rule[1ex]{0pt}{2.5ex}viii.&Límite de una función compuesta: &\(\displaystyle \lim_{x \to c}(f \circ g)(x)=\lim_{x \to c}f(g(x)) 	= f\left(\lim_{x \to c}g(x) \right)\). \\
\end{longtable}  */}

      <h4>Cálculo de límites para funciones continuas</h4>

      <p>
        Si la función es continua en el intervalo del límite, para calcular el límite se evalúa la función en el punto dado:
        <M block>
          {r`\lim_{x \to c}f(x)=f(c).`}
        </M>
      </p>

      <h4>Cálculo de límites para funciones con discontinuidad removible</h4>
      <p>
        Si evaluar la función en el punto genera una indeterminación, tal como <M>{r`\dfrac{0}{0}`}</M>, <M>{r` \dfrac{\pm \infty}{\pm \infty}`}</M> o <M>{r` \infty \pm \infty `}</M>, se deben efectuar manipulaciones algebraicas, tales como factorizar, racionalizar y simplificar, para remover la expresión que produce la indeterminación. Una vez removido el término que genera la indeterminación, se evalúa: <M>{r`\lim_{x \to c}f(x)=f(c)`}</M>.
      </p>

      <Warning>
        No siempre se puede remover la indeterminación con métodos algebraicos. En los casos en que no es posible debe usarse la {referenceById("Regla de L'Hôpital", DIFFERENTIAL_CALCULUS, "", "Regla de L'Hôpital")}.
      </Warning>

      <p>
        Si, una vez removida la indeterminación, evaluar la función genera una indefinición, es decir división en 0 de la forma <M>{r`\frac{a}{0}`}</M> donde <M>{r`a \in \mathbb{R}_{>0}`}</M> , se dice que la función tiende a <M>{r`+\infty`}</M> o <M>{r`-\infty`}</M>. Para saber cuál es el signo, se realiza un análisis con valores cercanos al número <M>{r`c`}</M> del que se quiere hallar el límite: si al reemplazar valores cercanos el límite es positivo, el límite tiende a <M>{r`+\infty`}</M>; si es negativo, tiende a <M>{r`-\infty`}</M>.
      </p>

      <h4>Cálculo de límites que tienden a infinito</h4>

      <p>
        Para calcular límites que tienden a infinito, se tienen distintos casos según el tipo de función.
      </p>
      <p>
        Si la función es un polinomio, de la forma <M>{r`p(x)=a_nx^n+ a_{n-1}x^{n-1}+ \cdots + a_1x+a_0`}</M>, se sabe de antemano que el límite al infinito es infinito. Para determinar el signo, Se evalúa el límite en el término principal, de forma que el signo es el producto entre el signo del infinito y el signo del coeficiente principal:
        <M block>
          {r`\lim_{x \to \pm \infty} p(x) = \lim_{x \to \pm \infty} a_n x^n = \pm \infty \cdot a_n.`}
        </M>
      </p>

      <h5>Límites al infinito en funciones racionales</h5>
      <p>
        Si la función es racional, de la forma <M>{r`r(x)=\frac{f(x)}{g(x)}`}</M> entonces el valor del límite depende de qué función crece a mayor ritmo. Si <M>{r`\lim_{x \to \infty}\frac{f(x)}{g(x)} = 0`}</M>, es porque <M>g</M> crece mucho más rápido que <M>f</M> y a medida que el valor de <M>x</M> incrementa, el valor de <M>g</M> es tan grande en comparación con <M>f</M> que el cociente <M>f/g</M> se acerca a <M>0</M>. Se dice entonces que <M>g</M> <em>domina asintóticamente</em> a <M>f</M>.
      </p>

      <Definition concept="Dominancia asintótica">
        Sea dice que una función <M>g</M> <em>domina asintóticamente</em> a otra función <M>f</M>, lo cual se denota como <M>{r`g \gg f`}</M> si el límite al infinito del cociente <M>f/g</M> tiende a 0:
        <M block>
          {r`\big(g \gg f\big) \iff \left(\lim_{x \to \infty}\frac{f(x)}{g(x)} = 0\right).`}
        </M>
      </Definition>

      <p>
        Con eso en mente, para calcular límites al infinito de funciones racionales, resulta sumamente útil tener presente el orden de dominancia asintótica. Dicho orden es el siguiente:
        <M block>
          {r`1 \ll \log(n) \ll n^{1/2} \ll n \ll n\log(n) \ll n^2 \ll \cdots \ll n^a \ll 2^n \ll \cdots \ll a^n \ll n!`}
        </M>
        donde <M>{r`a \in \mathbb{R}_{> 2}`}</M>. Una función puede estar constituida por sumas y restas entre varias de estas funciones, en cuyo caso se toma la de mayor orden para determinar el límite.
      </p>
      <p>
        Si ocurre el caso contrario que el expuesto antes y <M>f</M> domina asintóticamente a <M>g</M>, entonces el límite al infinito tiende a infinito. El raciocinio es análogo: a medida que el valor de <M>x</M> aumenta, el valor de <M>f</M> es tan grande en comparación con <M>g</M> que el cociente <M>f/g</M> se acerca a <M>{r`\infty`}</M>.
      </p>
      <p>
        Para determinar el signo del límite, depende de los signos de los términos de mayor orden de ambas funciones. Por ejemplo, si <M>f</M> y <M>g</M> son polinomios tales que el grado de <M>f</M> es mayor que el de <M>g</M>, entonces el límite tiende a <M>{r`\pm \infty`}</M> y el signo depende del cociente de los signos de los coeficientes principales de <M>f</M> y <M>g</M>.
      </p>
      <p>
        Por último, si ambas funciones crecen a ritmos similares, el límite es un real no nulo.
      </p>
      <ul>
        <li>
          Si <M>f</M> y <M>g</M> son polinomios de igual grado, el límite es igual al cociente de los coeficientes principales de los polinomios.

          <Tip>
            Podría pasar que, por la forma en la que está escrito alguno de los polinomio, hayan dos términos de mayor grado. En ese caso, se debe tomar la suma de los coeficientes de esos términos de mayor grado como el coeficiente principal.
          </Tip>
        </li>
        <li>
          Si <M>f</M> y <M>g</M> son funciones logarítmicas, de la forma <M>f = \log(p)</M> y <M>g = \log(q)</M>, el límite es el cociente entre el exponente de mayor grado de <M>p</M> y el exponente de mayor grado de <M>q</M>.
        </li>
      </ul>

      <Example title="Diversos límites al infinito de funciones racionales">
        Límite en los que basta con recordar el orden de dominancia asintótica:
        <ul>
          <li><M>{r`\displaystyle \lim_{x \to \infty} \frac{3x^2+2x+1}{x^3+5x^2+4} = \lim_{x \to \infty} \frac{x^2}{x^3} = 0.`}</M></li>
          <li><M>{r`\displaystyle \lim_{x \to \infty} \frac{x!}{-3^x} = -\infty`}</M></li>
        </ul>
        Límites en los que las funciones crecen a ritmos equiparables:
        <ul>
          <li><M>{r`\displaystyle \lim_{x \to \infty} \frac{\sqrt{2x^3-x}+\sqrt{2x^3}}{\sqrt[6]{6x^4+x^{-9}}} = \lim_{x \to \infty} \frac{\sqrt{2}x^{3/2}-x^{1/2}+\sqrt{2}x^{3/2}}{\sqrt[6]{6}x^{2/3}+x^{-3/2}} = \frac{2\sqrt{2}}{\sqrt[6]{6}}`}</M></li>
          <li><M>{r`\displaystyle \lim_{x \to \infty} \frac{\log(x^2-x)}{\log(x^{-4} + x^{-3})} = -\frac{2}{3}`}</M></li>
        </ul>
      </Example>

      <h5>Límites al infinito en otras funciones</h5>
      <p>
        Para calcular límites al infinito de otras funciones, se realiza un análisis de la gráfica de la función, determinando cuál es el comportamiento de la función a medida que <M>x</M> incrementa (o decrece) indefinidamente. Algunos límites notables que se pueden calcular de esta forma son:
      </p>
      <ul>
        <li> Exponenciales si <M>{r`a>0`}</M></li>
        <ul>
          <li> <M>{r`\displaystyle \lim_{x \to 0}a^x=1`}</M></li>
          <li> Si <M>{r`a>1`}</M>:</li>
          <ul>
            <li> <M>{r`\displaystyle \lim_{x\to \infty}a^x= \infty`}</M></li>
            <li> <M>{r`\displaystyle \lim_{x \to -\infty}a^x=0`}</M></li>
          </ul>
          <li> Si <M>{r`0<a<1`}</M>:</li>
          <ul>
            <li> <M>{r`\displaystyle \lim_{x\to \infty}a^x= 0`}</M></li>
            <li> <M>{r`\displaystyle \lim_{x \to -\infty}a^x=\infty`}</M></li>
          </ul>
        </ul>
        <li> Exponenciales si <M>{r`a<0`}</M></li>
        <ul>
          <li> <M>{r`\displaystyle \lim_{x \to 0}a^x=-1`}</M></li>
          <li> Si <M>{r`-1<a<0`}</M>:</li>
          <ul>
            <li> <M>{r`\displaystyle \lim_{x\to \infty}a^x= 0`}</M></li>
            <li> <M>{r`\displaystyle \lim_{x \to -\infty}a^x=-\infty`}</M></li>
          </ul>
          <li> Si <M>{r`a<-1`}</M>:</li>
          <ul>
            <li> <M>{r`\displaystyle \lim_{x\to \infty}a^x= -\infty`}</M></li>
            <li> <M>{r`\displaystyle \lim_{x \to -\infty}a^x=0`}</M></li>
          </ul>
        </ul>
        <li> Logaritmo natural:</li>
        <ul>
          <li> <M>{r`\displaystyle \lim_{x\to \infty}\ln x=\infty.`}</M></li>
          <li> <M>{r`\displaystyle \lim_{x\to - \infty}\ln x \text{ No existe}.`}</M></li>
          <li> <M>{r`\displaystyle \lim_{x\to 0^{\pmb{+}}}\ln x=- \infty.`}</M></li>
          <li> <M>{r`\displaystyle \lim_{x\to 0^{-}}\ln x \text{ No existe}`}</M>.</li>
        </ul>
        <li> Radicales: <M>{r`\displaystyle \lim_{x \to \infty}\sqrt[n]{x}= \infty`}</M>.</li>
        <li> Constante de Euler:</li>
        <ul>
          <li> <M>{r`\displaystyle \lim_{x \to \infty}\left(1+\frac{1}{x}\right)^{x}=e.`}</M></li>
          <li>  <M>{r`\displaystyle \lim_{x \to \infty}\left(1+\frac{a}{x}\right)^{bx}=\lim_{x \to \infty}\left(\frac{x+a}{x}\right)^{bx}=\mathrm{e}^{ab}.`}</M></li>
        </ul>
        <li> Inversas de trigonométricas: Muchas tienen asíntotas horizontales. </li>
      </ul>

      <h4>Cálculo de límites para funciones con discontinuidad esencial o no removible</h4>

      <p>
        Si no se puede remover la expresión que genera la indeterminación pero la función es acotada (es decir, que está limitada a un rango específico conocido), para hallar el límite se usa el teorema del emparedado en esa expresión.
      </p>
      <Theorem name="Teorema del Emparedado o del Sándwich">
        Sean <M>{r`f, g`}</M> y <M>{r`h`}</M> funciones, si para todo <M>{r`x`}</M> en <M>{r`[a,b]`}</M>, excepto posiblemente para un valor <M>{r`c \in (a,b)`}</M>, se cumple tanto que <M>{r`f(x)<g(x)<h(x)`}</M> como que <M>{r`\displaystyle \lim_{x\to c}f(x)=\lim_{x\to c}h(x)=L`}</M>, entonces <M>{r`\displaystyle \lim_{x\to c}g(x)=L`}</M>.
      </Theorem>
      <p>
        Al aplicar el Teorema del emparedado, resulta conveniente usar intervalos pequeños y funciones que sean siempre continuas para <M>{r`f(x)`}</M> y <M>{r`h(x)`}</M>. Además, es necesario que esas funciones sean acotadas, es decir, que su rango sea un intervalo finito y conocido. Funciones útiles para ello son <M>{r`f(x)=\sin x`}</M>, <M>{r`f(x)=\cos x`}</M> y algunas funciones trigonométricas inversas.
      </p>

      <h4>Regla de L'Hôpital</h4>
      {/* TODO: Add historic context
\footnote{Misivas del matemático suizo Johann Bernoulli (1667-1748) al marqués parisino Guillaume Fran\c{o}is De L’Hôpital (1661-1704) contienen el desarrollo de la hoy denominada Regla de L’Hôpital por parte del suizo. No obstante, L’Hôpital publicó la regla a su nombre en su obra <i>Analyse des infiniment petits pour l'intelligence des lignes courbes</i> (1696), sirviéndose del trabajo de Bernoulli.} */}
      <p>
        Además de las formas ya mencionadas para el cálculo de límites, Johann Bernoulli desarrolló una forma alternativa para calcular límites que, al ser evaluados, produzcan indeterminaciones de la forma <M>{r`\dfrac{0}{0}`}</M> o <M>{r`\dfrac{\pm \infty}{\pm \infty}`}</M>. La regla utiliza derivación, el tema tratado en la sección siguiente.
      </p>

      <Theorem name="Regla de L'Hôpital" environmentName="Ley">
        Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones derivables en el intervalo abierto <M>{r`(a,b)`}</M> y supóngase que <M>{r`g'(x) \neq 0`}</M> para todo <M>{r`x \in (a,b)`}</M>, excepto posiblemente para <M>{r`c \in (a,b)`}</M>. Si se cumple que
        <M block>
          {r`\begin{align*}
		\begin{aligned}
			\lim_{x \to c} f(x) & = 0 \\
			\lim_{x \to c} f(x) & = \pm \infty
		\end{aligned} && \begin{aligned}
			\text{ y } \\
			\text{ y }
		\end{aligned} && \begin{aligned}
			\lim_{x \to c} g(x) & = 0 \qquad \text{ o que}\\
			\lim_{x \to c} g(x) & = \pm \infty
		\end{aligned}
	\end{align*}`}
        </M>
        se tiene una forma indeterminada del tipo <M>{r`\frac{0}{0}`}</M> o <M>{r`\frac{\pm \infty}{\pm \infty}`}</M>. Si <M>{r`\lim_{x\to c} \frac{f'(x)}{g'(x)}`}</M> existe, se cumple que:
        <M block>
          {r`\lim_{x \to c} \frac{f(x)}{g(x)} \stackrel{\text{H}}{=} \lim_{x\to c} \frac{f'(x)}{g'(x)}.`}
        </M>
      </Theorem>

      <Notation>
        Escribo una H sobre el signo de igualdad para denotar el uso de la Regla de L'Hôpital.
      </Notation>

      <p>
        Al usar la Regla de L'Hôpital, es útil usar la ley de límite de un producto para separar como factor únicamente la expresión del límite que genera la indeterminación. La Regla puede ser usada con límites de la forma de otras indeterminaciones, si antes de aplicarla se transforman los límites a límites con indeterminaciones de la forma <M>{r`\frac{0}{0}`}</M> o <M>{r`\frac{\pm \infty}{\pm \infty}`}</M> mediante métodos algebraicos. De eso se ocupan las subsecciones siguientes.
      </p>

      <h5>Indeterminación <M>{r`\bm{\pm \infty \cdot 0}`}</M></h5>

      <p>
        Si al evaluar un límite se tiene una indeterminación de la forma <M>{r`\pm \infty \cdot 0`}</M>, se utilizan propiedades de fracciones para transformarlo: se divide en el recíproco de una de las funciones,
        <M block>
          {r`\lim_{x\to c} \left(f(x) \cdot g(x)\right) =\pm \infty \cdot 0 \ \implies \ \lim_{x\to c} \frac{f(x)}{\frac{1}{g(x)}} = \frac{\pm \infty}{\lim_{x\to c}\frac{1}{g(x)}}=\frac{\pm \infty}{\pm \infty}.`}
        </M>
        Si se tiene una función con logaritmo, tal que su límite cuando <M>{r`x`}</M> tiende a 0 por derecha es <M>{r`-\infty`}</M>, se debe mantener en el denominador durante el proceso anterior para aplicar la Regla de L'Hôpital.
      </p>

      <h5>Indeterminación <M>{r`\bm{\infty - \infty}`}</M>.</h5>

      <p>
        Si al evaluar un límite se tiene una indeterminación de la forma <M>{r`\infty - \infty`}</M>, se expresa el límite como una resta de cocientes y luego, usando propiedades de fracciones, su unen en una única fracción que dará una de las formas indeterminadas buscadas:
        <M block>
          {r`\lim_{x\to c}\left( \frac{f(x)}{g(x)}-\frac{p(x)}{q(x)}\right) = \infty - \infty \ \implies \ \lim_{x\to c} \frac{(f\cdot q)(x)-(p\cdot g)(x)}{(g \cdot q)(x)}= \frac{0}{0}.`}
        </M>
      </p>

      <h5>Indeterminaciones <M>{r`\bm{0^0, \infty^0 \text{ y } 1^{\infty}}`}</M></h5>

      <p>
        Si al evaluar un límite se tiene una indeterminación de la forma <M>{r`0^0, \infty^0 \text{ o } 1^{\infty}`}</M>, seguramente se tenía una función de la forma <M>{r`f(x)^{g(x)}`}</M>. Se emplean las propiedades del logartimo y de la potenciación para transformarla. Primero, se transforma la función a una exponencial con base <M>{r`\mathrm{e}`}</M> con un logaritmo natural en el exponente. Esto permite dos cosas: que la función que originalmente era exponente ahora pase a multiplicar el logaritmo y que sea posible agregar el límite al exponente. Con eso, se transforma la indeterminación a un límite más sencillo de calcular.
        <M block>
          {r`\lim_{x\to c} f(x)^{g(x)} = \lim_{x\to c} \mathrm{e}^{\ln f(x)^{g(x)}} = \lim_{x\to c} \mathrm{e}^{g(x)\cdot \ln f(x)} = \mathrm{e}^{\lim\limits_{x\to c}(g(x)\cdot \ln f(x))}.`}
        </M>
      </p>

    </Section>

    <Section title="Derivación">

      <h3>Definición de derivada</h3>

      <Tip>
        Una recta es <em>tangente</em> a una curva en un punto si únicamente interseca a la curva en ese punto. Si la interseca en dos puntos, la recta es <em>secante</em>.
      </Tip>

      <p>
        La derivada surge como un método matemático para resolver dos problemas. El primero, de carácter geométrico, hallar la pendiente de la recta tangente a una curva; el segundo, conocer la razón de cambio instantánea de una función respecto a su variable independiente. La razón de cambio es la medida en la que una variable se modifica con relación a otra, como, por ejemplo, la medida en que la distancia recorrida se modifica con respecto al tiempo. En una gráfica lineal, no hay problema para hallar la razón de cambio instantánea, porque es la misma siempre: la pendiente de la recta. Para otras gráficas, no lineales, hallar la razón de cambio instantánea lleva al problema geométrico mencionado al inicio de este párrafo: hallar la pendiente de la recta tangente a la curva en ese punto. Así pues, son en esencia el mismo problema. Eso es, entonces, lo que representa la derivada de una función en un punto: la pendiente de la recta tangente a la curva en ese punto.
      </p>
      <p>
        Para aproximar la pendiente de la recta tangente a un punto cualquiera, <M>{r`(a, f(a))`}</M>, se puede usar la pendiente de una recta secante que pasa por ese punto y otro muy cercano: <M>{r`(x, f(x))`}</M>. Se calcula la pendiente de la recta secante con la fórmula para pendiente que se conoce de la geometría analítica:
        <M block>
          {r`m_{\text{secante}}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}=\frac{f(x)-f(a)}{x-a}`}
        </M>
      </p>

      <p>
        Supóngase que se seleccionó un <M>x</M> tal que <M>{`x>a`}</M> y úsese <M>{r`h`}</M> para denotar la distancia entre <M>a</M> y <M>x</M>. Se puede entonces escribir <M>{r`(x, f(x))`}</M> como <M>{r`(a+h, f(a+h))`}</M>. Con eso se puede reescribir la pendiente de la recta secante:
        <M block>
          {r`m_{\text{secante}}{} = \frac{f(a+h)-f(a)}{a+h-a} =\frac{f(a+h)-f(a)}{h} `}
        </M>
        Entre más cerca esté el punto elegido del punto original, menor será <M>{r`h`}</M>. Ergo, tomar una magnitud de <M>{r`h`}</M> infinitesimalmente pequeña hará que la pendiente que se está obteniendo de la recta secante se aproxime a la pendiente de la recta tangente, que se quiere obtener. Por ello, es adecuado tomar el límite cuando <M>{r`h`}</M> tiende a <M>{r`0`}</M> de la pendiente de la recta secante. Se obtiene con eso la pendiente de la recta tangente:
        <M block>
          {r` m_{\text{tangente}}= \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}= \lim_{x\to a}\frac{f(x)-f(a)}{x-a}.`}
        </M>
      </p>
      <p>
        En consonancia con lo mencionado anteriormente, a la pendiente de la recta tangente a la función en un punto se le da el nombre de <em>derivada</em> en ese punto.
      </p>
      <Definition concept="Derivada">
        La <em>derivada</em> <M>{r`f'(a)`}</M> de la función <M>{r`f`}</M> en el número <M>{r`a`}</M> se define como la pendiente de la recta tangente a la gráfica de la función en el punto <M>{r`(a, f(a))`}</M> en <M>{r`f`}</M>.
        <M block>
          {r`f'(a) \coloneqq\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.`}
        </M>
        Si y solamente si el límite existe.
      </Definition>

      <p>
        Si se reemplaza el número <M>{r`a`}</M> por una variable <M>{r`x`}</M>, se puede extrapolar el concepto de derivada en un punto y obtener la derivada como una función.
      </p>

      <Definition concept="Función derivada">
        La <em>función derivada</em> <M>{r`f'`}</M> de la función <M>{r`f`}</M> es aquella función que, para cualquier punto <M>{r`(x, f(x))`}</M> de <M>{r`f`}</M>, da la pendiente de la recta que es tangente a <M>{r`f`}</M> en ese punto.
        <M block>
          {r`f'(x) \coloneqq\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.`}
        </M>
        Si y solamente si el límite existe.
      </Definition>
      <p>
        Usualmente, se denominada "derivada" de forma indiscriminada tanto a la derivada en un punto como a la función derivada. Aunque es importante tener presente la distinción, resulta sencillo inferir cuál de las dos se está mencionando en un contexto específico.
      </p>

      <h4>Orden de la derivada</h4>

      <p>
        Como la derivada es una función, es posible que se pueda a su vez derivar (es decir: derivar la derivada). El <em>orden</em> de la derivada dicta cuántas veces se deriva una función dada. Así, la derivada de primer orden o primera derivada se obtiene al derivar una función solo una vez, que es la definición que se ha enunciado. Si se deriva la función derivada <M>{r`f'`}</M> se obtendrá la derivada de segundo orden o segunda derivada de <M>{r`f`}</M>, que puede ser denotada por <M>{r`f''`}</M>. Si se deriva la función <M>{r`f''`}</M> se obtendrá la tercera derivada <M>{r`f'''`}</M> y así sucesivamente hasta que la función obtenida tras derivar deje de ser diferenciable.
      </p>

      <Notation>
        Se usan distintas notaciones para representar la derivación y su orden. La notación que se ha usado es la <em>notación de Lagrange</em>, en donde la derivada se representa por la función prima.
        <M block>
          {r`f'(x), f''(x), f'''(x), f^{(4)}(x),\cdots, f^{(n)}(x) \quad \text{ o } \quad y', y'', y''',y^{(4)},\cdots, y^{(n)}`}
        </M>
        La <em>notación de Leibniz</em> es la más ampliamente utilizada. Es notablemente útil debido a que especifica respecto a qué variable se deriva. <M>{r`\der{}{x} f(x)`}</M> se lee como la derivada de <M>{r`f(x)`}</M> con respecto a <M>{r`x`}</M>.
        <M block>
          {r`\der{}{x} f(x),\nder{2}{}{x} f(x),\nder{3}{}{x} f(x),\cdots, \nder{n}{}{x} f(x) \quad \text{ o } \quad \der{y}{x},\nder{2}{y}{x},\nder{3}{y}{x},\cdots, \nder{n}{y}{x}`}
        </M>

        Otra posibilidad es la <em>notación de Newton</em>, frecuentemente utilizada en la física para denotar la derivada con respecto al tiempo, que representa el orden de la derivada por el número de puntos: < M>{r`\dot{y}, \ddot{y}, \ldots`}</M>
      </Notation>

      <h3>Diferenciabilidad</h3>

      <h4>Derivadas laterales</h4>

      Similarmente a como se definen límites laterales, se definen también derivadas laterales. Resultan útiles para funciones que no son continuas en un punto, ya que permiten calcular la derivada de la función en ese punto desde un lado u otro.

      <Definition concept="Derivada por derecha">
        La derivada de la función <M>{r`f`}</M> en el punto <M>{r`(a, f(a))`}</M> por derecha está dada por:
        <M block>
          {r`f'_+(a)\coloneqq\lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a^+}\frac{f(x)-f(a)}{x-a}`}
        </M>
      </Definition>

      <Definition concept="Derivada por izquierda">
        La derivada de la función <M>{r`f`}</M> en el punto <M>{r`(a, f(a))`}</M> por izquierda está dada por:
        <M block>
          {r`f'_-(a) \coloneqq\lim_{h\to 0^-}\frac{f(a+h)-f(a)}{h} =\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}`}
        </M>
      </Definition>

      <h4>Diferenciabilidad</h4>

      <p>
        Análogamente a como sucede con los límites, si ambas derivadas laterales son iguales, entonces la derivada de la función en ese punto existe y es igual a la derivada lateral. Si no son iguales, la derivada de la función en ese punto no existe.
      </p>

      <Definition concept="Función diferenciable">
        Se dice que una función es <em>derivable</em> o <em>diferenciable</em> en un punto o intervalo si es posible calcular su derivada en dicho punto o intervalo.
      </Definition>

      <p>
        <b>Diferenciabilidad en un punto.</b> Una función <M>{r`f`}</M> es diferenciable en el punto <M>{r`(a, f(a))`}</M> si los límites <M>{r`\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}`}</M> y <M>{r`\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`}</M> existen y la función es continua en <M>{r`a`}</M>. Consecuencia de que los límites existan y la función sea continua es que los límutes son iguales. Por ende, <M>{r`f'(a)`}</M> existe si <M>{r`f'_+(a)=f'_-(a)`}</M>.
      </p>

      <p>
        <b>Diferenciabilidad en un intervalo cerrado.</b> Una función <M>{r`f`}</M> es diferenciable en un intervalo cerrado <M>{r`[a,b]`}</M> si es diferenciable en todo punto del intervalo abierto <M>{r`(a,b)`}</M> y además existen <M>{r`f'_+(a)`}</M> y <M>{r`f'_-(b)`}</M>.
      </p>

      <h4>No diferenciabilidad</h4>
      <p>
        Una función <M>{r`f`}</M> no es derivable en el punto <M>{r`(a, f(a))`}</M> si <M>{r`f'_{+}(a) \neq f'_{-}(a)`}</M>.  Gráficamente, no es derivable en el punto si ahí hay una discontinuidad o si en ese punto hay "puntas" o "esquinas" puntiagudas, ya que se pueden trazar múltiples rectas tangentes a la función en ese punto, todas con pendientes distintas, y por ende no existe una única derivada.
      </p>

      <p>
        <b>Función de Weierstrass.</b> La Función de Weierstrass es un ejemplo de función que a pesar de ser continua en todo su dominio no es derivable en ningún punto. Esto se debe a que está compuesta por únicamente "puntas" o "esquinas".
      </p>

      <h4>Diferenciabilidad continua</h4>

      <p>
        Si la función derivada <M>{r`f'`}</M> es continua, entonces se dice que la función <M>{r`f`}</M> es <em>continuamente diferenciable</em> y se cataloga como una función de <em>clase <M>{r`C^1`}</M></em>.
      </p>

      <p>
        Una función es de clase <M>{r`C^n`}</M> si existen todas sus derivadas desde su derivada de primer orden hasta su derivada de orden <M>{r`n`}</M> y todas son funciones continuas. En ese caso, la función es <em><M>{r`n`}</M> veces continuamente diferenciable</em>. Si una función es de clase <M>{r`C^n`}</M> para un <M>{r`n \in \mathbb{N}\setminus \{0\}`}</M> arbitrariamente grande, entonces la función es <em>infinitamente diferenciable</em> y se cataloga como de clase <M>{r`C^\infty`}</M>.
      </p>

      <h3>Reglas de derivación</h3>
      <p>
        Las famosas <em>reglas de derivación</em> son un conjunto de casos simples y comunes de derivadas que se utilizan para derivar funciones complejas de forma más rápida y mecánica, en lugar de hacer uso de la definición de derivada, que frecuentemente requiere calcular límites intrincados. En estos apuntes se dividen en 7 categorías:
      </p>
      <ol>
        <li>Propiedades de la derivación (5).</li>
        <li>Reglas de derivación básicas (5).</li>
        <li>Derivadas de las funciones trigonométricas (3 pares).</li>
        <li>Derivadas de las funciones trigonométricas inversas (3 pares).</li>
        <li>Derivadas de las funciones hiperbólicas (6).</li>
        <li>Derivadas de las funciones hiperbólicas inversas  (6).</li>
      </ol>
      <p>
        En total, son 34 reglas de derivación. Las últimas dos categorías son mucho menos comunes y se incluyen por completitud. Realmente, solo hace falta memorizar 16 reglas: las 5 propiedades, las 5 básicas y 6 pares correspondientes a las trigonométricas y a sus inversas.
      </p>

      <Properties
        title="Propiedades de la derivación"
        description={<p>Estas reglas corresponden realmente a propiedades que tiene la derivada como operación. Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones diferenciables:</p>}
        properties={[
          {
            name: 'Propiedad de homogeneidad de la derivación',
            formula: <M>{r`\displaystyle (a\cdot f)'=a \cdot f'.`}</M>
          },
          {
            name: 'Propiedad de linealidad de la derivación',
            formula: <M>{r`\displaystyle (f \pm g)'=f' \pm g'.`}</M>
          },
          {
            name: 'Regla del producto',
            formula: <M>{r`\displaystyle (f\cdot g)'=f'\cdot g+f\cdot g'.`}</M>
          },
          {
            name: 'Regla del cociente',
            formula: <M>{r`\displaystyle \left (\frac{f}{g}\right )'=\frac{f'g-fg'}{g^2}.`}</M>
          },
          {
            name: 'Regla de la cadena',
            formula: <M>{r`\displaystyle (f \circ g)'=f(g)'=f'(g) \cdot g'.`}</M>
          }
        ]}
      />
      <p>
        En las propiedades, las funciones se denotan sin argumento y usando la notación de Lagrange. Esto permite apreciar lo simples que son. Sin embargo, vale la pena mostrar la forma diferencial de la regla de la cadena, usando la notación de Leibniz y haciendo el cambio de variable al llamar <M>{r`u`}</M> a la función interna, de forma que <M>{r`( u=g(x) )`}</M>:
      </p>
      <M block>{r`\der{y}{x}=\der{y}{u}\cdot\der{u}{x}.`}</M>

      <Tip>
        La regla de la cadena se usa siempre que se deriva, mas solo se hace explícita cuando se derivan funciones compuestas.
      </Tip>
      <p>
        El resto de reglas de derivación se expresan con una sola función, por lo que se usa la notación de Leibniz. Sean <M>{r`a, b \in \mathbb{R}`}</M> constantes y sea <M>{r`x`}</M> una variable.
      </p>
      <Properties
        title="Reglas de derivación básicas"
        initialCountValue={6}
        properties={[
          {
            name: 'Derivada de una constante',
            formula: <M>{r`\der{}{x} a = 0.`}</M>
          },
          {
            name: 'Derivada de la variable (respecto a sí misma)',
            formula: <M>{r`\der{}{x} x = 1.`}</M>
          },
          {
            name: 'Regla de la potencia',
            formula: <M>{r`\der{}{x} x^a = a \cdot x^{a-1}.`}</M>
          },
          {
            name: 'Derivada de la función exponencial',
            formula: <M>{r`\der{}{x} a^x = \ln(a) \cdot a^x.`}</M>,
            note: <span>Si la base del exponente es <M>{r`\mathrm{e}`}</M>, la regla se reduce a <M>{r`\der{}{x} \mathrm{e}^x=\mathrm{e}^x.`}</M></span>
          },
          {
            name: 'Derivada del logaritmo',
            formula: <M>{r`\der{}{x} \log_b |x| = \dfrac{1}{x \cdot \ln(b)}.`}</M>,
            note: <span>Si el logaritmo es natural, la regla se reduce a <M>{r`\der{}{x} \ln \abs{x} = \frac{1}{x}`}</M>.</span>
          }
        ]}
      />
      <p>
        A partir de las últimas dos reglas, se puede calcular la derivada <M>{r`\der{}{x} x^x=x^x(1+\ln x)`}</M>, aunque para ello se requiere utilizar la propiedad <M>{r`\mathrm{e}^{\ln x^x}=\mathrm{e}^{x \ln x}`}</M> y la regla de la cadena.
      </p>
      <p>
        En ocasiones, la regla para la derivada del logaritmo se expresa como <M>{r`\der{}{x} \log_b |f(x)| = \frac{f'(x)}{f(x) \cdot \ln(b)}`}</M>, que es simplemente lo que resulta tras aplicar la regla de la cadena en la regla escrita arriba.
      </p>

      <Properties
        title="Derivadas de las funciones trigonométricas"
        initialCountValue={6 + 3 + 2}
        properties={[
          {
            name: 'Derivada de seno',
            formula: <M>{r`\der{}{x} \sin x = \cos x.`}</M>
          },
          {
            name: 'Derivada de coseno',
            formula: <M>{r`\der{}{x} \cos x = - \sin x.`}</M>
          },
          {
            name: 'Derivada de tangente',
            formula: <M>{r`\der{}{x} \tan x = \sec^2 x.`}</M>
          },
          {
            name: 'Derivada de cotangente',
            formula: <M>{r`\der{}{x} \cot x = - \csc^2 x.`}</M>
          },
          {
            name: 'Derivada de secante',
            formula: <M>{r`\der{}{x} \sec x = \sec x \tan x.`}</M>
          },
          {
            name: 'Derivada de cosecante',
            formula: <M>{r`\der{}{x} \csc x = - \csc x \cot x.`}</M>
          }
        ]}
      />
      <p>
        Para memorizar las derivadas de las funciones trigonométricas, resulta útil recordarlas de a pares:
      </p>
      <ul>
        <li>La derivada del seno es coseno; la derivada del coseno es menos seno.</li>
        <li>La derivada de tangente es secante al cuadrado; la derivada de cotangente es menos cosecante al cuadrado.</li>
        <li>La derivada de secante es secante por tangente; la derivada de cosecante es menos cosecante por cotangente.</li>
      </ul>

      <Properties
        title="Derivadas de las funciones trigonométricas inversas"
        initialCountValue={6 + 3 + 2 + 6}
        properties={[
          {
            name: 'Derivada de arco seno',
            formula: <M>{r`\der{}{x} \arcsin x = \dfrac{1}{\sqrt{1-x^2}}.`}</M>
          },
          {
            name: 'Derivada de arco coseno',
            formula: <M>{r`\der{}{x} \arccos x = - \dfrac{1}{\sqrt{1-x^2}}.`}</M>
          },
          {
            name: 'Derivada de arco tangente',
            formula: <M>{r`\der{}{x} \arctan x = \dfrac{1}{1+x^2}.`}</M>
          },
          {
            name: 'Derivada de arco cotangente',
            formula: <M>{r`\der{}{x} \arccot x = - \dfrac{1}{1+x^2}.`}</M>
          },
          {
            name: 'Derivada de arco secante',
            formula: <M>{r`\der{}{x} \arcsec x = \dfrac{1}{x\sqrt{x^2-1}}.`}</M>
          },
          {
            name: 'Derivada de arco cosecante',
            formula: <M>{r`\der{}{x} \arccsc x = - \dfrac{1}{x\sqrt{x^2-1}}.`}</M>
          }
        ]}
      />

      <p>
        También es recomendable memorizar las derivadas de las funciones trigonométricas inversas de a pares y es aún más fácil: nótese que la  derivada de la cofunción es igual a la derivada de la función pero con signo negativo.
        <M block>
          {r`\begin{gather*}
                \der{}{x} \arcsin x = -\der{}{x} \arccos x = \dfrac{1}{\sqrt{1-x^2}}. \\
                \der{}{x} \arcsec x = -\der{}{x} \arccsc x = \dfrac{1}{1+x^2}. \\
                \der{}{x} \arctan x = -\der{}{x} \arccot x = \dfrac{1}{x\sqrt{x^2-1}}.
              \end{gather*}`}
        </M>
      </p>

      <Properties
        title="Derivadas de las funciones hiperbólicas"
        description="Las funciones hiperbólicas son análogas a las funciones trigonométricas, pero están definidas sobre la hipérbola, no sobre el círculo. Sus derivadas también son análogas a las de las funciones trigonométricas, salvo los signos."
        initialCountValue={6 + 3 + 2 + 6 + 6}
        properties={[
          {
            name: 'Derivada de seno hiperbólico',
            formula: <M>{r`\der{}{x} \sinh x = \cosh x.`}</M>
          },
          {
            name: 'Derivada de coseno hiperbólico',
            formula: <M>{r`\der{}{x} \cosh x = \sinh x.`}</M>
          },
          {
            name: 'Derivada de tangente hiperbólico',
            formula: <M>{r`\der{}{x} \tanh x = \sech^2 x.`}</M>
          },
          {
            name: 'Derivada de cotangente hiperbólico',
            formula: <M>{r`\der{}{x} \coth x = -\csch^2 x.`}</M>
          },
          {
            name: 'Derivada de secante hiperbólico',
            formula: <M>{r`\der{}{x} \sech x = -\sech x \tanh x.`}</M>
          },
          {
            name: 'Derivada de cosecante hiperbólico',
            formula: <M>{r`\der{}{x} \csch x = -\csch x \coth x.`}</M>
          }
        ]}
      />

      <Properties
        title="Derivadas de las funciones hiperbólicas inversas"
        initialCountValue={6 + 3 + 2 + 6 + 6 + 6}
        properties={[
          {
            name: 'Derivada de área de seno hiperbólico',
            formula: <M>{r`\der{}{x} \arsinh x=  \dfrac{1}{\sqrt{1+x^2}}.`}</M>
          },
          {
            name: 'Derivada de área de coseno hiperbólico',
            formula: <M>{r`\der{}{x} \arcosh x= \dfrac{1}{\sqrt{x^2-1}}.`}</M>
          },
          {
            name: 'Derivada de área de tangente hiperbólico',
            formula: <M>{r`\der{}{x} \artanh x= \dfrac{1}{1-x^2}.`}</M>
          },
          {
            name: 'Derivada de área de cotangente hiperbólico',
            formula: <M>{r`\der{}{x} \arcoth x= \dfrac{1}{1-x^2}.`}</M>
          },
          {
            name: 'Derivada de área de secante hiperbólico',
            formula: <M>{r`\der{}{x} \arsech x= -\dfrac{1}{x\sqrt{1-x^2}}.`}</M>
          },
          {
            name: 'Derivada de área de cosecante hiperbólico',
            formula: <M>{r`\der{}{x} \arcsch x= -\dfrac{1}{\abs{x}\sqrt{x^2+1}}.`}</M>
          }
        ]}
      />

    </Section>

  </NoteDocument>
);

export default CalculoDiferencial;
