import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import NoteDocument from "@/components/notes/NoteDocument";
import M, { r } from "@/math/LaTeX";
import { Tip, Warning } from "@/components/notes/environments/StickyNotes";

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
            En estos apuntes, se estudian exclusivamente funciones escalares, de una variable y con valores reales. El estudio de funciones vectoriales y de múltiples variables se aborda en los <a href="/apuntes/matematica/calculo-vectorial">apuntes de cálculo vectorial</a>. El estudio del cálculo para funciones con valores complejos se aborda en las <a href="/apuntes/matematica/calculo-de-variable-compleja">notas de cálculo de variable compleja</a>.
        </p>

        {/* TODO: Add a note about the prerequisites for this course */}
        {/* % Álgebra elemental. */}
        {/* % Funciones escalares de una variable. */}
        {/* Conjuntos numéricos */}

        {/* <p>Agradezco a los siguientes profesores por enseñarme cálculo diferencial:</p> */}
        {/* % Alexander Murcia Mazo, profesor de Cálculo diferencial en primer semestre en la Universidad de los Andes. */}
        {/* % Jeisson Norberto Garzón León, profesor de física en noveno grado, trigonometría en décimo grado y cálculo en once grado en el Colegio San Carlos. */}

        <h2>Límites</h2>

        <p>El concepto de límite formaliza la noción de aproximarse a un valor tanto como se quiera sin tener que alcanzar el valor en sí. Es sencillo comprender la intuición del límite mediante un ejemplo.</p>
        <Example title={<>Límite cuando <M>x</M> tiende a <M>2</M></>} id="limite-cuando-x-tiende-a-2">
            Considérese la función <M>f(x)=x-2</M>. Se toman valores de <M>x</M> cercanos a <M>2</M>, por ejemplo <M>1.9</M>, <M>2.05</M> o cualquier otro valor arbitrariamente cercano. Si se utilizan esos valores para evaluar la función, siempre se obtiene como resultado un número cercano a <M>0</M>:<M block>f(1.9)=1.9-2=-0.1 \\ f(2.05)=2.05-2=0.05</M>
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

    </NoteDocument>
);

export default CalculoDiferencial;
