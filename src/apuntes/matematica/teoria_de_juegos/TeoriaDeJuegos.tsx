import NoteDocument from "@/components/notes/NoteDocument";
import { Definition } from "@/components/notes/environments/Boxes";
import InlineDefinition from "@/components/notes/environments/InlineDefinition";

const TeoriaDeJuegos = () => (
    <NoteDocument>
        <h1>Teoría de Juegos</h1>
        {/* <h4>Prerrequisitos</h4>
<p>Esta clase podría ser un voltaje pero no lo es tanto. Podría incluir
cálculo y ecuaciones diferenciales pero no lo incluye.</p>
<p>Se necesita realmente saber un buen pedazo de Matemática Estructural,
lo básico de Probabilidad y una pizca de Álgebra Lineal. Toca saber:</p>
    <ul>
        <li>Manejar bien conjuntos, incluyendo relaciones, funciones,
            operaciones entre y sobre conjuntos y cuantificadores.</li>
        <li>Saber (formalmente) qué es una probabilidad, una distribución de
            probabilidad y ojalá un espacio de probabilidad.</li>
        <li>Pilotear vectores y matrices.</li>
        <li>Manejar notación matemática</li>
        <li>Ayuda saber (formalmente) qué es un grafo y un árbol.</li>
    </ul>*/}
        <h2>Introducción</h2>
        <p>
            La teoría de juegos en la rama de la matemática que estudia la interacción entre agentes en situaciones en
            las que los agentes compiten por incentivos y en las que las decisiones de cada agente afectan las ganancias
            del resto.
        </p>
        <h3>Definición de juego</h3>
        <p>
            En esta sección se expone qué se entiende por <em>juego</em> en la teoría de juegos, al igual que sus
            elementos y los tipos de juegos que existen.
        </p>
        <Definition concept="Juego">
            Un <em>juego</em> es un modelo matemático de una situación de toma interactiva de decisiones, en donde cada
            tomador de decisiones, denominado <em>jugador</em>, busca obtener el mejor resultado para sí, presumiendo
            que todos los jugadores intentan lo mismo.
        </Definition>
        <p>La teoría de juegos inició con los juegos de salón, que se componen de diversos elementos:</p>
        <ul>
            <li>
                <em>Jugadores</em> o <em>agentes</em>: Pueden ser empresas, animales, máquinas o cualquier ente con
                poder de decisión. La teoría de juegos presupone que todos los agentes toman decisiones racionales, con
                el propósito de obtener la mayor utilidad.
            </li>
            <li>
                <em>Reglas</em>: Cuándo, dónde y qué debe y puede hacer cada jugador en cada instante del juego.
            </li>
            <li>
                <em>Información</em>: La información que tienen los agentes para tomar una decisión racional. En
                ocasiones mucha, en otras poca.
            </li>
            <li>
                <em>Resultados</em>: La toma de decisiones, siguiendo las reglas, produce resultados. Se tienen
                resultados que son preferibles a otros. La decisión de cada jugador afecta los resultados de todos los
                jugadores.
            </li>
        </ul>
        <h3>Tipos de juegos</h3>
        <p>Los juegos se clasifican en tipos de acuerdo con tres de sus características:</p>
        <ol>
            <li>
                Qué <em>información</em> tienen los jugadores: En concreto:
                <ul>
                    <li>
                        Si los jugadores conocen todas decisiones tomadas por de los demás (
                        <a href="#juego_de_informacion_perfecta">juego de información perfecta</a>) o no.
                    </li>
                    <li>
                        Si los jugadores conocen todos los posibles pagos que puede dar el juego (
                        <a href="#juego_de_informacion_completa">juego de información completa</a>) o no.
                    </li>
                </ul>
            </li>
            <li>
                Cómo se relacionan las ganancias de los jugadores.
                <ul>
                    <li>
                        Si tienen intereses opuestos (<em>estrictamente competitivo</em>) o si muchos pueden ganar.
                    </li>
                </ul>
            </li>
            <li>
                Si los jugadores juegan individualmente (<a href="#juego_no_cooperativo">juego no cooperativo</a>) o
                están permitidas las coaliciones y es eso lo que es de interés (
                <a href="#juego_cooperativo">juego cooperativo</a>).
            </li>
        </ol>
        <p>
            Todos los juegos son de múltiples tipos, pues se clasifican por cada una de las características anteriores.
            Los juegos más simples son aquellos de información perfecta, completa, competitivos y no cooperativos. Se
            presume que todo juego es de ese tipo salvo que se diga lo contrario (i.e., si sobre un juego se dice
            únicamente que es de información imperfecta, entonces se debe supomer que es también de información
            completa, competitivo y no cooperativo).
        </p>
        <p>A continuación se ofrecen las definiciones formales de los tipos de juegos mencionados.</p>
        <Definition concept="Juego de información perfecta">
            Un juego es de <em>información perfecta</em> si cada jugador conoce:
            <ul>
                <li>Qué jugadores participan en el juego.</li>
                <li>Los posibles pagos que puede dar el juego.</li>
                <li>
                    Las decisiones que toma cada jugador. Adicionalmente, si ha habido intervención del azar, sabe cuál
                    fue el resultado.
                </li>
            </ul>
        </Definition>
        <p>
            Lo anterior implica que, al representar el juego en <a href="#forma_extensiva">forma extensiva</a>, en
            cualquier instante cada jugador conoce en qué nodo del árbol se encuentra. Dicho más formalmente, todos los{" "}
            <a href="#conjunto_de_informacion">conjuntos de información</a> son triviales: se componen de un solo nodo.
        </p>
        <InlineDefinition concept="Juego de información imperfecta">
            La mayoría de juegos no son así, suelen tener información oculta y contar con un componente de azar que los
            jugadores desconocen. A esos juegos, que no son de información perfecta, se les llama de{" "}
            <strong>información imperfecta</strong>.
        </InlineDefinition>
        <p>Si un juego es de información perfecta, entonces también es de información completa.</p>
        <Definition concept="Juego de información completa">
            Un juego es de <em>información completa</em> si cada jugador conoce los pagos que todos los jugadores
            podrían obtener en cada uno de sus perfiles estratégicos.
        </Definition>
        <p>
            Un juego puede ser de información completa pero imperfecta. En ese caso, los jugadores no conocen las
            decisiones tomadas por los demás jugadores.
        </p>
        <InlineDefinition concept="Juego de información incompleta">
            Si un juego no es de información completa, entonces es de <strong>información incompleta</strong> y al menos
            un jugador desconoce el pago que recibe algún otro jugador con algún perfil estratégico (i.e. en algún nodo
            terminal).
        </InlineDefinition>
        <p>Por último, un juego es estrictamente competitivo si los jugadores tienen intereses exactamente opuestos.</p>
        {/* <Definition concept="Juego (estrictamente) competitivo"> */}
        {/* <p>Formalmente: dado un juego de 2 jugadores, es <em>estrictamente
        competitivo</em> si para todo perfil estratégico $s \in S_1 \times S_2$
        se cumple que $$\begin{gathered} u_1(s) + u_2(s) =
        c\end{gathered}$$donde $c \in \mathbb{R}$ y $u_i$ es la función de
        utilidad correspondiente al iésimo jugador.</p>
    <h5>Juego de suma cero</h5>
    <p>Un juego estrictamente competitivo es de suma 0 si y solamente si
        $c=0$. <strong>Juego de suma cero</strong>: Lo que gana un jugador lo
        pierde el otro.$$\begin{gathered} u_1(s) + u_2(s) = 0\end{gathered}$$
        Los juegos de dos jugadores que tienen como resultado victoria de uno,
        victoria del otro o empate, son el ejemplo más común de juegosde suma
        0.</p>
    <h5>Juego combinatorio</h5>
    <p>Un juego es un <strong>juego combinatorio</strong> si tiene las
        siguientes características:</p>
    <ul>
        <li>Hay <strong>2</strong> jugadores: $N={1, 2}$.</li>
        <li>Los jugadores tienen <strong>información perfecta</strong> para
            decidir racionalmente.</li>
        <li>El conjunto de resultados es el siguiente: $O = {\text{gana I y
pierde II}, \text{gana II y pierde I}, \text{empate}}$ (por lo que es de
            suma cero).</li>
    </ul>
    <h4>Cooperación</h4>
    <h5>No cooperativo</h5>
    <p><strong>Juego no cooperativo</strong>: Todos los jugadores escogen su
        estrategia independientemente.</p>
    <ul>
        <li>Tiene reglas completas.</li>
        <li>Las unidades de decisión son los jugadores.</li>
        <li>No se permiten acuerdos entre jugadores (salvo los dados por las
            reglas del juego)</li>
    </ul>
    <h5>Cooperativo</h5>
    <p>[[Teoría de Juegos#Juegos cooperativos|Juegos cooperativos]]</p>
    <h3>Teoremas básicos</h3>
    <h4>Teorema de Zermelo</h4>
    <blockquote>
        <p>[!tip] Teorema de Zermelo En el juego del ajedrez, una y solamente
            una de lassiguientes afirmaciones es veraz:</p>
        <ul>
            <li>Las blancas tienen una estrategia ganadora.</li>
            <li>Las negras tienen una estrategia ganadora.</li>
            <li>Ambos tienen una estrategia que les garantiza por lo menos
                tablas.</li>
        </ul>
    </blockquote>
    <h5>Prueba por inducción sobre el árbol</h5>
    <p>Una primera alternativa de prueba, teórica, es tomar la forma
        extensiva del ajedrez y aplicar una típica prueba por inducción sobre el
        árbol.</p>
    <p>Eso además da un algoritmo para saber cuál de las afirmaciones es
        veraz del teorema (aunque para eso a día de hoy no se tiene la capacidad
        de cómputo).</p>
    <h5>Prueba lógica</h5>
    <p>Una segunda prueba utiliza las siguientes dos proposiciones
        verdaderas sobre cualquier predicado arbitrario $p(x)$:</p>
    <ol type="1">
        <li><p> “No existe elemento que cumpla $p(x)$” equivale a “Todo elemento
            incumple $p(x)$”: $$\neg \exists x \in X\colon p(x) \equiv \forall x \in
            X \colon \neg p(x).$$</p></li>
        <li><p> “No pasa que todo elemento cumple $p(x)$” equivale a “existe
            algún elemento que incumple $p(x)$”: $$\neg \left(\forall x \in X:
            p(x)\right) \equiv \exists x \in X\colon \neg p(x).$$ Con eso, sea $b_i$
            la iésima jugada de las blancas y $n_i$ la iésima movida de las negras,
            para cualquier $i \in \mathbb{N}$ finito (tan finito como la vida de los
            jugadores). Sea $2k$ el número finito máximo de turnos que puede tener
            el ajedrez (si tiene menos, considérese que en los últimos turnos no se
            cambia la posición ni el resultado). Si las blancas tienen una
            estrategia ganadora, existe un movimiento $b_1$, tal que para toda
            contestación de las negras $n_1$, hay un movimiento $b_2$, y así, tal
            que las blancas ganan: $$ \exists b_1 \forall n_1 \exists b_2 \forall
            n_2 \cdots \exists b_k \forall n_k\colon b \text{gana}.$$Si las blancas
            no tienen una estrategia ganadora, se niega: $$\neg(\exists b_1 \forall
            n_1 \exists b_2 \forall n_2 \cdots \exists b_k \forall n_k\colon b
            \text{gana}).$$Por las proposiciones lógicas expuestas al inicio de la
            prueba, la afirmación se reescribe como $$\forall b_1 \exists n_1
            \forall b_2 \exists n_2 \cdots \forall b_k \exists n_k\colon \neg(b
            \text{gana}).$$Nótese que esa afirmación formal se puede traducir como
            que las negras tienen una estrategia que garantiza como mínimo unempate:
            en cada turno, para todo movimiento de las blancas, las negras tienen un
            movimiento que hace que al final las blancas no ganen.</p></li>
    </ol>
    <p>Con eso, o las blancas tienen una estrategia ganadora, o la negras
        tienen como garantizar al menos un empate, y puede repetirse la prueba
        al contrario (presumiendo que las negras tienen una estrategia ganadora)
        para llegar a que una y solamente una de las afirmaciones del teorema
        hade cumplirse.</p>
    <h4>Teorema de Von Neumann</h4>
    <p>Es una generalización del de Zermelo, pero para juegos de suma 0 en
        donde se gana, pierde o empata.</p>
    <blockquote>
        <p>[!tip] Teorema de Von Neumann En todo juego que satisfaga las
            siguientes hipótesis:</p>
        <ul>
            <li>El juego es de información perfecta.</li>
            <li>El juego tiene dos jugadores.</li>
            <li>El juego es finito.</li>
            <li>El conjunto de posibles resultados es $O = {\text{Gana 1},
                \text{Gana 2}, \text{Empate}}$.</li>
        </ul>
        <p>Una y solamente una de las siguientes afirmaciones es veraz:</p>
        <ul>
            <li>El jugador 1 tiene una estrategia ganadora.</li>
            <li>El jugador 2 tiene una estrategia ganadora.</li>
            <li>Ambos jugadores tienen una estrategia que garantiza empate.</li>
        </ul>
    </blockquote>
    <h2>Teoría de la utilidad</h2>
    <p>En la definición de juego se establece que cada jugador busca el
        mejor resultado para sí. La teoría de utilidad busca formalizar la
        noción de cuál es el mejor resultado o la mayor ganancia para un jugador
        dado.</p>
    <h3>Función de utilidad</h3>
    <p>Para cada jugador $i$, si desea un resultado más que otro, tiene para
        él mayor <em>utilidad</em>. <strong>Función de utilidad</strong>: Para
        un jugador $i$, es una función $u_i$ que asocia a cada posible resultado
        $x \in O$ un número real que representa su <em>utilidad</em> comparado
        con el resto. $$u_i\colon O \to \mathbb{R}$$</p>
    <p>Es una función <strong>ordinal</strong>: los valores que asocia se
        usan únicamente para ordenar los resultados. Cada valor representa que
        el jugador desea ese resultado más que todos los menores y menos que
        todos los mayores, pero no tiene significado por sí mismo. No es una
        escala de qué tanto el jugador quiere ese resultado ni nada similar.</p>
    <p>Una función de utilidad $u_i = {(R_1, 25), (R_2, 150), (R_3, 1000)}$
        significa lo mismo que $u_i = {(R_1, 1), (R_2, 2), (R_3, 3)}$. En ese
        sentido, los valores se asignan arbitrariamente mientras preserven el
        orden.</p>
    <p>Una función de utilidad se asocia con una relación de preferencia
        (estricta o débil).</p>
    <p>Hay entonces infinitas funciones de utilidad asociadas con una
        relación de preferencia específica. Dada una función de utilidad $u_i$,
        se puede crear otra que dé el mismo orden a partir de una función
        $\phi\colon \mathbb{R}\to\mathbb{R}$ que sea estrictamente creciente,
        con composición $\phi \circ u_i$.</p>
    <p>No necesariamente existe una función de utilidad para representar una
        relación de preferencia dada. Existe si la relación es finita y
        numerable, $|\succsim | \leq \aleph_0$.</p>
    <h3>Relaciones de preferencia e indiferencia</h3>
    <p>Sea $O$ el conjunto de todos los posibles resultados de un juego.
        Para cada dos posibles resultados $x, y \in O$ un jugador puede tomar
        las siguientes posturas:</p>
    <ul>
        <li>Prefiere $x$ sobre $y$.</li>
        <li>Prefiere $y$ sobre $x$.</li>
        <li>Le es indiferente.</li>
    </ul>
    <p>Para formalizar eso se pueden usar relaciones de preferencia e
        indiferencia:</p>
    <ul>
        <li><strong>Preferencia estricta</strong>: $x\succ_i y$ denota que el
            jugador $i$ prefiere estrictamente a $x$ sobre $y$. $x$ le da más
            utilidad que $y$: $$x\succ_i y \ \iff \ u_i(x) &gt; u_i(y).$$</li>
        <li><strong>Indiferencia</strong>: $x\sim_i y$ denota que el jugador $i$
            es indiferente entre $x$ y $y$. Tanto $x$ como $y$ le dan la misma
            utilidad: $$ x\sim_i y \ \iff \ u_i(x) = u_i(y).$$</li>
        <li><strong>Preferencia (débil)</strong>: $x \succsim y$ denota que se
            prefiere débilmente a $x$ sobre $y$, es decir, o se prefiere $x$, o se
            es indiferente. $x$ da más o la misma utilidad que $y$: $$x \succsim y \
            \iff \ u_i(x) \geq u_i(y).$$</li>
    </ul>
    <p>Cabe mencionar: La <strong>preferencia estricta</strong> es un
        <strong>orden parcial estricto</strong>:</p>
    <ol type="1">
        <li><strong>Irreflexividad</strong> de $\succ_i$ Para todo $x\in O$,
            $(x, x) \notin \succ_i$, es decir $x \not\succ x$. Ningún resultado se
            prefiere sobre sí mismo.</li>
        <li><strong>Transitividad</strong> de $\succ_i$ Para toda tripla $(x, y,
            z) \in O^3$, si$x \succ_i y$ y $y \succ_i z$, entonces $x\succ_i z$. Si
            un resultado $x$ es preferible estrictamente que $y$, y ese a su vez que
            $z$, entonces $x$ es estrictamente preferible a $z$.</li>
    </ol>
    <p>La <strong>preferencia débil</strong> es un <strong>orden
        total</strong> (como lo es $\geq$):</p>
    <ul>
        <li><strong>Reflexividad</strong>: Si $x \in O$, $x \succsim x$. Un
            resultado se puede comparar consigo mismo y al jugador le da lo
            mismo.</li>
        <li><strong>Transitividad</strong>: Para toda tripla $(x, y, z) \in
            O^3$, si $x \succsim_i y$ y $y \succsim_i z$, entonces $x\succsim_i z$.
            Los jugadores son coherentes. Si un jugador prefiere que el juego acabe
            en $x$ a que resulte en $y$, y también prefiere el resultado $y$ al $z$,
            debe preferir, racionalmente, el resultado $x$ al $z$.</li>
        <li><strong>Antisimetría</strong>: Si $x \succsim_i y$ y $y \succsim_i
            x$, entonces$x \sim y$.</li>
        <li><strong>Totalidad</strong>: Para todo par $(x, y) \in O \times O$,
            sucede que o bien $x \succsim_i y$, o bien $y \succsim_i x$, o ambas ($x
            \sim y$). Todo par de elementos es comparable. Para todo jugador,
            siempre es posible comparar cualquiera dos posibles resultados de un
            juego entre sí.</li>
    </ul>
    <p>A partir de la relación de preferencia débil: <strong>Problema de
        decisión</strong>: Sea $A$ un conjunto de posibles alternativas y
        $\succsim$ una relación binaria completa, transitiva y reflexiva, un
        <em>problema de decisión</em> es un par $(A, \succsim)$.</p>
    <h2>Representación de juegos</h2>
    <p>Hay dos formas principales de representar un juego: la forma
        extensiva, el juego representado como un árbol, y la forma estratégica o
        normal, el juego representado con matrices.</p>
    <h3>Forma extensiva</h3>
    <p>Un juego en forma extensiva se representa como un árbol, que
        representa</p>
    <ul>
        <li>Situaciones del juego</li>
        <li>Jugadores</li>
        <li>Sus posibles acciones</li>
        <li>Sus posibles utilidades</li>
    </ul>
    <p>Antes de definir formalmente la forma extensiva, se definen los
        conceptos de posición y situación.</p>
    <h4>Posiciones y situaciones</h4>
    <h5>Posición</h5>
    <p>Sea $x$ una <strong>posición</strong> del juego.</p>
    <ul>
        <li>En un juego de salón, una determinada configuración del tablero:
            para cada pieza o elemento del juego, su identidad y la casilla en la
            que se encuentra. Se define $X$ como el conjunto de posibles posiciones.
            Una posición no indica cómo se llegó a ella, pueden haber varias formas
            de llegar a una misma posición.</li>
    </ul>
    <h5>Situación</h5>
    <p>Una <em>situación de juego</em> es una secuencia finita $x_0, x_1,
        \ldots, x_k$ de posiciones $x_i \in X$ tal que</p>
    <ul>
        <li>$x_0$ es la posición inicial del juego.</li>
        <li>Para todo $x_i$, si $i$ es par y menor que $k$, $\forall x_i |
            (\exists m \in \mathbb{N} | i = 2m) \land i &lt; k$, es posible pasar de
            $x_i$ a $x_{i + 1}$ mediante un movimiento legal del jugador 1.</li>
        <li>Para todo $x_i$, si $i$ es impar y menor que $k$, $\forall x_i |
            (\exists m \in \mathbb{N} | i = 2m+1) \land i &lt; k$, es posible pasar
            de $x_i$ a $x_{i + 1}$ mediante un movimiento legal del jugador 2.</li>
    </ul>
    <p>Se denota el conjunto de posibles situaciones por $H$.</p>
    <h4>Definición de forma extensiva</h4>
    <h5>Recordatorio: árbol</h5>
    <p>Recuérdese que un árbol es un grafo dirigido, simple, no ponderado y
        acíclico, que formalmente se representa como una tupla $(x_0, V, E)$,
        donde $x_0$ es el vértice inicial, $V$ es el conjunto de vértices, $V =
        {x_0, x_1,\ldots,x_n}$ y $E \subseteq V \times V$ es el conjunto de
        ejes, cada uno de los cuales es una tupla con dos vértices: los dos que
        conecta.</p>
    <h5>Definición</h5>
    <p>Un juego en forma extensiva es formalmente una 7-tupla, que contiene
        el árbol y otros aspectos del juego.</p>
    <p>Un <em>juego en forma extensiva</em> es un vector ordenado $$\Gamma =
        (N, V, E, x_0, (V_i)_{i \in N}, O, u)$$ donde</p>
    <ul>
        <li>$N$ es un conjunto finito de jugadores. Para un juego de $n$
            jugadores, $N = {1, 2, \ldots, n}$.</li>
        <li>$(V, E, x_0)$ es el árbol de juego:</li>
        <li>  $V$ es el conjunto de vértices, cada uno de los cuales representa
            una posición del juego.</li>
        <li>  $x_0$ es la posición inicial.</li>
        <li>  $E \subseteq V \times V$ es el conjunto de arcos, cada uno de los
            cuáles representa la acción de algún jugador (o del azar).</li>
    </ul>
    <p>Existe notación relacionada a los vértices:</p>
    <ul>
        <li>La función $C\colon V \to \mathcal{P}(V)$ asigna a cada vértice el
            conjunto de sus vértices hijos. Se denota el conjunto de vértices hijos
            de $x$ con $C(x)$ (<em>children</em>).</li>
        <li>La función $A\colon V \to \mathcal{P}(E)$ asigna a cada vértice el
            conjunto de ejes que lo conectan con sus hijos. Es decir, el conjunto de
            todas las acciones permitidas desde el nodo $x$ se denota por $A(x)$
            (<em>actions</em>).</li>
        <li>$(V_i)<em>{i \in N}$ es una partición de $V$ con los vértices que no
            son hojas. Tiene tantos conjuntos como jugadores, cada uno con los
            vértices de decisión del jugador respectivo. El conjunto $V</em>{j}$
            tiene los vértices $x$ que no son hojas y en los que el jugador $j$ es
            quien toma la decisión, quien tiene el turno.
            <ul>
                <li>Recuérdese que una partición de un conjunto son subconjuntos cuya
                    unión da el conjunto completo y cuya intersección es vacía.</li>
            </ul></li>
        <li>La función $J\colon V\to N$ asigna a cada vértice que no es una hoja
            el jugador que tiene el turno. E.g: $J(v_{23}) = 1$.</li>
        <li>$O$ es el conjunto de posibles resultados del juego.</li>
        <li>$u$ es una función que asocia cada hoja del árbol con un posible
            resultado del juego, $o \in O$.</li>
    </ul>
    <h5>Jugada</h5>
    <p>Así pues, un juego en forma extensiva transcurre de la siguiente
        forma:</p>
    <ul>
        <li>El jugador $J(x_0)$ inicia el juego con una acción $a \in A(x_0)$,
            que lleva a una posición $x_1 \in C(x_0)$.</li>
        <li>Si $x_1$ no es una hoja, el jugador $J(x_1)$ elige una acción $a \in
            A(x_1)$ que lleva a una posición $x_2 \in C(x_1)$.</li>
        <li>Se sigue ese proceso hasta que la posición $x_n \in C(x_{n - 1})$ sea
            una hoja. El juego termina con resultado $u(x_n)$.</li>
    </ul>
    <p>Al modelar el juego en forma extensiva, en cada hoja del árbol se da
        el resultado de una jugada.</p>
    <p>Una <em>jugada</em> es una rama específica del árbol, un único camino
        desde la raíz $x_0$ hasta una hoja $x_k \in Z$.</p>
    <p>Al graficar el árbol, se deben escribir en el árbol los siguientes
        elementos:</p>
    <ul>
        <li>En frente de cada hoja del árbol, se escribe la tupla $(u_1,
            u_2,\ldots,u_n)$ con las utilidades que obtiene cada jugador si se juega
            esa jugada.</li>
        <li>Se debe especificar qué jugador decide en cada vértice, con el
            número del jugador.</li>
        <li>En los juegos de azar, el azar se modela también como un jugador,
            usualmente el jugador 0. Los ejes que son acciones del azar están cada
            uno asociado a una probabilidad $0\leq p\leq 1$, de forma que la suma de
            las probabilidades sume 1.</li>
    </ul>
    <h4>Información imperfecta</h4>
    <p>Es posible representar juegos de información imperfecta en forma
        extensiva. Una línea punteada entre dos nodos del árbol representa un
        <em>conjunto de información</em>. Significa que el jugador que toma la
        decisión en esos dos nodos no tiene la información para distinguirlos
        entre sí: no sabe en qué punto del árbol está, en cuál de los nodos del
        conjunto de información se encuentra, porque no conoce las decisiones
        previas (no sabe qué rama del árbol se tomó. Podría ser cualquiera que
        lleve a uno de los nodos del conjunto de decisión).</p>
    <p>Si $x$ hace parte del conjunto de información $H_i$, todo lo que el
        jugador $i$ sabe es que la jugada llegó a alguno de los vértices de
        $H_i$. El jugador entonces no puede elegir un eje particular que salga
        de $x$: escoge una acción de las que están disponibles al conjunto. Los
        conjuntos de información conforman una partición del árbol y por ende
        son disjuntos entre sí: ningún vértice pertenece a dos conjuntos de
        información.</p>
    <p>Si todos los conjuntos de información tienen un solo vértice (se
        denominan triviales), el juego es de información perfecta.</p>
    <p>En un juego con información imperfecta, un subárbol es un
        <em>subjuego</em> si y solamente si alguno de sus vértices pertenece a
        un conjunto de información no trivial (que contiene más de un vértice),
        entonces el conjunto de información está contenido por completo en el
        subárbol.</p>
    <h4>Subjuegos</h4>
    <p>Dado un juego $G$ en forma extensiva, un <strong>subjuego</strong>
        con raíz en $x$, denotado $\Gamma(x)$ es la restricción de $G$ a $x$ y
        sus descendientes. Es decir: el árbol a partir de $x$.</p>
    <p>El conjunto de todos los posibles subjuegos de G tiene como elementos
        el subjuego con raíz en cada nodo de G. Eso icluye tanto el juego
        completo, que es también un subjuego, como las hojas, que son subjuegos
        de un elemento.</p>
    <h5>Subjuegos con información imperfecta</h5>
    <p>Dado un juego con información imperfecta (i.e: conjuntos de
        información no triviales) para que un subárbol sea subjuego, o no debe
        tener nodos en conjuntos de información o el conjunto de información
        debe estar contenido completamente por el árbol.</p>
    <p>Formalmente: $\Gamma(x)$ es subjuego de $\Gamma$ si y solamente si
        para todo jugador $j \in N$ y para todo conjunto de información $(H_j,
        A(H_j))$, el conjunto $H_j$ está:</p>
    <ul>
        <li>O bien contenido completamente por el subárbol, $H_j \subseteq
            \Gamma(x)$.</li>
        <li>O bien es disjunto del subárbol, $H_j \cap \Gamma(x) =
            \varnothing$.</li>
    </ul>
    <h3>Forma normal o estratégica</h3>
    <p>Un juego en forma normal se representa como una matriz. La
        representación es más simple que la forma extensiva y consta de menos
        información, únicamente los jugadores, sus estrategias y sus
        utilidades.</p>
    <p>Antes de definir formalmente la forma estratégica, se definen los
        conceptos de estrategia y perfil estratégico.</p>
    <h4>Estrategias puras y perfiles estratégicos puros</h4>
    <h5>Estrategia pura</h5>
    <p>Una estrategia es un plan de juego completo para un jugador.
        Determina qué acción tomar en cada posición de juego en la que el
        jugador toma una decisión.</p>
    <p>Dado un juego en forma extensiva, una <strong>estrategia
        pura</strong> para un jugador $j$ es una <strong>función</strong> $s_j$
        que asigna a cada vértice de decisión de ese jugador $x \in V_j$ una
        acción en $A(x)$, que conduce a una posición legal de $C(x)$. Para cada
        nodo $x \in V_j$, en el que el jugador $i$ toma una decisión, la
        estrategia determina qué eje $s_j(x) = (x,y)\in A(x)$ elegir, y por ende
        a qué vértice hijo $v \in C(x)$ ir.</p>
    <p>Si un jugador tiene k nodos de decisión, cada estrategia será un
        conjunto con $k$ elementos (recordando que una función es un conjunto de
        tuplas, en este caso cada tupla es un vértice y un eje, de foma $(x, (x,
        y))$).</p>
    <p>Algo que puede ser contraintuitivo: Se define la función para todas
        las posibles situaciones del juego en la que el jugador puede tomar una
        decisión. Cuando se usa la función con el juego ya avanzado, se siguen
        contemplando todos los nodos de decisión, inclusive algunos que ya no
        pueden ocurrir.</p>
    <h5>Perfil estratégico puro</h5>
    <p>Un perfil estratégico puro es un vector de estrategias con una
        estrategia pura para cada jugador:$s = (s_1, s_2, \ldots, s_n) =
        (s_i)<em>{i \in N} \in S_1 \times S_2 \times \cdots \times S_n =
            \prod</em>{i = 1}^{n}S_i.$ Se usa mucho la notación $s_{-i}$, que
        representa un perfil estratégico sin estrategia de $i$, o sea una tupla
        con la estrategia que usa cada jugador, excepto $i$.</p>
    <p>Un perfil estratégico puro define completamente una jugada en todo
        juego sin movimientos de azar, porque da qué estrategia usa cada
        jugador.</p>
    <p>Observaciones:</p>
    <ul>
        <li>No se pueden deshacer movimientos en juegos de forma extensiva. Si
            se vuelve a una posición que ya había ocurrido, formalmente se toma como
            una posición distinta.</li>
        <li>En los juegos con movimientos aleatorios, en los nodos donde juega
            el azar se implementa una lotería para decidir. Por ende, el perfil de
            estrategias puras determina una distribución de probabilidad sobre los
            resultados.</li>
    </ul>
    <h6>Estrategia ganadora</h6>
    <p>Una estrategia $s_i$ es una <em>estrategia ganadora</em> para el
        jugador $i$ si para todo perfil estratégico que contiene a $s_i$, la
        jugada determinada por ese perfil estratégico termina en victoria de
        $i$.</p>
    <p>Análogamente se puede definir una estrategia que garantiza como
        mínimo empate.</p>
    <h4>Definición de forma normal</h4>
    <p>Todo juego en forma extensiva (árbol) se puede definir en forma
        normal (matriz). A cada juego definido en forma extensiva le corresponde
        específicamente un juego definido en forma normal.</p>
    <p>Un juego en forma <em>estratégica</em> o <em>normal</em> es una tupla
        $G = (N, S, u)$, donde:</p>
    <ul>
        <li>$N$ es el conjunto finito de jugadores, $N = {1, 2,\ldots, n}$ para
            un juego de $n$ jugadores.</li>
        <li>$S$ es el conjunto de todos los posibles perfiles estratégicos, dado
            por el producto cartesiano de los conjuntos de estrategias puras de cada
            jugador: $S = S_1\times S_2\times \cdots \times S_n$.</li>
        <li>$u = (u_i)_{i\in N} = (u_1, u_2, \cdots , u_n)\colon S \to
            \mathbb{R}^n$ es la función de utilidad esperada. Define una función de
            utilidad $u_i$ para cada jugador, que asigna a cada perfil estratégico
            $s \in S$ un pago $u_i(s)$.</li>
    </ul>
    <p>Es interesante notar que para cualquier jugador $k$, la función
        deutilidad $u_k$ está en función de un perfil estratégico $s \in S$, no
        de alguna estrategia $s_k$ del jugador. Esto indica que la ganancia de
        cada jugador depende tanto de su propia estrategia como de las
        estrategias usadas por los demás.</p>
    <p>Un juego en forma normal solo es infinito si el conjunto de perfiles
        estratégicos $S$ tiene cardinalidad no finita.</p>
    <h5>Juegos matriciales</h5>
    <p>Los juegos en forma estratégica se denominan <em>juegos
        matriciales</em> porque pueden ser representados por una matriz. La
        matriz es de dimensión $n$ y los elementos son $n$-tuplas, cada una con
        los pagos que corresponden acada jugador.</p>
    <p>Si $n=2$ el juego se denomina bimatricial. Se tiene una matriz cuyas
        filas representan las estrategias del Jugador 1 y cuyas columnas
        representan las estrategias del Jugador 2, con cada elemento una tupla
        $(u_1(s), u_2(s))$, que muestra la utilidad de 1 y la utilidad de 2 con
        el perfil estratégico $s = (s_1, s_2)$ dada por la casilla.</p>
    <p>El juego $$\begin{matrix} &amp; s_2^1 &amp; s_2^2\ s_1^1&amp; a,b
        &amp; c,d\ s_1^2 &amp; d,e &amp; f,g\ \end{matrix}$$ Representa que la
        estrategia $s_1^1$, la primera estrategia del jugador 1, tiene como pago
        $a$ si 2 juega $s_2^1$ y tiene como pago $c$ si 2 juega $s_2^2$.
        Ejemplos de resultados de las funciones de utilidad $u_1(s_1^1, s_2^1) =
        a$, $u_2(s_1^2, s_2^1) = e$.</p>
    <h2>Conceptos de solución</h2>
    <p>Habiendo descrito un juego en forma normal o extensiva, se busca
        predecir qué puede pasar, un posible resultado, presumiendo
        comportamiento racional de los jugadores.</p>
    <p><strong>Concepto de solución</strong>: Método matemático que busca
        predecir cual sería el resultado de un juego bajo ciertas premisas (e.g:
        los jugadores son racionales).</p>
    <p>A continuación expongo no solo los conceptos de solución sino todo lo
        que se necesita para entenderlos.</p>
    <p>Los conceptos de solución como tal son:</p>
    <ul>
        <li>Equilibrio de Nash</li>
        <li>Equilibrio perfecto en subjuegos</li>
        <li>Maxmin</li>
    </ul>
    <h3>Dominación</h3>
    <h4>Dominación estricta</h4>
    <p>Una estrategia de un jugador es estrictamente <em>dominada</em> si el
        jugador tiene a su disposición alguna otra que sea siempre mejor,
        independientemente de las estrategias de los demás jugadores.</p>
    <p>Una estrategia del iésimo jugador $s_i \in S_i$ está
        <em>estrictamente dominada</em> si existe otra $t_i \in S_i$ tal que
        siempre tiene mayor utilidad, independientemente de las estrategias de
        los demás jugadores. Sea $s{-i}$ un perfil estratégico sin el jugador
        $i$, o sea$s_{-i} = (s_1,s_2,\ldots,s_{i - 1},s_{i + 1},\ldots,s_n)$. Para
        todo$s_{-i}$ sucede que $$u_i(s_i, s_{-i}) &lt; u_i(t_i, s_{-i})$$</p>
    <p>Una estrategia de un jugador es estrictamente <em>dominante</em> si
        independientemente de las estrategias de los demás siempre es su mejor
        opción.</p>
    <p>Una estrategia del iésimo jugador $s_i \in S_i$ es <em>estrictamente
        dominante</em> si siempre tiene mayor utilidad que todas las demás
        estrategias $t_i \in S_i$: $$u_i(s_i, s_{-i}) &gt; u_i(t_i, s_{-i})$$ Es
        fácil ver que un jugador solo puede tener una estrategia estrictamente
        dominante.</p>
    <h5>Notación</h5>
    <p>Se denota la $i$-ésima estrategia del jugador $j$ como $s_j^i$.</p>
    <p>Dado un juego bimatricial $$\begin{matrix} &amp; s_2^1 &amp; s_2^2\
        s_1^1&amp; a,b &amp; c,d\ s_1^2 &amp; d,e &amp; f,g\ \end{matrix}$$
        $s_2^1 \succ s_2^2$ ($s_2^1$ domina estrictamente a $s_2^2$) si y solo
        si $b&gt;d$ (el caso en el que el jugador 1 juega $s_1^1$) y $e&gt;g$
        (el caso en el que el jugador 1 juega $s_1^2$).</p>
    <h4>Dominación (débil)</h4>
    <p>Cuando se habla de dominación, sin más, se refiere a débil. Es lo
        mismo que la anterior pero con $\geq$ en vez de $&gt;$.</p>
    <p>La dominación estricta (obviamente) implica dominación débil.</p>
    <h3>Estrategias mixtas</h3>
    <p>El azar se modela como un jugador más, que tiene una probabilidad de
        elegir entre los vértices que tiene disponibles (hijos). Las
        probabilidades deben sumar 1 en cada vértice donde el azar.</p>
    <p>Una <em>estrategia mixta</em> del jugador $i$ es una distribución de
        probabilidad sobre el conjunto de estrategias puras de un
        jugador,$$\sigma_i\colon Si \to [0,1]\subset \mathbb{R}$$es decir, una
        función que asigna a cada estrategia pura una probabilidad de ser
        utilizada (y deben sumar 1 las probabilidades que asigna). Para que
        $\sigma_i$ dé una probabilidad válida,$\displaystyle\sum_{s_i \in
S_i}\sigma_i(s_i) = 1$.</p>
    <p>Una estrategia pura $s_i$ es una estrategia mixta degenerada, en la
        que la probabilidad de elegir esa estrategia pura es 1, $\sigma(s_i) =
        1$ y la de elegir las demás es 0, $\sigma(s_j) = 0$ para todo $j\neq
        i$.</p>
    <p>Una estrategia mixta $\sigma_i$ del jugador $i$ es <em>completamente
        mixta</em> si siempre asigna una probabilidad positiva, no nula, a usar
        cada estrategia,$$\sigma_i(s_i) &gt; 0, \quad \forall s_i \in S_i-$$</p>
    <h4>Simplex</h4>
    <p>Se denota $\Delta S_i$ el conjunto de distribuciones de probabilidad
        sobre $S_i$ (el conjunto de estrategias del jugador $i$), que es un
        <em>simplex</em> sobre el conjunto de estrategias del jugador $i$,
        $S_i$. Es decir, $\Delta S_i$ es el <em>conjunto de estrategias
            mixtas</em> del jugador $i$: $$\Delta S_i = \left{\sigma\colon S_i \to
        [0,1] \Bigg| \sum_{s_i \in S_i}\sigma(s_i) = 1\right}.$$ Si todos y cada
        uno de los jugadores aleatorizan su conjunto de estrategias puras, por
        ejemplo deciden cada turno usando un dado no necesariamente justo, cada
        uno con una estrategia mixta $\sigma_i$, las utilidades sobre las
        estrategias mixtas se pueden definir como$$u_i(\sigma_1,
        \sigma_2,\ldots,\sigma_n) = \sum_{s \in S}
        \sigma_1(s_1)\sigma_2(s_2)\cdots\sigma_n(s_n)u_i(s).$$</p>
    <h4>Purificación</h4>
    <p>Un jugador modela el comportamiento de otro con estrategias mixtas,
        así el otro esté jugando con puras.</p>
    <p>Ahora, realmente no se necesita que los jugadores decidan
        aleatoriamente para usar estrategias mixtas. Si el jugador $1$ no sabe
        qué jugará el jugador $2$, puede modelar su comportamiento con una
        estrategia mixta, incluso si realmente el jugador $1$ está siguiendo una
        estrategia pura con información que $2$ no tiene. Si $1$ no sabe, se
        puede justificar una estratega de equilibrio mixta. Este raciocinio de
        justificación se denomina purificación.</p>
    <h4>Extensión mixta</h4>
    <p>La <em>extensión mixta</em> de un juego en forma estratégica es el
        mismo juego pero con una función de utilidad para cada jugador
        $U_i\colon \Delta S\to \mathbb{R}$ que asocia todo perfil de estrategias
        mixtas $\sigma = (\sigma_1, \sigma_2,\ldots, \sigma_n) \in \Delta S =
        \Delta S_1 \times \Delta S_2 \times \cdots \Delta S_n$con el pago $$
        U_i(\sigma) = E_\sigma(U_i(\sigma)) = \sum_{s \in S} \prod_{j = 1}^n
        \sigma_j(s_j) \cdot u_i(s)$$ ¡Nótese que es el valor esperado! Cada
        utilidad, por la probabilidad de que ocurra.</p>
    <h4>Dominación para estrategias mixtas</h4>
    <p>Las definiciones de dominación (estricta y débil) para estrategias
        mixtas son generalizaciones de las definiciones para estrategias puras
        (teniendo en cuenta que una estrategia pura es una estrategia mixta
        degenerada). En particular:  </p>
    <ul>
        <li><p>Una estrategia mixta $\sigma_i \in \Delta S_i$ está
            <em>estrictamente dominada</em> si <em>existe</em> otra estrategia mixta
            $\hat{\sigma}<em>i \in \Delta S_i$ tal que para todo $s</em>{-i} \in
            S_{-i}$,$$u(\hat{\sigma}<em>i, s</em>{-i}) &gt; u(\sigma_i,
            s_{-i}).$$</p></li>
        <li><p>Está <em>débilmente dominada</em> si $u(\hat{\sigma}<em>i,
            s</em>{-i}) \geq u(\sigma_i, s_{-i}) .$</p></li>
        <li><p>Una estrategia mixta $\sigma_i \in \Delta S_i$ es
            <em>estrictamente dominante</em> si <em>para toda</em> otra estrategia
            mixta $\hat{\sigma}<em>i \in \Delta S_i$ sucede que para todo
                $s</em>{-i} \in S_{-i}$,$$u(\sigma_i, s_{-i}) &gt; u(\hat{\sigma_i},
            s_{-i}).$$</p></li>
        <li><p>  Está <em>débilmente dominante</em> si $u(\sigma_i, s_{-i}) \geq
            u(\hat{\sigma_i}, s_{-i}) .$</p></li>
    </ul>
    <h3>Eliminación y equilibrio de Nash</h3>
    <h4>Eliminación iterativa</h4>
    <h5>Eliminación de estrategias estrictamente dominadas</h5>
    <p>Si se sabe que una estrategia es estrictamente dominada, se presume
        que el jugador no la va a usar.</p>
    <p>Conceptos de solución: <strong>Hipótesis 1</strong>: Un jugador
        racional no juega una estrategia <em>estrictamente</em> dominada.
        <strong>Hipótesis 2</strong>: Todos los jugadores son racionales.
        <strong>Hipótesis 3:</strong> La hipótesis 2 es de conocimiento común
        (todos la saben).</p>
    <p>Agarro la matriz, y si una estrategia es estrictamente dominada, la
        tacho. Reduzco la matriz.</p>
    <p>Da siempre lo mismo:</p>
    <blockquote>
        <p>[!tip] Teorema Aplicar el proceso de eliminación iterativa de
            estrategias estrictamente dominadas da la misma matriz reducida,
            independiente del orden de eliminación.</p>
    </blockquote>
    <h5>De estrategias (débilmente) dominadas</h5>
    <p><strong>Hipótesis 4 (hipótesis de racionalidad)</strong>: Un jugador
        racional no juega una estrategia (<em>débilmente</em>) dominada. (Igual
        que la Hipótesis 1, pero con débiles en vez de estrictas)</p>
    <p>La hipótesis de racionalidad no justifica la eliminación de
        estrategias débilmente dominadas (un jugador podría solo tener
        estrategias débilmente dominadas para jugar, o podría conocer el perfil
        estratégico de otros jugadores)</p>
    <p>A veces si el juego es re denso, se pueden eliminar estrategias
        débilmente dominadas, pero mejor no, porque dependiendo del orden de
        eliminación, <strong>sí cambia</strong> la matriz reducida.</p>
    <p>Sea $s_i = (s_1, s_2,...,s_n)$ un equilibrio de Nash, no
        necesariamente las estrategias que lo componen, $s_1, s_2...$ sobreviven
        al proceso de eliminación iterativa de estrategias débilmente
        dominadadas.</p>
    <h4>Equilibrio de Nash</h4>
    <p>Un perfil estratégico es un <strong>equilibrio de Nash</strong> si es
        <strong>débilmente dominante</strong> (sobre el resto de perfiles).</p>
    <p>Formalmente: Un perfil estratégico $s = (s_1, s_2, \ldots, s_n)$ es
        un <em>equilibrio de Nash</em> si para todo jugador $i \in N$ para toda
        estrategia suya $s_i \in S_i$, se cumple que $$u_i(s) \geq u_i(s_i,
        s_{-i}).$$Es decir: todo jugador obtiene más o la misma utilidad si los
        jugadores juegan con el equilibrio de Nash que si se juega con cualquier
        otro perfil estratégico. (Esa es la gracia del equilibrio de Nash!)</p>
    <p>Nótese que:</p>
    <ul>
        <li>Como es débilmente dominante, $\geq$, pueden haber múltiples
            equilibrios de Nash.</li>
        <li>En estrategias puras, puede pasar que no exista un equilibrio de
            Nash, porque puede pasar que ningún perfil estratégico sea débilmente
            dominante.</li>
    </ul>
    <p>Si el espacio de perfiles estratégicos $S$ no es convexo, no hay un
        equilibrio de Nash en estrategias puras. Eso obliga a buscar un
        equilibrio de Nash en estrategias mixtas, que (para jugadores finitos y
        estrategias puras finitas) siempre existe.</p>
    <p>Para perfiles estratégicos mixtos la definición es análoga: Un perfil
        estratégico $\sigma = (\sigma_1, \sigma_2, \ldots, \sigma_n)$ es un
        <em>equilibrio de Nash</em> en estrategias mixtas si para todo jugador
        $i \in N$ y para toda estrategia mixta suya $\sigma_i \in \Delta S_i$,
        se cumple que $$u_i(\sigma) \geq u_i(\sigma_i, \sigma_{-i}).$$</p>
    <blockquote>
        <p>[!tip] Teorema de Nash Todo juego en forma estratégica, con un número
            finito de jugadores, cada uno con un número finito de estrategias puras,
            tiene un equilibrio de Nash en estrategias mixtas.</p>
    </blockquote>
    <p>Un resultado que se conocía 22 años antes es el teorema de Von
        Neumann (1928): todo juego de suma 0, con jugadores finitos cada uno con
        estrategias puras finitas, tiene <strong>valor en estrategias
            mixtas</strong>.</p>
    <h5>Conceptos relacionados</h5>
    <p>Hay algunos conceptos o definiciones relacionadas con equilibrios de
        Nash.</p>
    <h6>Desviación beneficiosa</h6>
    <p>Una <strong>desviación beneficiosa</strong> del jugador $j$ es una
        <strong>estrategia</strong> $s_j$ tal que, con relación a un perfil
        estratégico $s$ específico, tomar esa estrategia mejora la utilidad para
        $j$ en comparación a usar ese perfil estratégico: $$u_{j}(s_{j}, s_{-j})
        &gt; u_j(s)$$</p>
    <p>Con base en eso se da otra definición de equilibrio de Nash: Un
        equilibrio de Nash es un perfil estratégico $s \in S$ en el cual ningún
        jugador tiene una desviación (unilateral) beneficiosa con relación a
        $s$. Ningún jugador podría tomar otra estrategia y tener mejor utilidad
        que la dada por el equilibrio de Nash.</p>
    <h6>Mejor respuesta</h6>
    <p>La estrategia $s_i^1 \in S_i$ es la mejor respuesta al perfil
        estratégico $s_{-i}$ (perfil estratégico sin estrategias de $i$), si da
        más o la misma utilidad que usar cualquier otra estrategia: $$u_i(s_i,
        s_{-i}) \geq u_i(t_i, s_{-i}), \quad \forall t_i \in S_i$$Nótese que
        para un jugador pueden haber varias.</p>
    <p>Una vez más, con eso se tiene otra definición de equilibrio de Nash:
        El perfil estratégico $s = (s_1, s_2, \ldots, s_n)$ es un equilibrio de
        Nash si para todo jugador $i \in N$ , una posible mejor respuesta es
        $s_i$.</p>
    <h5>Cálculo del equilibrio de Nash</h5>
    <h6>En estrategias puras</h6>
    <p>Para calcular los equilibrios puros de Nash:</p>
    <p>Para cada jugador, para cada posible estrategia de los demás
        jugadores, se marca la estrategia que le da mayor o igual utilidad. Si
        en un perfil estratégico están marcadas todas las estrategias, quiere
        decir que para cada jugador, la estrategia en ese perfil es débilmente
        dominante. POr ende, ese perfil es un equilibrio de Nash.</p>
    <p>Considérese el siguiente juego bimatricial $$\begin{matrix} &amp; W
        &amp; X &amp; Y &amp; Z\ T &amp; (\underline{9},0) &amp; (3, 3) &amp;
        (1, 1) &amp; (\underline{7},\underline{7})\ S &amp; (6,2) &amp;
        (\underline{5},4) &amp; (\underline{2},\underline{1}\underline{0}) &amp;
        (3,4)\ \end{matrix}$$ Para el jugador 2:</p>
    <ul>
        <li>Si el jugador 1 juega $T$, las posibles utilidades para el jugador 2
            son los valores en esa fila que están en la segunda posición de las
            tuplas: $0, 3, 1$ y $7$. De ellosse prefiere $7$. Por ende, debería
            jugar $Z$ y se subraya el $7$.</li>
        <li>Similarmente, si el jugador 1 juega $S$, al jugador 2 le conviene
            jugar $Y$, que la da $10$, por lo que se subraya. Para el jugador 1: De
            forma análoga se hace el análisis para el jugador 1, para cada una de
            las 4 estrategias del jugador 2.</li>
    </ul>
    <h6>Eliminación de estrategias</h6>
    <p>Nótese que con eso se puede realizar la eliminación de estretagias
        estrictamente dominadas:</p>
    <p>Si para algún jugador, en una de sus estrategias, no hay ningún valor
        que corresponda a una utilidad suya que esté subrayado, esa estretgia es
        estrictamente dominada. Por ende, se puede eliminar.</p>
    <p>En el caso del juego anterior, para el jugador 2, las estrategias $W$
        y $X$ no tienen ningún elemento subrayado que sea utilidad de $2$ (que
        esté en la segunda posición en las tuplas). Por ende, $2$ no debería
        jugar esas estrategias, son débilmente dominadas, y se eliminan. Se
        obtiene la siguiente matriz: $$\begin{matrix} &amp; Y &amp; Z\ T &amp;
        (1, 1) &amp; (\underline{7},\underline{7})\ S &amp;
        (\underline{2},\underline{1}\underline{0}) &amp; (3,4)\
        \end{matrix}$$</p>
    <h6>Método de la esvástica</h6>
    <p>Presentación 6, diapositivas 39-49. ![[Pasted image
        20230511104502.png]]</p>
    <h6>Principio de independencia</h6>
    <p>Es quizás la forma más directa de calcular los equilibrios de Nash en
        estrategias mixtas (no degeneradas).</p>
    <p>Tómese la matriz utilizada antes, de la que ya se conocen los
        equilibrios de Nash y de la que ya se eliminaron las estrategias
        estrictamente dominadas: $$\begin{matrix} &amp; Y &amp; Z\ T &amp; (1,
        1) &amp; (\underline{7},\underline{7})\ S &amp;
        (\underline{2},\underline{1}\underline{0}) &amp; (3,4)\
        \end{matrix}$$</p>
    <p>Se establece que 1 juega $T$ con probabilidad $p$ y juega $S$ con
        probabilidad $1-p$. 2 juega $Y$ con probabilidad $q$ y $Z$ con
        probabilidad $1-q$: $$\begin{matrix} &amp;&amp; q &amp; 1-q\ &amp;&amp;
        Y &amp; Z\ p &amp; T &amp; (1, 1) &amp; (\underline{7},\underline{7})\
        1-p &amp; S &amp; (\underline{2},\underline{1}\underline{0}) &amp;
        (3,4)\ \end{matrix}$$</p>
    <p>Se quiere que 1 tenga <em>la misma utilidad independientemente de qué
        estrategia use</em>, de si juega $T$ o de si juega $S$. Si 1 juega $T$,
        su utilidad depende de qué juegue 2:</p>
    <ul>
        <li>Si 2 juega $Y$, con probabilidad $q$, la utilidad para 1 es 1.</li>
        <li>Si 2 juega $Z$, con probabilidad $1-q$, la utilidad para 1 es 7. O
            sea que la utilidad esperada para 1 si juega $T$ es $$q+7(1-q)$$Y eso se
            iguala a la utilidad esperada para 1 si juega $S$ (que se obtiene
            realizando el mismo análisis): $$\underbrace{q + 7(1 - q)}<em>{\text{Si 1
juega $T$}} = \underbrace{2q+3(1-q)}</em>{\text{Si 1 juega $S$}}$$</li>
    </ul>
    <p>Se realiza el mismo análisis para 2: se quiere que tenga igual
        utilidad se juega $Y$ a si juega $Z$, y las utilidades esperadas
        dependen de qué juega 1, de las probabilidades $p$ y $1-p$:
        $$\underbrace{p + 10(1 - p)}<em>{\text{Si 2 juega $Y$}} =
            \underbrace{7p+4(1-p)}</em>{\text{Si 2 juega $Z$}}$$</p>
    <p>Despejando, se obtiene: $$q = \frac{4}{5} \quad \land \quad
        p\frac{1}{2}$$ Por lo que el equilibrio de Nash es:
        $$\begin{gather *}((pT, (1-p)S),(qY, (1-q)Z)) \ \left(\left(\frac{1}{2}T,
        \frac{1}{2}S\right),\left(\frac{4}{5}Y,
        \frac{1}{5}Z\right)\right).\end{gather *}$$</p>
    <h4>Perfección en subjuegos</h4>
    <p>Un perfil estratégico $s$ es un <strong>equilibrio perfecto en
        subjuegos</strong> si y solamente si $s$ es un equilibrio de Nash para
        <strong>todos</strong> los [[Teoría de Juegos#Subjuegos|subjuegos]] de
        $G$.</p>
    <p>Se calculan usando inducción hacia atrás (<em>backward
        induction</em>).</p>
    <h5>Inducción hacia atrás para equilibrios perfectos</h5>
    <p>#TODO! Cata sabe esto bien</p>
    <h3>Loterías</h3>
    <p>Se determinan acciones en el juego por mecanismos aleatorios
        (e.g.,lanzar una moneda, un dado).</p>
    <p>Lotería: opción con riesgo, con un conjunto de resultados y una
        función que les asigna probabilidades.</p>
    <p>Un jugador puede tener que elegir entre dos acciones, donde solo una
        es una lotería (e.g. elegir 2000, o lanzar una moneda donde cara es 0
        ysello 5000). Para poder comparar la utilidad entre una acción y la
        lotería, se definen funciones de utilidad para loterías.</p>
    <p>Si la función de utilidad es lineal, para el ejemplo anterior queda
        $u(L) = \frac{1}{2}0 + \frac{1}{2}5000$.</p>
    <p>Una <em>estrategia mixta</em> para un jugador es una función de
        probabilidad sobre su conjunto de alternativas.</p>
    <h4>Teoría de la utilidad esperada</h4>
    <p>Se usa para representar preferencias sobre loterías.</p>
    <p>Primero, prerequisitos teóricos.</p>
    <p>Dado un conjunto $O$ de posibles resultados, una <em>medida
        deprobabilidad</em> es una función de los subconjuntos de $O$ a los
        reales, $p\colon \mathcal{P}(O) \to \mathbb{R}$, tal que:</p>
    <ul>
        <li>$p(O) = 1$</li>
        <li>Si $A,B \subseteq O$ son disjuntos, tal que $A \cap B =
            \varnothing$, entonces $p(A \cup B) = p(A) + p(B)$.</li>
    </ul>
    <p>Ejemplos de medidas de probabilidad son la distribución uniforme, la
        distribución normal y la distribución de Poisson.</p>
    <p>Si hay un orden natural sobre $O$ (e.g: $O = \mathbb{N}$ o$O =
        \mathbb{R}$), se puede establecer una <em>función de distribución
            acumulada</em> (o función de repartición), que a cada intervalo
        $(-\infty, x]$ le asigna la probabilidad de que ocurra $x$ o cualquiera
        de los elementos anteriores.</p>
    <p>Toda medida de probabilidad cuenta con un <em>soporte</em>, denotado
        $\operatorname{supp}(p)$: el conjunto de todos los resultados $x \in O$
        tales que $p(x) &gt; 0$. En otras palabras, el subconjunto
        $\operatorname{supp}(p) \subseteq O$ más pequeño tal que
        $p(\operatorname{supp}(p)) = 1$.</p>
    <p>Una medida de probabilidad es <em>simple</em> si tiene soporte
        finito, caso en el cual todo resultado que no esté en el soporte es
        imposible,$p(x) = 0, \forall x \notin \operatorname{supp}(p)$.</p>
    <p>Ahora, se fija un conjunto $O$ finito de $k$ resultados, $|O| = k$.
        Todamedida de probabilidad simple sobre cualquier subconjunto de $O$ es
        unalotería simple y el conjunto de loterías simples se
        denota$\mathcal{L}$.</p>
    <p>Dadas dos loterías $p, q \in \mathcal{L}$ y un número$\alpha \in
        [0,1] \subset \mathbb{R}$, la <em>lotería compuesta</em> $\hat{p} =
        (p,q;\alpha)$ indica que se usa la lotería $p$ con probabilidad $\alpha$
        y la lotería $q$ con probabilidad $1-\alpha$.</p>
    <p>El soporte de una lotería compuesta es la unión de los soportes de
        susloterías. La medida de probabilidad para la lotería compuesta es
        lafunción $$\alpha p + (1-\alpha)q$$Usando los soportes, se puede
        obtener una medida de probabilidad reducida que produce la misma
        distribución que esa, denominada <em>lotería reducida</em>: para cada
        elemento $x$ del soporte de la lotería compuesta,
        $\operatorname{supp}(p)\cup\operatorname{supp}(q)$, se le asigna la
        probabilidad $\alpha p(x) + (1-\alpha)q(x) &gt; 0$. La lotería reducida
        es simplemente una combinación convexa de las loterías simples que la
        componen.</p>
    <h4>Preferencias sobre loterías</h4>
    <p>Se denotan las preferencias sobre loterías con la notación de la
        teoríade la utilidad: $\succ$ para preferencia estricta (e.g., $L_1
        \succ L_2$denota que se prefiere $L_1$) y $\succeq$ para preferencia
        débil (i.e ose prefiere la lotería o se es indiferente).</p>
    <h4>Loterías</h4>
    <p>Supóngase que un jugador debe elegir sobre un conjunto de posibles
        resultados $\sigma = {x_1, x_2,\ldots,x_n}$, una lotería es una
        distribución de probabilidad, que le asigna una probabilidad $p_i$ acada
        resultado de forma que $\sum_{i = 1}^{n} p_i = 1$, y se denota$$L =
        (p_1(x_1),\ldots,p_k(a_k))$$ Nótese que se pueden definir infinitas
        loterías sobre un conjunto deposibles resultados $\sigma =
        {x_1, x_2,\ldots,x_n}$, que asignen distintas probabilidades a cada uno.
        El <em>conjunto de loterías</em> sobre el conjunto de resultados
        $\sigma$ se denota por $\alpha$.</p>
    <p>Cada resultado se puede identificar como la lotería que asigna
        probabilidad 1 a dicho resultado.</p>
    <p>Se pueden usar relaciones de preferencia e indiferencia sobre
        loterías, así como funciones de utilidad. Si se asigna a una función de
        utilidad lineal en las probabilidades, la utilidad de la lotería es el
        valo resperado de sus resultados: la suma de la función de la utilidad
        de cada, resultado por la probabilidad de que suceda. La función se
        denomina entonces <em>función de utilidad de von Neumann
            -Morgenstern</em>. Por ejemplo, si $L = (px, (p-1)y)$ donde $0\leq p\leq
        1$, entonces $u(L) = p \cdot u(x) + (1 - p) \cdot u(y)$. En
        general$u_j(p) = \sum_{i = 1}^{n} u_j(x_i)p_i$.</p>
    <h3>Maxmin</h3>
    <p>El maxmin es un concepto de solución que se puede usar cuando el
        equilibrio de Nash es poco creíble:</p>
    <ul>
        <li>Jugarlo es muy riesgoso para algún jugador.</li>
        <li>No se puede presumir que los demás jugadores son racionales (o
            incluso, hay razones para pensar que los demás jugadores no serán
            racionales o que conspirarán adrede en contra de otro).</li>
    </ul>
    <h4>Equilibrio de Nash poco creíble</h4>
    <p>En algunos casos, el equilibrio de Nash puede ser improbable.</p>
    <p>Por ejemplo, puede que para uno de los jugadores, usar la estrategia
        que lleva al equilibrio de Nash tenga también la posibilidad de un
        resultado catastrófico si el otro jugador no juega también lo que
        llevaría al equilibrio de Nash. E.g:
        $$\begin{matrix}&amp;s_2^1&amp;s_2^2\s_1^1 &amp; (-10, \underline{2})
        &amp; (\underline{2}, \underline{2}) \s_1^2&amp; (\underline{2}, 1)
        &amp; (1, \underline{2}) \end{matrix}$$ Allí el equilibrio de Nash es
        (2,2). O sea, $1$ debería usar la estrategia $s_1^1$ y $2$ debería usar
        $s_2^2$,. Eso es un riesgo alto para $1$: qué tal $2$ juegue $s_2^1$, y
        entonces $1$ acaba con utilidad de $-10$ mientras que a $2$ le da igual.
        Si $1$ contempla eso, entonces no debería apostarle al equilibrio de
        Nash. Es preferible para él jugar $s_1^2$, donde su utilidad será 1 o 2
        (seguramente será 1 su utilidad, que es menor que la del equilibrio de
        Nash... pero es que jugar $s_1^1$ es un riesgo muy hpta)</p>
    <p>Eso lleva al maxmin: los jugadores buscan la mayor utilidad
        <strong>sin depender de la racionalidad de los demás</strong>. Es más,
        son pesimistas: presumen que el otro va a jugar a hacerlos perder.</p>
    <h4>Maxmin</h4>
    <p><strong>Maxmin</strong>: mínimo pago que el jugador puede
        garantizarse, independientemente de la racionalidad de los demás (i.e.,
        aún si los demás juegan con las patas o tratando de hacerlo perder
        adrede).</p>
    <p>El <strong>maxmin</strong> del jugador $j$ se denota por
        $\underline{v}<em>j$ y está dado por$$\underline{v}<em>j = \max</em>{s_j
\in S_j}\ \min</em>{t_{-j} \in S_{-j}} u_j(s_j, t_{-j}). $$Explicación,
        de derecha a izquierda:</p>
    <ul>
        <li>$u_j(s_j, t_{-j})$ es la utilidad que obtiene el jugador $j$, dado
            que eligió una estrategia $s_j$ y que las estrategias elegidas por los
            demás jugadores están en la tupla $t_{-j}$. Recuerde que $t_{-j}$ denota
            las estrategias de los demás jugadores, el perfil estratégico pero sin
            la estrategia de $j$.</li>
        <li>$\min_{t_{-j} \in S_{-j}} u_j(s_j, t_{-j})$ significa entonces lo
            peor que le puede pasar a $j$, dado que eligió una estrategia $s_j$. Se
            elije el mínimo $t_{-j}$, lo que quiere decir que todos los demás
            jugadores eligieron sus estrategias de forma que minimizan la utilidad
            para $j$.</li>
        <li>$\max_{s_j \in S_j}\ \min_{t_{-j} \in S_{-j}} u_j(s_j, t_{-j})$
            significa por último que $j$ elije la mejor estrategia $s_j$ que puede
            elegir, teniendo en cuenta que todos los demás jugadores orquestan en su
            contra y juegan las estrategias que minimizan su utilidad. Por eso se
            llama maxmin: <em>el máximo de lo peor que le puede pasar</em>. (Si le
            cuesta trabajo entender esto, revise la definición de la próxima
            sección, que es para 2 jugadores)</li>
    </ul>
    <p>A esa definición le falta algo de rigurosidad. El juego en forma
        estratégica puede ser infinito, cuando el número de estrategias lo es, y
        en ese caso es preferible usar el supremo y el ínfimo en lugar del
        máximo y el mínimo de los conjuntos. Recordatorio:</p>
    <ul>
        <li><strong>Supremo</strong>: La mínima cota superior de un conjunto: el
            menor valor que no necesariamente está dentro del conjunto y que es más
            grande o igual a todos los elementos del conjunto. E.g: $\sup([0, 1)) =
            1.$</li>
        <li><strong>Ínfimo</strong>: La máxima cota inferior de un conjunto: el
            valor más grande que no necesariamente está dentro del conjunto y que es
            menor o igual a todos los elementos del conjunto. E.g: $\inf((0, 1]) =
            0.$ Con eso en mente, la definición formal del maxmin es:
            $$\underline{v}<em>j = \sup</em>{s_j \in S_j}\ \inf_{t_{-j} \in S_{-j}}
            u_j(s_j, t_{-j}). $$ También puede pasar en juegos infinitos que el
            supremo no se alcance, caso en el cuál no hay valor maxmin.</li>
    </ul>
    <h4>Valor en juegos de suma 0 (maxmin y minmax)</h4>
    <p>En juegos de suma 0, la definición de maxmin se reduce a dos
        jugadores: $$\underline{v}<em>1 = \sup</em>{s_1 \in S_1}\ \inf_{s_{2}
        \in S_{2}} u_1(s_1, s_2). $$ Es decir, la mejor estrategia que 1 puede
        usar, dado que 2 usa la estrategia que brinda a 1 la peor utilidad.</p>
    <p>La definición para el jugador 2 es análoga, cambia todos los 1 por 2
        y viceversa. Pero como es un juego de suma 0, la utilidad de 2 es la de
        1 de signo inverso. Con eso, se tiene: $$\underline{v}<em>2 =
            \sup</em>{s_2 \in S_2}\ \inf_{s_{1} \in S_{1}} -u_1(s_1, s_2). $$</p>
    <p>En juegos de suma 0:</p>
    <ul>
        <li>El máxmin del jugador 1, $\underline{v}_1$, se llama simplemente
            <strong>maxmin</strong> y se denota $\underline{v}$. Es <em>lo mínimo
                que se garantiza 1</em>, independientemente de como juegue 2.</li>
        <li>Se puede definir para también un valor <strong>minmax</strong>,
            $\bar{v}$: <em>2 puede garantizarse que nunca pagará más que el
                minmax</em>, así 1 juegue como juegue. Está dado por $$\bar{v} =
            \min_{s_2\in S_2}\max_{s_1\in S_1} u_1(s_1, s_2).$$Es decir, si el
            jugador 1 juega la estrategia $s_1$ que maximiza su utilidad, la
            estrategia $s_2$ que puede jugar $s_2$ para pagar lo menos posible.</li>
    </ul>
    <p>Si resulta y pasa que $\underline{v} = \bar{v}$, entonces a esa
        cantidad se le denota $v$ y es el <strong>valor del juego</strong>.
        Todas las estrategias maxmin y minmax de los jugadores 1 y 2
        respectivamente se llaman <strong>estratégias óptimas</strong>.</p>
    <p>Sobre esto, está un teorema ya mencionado en la sección de [[Teoría
        de Juegos#Equilibrio de Nash|equilibrio de Nash]]:</p>
    <blockquote>
        <p>[!tip] Teorema de Von Neumann (1928) Todo juego de suma 0, con
            jugadores finitos cada uno con estrategias puras finitas, tiene
            <strong>valor en estrategias mixtas</strong>.</p>
    </blockquote>
    <p>Otro teorma util:</p>
    <blockquote>
        <p>[!tip] Teorema Si $s = (s_1, s_2)$ es un equilibrio de Nash de un
            juego de suma cero de dos jugadores, entonces $v = u(s_1, s_2)$ es el
            valor del juego, $s_1$ es la estrategia óptima (maxmin) de 1 y $s_2$ es
            la estrategia óptima (minmax) de 2.</p>
    </blockquote>
    <p>Nótese entonces que en juegos de suma cero, los equilibrios de nash y
        los valores maxmin coinciden, generan predicciones similares. Esto no
        pasa en juegos más generales, como mencionado al inicio de esta
        sección.</p>
    <h1>Segunda parte</h1>
    <h2>Equilibrio correlacionado</h2>
    <p>Introducido en: Auman, R. J. (1974). <em>Subjectivity and correlation
        in randomized strategies</em>, Journal of Mathematica Economics, 1,
        67-96.</p>
    <p>Un equilibrio correlacionado es una <strong>distribución de
        probabilidad sobre los perfiles estratégicos</strong>, que indica con
        qué probabilidad se debería seguir cada perfil estratégico de forma que
        sea óptimo para todos los jugadores.</p>
    <p>Dado un juego en forma normal (como matriz), el equilibrio
        correlacionado es una matriz de probabilidades (que obviamente deben
        sumar 1).</p>
    <p>Se puede entender como que un observador externo recomienda a cada
        jugador con qué probabilidad seguir cada una de sus posibles
        estrategias. El jugador no está obligado a acatar la sugerencia.</p>
    <h3>Definición</h3>
    <h4>Juego extendido</h4>
    <p>Primero se define un <strong>juego extendido</strong>. A partir de un
        juego en forma estratégica, $G = ((N), (S_i)<em>{i\in N},
            (u_i)</em>{i\in N})$, para cada distribución de probabilidad $P\colon S
        \to [0,1]$, se tiene un juego extendido $G^C(P)$:</p>
    <ul>
        <li>Un observador externo escoge un perfil estratégico $s$ de acuerdo
            con la distribución de probabilidad $P$.</li>
        <li>A cada jugador $j \in N$, el observador le recomienda usar la
            estrategia $s_j$ que escogió para él, sin decirle las estrategias en
            $s_{-j}$ que eligió para los demás.</li>
        <li>Cada jugador $j\in N$ usa una estrategia $s_j'$, tras decidir si
            sigue la recomendación, $s_j' = s_j$, o no, $s_j'\neq s_j$.</li>
        <li>Cada jugador $j\in N$ obtiene pago $u_j(s') = u_j(s_i')_{i \in N}$,
            de acuerdo con las estrategias elegidas por él y el resto. Esto es un
            juego en forma extensiva de información imperfecta (i.e., con conjuntos
            de información no triviales).</li>
    </ul>
    <p>Nótese que hay infinitos juegos extendidos para cada juego en forma
        normal.</p>
    <h4>Estrategias puras para juegos extendidos</h4>
    <p>Dado un juego extendido $G^C(P)$, una <strong>estrategia
        pura</strong> para el jugador $i \in N$, denotada $\delta_i$, es una
        función que a cada recomendación $s_i$ dada por la distribución de
        probabilidad $P$ (i.e., dada por el observador externo) le asigna una
        acción $\delta_i(s_i) \in S_i$: $$\delta_i\colon S_i\to S_i.$$ Si el
        jugador $i \in N$ sigue la recomendación del observador, usa la
        estrategia denotada por $\delta_i^<em>$, que para cada recomendación
            $s_i$ tiene como acción la misma $s_i$: $$\delta_i^</em>(s_i) = s_i$$
        Hay un escenario en el cual todos los jugadores siguen la sugerencia del
        observador externo. Dicho perfil estratégico se denota por
        $\delta^<em>$:$$\delta^</em> = (\delta_i^<em>)_{i\in N} =
            (\delta_1^</em>, \delta_2^<em>, \ldots, \delta_n^</em>)$$</p>
    <h4>Definición</h4>
    <p>Dado un juego $G = (N, S, (u_i)_{i\in N})$ y una distribución de
        probabilidad $P$ sobre el conjunto de perfiles estratégicos $S$ (que
        asigna una probabilidad a cada perfil). Con eso, se tiene un juego
        extendido $G^C(P)$.</p>
    <p>$P$ es un <strong>equilibrio correlacionado</strong> si y solamente
        si el perfil estratégico $\delta^<em>$ en el que todos los jugadores
            siguen la recomendación que da la distribución (el observador externo)
            es un equilibrio de Nash de $G^C(P)$. El perfil estratégico
            $\delta</em>$ es débilmente dominante frente al resto. Es decir, para
        toda estrategia que elijen los jugadores, $s_i' \in S_i$, y para toda
        estrategia recomendada por el observador, $s_i \in S_i$, la utilidad
        esperada es mejor o igual para la estrategia recomendada que para
        cualquiera que puedan elegir: $$\sum_{s_{-j} \in S_{-j}} p(s_j, s_{-j})
        \ u_j(s_j, s_{-j}) \geq \sum_{s_{-j} \in S_{-j}} p(s_j, s_{-j}) \
        u_j(s_j', s_{-j}), \quad \forall s_i, s_i' \in S_i$$ Calculando la
        probabilidad esperada con las probabilidades que da la distribución.</p>
    <p>Para entenderla y saber usarla, vital leer el ejemplo del juego de la
        gallina de la próxima sección.</p>
    <h4>Recordatorio: Probabilidad condicional y Bayes</h4>
    <p>#proba La <strong>probabilidad condicional</strong> es la
        probabilidad de un evento contemplando que ocurra otro (no siempre
        afecta, pero a veces sí).</p>
    <p>La probabilidad del evento $A$ dado que ocurra el evento $B$,
        denotada por $P(A|B)$, está definida como$$P(A|B) = \frac{P(A\cap
B)}{P(B)}$$La semántica de esa definición es que de todos los casos en
        que se cumple $B$, quiero la fracción de ellos en los que se cumplen
        ambos eventos (tanto $A$ como $B$, $P(A\cap B)$), y es esa la
        probabilidad de que ocurra $A$ si ocurre $B$.</p>
    <p>Si $B$ no tiene influencia alguna en $A$, pues la probabilidad de que
        $A$ tenga lugar no cambiará si ocurre o no $B$ y entonces $P(A) =
        P(A|B)$. En ese caso, $A$ y $B$ son <strong>eventos
            independientes</strong>.</p>
    <p>Puede resultar útil que dada la probabilidad de $A$ tal que ocurra
        $B$, se puede calcular el inverso:</p>
    <blockquote>
        <p>[!tip] Teorema de Bayes (básico) $$P(A|B) = \frac{P(B | A)\
P(A)}{P(B)}$$</p>
    </blockquote>
    <p>Volviendo a teoría de juegos:</p>
    <p>En los zapatos del jugador $j$, puedo preguntarme cuáles estrategias
        $s_{-j}$ recomendó el observador a los demás. Puedo calcular la
        probabilidad de que el observador haya sugerido al resto un perfil
        estratégico $s_{-j}$ específico, teniendo en cuenta que a mí me
        recomendó $s_j$ (probabilidad condicional!) $$p(s_{-j}|s_j) =
        \frac{p(s_j, s_{- j})}{\sum_{t_{-j} \in S_{-j}} p(s_j, t_{-j})}$$</p>
    <h3>Ejemplo: El juego de la gallina</h3>
    <p>(Este juego me parece espectacular)</p>
    <h4>Enunciado</h4>
    <p>Dos automóviles conducen en direcciones opuestas, la colisión es
        inminente. Cada conductor puede seguir hacia adelante (A) o ser cobarde
        (C) y desviarse. Se tiene la siguiente matriz: $$\begin{matrix} &amp; a
        &amp; c &amp; \ A &amp; (0,0) &amp; (\underline{5}, \underline{1})&amp;
        \ C &amp; (\underline{1},\underline{5}) &amp; (4,4)&amp; \
        \end{matrix}$$Se premia más al que gana (conduce mientras el otro se
        desvía, $u_1(A, c) = 5$ y $u_2(C, a) = 5$), menos si ambos se desvían
        (por cobardes, da 4), menos aún al que pierde (por gallina, da 1) y no
        se les premia si se estrellan (posiblemente mueran).</p>
    <h4>Desigualdades</h4>
    <p>Se calcula el equilibrio correlacionado, la distribución de
        probabilidad $p = (\alpha(A, a), \beta(A, c), \gamma(C, a), \eta(C,
        c))$, representado por la matriz: $$\begin{matrix} &amp; a &amp; c &amp;
        \ A &amp; \alpha &amp; \beta &amp; \ C &amp; \gamma &amp; \eta &amp; \
        \end{matrix}$$ Para que sea un equilibrio de Nash, se debe cumplir
        $$\sum_{s_{-j} \in S_{-j}} p(s_j, s_{-j}) \ u_j(s_j, s_{-j}) \geq
        \sum_{s_{-j} \in S_{-j}} p(s_j, s_{-j}) \ u_j(s_j', s_{-j}), \quad
        \forall s_i, s_i' \in S_i$$, que en este caso son las siguientes
        desigualdades:</p>
    <ul>
        <li>Es (débilmente) preferible para el jugador 1 (filas) seguir la
            recomendación de jugar $A$ con probabilidad $\alpha + \beta$ en vez de
            jugar $C$ (con la misma probabilidad!): $$\begin{gather *}\text{1 juega
$A$ con las prob. dadas} \geq \text{1 juega C con las prob.
dadas}\\alpha \ u_1(A, a)+\beta \ u_1(A, c) \geq \alpha \ u_1(C,
            a)+\beta \ u_1(C, c)\end{gather *}$$Lo mismo para jugar $C$ con
            probabilidad $\gamma + \eta$ en vez de jugar $A$ con esa probabilidad:
            $$\gamma \ u_1(C, a)+\eta \ \ u_1(C, c) \geq \gamma \ u_1(A, a)+\eta \
            u_1(A, c)$$</li>
        <li>Es (débilmente) preferible para el jugador 2 hacer caso y jugar $a$
            con probabilidad $\alpha + \gamma$ que jugar $c$ en su lugar con esa
            probabilidad: $$\alpha \ u_2(A, a)+\gamma \ u_2(C, a) \geq \alpha \
            u_2(A, c) + \gamma \ u_2(C,c)$$ Y lo mismo, debe ser mejor (o igual)
            jugar $c$ con la probabilidad recomendada de $\beta + \eta$ que jugar
            $a$: $$\beta \ u_2(A, c)+\eta \ u_2(C, c) \geq \beta \ u_2(A, a)+\eta \
            u_2(C, a)$$ Las cuatro ecuaciones son entonces:$$\begin{cases} \alpha \
            u_1(A, a)+\beta\ u_1(A, c) \geq \alpha\ u_1(C, a)+\beta\ u_1(C, c) \
            \gamma\ u_1(C, a)+\eta\ u_1(C, c) \geq \gamma\ u_1(A, a)+\eta\ u_1(A, c)
            \ \alpha\ u_2(A, a)+\gamma\ u_2(C, a) \geq \alpha\ u_2(A, c) + \gamma\
            u_2(C,c)\ \beta\ u_2(A, c)+\eta\ u_2(C, c) \geq \beta\ u_2(A, a)+\eta\
            u_2(C, a) \end{cases}$$Que, reemplazando las utilidades, son:
            $$\begin{cases} \alpha0+\beta5 \geq \alpha1+\beta4 \ \gamma1+\eta4\geq
            \gamma0+\eta5 \ \alpha0+\gamma5 \geq \alpha1 + \gamma4\ \beta1+\eta4
            \geq \beta0+\eta5 \end{cases}$$ O sea $$\begin{cases} \beta \geq \alpha
            \ \gamma \geq \eta \ \gamma \geq \alpha \ \beta\geq \eta
            \end{cases}.$$Como se obtienen desigualdades y no valores, hay múltiples
            equilibrios correlacionados: cualquier distribución de probabilidad que
            satisfaga las ecuaciones.</li>
    </ul>
    <h4>Valores máximos de las probabilidades</h4>
    <p>Con eso, con que todas son mayores a 0 y con que su suma debe ser 1,
        se llega a que los posibles valores que pueden tomar son:</p>
    <ul>
        <li>$\beta \leq 1$ y $\gamma \leq 1$. Esos dos pueden tomar cualquier
            valor, sin restricción.</li>
        <li>$\alpha \leq \frac{1}{3}$ y $\eta \leq \frac{1}{3}$. Cada uno tiene
            que cumplir que sea menor o igual que $\beta$ y que $\gamma$. Entonces
            lo máximo que puede ser $\alpha$ es $\frac{1}{3}$, para que $\beta$ y
            $\gamma$ sigan siendo mayores o iguales, en ese caso serían
            $\frac{1}{3}$ también.</li>
    </ul>
    <h4>Utilidades esperadas</h4>
    <p>Se quiere saber, en caso de que cada valor tome su máximo, cuál sería
        el pago de cada jugador. El pago del jugador 1, está dado por el valor
        esperado de cada una de sus utilidades (suma de la probabilidad de cada
        utilidad por la utilidad): $$\alpha \ u_1(A, a) + \beta \ u_1(A, c) +
        \gamma \ u_1(C, a) + \eta \ u_1 (C, c)$$ O sea: $$5\beta +\gamma +4\eta
        .$$ Similarmente para el jugador 2, y con eso se tiene las utilidades
        esperadas: $$(5\beta+ \gamma + 4\eta, \beta+5\gamma+4\eta)$$</p>
    <h4>Posibles pagos de los equilibrios correlacionados: Clausura
        convexa</h4>
    <p>Se toma el vector de utilidades esperadas, y se evalúa en el caso de
        que cada probabilidad tome su máximo valor. Eso va a dar 4 vectores
        (puntos), que son los que delimitan el conjunto de pagos de equilibrios
        correlacionados.</p>
    <ul>
        <li>Si $\beta = 1$ (su máximo posible), entonces todas las demás valen 0
            y el vector (punto) de utilidad esperada queda $(5, 1)$.</li>
        <li>Si $\gamma = 1$ y por ende el resto 0, queda $(1, 5)$.</li>
        <li>Si $\alpha = \frac{1}{3}$ que es su máximo, entonces
            $\beta=\gamma=\frac{1}{3}$, y queda $(\frac{6}{3}, \frac{6}{3}) =
            (2,2)$.</li>
        <li>Si $\eta = \frac{1}{3}$ que es su máximo, entonces
            $\beta=\gamma=\frac{1}{3}$, y queda $(\frac{10}{3}, \frac{10}{3})$.</li>
    </ul>
    <p>Con eso:</p>
    <ul>
        <li>En azul, todos los posibles pagos</li>
        <li>En <strong>rojo</strong>, lo que acabamos de calcular: el conjunto
            de posibles pagos de los <strong>equilibrios
                correlacionados</strong></li>
        <li>En verde, la clausura convexa de los posibles pagos de los
            equilibrios de Nash. ![[Pasted image 20230514120926.png]]</li>
    </ul>
    <p>Nótese: El conjunto de los equilibrios correlacionados (con sus pagos
        en rojo) contiene los equilibrios de Nash (con sus pagos en verde)</p>
    <h4>Teoremas</h4>
    <p>De lo anterior cabe mencionar dos teoremas:</p>
    <blockquote>
        <p>[!tip] Teorema Todo juego en forma estratégica tiene al menos un
            equilibrio correlacionado.</p>
    </blockquote>
    <blockquote>
        <p>[!tip] Teorema El conjunto de equilibrios correlacionados es compacto
            y convexo.</p>
    </blockquote>
    <p>Recordatorios:</p>
    <ul>
        <li><strong>Conjunto compacto</strong>: Conjunto que
            <ul>
                <li>O bien contiene un número finito de puntos (elementos)</li>
                <li>O bien cada uno de sus subconjuntos infinitos da lugar al menos a un
                    punto límite.</li>
            </ul></li>
        <li><strong>Conjunto convexo</strong>: La interpretación geométrica es
            fácil: un conjunto es convexo si y solamente si al unir con un segmento
            de recta cualesquiera dos puntos dentro del conjunto, el segmento de
            recta está completamente contenido por el conjunto. ![[Pasted image
            20230514121731.png]]</li>
    </ul>
    <h2>Juegos cooperativos</h2>
    <p><strong>Juego cooperativo</strong>: Los jugadores pueden formar
        <strong>coaliciones</strong>: grupos que actúan coordinados para lograr
        objetivos grupales.</p>
    <p>(Nótese: <strong>no</strong> es una coalición un acuerdo en el que
        cada jugador sigue buscando su objetivo individual!)</p>
    <p><strong>No</strong> interesan las decisiones individuales de un
        miembro de una coalición, ni cómo la coalición se organiza por dentro
        para repartirse el trabajo.</p>
    <p>Se busca analizar</p>
    <ul>
        <li>Las coaliciones posibles</li>
        <li>Cuánto beneficio pueden obtener y cómo se lo reparten entre
            miembros. <strong>Hipótesis de utilidad transferible</strong>: Toda
            coalición puede distribuir sus ganancias entre sus miembros
            arbitrariamente. Los pagos pueden redistribuirse y la "moneda" es
            universal.</li>
    </ul>
    <h3>Definición</h3>
    <p>Un <strong>juego cooperativo</strong> con <strong>utilidad
        transferible</strong> es un par $(N,v)$ donde</p>
    <ul>
        <li>$N \subseteq \mathbb{N}$ es el conjunto de jugadores, igual que en
            juegos estratégicos.</li>
        <li><strong>Todo</strong> subconjunto $S \subset N$ (i.e. $S \in
            \mathbb{P}(N)$) es una coalición. La colección de todas las coaliciones
            se denota $2^N = \mathbb{P}(N)$.
            <ul>
                <li>Esa notación de $2^N$ no me gusta, prefiero usar el conjunto
                    potencia. Empero, la usaré porque la usa Jorge y porque refleja que
                    siempre existen $2^{| N |}$ coaliciones posibles.</li>
            </ul></li>
        <li>$v\colon 2^N \to \mathbb{R}$ se la <strong>función
            característica</strong>, que asocia a cada coalición $S$ un número real
            $v(S) \in \mathbb{R}$ que es el <strong>valor de la coalición</strong>.
            Es cuánta utilidad la coalición puede garantizarse como mínimo.
            <ul>
                <li>$v$ satisface $v(\varnothing) = 0$.</li>
                <li>La coalición $S$ debe poder obtener utilidad $v(S)$,
                    independientemente de lo que hagan las demás coaliciones (i.e., incluso
                    en el peor caso, en el que todos los demás orquestan en su contra.
                    Similar al raciocinio en [[Teoría de Juegos#Maxmin|maxmin]]).</li>
                <li>$v(S)$ es una utilidad en una moneda universal (i.e., le es útil a
                    todos) y es distributible entre los miembros de la coalición.</li>
            </ul></li>
    </ul>
    <h3>Juegos superaditivos, de suma constante, esenciales y convexos</h3>
    <h4>Superaditividad</h4>
    <p>Un juego <strong>superaditivo</strong> es un juego cooperativo $(N,
        v)$ tal que entre mayor es la coalición, mayor es el pago. Dadas dos
        coaliciones $S, T \subseteq N$ que no comparten miembros (son disjuntas:
        $S \cap T = \varnothing$), si se unen, van a tener más o el mismo valor
        que la suma de sus valores por separado: $$v(S \cup T) \geq v(S) +
        v(T)$$</p>
    <p>Es entonces ventajoso y más probable formar coaliciones más y más
        grandes, incluso la gran coalición $N$: todos los jugadores
        cooperan.</p>
    <h4>Juegos de suma constante</h4>
    <p>Un juego de <strong>suma constante</strong> es un juego cooperativo
        $(N, v)$ en el que $$v(N) = v(S) + v(N \setminus S), \quad \forall S ⊆
        N.$$ #TODO: Semántica de esta vaina??</p>
    <h4>Juegos esenciales e inesenciales</h4>
    <p>El juego cooperativo $(N, v)$ es <strong>esencial</strong> si el
        valor de la gran coalición, de todos los jugadores, es mayor a los
        valores que obtendrían todos los jugadores jugando por su cuenta,
        sumado.$$v(N)&gt; \sum_{i\in N} v({i})$$ Un juego cooperativo $(N, v)$
        es <strong>inesencial</strong> si el valor de la gran coalición es igual
        a la suma de los valores que obtendría cada jugador de forma
        autónoma$$v(N)= \sum_{i\in N} v({i})$$ Es este tipo de juego, hay poco
        insentivo para formar la gran coalición, pero puede que aún así resulte
        beneficioso formar coaliciones pequeñas.</p>
    <p>OJO: Un juego puede no ser esencial ni tampoco inesencial.</p>
    <h4>Juegos convexos</h4>
    <p>Un juego cooperativo de utilidad transferible $(N, v)$ es convexo si,
        para todas las coaliciones salvo la gran coalición, $\forall S, T
        \subset N$, se cumple que$$v(S \cup T) ≥ v(S) + v(T) - v(S \cap T)$$ El
        valor de dos coaliciones es mayor o igual que la suma de los valores de
        las dos coaliciones menos el de la coalición de los miembros comunes a
        las dos coaliciones.</p>
    <p>OJO: La propiedad de convexidad es más fuerte que la propiedad de
        superaditividad! Todo convexo es superaditivo.</p>
    <ul>
        <li>Todo juego convexo tiene un núcleo no vacío, $\mathcal{C} =
            \varnothing$.</li>
        <li>En todo juego convexo, el valor de Shapley pertenece al núcleo.</li>
    </ul>
    <h3>Imputaciones: distribución de la utilidad</h3>
    <blockquote>
        <p>[!example] Hipótesis de von Neumann-Morgenstern La utilidad se puede
            transferir de un jugador a otro a la tasa 1:1.</p>
    </blockquote>
    <h4>Definición</h4>
    <p>Una imputación es una forma de repartir las utilidades que produce el
        juego entre los jugadores.</p>
    <p>Dado un juego cooperativo de utilidad transferible $(N, v)$, una
        <strong>imputación</strong>, denotada $\bar{x}$, es un vector $$\bar{x}
        = (x_i)_{i \in N} = (x_1, x_2, \ldots, x_n)$$donde $x_j$ representa el
        pedazo de la utilidad que le toca al jugador $j$. $\bar{x}$ debe
        satisfacer:</p>
    <ul>
        <li><strong>Principio de racionalidad</strong>: Cada jugador obtiene al
            menos tanta utilidad con la imputación como obtendría jugando de forma
            autónoma: $$x_i \geq v({i}), \forall i \in N.$$</li>
        <li><strong>Eficiencia</strong>: Todo lo que el juego produce se reparte
            entre los jugadores: $$\sum_{i \in N} x_i = v(N).$$ Se denota el
            conjunto de imputaciones por $I(v)$. Su definición es entonces $$I(v)=
            \left{\vec{x} \in \mathbb{R}^n \bigg| \sum_{i \in N} x_i = v(N) \ \land
            \ x_i \geq v({i}), \ \forall i \in N \right}.$$</li>
    </ul>
    <h5>Para 2 jugadores</h5>
    <p>En juegos de dos jugadores, el principio de racionalidad se escribe
        como$$(x_1, x_2)\geq (v({1}), v({2}))$$ y el de eficiencia, como
        $$x_1+x_2 = v({1, 2}).$$ Se tiene entonces que</p>
    <ul>
        <li>$I(v) = \varnothing$ si $v({1}) + v({2}) &gt; v({1, 2})$, porque
            incumple racionalidad.</li>
        <li>$|I(v)| = 1$ si $v({1}) + v({2}) = v({1, 2})$</li>
        <li>$I(v)$ es un intervalo si $v({1}) + v({2}) &lt; v({1, 2})$</li>
    </ul>
    <h4>Dominación y núcleo</h4>
    <p>El conjunto de posibles imputaciones se denota $I(v)$.</p>
    <p>Sean $x, y\in I(v)$ imputaciones, $x$ <strong>domina</strong> a $y$
        sobre una coalición específica $S$, si todos los integrantes en $S$
        prefieren $x$ a $y$, denotado $$\vec{x} \succ_S \vec{y}$$ Eso sucede si
        y solamente si:</p>
    <ul>
        <li><strong>Racionalidad</strong>: A cada uno de los jugadores de la
            coalición $S$ le toca más utilidad con la imputación $x$ que con la $y$
            $$x_i &gt; y_i, \quad \forall i \in S$$</li>
        <li>La imputación $x$ es <strong>viable</strong>: las utilidades que
            reparte la imputación son menores o iguales a lo que puede obtener
            específicamente la coalición $S$:$$\sum_{i \in S} x_i \leq v(S)$$ El
            <strong>núcleo</strong>, denotado $\mathcal{C}(v)$ (<em>core</em>), es
            el conjunto de imputaciones que no están dominadas por ninguna otra para
            ninguna coalición. Son todas la imputaciones tal que</li>
        <li>Satisfacen eficiencia</li>
        <li>Para cada coalición, la suma de las utilidades que la imputación
            asigna a sus miembros es mayor o igual que el valor de la coalición.
            Matemáticamente: $$\begin{gather *} \mathcal{C}(v) = \left{ \bar{x} \in
            \mathbb{R}^{n} \colon \sum_{i\in N} x_i = v(N) \quad \land \quad \sum_{i
\in S} x_i \geq v(S), \forall S \subseteq N \right} \end{gather *}$$
            Interpretación: al núcleo pertenecen todas las imputaciones para las que
            no existe otra imputación mejor, para cada una de las coaliciones
            (nótese que una imputación puede ser mejor que otra, cominarla, para una
            coalición particular pero no para otra).</li>
    </ul>
    <p>Todos los elementos del núcleo son imputaciones. Nótese que en la
        definición de núcleo contienene la definición de imputación y es un poco
        más fuerte:</p>
    <ul>
        <li>La primera condición, <strong>eficiencia</strong>, es igual en
            ambas: $\sum_{i\in N}x_i = v(N).$</li>
        <li>La condición $\sum_{i \in S} x_i \geq v(S), \forall S \subseteq N$,
            la llamo <strong>racionalidad generalizada</strong>, pues es una
            generalización de la racionalidad en la definición de imputación. Para
            $S = {i}, \forall i \in N$, se tiene el principio de racionalidad : $x_i
            \geq v({i})$.</li>
    </ul>
    <p>El núcleo puede ser vacío, $\mathcal{C}(v) = \varnothing$, estar
        formado por una sola imputación, o puede tener infinitos puntos.</p>
    <blockquote>
        <p>[!Info] El núcleo es vacío para juegos simples de suma constante.</p>
    </blockquote>
    <h5>Cálculo del núcleo</h5>
    <p>Se hace uso de la racionalidad generalizada: $$\sum_{i\in N}x_i \geq
        v(S), \quad \forall S\subset N$$ Entonces, por ejemplo, para $N={1, 2,
            3}$, las coaliciones posibles son: $\mathcal{P}(N) = {\varnothing, {1},
        {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.$ Entonces para cada
        conjunto, se plantea la desigualdad: $$\begin{gather *}x_1 \geq v({1}) \
        x_2 \geq v({2}) \ x_3 \geq v({3}) \ x_1 + x_2\geq v({1, 2}) \ x_1 +
        x_3\geq v({1, 3}) \ x_2 + x_3\geq v({2, 3}) \ x_1 + x_2 + x_3 = v({1, 2, 3})
        = v(N). \end{gather *}$$ Nótese que para la última expresión, con la gran
        coalición, se utiliza el principio de eficiencia: $$\sum_{i\in N}x_i =
        v(N).$$</p>
    <h3>Juegos simples</h3>
    <p>Es un tipo de juego cooperativo.</p>
    <p>Un juego es simple si toda coalición o gana (por completo) o pierde
        (totalmente).</p>
    <p>Un juego <strong>simple</strong> es un juego cooperativo $(N,v)$ de
        utilidad transferible si para toda coalición $S \subseteq N$ es:</p>
    <ul>
        <li>O bien una coalición ganadora, si $v(S)=1$.</li>
        <li>O bien una coalición perdedora, si $v(S) = 0$.</li>
    </ul>
    <p>E.g., votaciones, donde se aprueba o no la moción.</p>
    <p>Se puede representar el juego simple mediante las coaliciones
        ganadoras, $$\mathcal{W} = {S\subseteq N\colon v(S)=1},$$</p>
    <h4>Coaliciones ganadoras</h4>
    <p>El conjunto de coaliciones ganadoras $\mathcal{W}$, satisface
        que:</p>
    <ul>
        <li>Hay que tener jugadores para ganar, $\varnothing \notin
            \mathcal{W}$</li>
        <li>Si todos los jugadores cooperan, ganarán $N \in \mathcal{W}$</li>
        <li>Si dos coaliciones son ganadoras, $S, T \in \mathcal{W}$ entonces su
            intersección es ganadora, $S\cap T \neq \varnothing.$</li>
        <li><strong>Decisividad</strong>: Si una coalición es ganadora, $S\in
            \mathcal{W}$, entonces el resto de jugadores forman una coalición
            perdedora $N \setminus S \in \mathcal{W}$.</li>
        <li>Si $S \in W$ y $S\subset T$ entonces $T \in \mathcal{W}$. Si con
            solo los jugadores de $S$ gano, añadiéndole más jugadores igual sigo
            ganando.</li>
    </ul>
    <h4>Juegos de mayoría pesada</h4>
    <p>Son una subcategoría de juegos simples.</p>
    <p>Un juego simple $(N, v)$ de utilidad transferible es de
        <strong>mayoria pesada</strong> si</p>
    <ul>
        <li>Existe una <strong>cuota</strong>, un número $q \in \mathbb{R} \ | \
            q≥ 0$.</li>
        <li>A cada jugador se le asigan un peso $w_i$ (se tiene un vector de
            pesos $(w_i)<em>{i\in N}$). Tal que una coalición es ganadora si y
                solamente si la suma de los pesos de sus jugadores es <em>mayor o
                    igual</em> a la cuota: $$v(S) = 1 \iff S \in \mathcal{W} \iff
                \sum</em>{i \in N}w_i \geq q.$$ Si no, es perdedora: $$v(S) = 0 \iff S
            \notin \mathcal{W} \iff \sum_{i \in N}w_i &lt; q.$$El juego se denota
            $[q; w_1, w_2,\ldots,w_n]$.</li>
    </ul>
    <p>Así, solo con los pesos de los jugadores de la coalición, se sabe si
        es ganadora o perderora. Si la suma de los pesos supera la cuota, la
        coalición es ganadora.</p>
    <h4>Jugador veto</h4>
    <p>Un <strong>jugador veto</strong> es un jugador esencial para toda
        coalición. <em>Cualquier coalición que no lo contenga, es
            perdedora.</em></p>
    <p>Sea $(N, v)$ un juego simple. Un jugador $i \in N$ es un jugador veto
        si $v(N\setminus {i}) = 0$. Más aún,</p>
    <p>En todo juego simple, el cálculo del núcleo es notablemente
        sencillo:</p>
    <ul>
        <li>Si el juego no tiene jugadores veto, tampoco tiene núcleo,
            $\mathcal{C}(v) = \varnothing$.</li>
        <li>Si hay jugadores veto, el núcleo consiste de las imputaciones
            $\vec{x}$ en las que los jugadores no veto reciben cero. El núcleo es
            una repartición del pago entre los jugadores veto.</li>
    </ul>
    <h3>Valor de Shapley</h3>
    <p>Introducido en: Shapley, L. S. (1953). <em>A Value for n-person
        Games</em>. In Tucker AW. Kuhm H.W. (eds). Contributions to the Theory
        of Games II. Princeton University Press, Princeton, NJ.</p>
    <p>Es un concepto de solución. Aproxima cuánto espera recibir cada
        jugador. Es decir, es una imputación que cumple con ciertas
        propiedades.</p>
    <h4>Propiedades de un concepto de solución</h4>
    <p>Se exponen propiedades que puede o no tener un concepto de solución.
        (Se exponen estas porque son las que acabará teniendo el Valor de
        Shapley)</p>
    <p>Se formaliza un <strong>concepto de solución</strong> asociado a un
        jugador $i$ con una función $\varphi_i$ que asigna a un juego
        cooperativo $(N, v)$ el valor de $i$ de acuerdo al concepto
        $\varphi$.</p>
    <p>Con eso definimos las propiedades</p>
    <ul>
        <li><p><strong>Eficiencia</strong>: El concepto de solución es eficiente
            si la suma de los valores que asigna a cada jugador dan igual al valor
            del juego. $$\sum_{i\in N} \varphi_i(N, v) = v(N)$$</p></li>
        <li><p><strong>Simetría</strong>: Es simétrico si asigna lo mismo a
            jugadores que son <strong>intercambiables</strong>.</p>
            <ul>
                <li>Dos jugadores $i, j \in N$ son <strong>intercambiables</strong> si
                    para cualquier coalición $S$ de la cual no hacen parte, añadirlos
                    contribuye lo mismo: $$v(S\cup{i})=v(S\cup{j})$$</li>
                <li>El <strong>concepto de solución</strong> $\varphi$ es simétrico si
                    $$\varphi_i(N, v) = \varphi_j(N, v)$$</li>
            </ul></li>
        <li><p><strong>Jugador nulo</strong>:</p>
            <ul>
                <li>Un <strong>jugador nulo</strong> $j_{\text{nulo}}$ es uno que no
                    aporta nada a ninguna coalición. $$v(S\cup {j_{\text{nulo}}}) =
                    v(S)$$</li>
                <li>Un concepto de solución razonable no debería darle nada al jugador
                    nulo: $$\varphi_{j_{\text{nulo}}} (N, v) = 0$$</li>
            </ul></li>
        <li><p><strong>Aditividad</strong>: Dados dos juegos cooperativos con
            los mismos jugadores, $(N, v_1)$ y $(N, v_2)$, son aditivos:
            $$\varphi_i(N,v_1) + \varphi_i(N,v_2) = \varphi_i(N,v_1+v_2) $$</p></li>
    </ul>
    <h4>Definición</h4>
    <p>El valor de Shapley es el promedio de los vectores marginales.</p>
    <p>Se tiene un juego cooperativo de utilidad transferible $(N, v)$.</p>
    <ol type="1">
        <li><p>Se define una función $\sigma\colon \mathbb{N} \to N$, que a cada
            número real le asigna un jugador. En concreto, $\sigma$ recibe una
            <em>posición</em>, el orden en el que un jugador dado entró a la
            coalición, y retorna el jugador.</p>
            <ul>
                <li>Por ende, la función inversa $\sigma^{-1}\colon N \to \mathbb{N}$
                    recibe un jugador $i$ y retorna en qué posición, qué orden, entró a la
                    coalición.</li>
            </ul></li>
        <li><p>Se define una función $\mathbb{P}<em>\sigma$
            (<em>predecesores</em>) que recibe un jugador y retorna los jugadores
            que <em>ya hacían parte de la coalición antes de él</em>. Es decir
            $$\mathbb{P}</em>\sigma(i) = {k \in N\colon
            \sigma^{-1}(k)&lt;\sigma^{-1}(i)}$$</p></li>
        <li><p>Con eso, se define el <strong>vector de aportes
            marginales</strong>, denotado $m^\sigma$ $$(m_i^\sigma)<em>{i\in N} =
                (m_1^\sigma, m_2^\sigma, \ldots, m_n^\sigma),$$donde el valor marginal
                de cada jugador se calcula como $$m^\sigma_i =
                v(\mathbb{P}</em>\sigma(i)\cup {i}) - v(\mathbb{P}_\sigma(i)).$$Es
            decir: para el $i$-ésimo jugador, la contribución dada por su llegada a
            la coalición. El valor de la coalición con el jugador menos el valor que
            tenía la coalición antes de que llegara el jugador.</p></li>
        <li><p>El <strong>Valor de Shapley</strong> se define como el promedio
            de los vectores marginales.</p>
            <ul>
                <li>Se toma el conjunto de permutaciones de $N$ (entienda
                    <em>permutaciones</em> como posibles órdenes), $\Pi(N)$. Ese conjunto
                    tiene $n!$ elementos, la cantidad de posibles permutaciones. Con eso:
                    $$\operatorname{Sh}(v) = \frac{1}{n!}\sum_{\sigma \in
\Pi(N)}m^{\sigma}.$$ Nótese que en esa fórmula, $\text{Sh}(v)$ es un
                    vector: $$\text{Sh}(v) = (\text{Sh}<em>i(v))</em>{i\in N} =
                    (\text{Sh}_1(v), \text{Sh}<em>2(v),\ldots,\text{Sh}<em>n(v))$$ Para
                        calcular el valor de Shapley de un jugador específico, se utiliza su
                        aporte marginal $m_i^\sigma$ (el aporte marginal del jugador $i$ para la
                        permutación $\sigma$): $$\begin{gather *} \operatorname{Sh}<em>i(v) =
                            \frac{1}{n!}\sum</em>{\sigma \in \Pi(N)}m_i^{\sigma}\
                        \operatorname{Sh}<em>i(v) = \frac{1}{n!} \sum</em>{\sigma \in \Pi(N)}
                        v(\mathbb{P}</em>\sigma(i)\cup {i}) - v(\mathbb{P}</em>\sigma(i))
                    \end{gather *}$$ Hay otras dos formas de calcular el valor de Shapley
                    para un jugador.</li>
            </ul></li>
        <li><p>Para las coaliciones que <strong>contienen al jugador</strong>.
            Para cada coalición, $|S|=s$ y $|N|=n$: $$\text{Sh}<em>i(v) =
                \sum</em>{S \cup {i} \subseteq N} \frac{(s - 1)!(n - s)!}{n!}
            (v(S)-v(S\setminus{i}))$$ donde:</p>
            <ul>
                <li>La sumatoria se realiza sobre toda coalición $S$ que <strong>no
                    contiene</strong> al jugador $i$.</li>
                <li>$n!$ es el número de formas en que se pueden ordenar todos los
                    jugadores, el número de permutaciones de $\Pi(N)$.</li>
                <li>Combinatoria: $(s-1)!(n-s)!$ #TODO: Semántica de esta mrda</li>
                <li>El término $(v(S)-v(S\setminus{i}))$ es el aporte marginal del
                    jugador: el valor de una coalición con el jugador menos el de esa misma
                    sin él. Eso da lo que el jugador aporta a la coalición.</li>
            </ul></li>
        <li><p>Para las coaliciones que <strong>no contienen al
            jugador</strong>: $$\operatorname{Sh}<em>i(v) = \sum</em>{S\subseteq
            N\setminus{i}} \frac{s!(n - s - 1)!}{n!}(v(S\cup{i})-v(S))$$</p>
            <ul>
                <li>La sumatoria se realiza sobre toda coalición $S$ que <strong>sí
                    contiene</strong> al jugador $i$.</li>
                <li>$n!$ es el número de formas en que se pueden ordenar todos los
                    jugadores, el número de permutaciones de $\Pi(N)$.</li>
                <li>Combinatoria: $s!(n-s-1)!$ #TODO: Semántica!!!</li>
                <li>El término $(v(S\cup{i})-v(S))$ es el aporte marginal del jugador:
                    el valor de una coalición con el jugador menos el de esa misma sin él.
                    Eso da lo que el jugador aporta a la coalición. Nótese que el
                    significado es el mismo de antes, pero la fórmula es distinta, pues $S$
                    en ambos representa cosas diferentes: en la fórmula anterior, $S$
                    incluye a $i$; en esta no.</li>
            </ul></li>
    </ol>
    <h2>Juegos de información incompleta</h2>
    <p>Al menos un jugador <strong>desconoce el pago</strong> que recibe
        algún jugador en algún perfil estratégico (nodo terminal del árbol en la
        forma extendida).</p>
    <p>Quizá desconoce su propio pago en un perfil estratégico o el de
        otros, puede que dependa de cosas que solo otros jugadores conocen.</p>
    <p>Son complejos: tocaría mirar las creencias del jugador sobre las
        preferencias de otros, sus creencias sobre las creencias de los otros
        sobre sus preferencias, y así.</p>
    <p>Solución (John Harsanyi, 1967): Se pasa de un juego de información
        incompleta a varios juegos de información <em>completa pero
            imperfecta</em>, que constituyen un <strong>juego Bayesiano de
                información incompleta</strong>.</p>
    <h3>Juego Bayesiano de información incompleta</h3>
    <p>Hay dos definiciones: la definición de Aumann, usando un <em>common
        prior</em> (antecedente común), y la definición de Harsanyi, usando
        tipos de jugadores.</p>
    <p>Me gusta más (es más útil) la de Harsanyi.</p>
    <h4>Definición de Aumann</h4>
    <p>Se modela como un conjunto de juegos, que difieren únicamente en los
        pagos (mismos jugadores y estrategias).</p>
    <p>Todos los jugadores tienen las mismas creencias sobre cada juego
        (<em>common priori</em> o antecedente común), que se modelan como una
        distribución de probabilidad.</p>
    <p>Un <strong>juego Bayesiano</strong> es una tupla $(N, G, P, I)$,
        donde</p>
    <ul>
        <li>$N$ es el conjunto finito de jugadores.</li>
        <li>$G$ es un conjunto de juegos, cada uno con el mismo conjunto $N$.
            <ul>
                <li>Cada $j \in N$ tiene el mismo conjunto de estrategias $S_j$ en cada
                    juego.</li>
            </ul></li>
        <li>$P$ es una distribución de probabilidad definida sobre el conjunto
            de juegos $G$. Es el <em>common prior</em>.
            <ul>
                <li>$P\in \Delta G$ donde $\Delta G$ denota el conjunto de posibles
                    distribuciones de probabilidad sobre $G$.</li>
            </ul></li>
        <li>$I = (I_i)_{i\in N}$ es una tupla con particiones de información de
            los juegos en $G$.
            <ul>
                <li>$I_j$ es la partición del jugador $j$, #TODO: <em>Semántica de esa
                    vaina</em></li>
            </ul></li>
    </ul>
    <h4>Definición de Harsanyi</h4>
    <p>Un <strong>juego de Harsanyi</strong> (juego Bayesiano, pero
        entendido de otra forma), es una tupla$$(N, (T_i)<em>{i\in N}, p, S,
            (s_t)</em>{t\in T})$$donde:</p>
    <ul>
        <li>$N$ es el conjunto finito de jugadores.</li>
        <li>$T_j$ es el conjunto finito de tipos del jugador $j$.
            <ul>
                <li>El tipo del jugador resume la info importante: acciones y
                    pagos.</li>
                <li>El conjunto de combinaciones de tipos es $T=\prod_{i\in N}
                    T_i$.</li>
                <li>Cada jugador <strong>conoce su tipo</strong> $t_j \in T_j$, pero
                    tiene una distribución de probabilidad sobre los tipos de los demás
                    (cómo cree que se comportarán): a cada combinación de tipos de los
                    otros, $(t_i)<em>{i\in N \setminus {j}} \in T</em>{-j}$, asocia una
                    probabilidad, $$p((t_i)<em>{i\in N \setminus {j}}) = p(t_1,\ldots,
                        t</em>{j - 1}, t_{j + 1},\ldots,t_n)$$</li>
            </ul></li>
        <li>$p\colon T\to [0,1] \subset \mathbb{R}$ es una distribución de
            probabilidad sobre el conjunto de posibles combinaciones de tipos.
            <ul>
                <li>$p \in \Delta T$, donde $\Delta T$ es el conjunto de posibles
                    distribuciones de probabilidad sobre $T$, el conjunto de posibles
                    combinaciones de tipos.</li>
                <li>Cada jugador <strong>conoce la distribución de probabilidad</strong>
                    $p$. Cada jugador puede calcular la probabilidad de los tipos de los
                    demás, dado que un jugador $j$ tiene cierto tipo $t_j$ ([[Teoría de
                    Juegos#Recordatorio Probabilidad condicional y Bayes|recordatorio
                    probabilidad condicional]]): $$p((t_i)<em>{i\in N\setminus {j}} |t_j) =
                        \frac{(t_i)</em>{i\in N}}{p(t_j)}$$ donde $p(t_j) = \sum_{i\neq
                    j;\hat{t}_i \in T_i} p(\hat{t}_1,\ldots,t_j,\ldots,\hat{t}_n).$</li>
            </ul></li>
        <li>$S$ son los estados del juego, cada uno un [[Teoría de Juegos#Forma
            normal o estratégica|juego en forma estratégica]], $$s = (N,
            (A_i)<em>{i\in N},(u_i)</em>{i\in N}) \in S$$
            <ul>
                <li>Recuérdese que un juego en forma estratégica es de la forma $(N, S,
                    u)$. Arriba se usa $A$ para no confundir el conjunto de perfiles
                    estratégicos $S=A$ con el conjunto de estados $S$ en este contexto.</li>
            </ul></li>
        <li>$(s_t)_{t\in T} \in S^{| T |}$ tiene un estado del juego $s_t$ para
            cada combinación de tipos $t \in T$.
            <ul>
                <li>Las acciones de un jugador en un estado de juego dependen únicamente
                    de su tipo, no de los demás jugadores.</li>
            </ul></li>
    </ul>
    <p>Entonces, ¿cómo es el juego?</p>
    <ol type="1">
        <li>Al azar, se elige una combinación de tipos de jugadores $t =
            (t_i)_{i\in N} \in T$, de acuerdo con la distribución de probabilidad $p
            \in \Delta T$.
            <ul>
                <li>Cada jugador conoce su tipo, el de los demás no.</li>
            </ul></li>
        <li>Cada jugador elige una acción (simultáneamente) y recibe de ella un
            pago.
            <ul>
                <li>El pago está dado por una función $u_i\colon T \times A \to
                    \mathbb{R}$, i.e., la utilidad para el jugador $i$ depende del tipo de
                    todos los jugadores y de las acciones de todos los jugadores,
                    $u_i(t_1,\ldots,t_n,a_1,\ldots,a_n)$.</li>
            </ul></li>
    </ol>
    <p>Un juego de información incompleta se modela con $x$ matrices, donde
        $x$ es la suma de la cantidad de tipos de cada jugador.</p>
    <p>Puede modelarse también en forma extensiva, como juego de información
        imperfecta (con conjuntos de información no triviales) con movimientos
        aleatorios.</p>
    <h4>Estrategias</h4>
    <p>Para estos juegos se definen estrategias puras y mixtas de forma
        análoga a antes.</p>
    <p>Una <strong>estrategia pura</strong> es una función $s_j$ que
        especifica una acción para el jugador $j$ de tipo $t_j$. El jugador $j$,
        cuando es de tipo $i$, tiene disponibles las acciones $s_j(t_i)$.</p>
    <p>Una <strong>estrategia mixta</strong> $\sigma_i (t_i)$ es una
        distribución de probabilidad sobre las estrategias puras, igual que
        antes.</p>
    <blockquote>
        <p>[!tip] Teorema de Kuhn Toda estrategia mixta es equivalente a una
            estrategia de comportamiento.</p>
    </blockquote>
    <p>Una estrategia de comportamiento $\sigma_i$ es una función que a cada
        tipo de jugador $t_i \in T_i$ asigna una distribución de probabilidad
        sobre las acciones disponibles para ese tipo. $$\sigma_i\colon T_i \to
        \cup_{t_i \in T_i}\Delta(A_i(t_i))$$ Donde $\Delta A_i(t_i)$ es el
        conjunto de distribuciones de probabilidad sobre las acciones que están
        disponibles a $t_i$. En concreto: $\sigma_i(t_i\colon a_i)$ es la
        probabilidad de que el jugador $i$ de tipo $t_i$ escoja la acción
        $a_i$.</p>
    <h4>Exante, interim y expost</h4>
    <p><strong>Exante</strong>: No sabe nada. El jugador desconoce los tipos
        de los jugadores (inclusive su tipo). <strong>Interim</strong>: Sabe su
        tipo, pero desconoce los tipos de las demás. <strong>Expost</strong>:
        Sabe todo. Juego de información completa.</p>
    <p>El pago esperado en exante está dado por valores esperados. El pago
        en interim se calcula como probabilidad condicional (con base en el tipo
        del jugador).</p>
    <p>#TODO: Calcular pagos exante e interim.</p>
    <h3>Equilibrio perfecto bayesiano</h3>
    <p>Un concepto de solución, análogo al equilibrio de Nash y a
        equilibrios perfectos en subjuegos.</p>
    <p><strong>Creencia</strong>: Es una distribución de probabilidad sobre
        los nodos de un conjunto de información.</p>
    <ul>
        <li>Si el conjunto de información es trivial (un nodo), la distribución
            de probabilidad es trivial y asigna probabilidad 1: no hay creencia, hay
            certeza.</li>
    </ul>
    <p>Un <strong>equilibrio perfecto bayesiano</strong> es como un
        equilibrio perfecto en subjuegos, pero en los conjuntos de información
        no triviales, se utilizan creencias para decidir.</p>
    <p>![[Pasted image 20230530032045.png]]</p>
    <p>Con la parte derecha del árbol, que no tiene conjuntos de información
        no triviales, se hace inducción hacia atrás normal. Eso da que el
        equilibrio perfecto en subjuegos debe ser $(Ca, _R)$.</p>
    <ul>
        <li>Se sabe que el jugador I elije $C$ sobre $A$ y $B$, porque en ese
            caso se asegura de utilidad $8$: elije entre $(8,4)$ que subió por $R$ y
            $(8,8)$ que subió por $a$. Mientras que con $A$ o $B$,
            independientemente de qué utilidad de las 4 suba, su máximo es 7, de
            $(7,2)$.</li>
        <li>El espacio que se deja es para si el jugador $II$ debería jugar $l$
            o $r$ en la parte izquierda.</li>
    </ul>
    <p>Ahí viene lo nuevo: para que $II$ pueda elegir, le asigna a $A$ una
        probabilidad $\alpha$ y a $B$ una probabilidad $1-\alpha$. Con eso, se
        calcula el valor esperado de jugar $l$ y el de jugar $r$:
        $$\begin{gather *} l: 1\alpha+3(1-\alpha)\ r: 2\alpha+0(1-\alpha)
        \end{gather *}$$Nótese que se usan las utilidades de $2$. Se igualan, y
        se tiene que son iguales cuando $\alpha = \frac{1}{4}$. Con eso, si
        $\alpha \geq \frac{1}{4}$, se debería elegir $r$, pero si $\alpha \leq
        \frac{1}{4}$, se debería elegir $l$.</p>
    <p>Se tienen entonces dos equilibrios Bayesianos: $(Ca, lR)$ con
        creencias $\alpha \leq \frac{1}{4}$ y $(Ca, rR)$ con creencias $a\geq
        \frac{1}{4}$.</p>
    <p>Todo equilibrio bayesiano es un equilibrio de Nash.</p>
    <h3>Juegos de señalización</h3>
    <p>Son juegos de información incompleta donde:</p>
    <ul>
        <li>Primero, aleatoriamente se escoge el tipo de un jugador. Ese jugador
            es <em>interim</em> (sabe su tipo, no el del resto)</li>
        <li>Cada acción de ese jugador es, para los demás, una
            <strong>señal</strong>: con eso, pueden intentar inferir su tipo.</li>
    </ul> */}
    </NoteDocument>
);

export default TeoriaDeJuegos;
