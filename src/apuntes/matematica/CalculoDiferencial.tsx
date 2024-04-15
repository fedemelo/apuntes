import NoteDocument from '@/components/notes/NoteDocument';
import Math from '@/math/Math';

import Example from '@/components/notes/environments/Example';

const CalculoDiferencial = () => <NoteDocument>
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
        En estos apuntes, se estudian exclusivamente funciones escalares, de una variable y con valores reales. El estudio de funciones vectoriales y de múltiples variables se aborda en los <a href='/apuntes/matematica/calculo-vectorial'>apuntes de cálculo vectorial</a>. El estudio del cálculo para funciones con valores complejos se aborda en las <a href='/apuntes/matematica/calculo-de-variable-compleja'>notas de cálculo de variable compleja</a>.
    </p>
    <h1>Límites</h1>
    <p>
        El concepto de límite formaliza la noción de aproximarse a un valor tanto como se quiera sin alcanzar el valor en sí. Es sencillo comprender la intuición del límite mediante un ejemplo.
    </p>
    <Example>
        <Example.Title>Límite cuando <Math>x</Math> tiende a <Math>2</Math></Example.Title>

        Considérese la función <Math>f(x)=x-2</Math>. Se toman valores de <Math>x</Math> cercanos a <Math>2</Math>, por ejemplo <Math>1.9</Math>, <Math>2.05</Math> o cualquier otro valor arbitrariamente cercano. Se puede evidenciar que al evaluar la función en cualquiera de esos valores, el resultado siempre es un número cercano a <Math>0</Math>:
        <Math block>
            f(1.9)=1.9-2=-0.1 \\
            f(2.05)=2.05-2=0.05
        </Math>
        Se dice, entonces, que el límite de <Math>f(x)</Math> cuando <Math>x</Math> tiende a <Math>2</Math> es igual a <Math>0</Math>. Eso se denota por <Math>{`\\displaystyle \\lim_{x\\to 2}f(x)=0`}</Math>.
    </Example>
    <p>
        Generalizando lo anterior, si <Math>f(x)</Math> tiende a un valor <Math>L</Math> a medida que <Math>x</Math> tiende a un valor <Math>c</Math>, se escribe <Math>{`\\displaystyle \\lim_{x\\to c} f(x)=L`}</Math>.
    </p>
    <p>
        Si el límite existe, se puede acercar <Math>f(x)</Math> a un valor <Math>L</Math> tanto como se quiera, sin llegar a <Math>L</Math>, si se toman valores de <Math>x</Math> lo suficientemente cercanos a <Math>c</Math>. 
        {/* NOTA PARA MATEMÁTICOS??? */}
        Es decir, dado un valor <Math>{`\\varepsilon`}</Math> para la cercanía entre <Math>f(x)</Math> y <Math>L</Math>, es posible hallar un valor <Math>{`\\delta`}</Math> para la cercanía entre <Math>x</Math> y <Math>c</Math>, tal que si <Math>x</Math> está a menos de <Math>{`\\delta`}</Math> unidades de <Math>c</Math>, entonces <Math>f(x)</Math> está a menos de <Math>{`\\varepsilon`}</Math> unidades de <Math>L</Math>. Así pues, el límite existe si y solamente si dado cualquier <Math>{`\\varepsilon>0`}</Math> existe un <Math>{`\\delta>0`}</Math>, tal que si la distancia entre <Math>x</Math> y <Math>c</Math> es menor que <Math>{`\\delta`}</Math>, entonces la distancia entre <Math>f(x)</Math> y <Math>L</Math> es menor que <Math>{`\\varepsilon`}</Math>.
    </p>
</NoteDocument>

export default CalculoDiferencial;