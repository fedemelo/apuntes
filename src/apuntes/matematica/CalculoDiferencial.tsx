import NoteDocument from "@/components/notes/NoteDocument";
import Example from "@/components/notes/environments/Example";
import LaTeX from "@/math/LaTeX";
import M from "@/math/ASCIIMath";

const CalculoDiferencial = () => (
    <NoteDocument>
        <h1>Cálculo diferencial</h1>
        <p>
            El <em>cálculo diferencial</em> es la rama del cálculo que estudia el cambio en funciones continuas, en particular, la derivación. Estos apuntes estudian el cálculo diferencial en tres secciones:
        </p>
        <ol>
            <li>Definición y estudio de los límites. Esto posibilita la definición de derivada.</li>
            <li>Definición y estudio la derivada.</li>
            <li>Aplicaciones de la derivada.</li>
        </ol>
        <p>
            En estos apuntes, se estudian exclusivamente funciones escalares, de una variable y con valores reales. El estudio de funciones vectoriales y de múltiples variables se aborda en los <a href="/apuntes/matematica/calculo-vectorial">apuntes de cálculo vectorial</a>. El estudio del cálculo para funciones con valores complejos se aborda en las <a href="/apuntes/matematica/calculo-de-variable-compleja">notas de cálculo de variable compleja</a>.
        </p>
        <h2>Límites</h2>
        <p>El concepto de límite formaliza la noción de aproximarse a un valor tanto como se quiera sin alcanzar el valor en sí. Es sencillo comprender la intuición del límite mediante un ejemplo.</p>
        <Example>
            <Example.Title>
                Límite cuando <M>x</M> tiende a <M>2</M>
            </Example.Title>
            Considérese la función <M>f(x)=x-2</M>. Se toman valores de <M>x</M> cercanos a <M>2</M>, por ejemplo <M>1.9</M>, <M>2.05</M> o cualquier otro valor arbitrariamente cercano. Se puede evidenciar que al evaluar la función en cualquiera de esos valores, el resultado siempre es un número cercano a <M>0</M>:<LaTeX block>f(1.9)=1.9-2=-0.1 \\ f(2.05)=2.05-2=0.05</LaTeX>
            Se dice, entonces, que el límite de <M>f(x)</M> cuando <M>x</M> tiende a <M>2</M> es igual a <M>0</M>. Eso se denota por <M>lim_(x to 2)f(x)=0</M>.
        </Example>
        <p>
            Generalizando lo anterior, si cuando <M>x</M> tiende a un valor <M>c</M>, entonces <M>f(x)</M> tiende a un valor <M>L</M>, se escribe <M>lim_(x to c) f(x)=L</M> y se dice que <M>L</M> es el límite de <M>f(x)</M> cuando <M>x</M> tiende a <M>c</M>.
        </p>
        <p>
            Dicho de otra forma: el límite existe si se puede acercar <M>f(x)</M> a un valor <M>L</M> tanto como se quiera, sin llegar a <M>L</M>, tomando valores de <M>x</M> lo suficientemente cercanos a <M>c</M>.
        </p>
        <p>La definición recién presentada es intuitiva, pero no es precisa, por lo que carece de rigor matemático. Existe una definición formal de límite, que para la gran mayoría de los estudiantes de cálculo es innecesaria. No obstante, cuentan los prerrequisitos teóricos necesarios para entenderla, por lo cual se presenta a continuación.</p>
        {/* <MathematiciansNote>
        <MathematiciansNote.Title>Definición formal de límite</MathematiciansNote.Title>

        Es decir, dado un valor <Math>{`\\varepsilon`}</Math> para la cercanía entre <Math>f(x)</Math> y <Math>L</Math>, es posible hallar un valor <Math>{`\\delta`}</Math> para la cercanía entre <Math>x</Math> y <Math>c</Math>, tal que si <Math>x</Math> está a menos de <Math>{`\\delta`}</Math> unidades de <Math>c</Math>, entonces <Math>f(x)</Math> está a menos de <Math>{`\\varepsilon`}</Math> unidades de <Math>L</Math>. Así pues, el límite existe si y solamente si dado cualquier <Math>{`\\varepsilon>0`}</Math> existe un <Math>{`\\delta>0`}</Math>, tal que si la distancia entre <Math>x</Math> y <Math>c</Math> es menor que <Math>{`\\delta`}</Math>, entonces la distancia entre <Math>f(x)</Math> y <Math>L</Math> es menor que <Math>{`\\varepsilon`}</Math>.
    <MathematiciansNote> */}
    </NoteDocument>
);

export default CalculoDiferencial;
