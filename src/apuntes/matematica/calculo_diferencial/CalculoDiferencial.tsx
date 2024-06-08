import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import NoteDocument from "@/components/notes/NoteDocument";
import LaTeX from "@/math/LaTeX";
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
        <Example title={<>Límite cuando <LaTeX>x</LaTeX> tiende a <LaTeX>2</LaTeX></>} id="limite-cuando-x-tiende-a-2">
            Considérese la función <LaTeX>f(x)=x-2</LaTeX>. Se toman valores de <LaTeX>x</LaTeX> cercanos a <LaTeX>2</LaTeX>, por ejemplo <LaTeX>1.9</LaTeX>, <LaTeX>2.05</LaTeX> o cualquier otro valor arbitrariamente cercano. Si se utilizan esos valores para evaluar la función, siempre se obtiene como resultado un número cercano a <LaTeX>0</LaTeX>:<LaTeX block>f(1.9)=1.9-2=-0.1 \\ f(2.05)=2.05-2=0.05</LaTeX>
            Se dice, entonces, que el límite de <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> tiende a <LaTeX>2</LaTeX> es igual a <LaTeX>0</LaTeX>. Eso se denota por <LaTeX>{String.raw`\lim_{x \to 2} f(x) = 0`}</LaTeX>.
        </Example>
        <p>
            Generalizando lo anterior, si cuando <LaTeX>x</LaTeX> tiende a un valor <LaTeX>c</LaTeX> en el eje de abscisas, entonces <LaTeX>f(x)</LaTeX> tiende a un valor <LaTeX>L</LaTeX> en eje de ordenadas, se escribe <LaTeX block>{String.raw`\lim_{x \to c} f(x) = L`}</LaTeX> y se dice que <LaTeX>L</LaTeX> es el límite de <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX>.
        </p>
        <p>
            Dicho de otra forma: el límite existe si se puede acercar <LaTeX>f(x)</LaTeX> a un valor <LaTeX>L</LaTeX> tanto como se quiera, sin llegar a <LaTeX>L</LaTeX>, al elegir valores de <LaTeX>x</LaTeX> lo suficientemente cercanos a <LaTeX>c</LaTeX>.
        </p>

        {/* TODO: Explicar o al menos introducir que el límite bien podría no existir! */}

        <h3>Definición de límite</h3>
        <Tip>
            Como antesala a la definición, que trata distancias entre valores, es útil tener en mente lo siguiente:
            <ul>
                <li>La distancia entre dos valores <LaTeX>a</LaTeX> y <LaTeX>b</LaTeX> se puede expresar matemáticamente por <LaTeX>|a-b|</LaTeX> o por <LaTeX>|b-a|</LaTeX>. Es conveniente leer <LaTeX>|a-b|</LaTeX> como "la distancia entre <LaTeX>a</LaTeX> y <LaTeX>b</LaTeX>".</li>
                <li><LaTeX>{`0 < |a-b| < c`}</LaTeX> indica entonces que <LaTeX>a</LaTeX> y <LaTeX>b</LaTeX> están a menos de <LaTeX>c</LaTeX> unidades de distancia entre sí, pero nunca se tocan.</li>
            </ul>
        </Tip>
        <p>
            La definición busca formalizar qué tan cerca debe estar <LaTeX>f(x)</LaTeX> de <LaTeX>L</LaTeX> conforme <LaTeX>x</LaTeX> se acerca a <LaTeX>c</LaTeX>. Para ello, se toma <LaTeX>\varepsilon</LaTeX> para acotar la distancia vertical, entre <LaTeX>f(x)</LaTeX> y <LaTeX>L</LaTeX>, y <LaTeX>\delta</LaTeX> para acotar la distancia horizontal, entre <LaTeX>x</LaTeX> y <LaTeX>c</LaTeX>. La idea es que si la distancia horizontal entre <LaTeX>x</LaTeX> y <LaTeX>c</LaTeX> es menor que <LaTeX>\delta</LaTeX>, entonces la distancia vertical entre <LaTeX>f(x)</LaTeX> y <LaTeX>L</LaTeX> debe ser menor que <LaTeX>\varepsilon</LaTeX>. Eso se expresa como <LaTeX>{String.raw`0 < |x-c| < \delta \implies |f(x)-L| < \varepsilon`}</LaTeX>. Si se puede encontrar un <LaTeX>\delta</LaTeX> para cada <LaTeX>\varepsilon</LaTeX> de forma que eso se cumpla, entonces el límite existe.
        </p>
        <Definition concept="Límite">
            Sea <LaTeX>f</LaTeX> una función definida en el intervalo abierto <LaTeX>(a,b)</LaTeX>, aunque no necesariamente en el número <LaTeX>c \in (a,b)</LaTeX>.
            <p>
                El <em>límite</em> de <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX> existe y es igual a <LaTeX>L</LaTeX> si y solamente si para todo número real positivo <LaTeX>\varepsilon</LaTeX>, existe un número real positivo <LaTeX>\delta</LaTeX>, tal que para todo <LaTeX>x</LaTeX> en el dominio de <LaTeX>f</LaTeX>, si <LaTeX>x</LaTeX> está en el intervalo abierto <LaTeX>(c-\delta,c+\delta)</LaTeX> y es diferente de <LaTeX>c</LaTeX>, entonces <LaTeX>f(x)</LaTeX> está en el intervalo abierto <LaTeX>(L-\varepsilon,L+\varepsilon)</LaTeX>.</p>
            <p>

                Eso se puede expresar simbólicamente como:
                <LaTeX block>
                    {String.raw`\Big(\lim_{x \to c} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < \abs{x-c} < \delta \implies \abs{f(x)-L}<\varepsilon, \ \forall x \in \dom f\Big).`}
                </LaTeX>
            </p>
        </Definition>

        <Warning>
            A continuación, se presentan múltiples definiciones de distintos tipos de límites. Todas son esencialmente leves variaciones de la definición general de límite presentada arriba. Es crucial comprender la definición general antes de abordar las definiciones específicas.
        </Warning>

        <h3>Límites laterales</h3>

        <p>
            En el Ejemplo 1, se toman valores de <LaTeX>x</LaTeX> cercanos a <LaTeX>2</LaTeX> para mostrar que <LaTeX>{String.raw`\lim_{x \to 2}f(x)=0`}</LaTeX> para la función <LaTeX>f(x)=x-2</LaTeX>. Ahora, supóngase que se toman valores cercanos a <LaTeX>2</LaTeX>, pero solo mayores que <LaTeX>2</LaTeX>, o sea, a la derecha del <LaTeX>2</LaTeX> en la recta real. Posibles candidatos son <LaTeX>2.1</LaTeX>, <LaTeX>2.05</LaTeX> o cualquier valor arbitrariamente cercano a <LaTeX>2</LaTeX>. Evaluando esos valores en la función, se obtiene un resultado similar a antes, mas se concluye que el límite de <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> tiende a <LaTeX>2</LaTeX> por derecha es <LaTeX>0</LaTeX>.
        </p>
        <p>
            Si <LaTeX>f(x)</LaTeX> tiende a <LaTeX>L</LaTeX> a medida que <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX> y <LaTeX>{`x>c`}</LaTeX>, entonces <LaTeX>{String.raw`\lim_{x \to c^+} f(x) = L`}</LaTeX>. Eso refleja el comportamiento de la función <LaTeX>f</LaTeX> a la derecha de <LaTeX>c</LaTeX>.
        </p>
        <p>
            Para denotar la distancia entre <LaTeX>x</LaTeX> y <LaTeX>c</LaTeX> solo para los <LaTeX>x</LaTeX> que son mayores que <LaTeX>c</LaTeX> , se usa <LaTeX>{String.raw`0<x-c<\delta`}</LaTeX> en lugar de <LaTeX>{String.raw`0<|x-c|<\delta`}</LaTeX>. Ese es realmente el único cambio respecto a la definición general de límite.
        </p>

        <Definition concept="Límite lateral por derecha">
            Sea <LaTeX>f</LaTeX> una función definida en el intervalo abierto <LaTeX>(a,b)</LaTeX>, aunque no necesariamente en el número <LaTeX>c \in (a,b)</LaTeX>, el límite cuando <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX> por derecha se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to c^+} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < x-c < \delta \implies \abs{f(x)-L} < \varepsilon, \ \forall x \in \dom f\Big).`}
            </LaTeX>
        </Definition>

        <p>
            El <em>límite lateral por izquierda</em> de <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX> se define de forma análoga: es el valor al que tiende <LaTeX>f(x)</LaTeX> cuando <LaTeX>x</LaTeX> se acerca a <LaTeX>c</LaTeX>, pero solo desde la izquierda de <LaTeX>c</LaTeX>. La distancia se denota entonces por <LaTeX>{String.raw`0<c-x<\delta`}</LaTeX>, pues ahora se consideran solo los <LaTeX>x</LaTeX> menores que <LaTeX>c</LaTeX>.
        </p>

        <Definition concept="Límite lateral por izquierda">
            Sea <LaTeX>f</LaTeX> una función definida en el intervalo abierto <LaTeX>(a,b)</LaTeX>, aunque no necesariamente en el número <LaTeX>c \in (a,b)</LaTeX>, el límite cuando <LaTeX>x</LaTeX> tiende a <LaTeX>c</LaTeX> por izquierda se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to c^-} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<c-x<\delta \implies \abs{f(x)-L}<\varepsilon, \ \forall x \in \dom f \Big).`}
            </LaTeX>
        </Definition>

        <h3>Inexistencia del límite</h3>

        <p>
            Si los límites laterales de una función cuando se tiende al mismo valor no son iguales, el límite general no existe. Eso se debe a que el contorno de <LaTeX>c</LaTeX> no tiende hacia un mismo valor. Ocurre cuando hay saltos, o crecimientos o decrecimientos abruptos hacia el infinito o menos infinito.
        </p>

        {/* TODO: Completar esto o explicarlo un tal mejor */}

        <LaTeX block>
            {String.raw`\lim_{x \to c^-}f(x) \neq \lim_{x \to c^+}f(x) \implies \lim_{x\to c} f(x)  \text{ no existe.}`}
        </LaTeX>

        <h3>Límites al infinito</h3>

        <p>
            Hasta el momento, se han considerado límites en los que <LaTeX>x</LaTeX> tiende a un valor <LaTeX>{String.raw`c \in \mathbb{R}`}</LaTeX>. Sin embargo, también es posible estudiar límites en los que <LaTeX>x</LaTeX> tiende a infinito o menos infinito, denominados límites al infinito. En estos casos, se estudia el comportamiento de la función cuando <LaTeX>x</LaTeX> crece o decrece sin límite. Eso se denota por <LaTeX>{String.raw`\lim_{x \to \infty} f(x) = L`}</LaTeX> o <LaTeX>{String.raw`\lim_{x \to -\infty} f(x) = L`}</LaTeX>.
        </p>

        <p>
            El primer límite, que tiende al infinito, señala que <LaTeX>f(x)</LaTeX> se puede acercar a un valor <LaTeX>L</LaTeX> tanto como se quiera si se toman valores de <LaTeX>x</LaTeX> lo suficientemente grandes. Como formalización de eso, la definición establece que para cualquier distancia máxima <LaTeX>\varepsilon</LaTeX> entre <LaTeX>f(x)</LaTeX> y <LaTeX>L</LaTeX>, siempre se puede encontrar un mínimo número <LaTeX>N</LaTeX> tal que para todos los <LaTeX>x</LaTeX> a partir de <LaTeX>N</LaTeX>, la distancia entre <LaTeX>f(x)</LaTeX> y <LaTeX>L</LaTeX> es menor que <LaTeX>\varepsilon</LaTeX>.
        </p>
        <Definition concept="Límite al infinito positivo">
            Sea <LaTeX>f</LaTeX> una función definida en <LaTeX>(a, \infty)</LaTeX>, el límite cuando <LaTeX>x</LaTeX> tiende a <LaTeX>\infty</LaTeX> se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to \infty} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists N \in \mathbb{R} \colon x>N \implies \abs{f(x)-L}<\varepsilon\Big).`}
            </LaTeX>
        </Definition>
        <Tip>
            Nótese que, a diferencia de en las definiciones anteriores, en estas definiciones <LaTeX>N</LaTeX> no es necesariamente un número positivo, pues ya no representa una distancia, sino un valor mínimo o máximo para <LaTeX>x</LaTeX>.
        </Tip>
        <p>
            Similarmente, el límite que tiende a menos infinito indica que se puede acercar <LaTeX>f(x)</LaTeX> a un valor <LaTeX>L</LaTeX> tanto como se quiera si se toman valores de <LaTeX>x</LaTeX> lo suficientemente grandes, pero negativos. La definición es análoga, pero se consideran valores de <LaTeX>x</LaTeX> menores que <LaTeX>N</LaTeX>.
        </p>


        <Definition concept="Límite al infinito negativo">
            Sea <LaTeX>f</LaTeX> una función definida en <LaTeX>(-\infty, b)</LaTeX>, el límite cuando <LaTeX>x</LaTeX> tiende a <LaTeX>-\infty</LaTeX> se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to -\infty} f(x) = L\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists N \in \mathbb{R} \colon x<N \implies \abs{f(x)-L}<\varepsilon\Big).`}
            </LaTeX>
        </Definition>

        <h4>Asíntotas horizontales</h4>

        <p>
            La función <LaTeX>f</LaTeX> tendrá una <em>asíntota horizontal</em> <LaTeX>y=L</LaTeX> si cualquiera de los siguientes límites existe:
        </p>
        <ol>
            <li><LaTeX>{String.raw`\lim_{x \to \infty}f(x)= L`}</LaTeX></li>
            <li><LaTeX>{String.raw`\lim_{x \to -\infty}f(x)= L`}</LaTeX></li>
        </ol>
        <p>
            Es un comportamiento típico en funciones racionales. La gráfica de la función puede interceptar o cruzar la asíntota horizontal en algún punto. Sin embargo, a medida que <LaTeX>x</LaTeX> se torna muy grande (o muy pequeño, si el límite existente es el segundo), la función se acerca cada vez más a <LaTeX>L</LaTeX>, sin llegar a tomar nunca ese valor.
        </p>

        <h3>Límites infinitos</h3>

        <p>
            Los límites infinitos son todos aquellos que, al ser evaluados, son iguales a más o menos infinito, de la forma <LaTeX>{String.raw`\lim_{x \to c}f(x)=\infty`}</LaTeX> o <LaTeX>{String.raw`\lim_{x \to c}f(x)=-\infty`}</LaTeX>. En estos casos, la función <LaTeX>f(x)</LaTeX> crece o decrece sin límite a medida que <LaTeX>x</LaTeX> se acerca a <LaTeX>c</LaTeX>.
        </p>

        <p>
            La formalización de los límites infinitos es similar a la de los límites al infinito. El límite infinito positivo indica que si se toma un valor de <LaTeX>x</LaTeX> lo suficientemente cercano a <LaTeX>c</LaTeX>, entonces <LaTeX>f(x)</LaTeX> será tan grande como se quiera. Así pues, se estipula que para cualquier cota inferior <LaTeX>N</LaTeX>, por grande que sea, siempre se puede encontrar una distancia <LaTeX>\delta</LaTeX> tal que si <LaTeX>x</LaTeX> y <LaTeX>c</LaTeX> están a menos de esa distancia, entonces <LaTeX>f(x)</LaTeX> es mayor que <LaTeX>N</LaTeX>.
        </p>

        <Definition concept="Límite infinito positivo">
            Sea <LaTeX>f</LaTeX> una función definida en el intervalo abierto <LaTeX>(a,b)</LaTeX>, aunque no necesariamente en el número <LaTeX>c \in (a,b)</LaTeX>, el límite igual a más infinito se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to c} f(x) = \infty\Big) \iff \Big(\forall N \in \mathbb{R} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<\abs{x-c}<\delta \implies f(x)>N, \ \forall x \in \dom f \Big).`}
            </LaTeX>
        </Definition>

        <p>
            El límite infinito negativo es análogo, con la diferencia de que <LaTeX>f(x)</LaTeX> puede ser tan negativo como se quiera: siempre es menor que una cota superior <LaTeX>N</LaTeX> si <LaTeX>x</LaTeX> y <LaTeX>c</LaTeX> están a menos de una distancia <LaTeX>\delta</LaTeX> y esa distancia se puede encontrar para cualquier <LaTeX>N</LaTeX>.
        </p>

        <Definition concept="Límite infinito negativo">
            Sea <LaTeX>f</LaTeX> una función definida en el intervalo abierto <LaTeX>(a,b)</LaTeX>, aunque no necesariamente en el número <LaTeX>c \in (a,b)</LaTeX>, el límite igual a menos infinito se define como:
            <LaTeX block>
                {String.raw`\Big(\lim_{x \to c} f(x) = -\infty\Big) \iff \Big(\forall N \in \mathbb{R} \ \exists \delta \in \mathbb{R}_{>0} \colon 0<\abs{x-c}<\delta \implies f(x)<N, \ \forall x \in \dom f \Big).`}
            </LaTeX>
        </Definition>


        <h4>Asíntotas verticales</h4>
        <p>
            Similarmente a como sucede con las asíntotas horizontales, una función <LaTeX>f</LaTeX> tendrá una <em>asíntota vertical</em> <LaTeX>x=c</LaTeX> si cualquiera de los siguientes límites existe:
        </p>

        <ol>
            <li><LaTeX>{String.raw`\lim_{x \to c^+}f(x)= \infty`}</LaTeX></li>
            <li><LaTeX>{String.raw`\lim_{x \to c^+}f(x)= - \infty`}</LaTeX></li>
            <li><LaTeX>{String.raw`\lim_{x \to c^-}f(x)= \infty`}</LaTeX></li>
            <li><LaTeX>{String.raw`\lim_{x \to c^-}f(x)= - \infty`}</LaTeX></li>
        </ol>
        <p>

            Igual que antes, suele suceder en funciones racionales.
        </p>

        <h3>Continuidad</h3>

        <p>
            El concepto de continuidad se define formalmente mediante el uso de límites. Intuitivamente, una función es continua si no tiene cambios abruptos de valor. Gráficamente, es continua si su gráfica se puede realizar con un solo trazo. En términos más exactos, una función es continua si el límite de la función en un punto es igual a la imagen de la función en ese punto.
        </p>

        <Definition concept="Función continua">
            La función <LaTeX>f</LaTeX> es <em>continua</em> en el número <LaTeX>c</LaTeX> si:
            <LaTeX block>
                {String.raw`\lim_{x \to c} f(x) = f(c).`}
            </LaTeX>
        </Definition>

        <p>
            Si una función no es continua en un punto, se dice que es <em>discontinua</em> en ese punto. La discontinuidad puede deberse a varias razones y por ende ser de varios tipos, como se verá más adelante.
        </p>

        <Definition concept="Continuidad en un intervalo">
            La función <LaTeX>f</LaTeX> es continua en el intervalo abierto <LaTeX>(a,b)</LaTeX> si lo es en cada punto del intervalo.
        </Definition>
        <p>
            Si una función es continua en todos los valores de su dominio, se dice simplemente que es <em>continua</em>.
        </p>
        <p>
            Sean <LaTeX>f</LaTeX> y <LaTeX>g</LaTeX> funciones que son continuas en los valores <LaTeX>{String.raw`a, c \in \mathbb{R}`}</LaTeX>, entonces las siguientes funciones son continuas en <LaTeX>a</LaTeX>:
        </p>
        <ul>
            <li><LaTeX>{`f+g`}</LaTeX>.</li>
            <li><LaTeX>{`fg`}</LaTeX>.</li>
            <li><LaTeX>{`c \, f`}</LaTeX>.</li>
        </ul>
        <p>
            Si adicionalmente se cumple que <LaTeX>g(a)\neq 0</LaTeX>, entonces también es continua la función
        </p>
        <ul>
            <li><LaTeX>{`f/g`}</LaTeX>.</li>
        </ul>
        <p>
            La definición de continuidad implica que una función continua en un intervalo <LaTeX>(a,b)</LaTeX> tendrá que pasar no sólo por todos lo puntos en el eje <LaTeX>x</LaTeX> dentro de ese intervalo, sino también por todos los puntos en el eje <LaTeX>y</LaTeX> dentro del intervalo <LaTeX>(f(a),f(b))</LaTeX>. Eso se expresa formalmente mediante el <em>teorema del valor intermedio</em>.
        </p>
        <Theorem name="Teorema del valor intermedio">
            Dada una función <LaTeX>f</LaTeX> continua en el intervalo abierto <LaTeX>(a,b)</LaTeX>, para cualquier valor <LaTeX>M</LaTeX> entre <LaTeX>f(a)</LaTeX> y <LaTeX>f(b)</LaTeX>, existe un número <LaTeX>c \in (a,b)</LaTeX> tal que <LaTeX>f(c)=M</LaTeX>.
        </Theorem>

        <h4>Continuidad lateral</h4>
        <p>
            A partir de la definición de continuidad, se pueden establecer definiciones para la continuidad lateral.
        </p>
        <Definition concept="Continuidad por derecha">
            La función <LaTeX>f</LaTeX> es <em>continua por derecha</em> en el número <LaTeX>c</LaTeX> si:
            <LaTeX block>
                {String.raw`\lim_{x \to c^+} f(x) = f(c).`}
            </LaTeX>
        </Definition>

        <Definition concept="Continuidad por izquierda">
            La función <LaTeX>f</LaTeX> es <em>continua por izquierda</em> en el número <LaTeX>c</LaTeX> si:
            <LaTeX block>
                {String.raw`\lim_{x \to c^-} f(x) = f(c).`}
            </LaTeX>
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
            Sea <LaTeX>{`a \in \mathbb{R}`}</LaTeX> y sean <LaTeX>f</LaTeX> y <LaTeX>g</LaTeX> funciones definidas en un intervalo abierto que contiene a <LaTeX>c</LaTeX>. Si los límites <LaTeX>{`L = \lim_{x \to c}f(x)`}</LaTeX> y <LaTeX>{`M = \lim_{x \to c}g(x)`}</LaTeX> existen, entonces se cumplen las siguientes propiedades:
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
