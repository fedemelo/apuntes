import { Definition, Theorem } from "@/components/notes/environments/Boxes";
import Proof from "@/components/notes/environments/Proof";
import Properties from "@/components/notes/environments/Properties";
import { Notation, Tip } from "@/components/notes/environments/StickyNotes";
import Epigraph from "@/components/notes/Epigraph";
import NoteDocument from "@/components/notes/NoteDocument";
import Section from "@/components/notes/Section";
import { referenceById } from "@/components/utils/hyperlinkManager";
import M, { r } from "@/math/LaTeX";
import { DIFFERENTIAL_CALCULUS, INTEGRAL_CALCULUS } from "@/Router";

const CalculoIntegral = () => (
  <NoteDocument>

    <h1>Cálculo Integral</h1>

    <p>
      El cálculo integral utiliza integración en el estudio de la variación de variables y funciones. Estos apuntes estudian el cálculo integral en cuatro secciones:
    </p>
    <ul>
      <li> La integral indefinida o antiderivada como el proceso inverso a la derivación.</li>
      <li> La integral definida como la solución a un problema geométrico.</li>
      <li> La relación entre integral definida e indefinida mediante el Teorema Fundamental del Cálculo.</li>
      <li> Técnicas de integración.</li>
      <li> Aplicaciones geométricas de las integrales definidas.</li>
    </ul>

    <Section title="La integral indefinida">
      <p>
        Esta sección presenta la antiderivación como el proceso inverso a la derivación. Tras eso, presenta la integral indefinida como la antiderivada más general de una función y muestra algunas integrales indefinidas básicas.
      </p>
      <Definition concept="Antiderivada">
        Sea <M>{r`f`}</M> una función derivable, <M>{r`f(x)`}</M> es una <em>antiderivada</em> de <M>{r`f'(x)`}</M>.
      </Definition>
      <p>
        Toda función tiene múltiples antiderivadas. La antiderivada más general de cualquier función se obtiene sumando una constante arbitraria <M>{r`C \in \mathbb{R}`}</M> a una antiderivada particular, puesto que la derivada de <M>{r`C`}</M> es 0. A la antiderivada más general de una función se le denomina su <em>integral indefinida</em>.
      </p>
      <Definition concept="Integral indefinida">
        Sea <M>{r`f`}</M> una función derivable, la antiderivada más general de <M>{r`f'(x)`}</M> es <M>{r`f(x)+C`}</M> y se le denomina <em>integral indefinida</em>. La integral indefinida se denota con la notación de Leibniz:
        <M block>
          {r` \indint{f'(x)}{x} = f(x) + C.`}
        </M>
      </Definition>
      <p>
        En la definición, <M>{r` f'(x) `}</M> es el <em>integrando</em> y <M>{r` \mathrm{d} x `}</M> es el <em>diferencial</em> de la variable independiente.
      </p>

      <Notation>
        El símbolo <M>{r` \int `}</M> usado en la notación de Leibniz representa una "S" alargada, como inicial de "suma" o "sumatoria", aludiendo al origen de la integral. De hecho, la palabra "integral" significa total de algo, suma de partes.
      </Notation>

      <Properties
        title="Propiedades de la integral indefinida"
        properties={[
          {
            name: "Linealidad",
            formula: <M>{r`\indint{(f(x) \pm g(x))}{x} = \indint{f(x)}{x} \pm \indint{g(x)}{x}`}</M>
          },
          {
            name: "Homogeneidad",
            formula: <M>{r`\indint{a \cdot f(x)}{x} = a \cdot \indint{f(x)}{x}`}</M>
          }
        ]}
      />

      <h3>Integrales indefinidas a partir de las reglas de derivación</h3>

      <p>
        Como la integración indefinida es opuesta a la derivación, es posible integrar instantáneamente las funciones que se sabe que son derivadas de alguna otra función. Es decir, es posible construir un catálogo de integrales indefinidas básicas simplemente invirtiendo las {referenceById("reglas de derivación", DIFFERENTIAL_CALCULUS, "reglas-de-derivacion", "")}. A modo de repaso de las reglas de derivación, se muestran ese catálogo. Omito las funciones hiperbólicas y sus inversas.
      </p>

      <Properties
        title="Integrales indefinidas básicas"
        properties={[
          {
            name: 'Integral de una constante',
            formula: <M>{r`\indint{a}{x} = a x + C.`}</M>
          },
          {
            name: 'Integral de una potencia',
            formula: <M>{r`\indint{x^a}{x} = \frac{x^{a+1}}{a+1} + C.`}</M>
          },
          {
            name: 'Integral de la función exponencial',
            formula: <M>{r`\indint{a^x}{x} = \frac{a^x}{\ln a} + C.`}</M>,
            note: <span>Si la base del exponente es <M>{r`\mathrm{e}`}</M>, la regla se reduce a <M>{r`\indint{\mathrm{e}^x}{x} = \mathrm{e}^x + C.`}</M></span>
          },
          {
            name: 'Integral de una derivada dividida por la función',
            formula: <M>{r`\indint{\frac{f'(x)}{f(x)}}{x} = \ln|f(x)| + C.`}</M>,
            note: <span>Esta regla se obtiene de la derivada del logaritmo natural de <M>{r`f(x)`}</M>, que se calcula directamente con la regla de derivación <M>{r`\der{\ln|x|}{x} = \frac{1}{x}`}</M> y la regla de la cadena.</span>
          }
        ]}
      />

      <Properties
        title="Integrales de las derivadas de las funciones trigonométricas"
        initialCountValue={4}
        properties={[
          {
            name: 'Integral de seno',
            formula: <M>{r`\indint{\sin x}{x} = -\cos x + C.`}</M>
          },
          {
            name: 'Integral de coseno',
            formula: <M>{r`\indint{\cos x}{x} = \sin x + C.`}</M>
          },
          {
            name: 'Integral de secante cuadrado',
            formula: <M>{r`\indint{\sec^2 x}{x} = \tan x + C.`}</M>
          },
          {
            name: 'Integral de secante por tangente',
            formula: <M>{r`\indint{\sec x \tan x}{x} = \sec x + C.`}</M>
          },
          {
            name: 'Integral de cosecante por cotangente',
            formula: <M>{r`\indint{\csc x \cot x}{x} = -\csc x + C.`}</M>
          },
          {
            name: 'Integral de cosecante cuadrado',
            formula: <M>{r`\indint{\csc^2 x}{x} = -\cot x + C.`}</M>
          }
        ]}
      />
      <p>
        Nótese que estas no son las antiderivadas de las funciones trigonométricas, sino más bien las integrales definidas de las derivadas de las funciones trigonométricas. Para obtener las integrales de las funciones trigonométricas faltantes, tangente, cotangente, secante y cosecante, es necesario utilizar una técnica de integración: la {referenceById("integración por partes", INTEGRAL_CALCULUS, "integracion-por-partes", "")}.
      </p>

      <Properties
        title="Integrales de las funciones trigonométricas inversas"
        initialCountValue={4 + 6}
        properties={[
          {
            name: 'Integral de la derivada de arco seno',
            formula: <M>{r`\indint{\dfrac{1}{\sqrt{1-x^2}}}{x} = \arcsin x + C = -\arccos x + C.`}</M>
          },
          {
            name: 'Integral de la derivada de arco tangente',
            formula: <M>{r`\indint{\dfrac{1}{1+x^2}}{x} = \arctan x + C = -\arccot x + C.`}</M>
          },
          {
            name: 'Integral de la derivada de arco secante',
            formula: <M>{r`\indint{\dfrac{1}{x\sqrt{x^2-1}}}{x} = \arcsec x + C = -\arccsc x + C.`}</M>
          }
        ]}
      />
      <p>
        Recuérdese que para las funciones trigonométricas inversas, la derivada de la función es igual a la derivada de la cofunción pero con signo negativo. Ese comportamiento se traduce a las integrales indefinidas, lo cual permite expresar cada antiderivada de dos maneras.
      </p>

    </Section>

    <Section title="La integral definida">

      <h3>Problema del área bajo la curva y sumas de Riemann</h3>

      <p>
        La integral definida surge como respuesta a un problema geométrico: hallar el área de una región delimitada por curvas. Hallar el área de regiones con lados rectos, como polígonos, es posible con métodos propios de la geometría euclidiana, pero hallar el área de una región encerrada por curvas curvos no. Para aproximar el área de una región entre curvas usualmente se utiliza el método de exhausción, que consiste en inscribir en la región polígonos de área conocida cuyas áreas, en conjunto, convergen al área de la región. Esa es la idea que impulsa la definición de la integral definida.
      </p>
      <p>
        Considérese el problema, más específico, de hallar el área bajo la gráfica de una función positiva y continua <M>{r`f`}</M> en un intervalo <M>{r`[a,b]`}</M>. Para aproximar ese área, se pretende inscribir en ella múltiples rectángulos, de forma que su base esté en el eje <M>{r`x`}</M> y que tengan una altura que toque la curva. Para el primer rectángulo, los vértices de su base los representan los puntos <M>{r`(x_0,0)`}</M> y <M>{r`(x_1,0)`}</M>. Si la distancia entre los vértices se denota por <M>{r`\Delta x=x_1-x_0`}</M>, la longitud de la base <M>{r`b`}</M> del rectángulo es igual a <M>{r`\Delta x`}</M>. Para la altura <M>{r`h`}</M> del rectángulo, se toma algún valor de la base, denominado <em>punto de muestra</em> y denotado por <M>{r`x^*`}</M>, tal que allí el rectángulo y la curva intersequen, de forma que <M>{r`h=f(x^*)`}</M>. Teniendo la base y la altura del rectángulo, se pueden reemplazar los valores en la fórmula del área de un rectángulo conocida de la Geometría Euclidiana:
        <M block>
          {r`A_{\text{rectángulo}} = b\cdot h = \Delta x \cdot f(x^*).`}
        </M>
      </p>
      <p>
        Esa fórmula puede ser utilizada para <M>{r`n`}</M> rectángulos que tengan bases iguales sobre el eje <M>{r`x`}</M> en un intervalo <M>{r`[a,b]`}</M>. Cada rectángulo tendrá entonces base <M>{r`\Delta x = \frac{b-a}{n}`}</M> y cualquier vértice <M>{r`x_i`}</M> de un rectángulo se puede obtener a partir del punto inicial del intervalo: <M>{r`x_i=a+i\Delta x`}</M>. La altura de cada rectángulo está entonces dada por <M>{r`f(x_i^*)`}</M>. Sumando las áreas de los rectángulos se obtiene lo que se denomina <em>Suma de Riemann</em>, que aproxima el área de la región bajo la curva:
        <M block>
          {r`A_{n \text{ rectángulos}} = \sum_{i=1}^{n}f(x_i^*)\Delta x.`}
        </M>
      </p>
      <p>
        Para obtener el área exacta de la región bajo la curva, se necesita sumar el área de infinitos rectángulos, por lo que se toma el límite cuando el número de rectángulos <M>{r`n`}</M> tiende a infinito de la Suma de Riemann.
      </p>
      <Definition concept="Área bajo la curva">
        Se define el <em>área de la región bajo la curva</em> <M>{r`y=f(x)`}</M> en el intervalo cerrado <M>{r`[a,b]`}</M> como el límite al infinito de la suma de las áreas de <M>{r`n`}</M> rectángulos con base <M>{r`\Delta x=\frac{b-a}{n}`}</M> y puntos de muestra <M>{r`x_i^* \in [x_{i-1}, x_i]`}</M> si <M>{r`x_i=a+i\Delta x`}</M>:
        <M block>
          {r`A = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\Delta x.`}
        </M>
      </Definition>
      <p>
        El área de la región bajo una curva da origen al concepto de integral definida.
      </p>
      <Definition concept="Integral definida">
        Sea <M>{r`f`}</M> una función definida en el intervalo cerrado <M>{r`[a,b]`}</M>, continua o con discontinuidades finitas. Se define la <em>integral definida</em> de <M>{r`f`}</M>, desde <M>{r`a`}</M> hasta <M>{r`b`}</M>, como el área de la región bajo la curva <M>{r`y=f(x)`}</M> en el intervalo <M>{r`[a,b]`}</M>:
        <M block>
          {r`\defint{f(x)}{x}{a}{b} = \lim_{n \to \infty} \sum_{i=1}^{n}f(x_i^*)\Delta x.`}
        </M>
      </Definition>
      <p>
        Mientras el límite exista, se dice que <M>{r`f`}</M> es <em>integrable</em> sobre <M>{r`[a,b]`}</M>. En la definición, <M>{r`a`}</M> es el <em>límite inferior</em> de la integral, <M>{r`b`}</M> el <em>límite superior</em>, <M>{r`f(x)`}</M> el integrando y <M>{r`\mathrm{d} x`}</M> el diferencial de la variable independiente. Nótese que, como una integral definida es el área bajo una curva, es simplemente un número real.
      </p>
      {/* TODO: Esto qué significa? Lo veré en Análisis? 
      <p>
        Formalmente, se tiene que para cualquier número <M>{r`\varepsilon >0`}</M> existe un número <M>{r`N \in \mathbb{Z}`}</M> tal que
        <M block>
          {r`\abs{\defint{f(x)}{x}{a}{b} - \sum_{i=1}^n f(x_i^*)\Delta x}<\varepsilon`}
        </M>
        para cualquier número entero <M>{r`n`}</M> tal que <M>{r`n>N`}</M> y para cualquier punto de muestra <M>{r`x_i^*`}</M> en <M>{r`[x_{i-1}, x_i]`}</M> si <M>{r`x_i=a+i\Delta x`}</M>.
      </p> */}
      <Theorem name="Función integrable">
        Si <M>{r`f`}</M> es una función continua sobre <M>{r`[a,b]`}</M> o tiene un número finito de discontinuidades de salto sobre <M>{r`[a,b]`}</M>, entonces <M>{r`f`}</M> es <em>integrable</em> sobre <M>{r`[a,b]`}</M>.
      </Theorem>

      <Properties
        title="Propiedades de la integral definida"
        description={<p>La integral definida posee las mismas propiedades de homogeneidad y linealidad de la integral indefinida, más algunas adicionales que consisten en manipulaciones de los límites de la integral. Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones integrables sobre <M>{r`[a,b]`}</M> y <M>{r`c \in \mathbb{R}`}</M> una constante.</p>}
        properties={[
          {
            name: "Cambio de límites en cambio de signo",
            formula: <M>{r`\defint{f(x)}{x}{a}{b}=-\defint{f(x)}{x}{b}{a}`}</M>
          },
          {
            name: "Integral definida de constante",
            formula: <M>{r`\defint{c}{x}{a}{b}=c(b-a)`}</M>
          },
          {
            name: "Propiedad de traslación",
            formula: <M>{r`\defint{f(x)}{x}{a}{b}=\defint{f(x)}{x}{a}{c}+\defint{f(x)}{x}{c}{b}`}</M>
          },
          {
            name: "Propiedad de linealidad",
            formula: <M>{r`\defint{(f(x) \pm g(x))}{x}{a}{b} = \defint{f(x)}{x}{a}{b} \mathbin{\pm} \defint{g(x)}{x}{a}{b}`}</M>
          },
          {
            name: "Propiedad de homogeneidad",
            formula: <M>{r`\defint{c \cdot f(x)}{x}{a}{b} = c \cdot \defint{f(x)}{x}{a}{b} `}</M>
          }
        ]}
      />

      <Properties
        title="Propiedades de comparación"
        description={<p>
          Las siguientes propiedades de comparación surgen naturalmente de la interpretación geométrica de la integral definida como el área bajo la curva. Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones integrables sobre <M>{r`[a,b]`}</M> y <M>{r`m, M \in \mathbb{R}`}</M> constantes.
        </p>}
        properties={[
          {
            name: "Función positiva, área positiva",
            formula: <M>{r`\text{Si } f(x) \geq 0, \text{ entonces } \defint{f(x)}{x}{a}{b} \geq 0`}</M>
          },
          {
            name: "Función mayor, área mayor",
            formula: <M>{r`\text{Si } f(x) \geq g(x), \text{ entonces } \defint{f(x)}{x}{a}{b} \geq \defint{g(x)}{x}{a}{b}`}</M>
          },
          {
            name: "Función acotada, área acotada",
            formula: <M>{r`\text{Si } m \leq f(x) \leq M, \text{ entonces } m(b-a) \leq \defint{f(x)}{x}{a}{b} \leq M(b-a)`}</M>,
            note: <span>Note que <M>{r`m(b-a)`}</M> y <M>{r`M(b-a)`}</M> son áreas de rectángulos.</span>
          }
        ]}
      />

      <h3>Integrales definidas de funciones particulares</h3>

      <h4>Integrales definidas de funciones con valor absoluto</h4>

      <p>
        Sea <M>{r`f`}</M> una función, la integral definida de <M>{r`\abs{f(x)}`}</M> no se puede calcular de forma directa. Es necesario evaluar la integral por aparte para intervalos positivos y negativos, usando <M>{r`f(x)`}</M> en los intervalos positivos y <M>{r`-f(x)`}</M> en los intervalos negativos.
      </p>
      <p>
        Para identificar los signos de cada intervalo, el método más directo es igualar la función a cero para conocer los ceros o interceptos de la función en el eje <M>{r`x`}</M>, con lo cual se definen intervalos en los que la función mantiene el signo. Tras eso, se aplica el cementerio de signos sobre la función sin valor absoluto, <M>{r`f(x)`}</M>, para conocer el signo de la función en cada intervalo. El cementerio de signos consiste en evaluar la función en un punto arbitrario de cada intervalo para determinar el signo de la función en ese intervalo.
      </p>
      <p>
        Formalmente, si existe un número <M>{r` c \in (a,b) `}</M> tal que el punto <M>{r`(c,0)`}</M> es un cero de <M>{r`f`}</M>, <M>{r`f(x)>0`}</M> en <M>{r`[a,c)`}</M> y <M>{r`f(x)<0`}</M> en <M>{r`(c,b]`}</M>, entonces:
        <M block>
          {r`\defint{\abs{f(x)}}{x}{a}{b} = \defint{f(x)}{x}{a}{c} - \defint{f(x)}{x}{c}{b}.`}
        </M>
      </p>

      <h4>Integrales definidas de funciones simétricas</h4>

      <p>
        Al calcular integrales definidas de funciones simétricas, se puede sacar provecho del tipo de simetría que presenta su gráfica en intervalos centrados en el origen para facilitar el cálculo. Recuérdese que una función de una variable puede ser <em>simétrica</em> de dos maneras: con respecto al eje de ordenadas, de forma que <M>{r`f(x) = f(-x)`}</M>, en cuyo caso se dice que la función es <em>par</em>; y con respecto al origen, tal que <M>{r`f(−x) = −f(x)`}</M>, caso en el cual se dice que la función es <em>impar</em>.
      </p>

      <p>
        Para funciones pares, como el comportamiento de la función es el mismo antes y después del origen, su integral definida en un intervalo simétrico alrededor del origen es el doble de la integral definida en la mitad positiva del intervalo.
      </p>

      <Theorem name="Integrales definidas de funciones pares" environmentName="Propiedad">
        Si <M>{r`f`}</M> es una función impar integrable sobre <M>{r`[-a,a]`}</M>, entonces:
        <M block>
          {r`\defint{f(x)}{x}{-a}{a} = 2 \defint{f(x)}{x}{0}{a}.`}
        </M>
      </Theorem>

      <p>
        Para funciones impares, como el comportamiento de la función es opuesto antes y después del origen, las áreas se cancelan y su integral definida en un intervalo simétrico alrededor del origen es cero.
      </p>

      <Theorem name="Integrales definidas de funciones impares" environmentName="Propiedad">
        Si <M>{r`f`}</M> es una función par integrable sobre <M>{r`[-a,a]`}</M>, entonces:
        <M block>
          {r`\defint{f(x)}{x}{-a}{a}=0.`}
        </M>
      </Theorem>

      <h3>Integrales impropias</h3>

      <p>
        La integrales impropias amplían la definición de integral definida, posibilitando integrales en intervalos infinitos, tener como integrandos a funciones con discontinuidades infinitas y la combinación de ambos casos.
      </p>

      <h4>Integrales impropias de primera especie: en intervalos infinitos</h4>

      <p>
        Las integrales definidas sobre intervalos infinitos, denominadas integrales impropias de primera especie o integrales impropias de tipo 1, se definen como el límite al infinito de integrales definidas en intervalos finitos. Concretamente:
      </p>
      <Definition concept="Integrales impropias de tipo 1">
        Si <M>{r`\defint{f(x)}{x}{a}{n}`}</M> existe para todo <M>{r`n \geq a`}</M>, entonces se define una <em>integral impropia de tipo 1</em> como<M block>
          {r`\defint{f(x)}{x}{a}{\infty} = \lim_{n \to \infty}\defint{f(x)}{x}{a}{n},`}
        </M>
        siempre que el límite exista y sea un número finito.

        Otra integral impropia de tipo 1, <M>{r`\defint{f(x)}{x}{-\infty}{b}`}</M>, se define de forma similar.
      </Definition>
      <p>
        Las integrales impropias recién definidas se denominan <em>convergentes</em> o se dice que <em>convergen</em> si el límite es igual a un número finito. De lo contrario, son <em>divergentes</em> o se dice que <em>divergen</em>.
      </p>
      <p>
        Se define también una tercera integral impropia de tipo 1 como la suma de las dos integrales impropias previas, siempre que ambas sean convergentes.
      </p>
      <Definition concept="Integral impropia de tipo 1">
        Sean <M>{r`\defint{f(x)}{x}{a}{\infty}`}</M> y <M>{r`\defint{f(x)}{x}{-\infty}{b}`}</M> integrales convergentes, entonces la siguiente integral impropia de tipo 1 está definida:
        <M block>
          {r`\defint{f(x)}{x}{-\infty}{\infty} = \defint{f(x)}{x}{a}{\infty} + \defint{f(x)}{x}{-\infty}{b}.`}
        </M>
      </Definition>
      {/* <p>
        TODO: Verificar
        Estas integrales impropias pueden ser interpretadas como áreas si y solamente si la función <M>{r`f`}</M> es positiva.
      </p> */}
      <p>
        Para la función recíproca es importante notar que <M>{r`\defint{\frac{1}{x^p}}{x}{1}{\infty}`}</M> es convergente si <M>{r`p>1`}</M> y divergente si <M>{r`p \leq 1`}</M>.
      </p>

      <h4> Integrales impropias de segunda especie: con discontinuidades infinitas</h4 >

      <p>
        Las integrales impropias con discontinuidades infinitas, denominadas integrales impropias de segunda especie o integrales impropias de tipo 2, se definen como límites de integrales continuas o con discontinuidades finitas, como se enuncia a continuación:
      </p>

      <Definition concept="Integrales impropias de tipo 2">
        Si <M>{r`f`}</M> es continua en <M>{r`[a,b)`}</M> y discontinua en <M>{r`b`}</M>, entonces se define una <em>integral impropia de tipo 2</em> como
        <M block>
          {r`\defint{f(x)}{x}{a}{b} = \lim_{n\to b^{-}} \defint{f(x)}{x}{a}{n},`}
        </M>
        siempre que exista el límite como un número finito.

        Análogamente, si <M>{r`f`}</M> es continua en <M>{r`(a,b]`}</M> y discontinua en <M>{r`a`}</M>, se define <M block>
          {r`\defint{f(x)}{x}{a}{b} = \lim_{n\to a^{+}} \defint{f(x)}{x}{n}{b},`}
        </M>
        si el límite existe y es un número finito.
      </Definition>

      <p>
        El criterio de convergencia y divergencia es el mismo para estas integrales impropias. Por ende también se puede definir lo siguiente con la suma de las dos integrales:
      </p>
      <Definition concept="Integral impropia de tipo 2">
        Sean <M>{r`f`}</M> una función con una discontinuidad en el punto <M>{r`c \in (a,b)`}</M>. Si <M>{r`\defint{f(x)}{x}{a}{c}`}</M> y <M>{r`\defint{f(x)}{x}{c}{b}`}</M> son integrales convergentes, entonces se define
        <M block>
          {r`\defint{f(x)}{x}{a}{b} = \defint{f(x)}{x}{a}{c} + \defint{f(x)}{x}{c}{b}.`}
        </M>
      </Definition >

      <h4>Determinación de convergencia o divergencia</h4>

      <p>
        Como se menciona en las subsecciones previas, las integrales impropias son convergentes si el límite que las define es igual a un número finito y divergentes de lo contrario. Las integrales convergentes representan áreas finitas y concretas, mientras que las divergentes representan áreas infinitas. Para saber si una integral es convergente o divergente sin realizar el cálculo de la integral, se hace uso del teorema de comparación.
      </p>

      < Theorem name="Teorema de comparación para integrales impropias" >
        Sean <M>{r`f`}</M > y <M>{r`g`}</M > funciones continuas tales que <M>{r`f(x) \geq g(x) \geq 0`}</M > para todo <M>{r`x\geq a`}</M >.
        < ul >
          <li> Si <M>{r`\defint{f(x)}{x}{a}{\infty}`}</M> es convergente, entonces <M>{r`\defint{g(x)}{x}{a}{\infty}`}</M> es convergente.</li>
          <li> Si <M>{r`\defint{g(x)}{x}{a}{\infty}`}</M> es divergente, entonces <M>{r`\defint{f(x)}{x}{a}{\infty}`}</M> es divergente.</li>
        </ul >
      </Theorem >

      <p>
        El teorema de comparación se basa en dos premisas. Primero, si una integral es convergente, el área bajo la función que actúa como integrando es finita, por lo que cualquier área menor que esa es finita. Segundo, si una integral es divergente, el área bajo la función que es integrando es infinita, por lo que cualquier área más grande que esa lo debe ser también.
      </p>
      <p>
        Algunas integrales son integrales impropias tanto de primera especie como de segunda especie. Eso significa que están definidas sobre un intervalo infinito y además en ese intervalo presentan una o más discontinuidades infinitas. Para evaluar ese tipo de integrales, se deben expresar como la suma de múltiples integrales impropias de distinta especie. Si tan solo una de las integrales en dicha suma es divergente, entonces toda la integral impropia es divergente.
      </p>
    </Section >

    <Section title="Teorema fundamental del cálculo">
      <p>
        El Teorema fundamental del cálculo traza la equivalencia entre la integral indefinida y la integral definida.
      </p>
      <Theorem name="Teorema fundamental del cálculo: Parte I">
        Sea <M>{r`f`}</M> una función continua sobre el intervalo cerrado <M>{r`[a,b]`}</M>. Si se define <M block>
          {r` g(x)=\defint{f(t)}{t}{a}{x},`}
        </M> entonces la función <M>{r`g`}</M> es derivable y <M>{r`g'(x)=f(x)`}</M>. Semejantemente: <M block>
          {r`g(x)=\defint{f(t)}{t}{x}{b} \implies g'(x) = -f(x) .`}
        </M>
      </Theorem>
      <p>
        La parte I del Teorema fundamental del cálculo puede ser usada para derivar funciones definidas como integrales, incluso cuando los límites superior e inferior no son constantes. Sea <M>{r`y`}</M> una función de la forma <M>{r`y=\defint{f(t)}{t}{g(x)}{h(x)}`}</M>, su derivada está dada como implicación de la parte I del Teorema fundamental del cálculo:
        <M block>
          {r`y'=f(h(x))h'(x)-f(g(x))g'(x)=(f \circ h)(x)h'(x)-(f \circ g)(x)g'(x).`}
        </M>
      </p>
      <p>
        La parte II del teorema fundamental del cálculo estipula cómo evaluar integrales definidas.
      </p>
      <Theorem name="Teorema fundamental del cálculo: Parte II">
        Sea <M>{r`f`}</M> cualquier antiderivada de la función <M>{r`f'`}</M>, entonces <M block>
          {r`\defint{f'(x)}{x}{a}{b} =f(x) \big|^b_a=[f(x)]^b_a=f(b)-f(a).`}
        </M>
      </Theorem>
    </Section>
    <Section title="Técnicas de integración">
      <Epigraph author="Cultura popular matemática">
        Derivar es mecánico, integrar es arte.
      </Epigraph>

      <p>
        Integrar es (mucho) más complicado que derivar. Derivar es un proceso algorítmico: basta con memorizar las reglas de derivación y seguir un proceso mecánico. Para integrar funciones, usualmente resulta necesario
      </p>
      <ul>
        <li> Conocer el catálogo de integrales indefinidas básicas.</li>
        <li> Conocer diversos métodos de integración.</li>
        <li> Seleccionar con criterio qué métodos aplicar y en qué orden. Esto rara vez es claro. Usualmente se requiere intuición, inventiva y persistencia.</li>
      </ul>
      <p>
        Los métodos de integración expuestos en esta sección sirven para hallar integrales de funciones continuas o con discontinuidades finitas, si tanto las funciones como sus integrales son <em>funciones elementales</em>, es decir, funciones algebraicas (polinomios, funciones racionales y funciones de potencia), trascendentales (funciones logarítmicas, trigonométricas, trigonométricas inversas, hiperbólicas e hiperbólicas inversas) o alguna combinación de estas (a través de las operaciones de adición, sustracción, multiplicación, división y composición).
      </p>
      <p>
        Sin embargo, la mayoría de las integrales de funciones elementales no son funciones elementales, por lo que estos métodos se quedan cortos. Verbigracia, para la función elemental <M>{r`f(x)=\mathrm{e}^{x^2}`}</M>, la integral <M>{r`\indint{\mathrm{e}^{x^2}}{x}`}</M> no es una función elemental y para hallarla se debe expresar la función como una serie infinita. Lo mismo sucede con otras integrales de funciones elementales como <M>{r`\indint{\frac{\mathrm{e}^x}{x}}{x}`}</M>, <M>{r`\indint{\sin x^2}{x}`}</M>, <M>{r`\indint{\cos \mathrm{e}^x}{x}`}</M>, <M>{r`\indint{\sqrt{x^3+1}}{x}`}</M>, <M>{r`\indint{\frac{1}{\ln x}}{x}`}</M> y <M>{r` \indint{\frac{\sin x}{x}}{x}`}</M>.
        {/* Series de Taylor? Series infinitas? */}
      </p>

      <h3>Sustitución simple</h3>
      <p>
        La integración por sustitución simple es el proceso inverso a la regla de la cadena de la derivación. Consiste en sustituir una expresión del integrando por una variable <M>{r`u`}</M> para transformar la integral en otra más fácil.
      </p>

      <Theorem name="Regla de sustitución">
        Sea <M>{r`f`}</M> una función continua sobre <M>{r`[a,b]`}</M> y <M>{r`u=g(x)`}</M> una función derivable en <M>{r`[a,b]`}</M>:
        <M block>
          {r`\indint{f(g(x))\cdot g'(x)}{x} = \indint{f(u)}{u}`}
        </M>

        <Proof>
          Sea <M>{r`h(x) = \indint{f(x)}{x}`}</M>, de forma que <M>{r`h' = f`}</M>. Entonces:
          <M block>
            {r`\begin{align*}
              \indint{f(g(x))\cdot g'(x)}{x} &= \indint{h'(g(x))\cdot g'(x)}{x} &\\
                &= \indint{(h \circ g)'(x)}{x} & \text{[Regla de la cadena]}\\
                &= (h \circ g)(x) &\\
                &= h(g(x)) &\\
                &= h(u) & \text{[Sustitución, }u=g(x)]\\
                &= \indint{f(u)}{u}. &\\
            \end{align*}`}
          </M>
        </Proof>
      </Theorem>

      <p>
        El método es automático si puede escribir el integrando en la forma <M>{r`f(g(x))\cdot g'(x)`}</M>, es decir, si es posible hallar una función <M>{r`u=g(x)`}</M> en el integrando junto con su derivada <M>{r`\mathrm{d}u=g'(x) \: \mathrm{d}x`}</M>. De lo contrario, para una integral <M>{r`\indint{f(x)}{x}`}</M> se realizan los siguientes pasos:
      </p>
      <ol>
        <li> Elegir una expresión <M>{r`g(x)`}</M> para sustituir por la variable <M>{r`u`}</M>.</li>
        <li> Teniendo, <M>{r`u=g(x)`}</M>, derivar a cada lado para obtener <M>{r`\der{u}{x} = g'(x)`}</M>. En este contexto, los diferenciales se pueden manipular algebraicamente, de forma que <M>{r`\mathrm{d}u = g'(x) \: \mathrm{d}x`}</M>.</li>
        <li> Reescribir la integral en términos de <M>{r`u`}</M> y <M>{r`\mathrm{d}u`}</M>, reemplazando <M>{r`\mathrm{d}x`}</M> por <M>{r`\mathrm{d}u/g'(x)`}</M> y <M>{r`g(x)`}</M> por <M>{r`u`}</M>.</li>
        <li> Calcular la integral indefinida en términos de <M>{r`u`}</M>.</li>
        <li> Sustituir <M>{r`u`}</M> de vuelta por <M>{r`g(x)`}</M> para expresar la integral en términos de la variable inicial <M>{r`x`}</M>. </li>
      </ol>

      <p>
        El éxito de la integración por sustitución simple radica en la elección adecuada de la expresión que se sustituye por una variable. Se intenta siempre transformar la integral en una antiderivada conocida o en una integral a la que se pueda aplicar algún otro método.
      </p>

      <Properties
        title="Integrales de las funciones trigonométricas faltantes"
        description={<p>Con solo invertir las reglas de derivación, no es viable conocer las integrales de las funciones trigonométricas tangente, cotangente, secante y cosecante. Estas se pueden calcular mediante sustitución simple.</p>}
        properties={[
          {
            name: "Integral indefinida de tangente",
            formula: <M>{r`\indint{\tan x}{x} = -\ln \abs{\cos x} + C = \ln \abs{\sec x} + C`}</M>,
            note: <span>Se reemplaza <M>{r`\tan x = \frac{\sin x}{\cos x}`}</M> y se utiliza la sustitución <M>{r`u = \cos x`}</M>.</span>
          },
          {
            name: "Integral indefinida de cotangente",
            formula: <M>{r`\indint{\cot x}{x} = \ln\abs{\sin x} + C = -\ln \abs{\csc x} + C`}</M>,
            note: <span>Se reemplaza <M>{r`\cot x = \frac{\cos x}{\sin x}`}</M> y se utiliza la sustitución <M>{r`u = \sin x`}</M>.</span>
          },
          {
            name: "Integral indefinida de secante",
            formula: <M>{r`\indint{\sec x}{x} = \ln \abs{\sec x+\tan x} + C`}</M>,
            note: <span>Se multiplica el integrando por <M>{r`\frac{\sec x + \tan x}{\sec x + \tan x}`}</M> para obtener una integral de la forma <M>{r`\indint{\frac{f'(x)}{f(x)}}{x} = \ln \abs{f(x)} + C`}</M>.</span>
          },
          {
            name: "Integral indefinida de cosecante",
            formula: <M>{r`\indint{\csc x}{x} = -\ln \abs{\csc x + \cot x}+C = \ln\abs{\csc x- \cot x}+C`}</M>,
            note: <span>Se multiplica el integrando por <M>{r`\frac{\csc x + \cot x}{\csc x + \cot x}`}</M> para obtener una integral de la forma <M>{r`\indint{\frac{f'(x)}{f(x)}}{x} = \ln \abs{f(x)} + C`}</M>.</span>
          },

        ]}
      />

      <h4>Regla de sustitución para integrales definidas</h4>

      <p>
        Para calcular integrales definidas usando el método de sustitución simple, se debe modificar el intervalo al realizar el cambio de variable: si se realizan las sustituciones <M>{r`u=g(x)`}</M> y <M>{r`\mathrm{d}x = \mathrm{d}u / g'(x)`}</M> en una integral definida en el intervalo <M>{r`[a,b]`}</M>, se llega a la regla de sustitución para integrales definidas:
      </p>
      <Theorem name="Regla de sustitución para integrales definidas" environmentName="Regla">
        Sea <M>{r`g`}</M> una función derivable en <M>{r`[a,b]`}</M>, si <M>{r`g'`}</M> es continua sobre <M>{r`[a,b]`}</M> y <M>{r`f`}</M> es continua sobre el rango de <M>{r`u=g(x)`}</M>, entonces :
        <M block>
          {r`\defint{f(g(x))\cdot g'(x)}{x}{a}{b} = \defint{f(u)}{u}{g(a)}{g(b)}`}
        </M>
      </Theorem>
      <p>
        Alternativamente, se puede calcular primero la integral indefinida en términos de la variable inicial y luego evaluar la integral definida haciendo uso de la segunda parte del Teorema Fundamental del Cálculo.
      </p>

      <h3>Integración por partes</h3>

      <p>
        La integración por partes es el proceso inverso a la regla del producto de la derivación. Es útil para conocer la integral de un producto de funciones.
      </p>

      <Theorem name="Integración por partes">
        Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones diferenciables, entonces:
        <M block>
          {r`\indint{f(x)g'(x)}{x} = f(x)g(x) - \indint{f'(x)g(x)}{x}`}
        </M>

        <Proof>
          Partiendo de la regla de la cadena, <M block>
            {r`\begin{align*}
              (f(x)g(x))' &= f'(x)g(x) + f(x)g'(x) \\
              \indint{(f(x)g(x))'}{x} &= \indint{f'(x)g(x)}{x} + \indint{f(x)g'(x)}{x} \\
              f(x)g(x) &= \indint{f'(x)g(x)}{x} + \indint{f(x)g'(x)}{x} \\
              \indint{f(x)g'(x)}{x} &= f(x)g(x) - \indint{f'(x)g(x)}{x}.
          \end{align*}`}
          </M>
        </Proof>
      </Theorem>

      <p>
        Sean <M>{r`u = f(x)`}</M> y <M>{r`v = g(x)`}</M>, se obtiene una versión quizá más simple de la fórmula de integración por partes:
        <M block>
          {r`\indint{u}{v} = uv - \indint{v}{u}.`}
        </M>
        Una oración mnemotécnica famosa para recordar la fórmula en esa forma es <i><b>u</b>n <b>d</b>ía <b>v</b>i <b>u</b>na <b>v</b>aca <b>v</b>estida <b>d</b>e <b>u</b>niforme</i>, en donde las iniciales representan las variables y los diferenciales.
      </p>

      <p>
        Para aplicar integración por partes, se debe visualizar el integrando como un producto de funciones, de las cuales una se debe derivar, que es <M>{r`f(x)`}</M> o <M>{r`u`}</M>, y otra se debe antiderivar, que es <M>{r`g'(x)`}</M> o <M>{r`\mathrm{d}v`}</M>. Como lo más complicado es integrar, se debe elegir para ese rol la función más fácil de integrar y derivar la otra.
      </p>

      <Tip>
        Para antiderivar <M>{r`g'(x)`}</M> o <M>{r`\mathrm{d}v`}</M>, se puede elegir <em>cualquier antiderivada</em>, no solo la más general. Es decir, se puede seleccionar un valor arbitrario para <M>{r`C`}</M>. Eso puede resultar muy conveniente. Antiderivar <M>{r`x`}</M> como <M>{r`\frac{x^2+1}{2}`}</M>, con <M>{r`C= \frac{1}{2}`}</M>, en lugar de como <M>{r`\frac{x^2}{2}`}</M> con <M>{r`C=0`}</M>, facilita considerablemente una integral como <M>{r`\indint{x\arctan(x)}{x}`}</M>.
      </Tip>

      <p>
        Para elegir la función que se va a derivar, <M>{r`f(x)`}</M> o <M>{r`u`}</M>, se puede usar la precedencia de funciones indicada por la sigla  LIATE (también conocida como ILATE):
      </p>
      <ul>
        <li>L: Funciones <b>l</b>ogarítimicas </li>
        <li>I: Funciones trigonométricas <b>i</b>nversas</li>
        <li>A: Funciones <b>a</b>lgebraicas</li>
        <li>T: Funciones <b>t</b>rigonométricas</li>
        <li>E: Funciones <b>e</b>xponenciales</li>
      </ul>
      <p>
        Nótese que el orden de las funciones está desde las más difíciles de integrar hasta las más fáciles, así se elije la función más difícil de integrar para que se derive.
      </p>

      <p>
        Para integrales definidas, la fórmula de integración por partes es análoga:
      </p>
      <Theorem name="Integración por partes para integrales definidas">
        Sean <M>{r`f`}</M> y <M>{r`g`}</M> funciones derivables, entonces:
        <M block>
          {r` \defint{f(x)g'(x)}{x}{a}{b} = [f(x)g(x)]_{a}^b - \defint{f'(x)g(x)}{x}{a}{b} `}
        </M>
      </Theorem>

      {/* <h4>Método DI para integración por partes</h4> */}{/*  */}{/* TODO: El método DI se basa en la elaboración de dos columnas de funciones: una columna D en la que se deriva y una columna I en la que se integra. */}


      <h3>Integrales trigonométricas</h3>
      <p>
        Las <em>integrales trigonométricas</em> son aquellas cuyos integrandos consisten de operaciones entre funciones trigonométricas y constantes. Anteriormente, se estudiaron algunas integrales trigonométricas básicas, a partir de las reglas de derivación y usando integración por sustitución. En esta subsección se estudia el uso de identidades trigonométricas para integrar productos de funciones trigonométricas.
      </p>

      <h4>Seno y coseno con diferente ángulo</h4>
      <p>
        Para evaluar integrales de productos de seno y coseno con diferente ángulo se usa la identidad trigonométrica apropiada para convertir el producto en una suma.
      </p>
      <ol>
        <li> Para integrales de la forma <M>{r` \displaystyle \indint{\sin mx\cos nx}{x} `}</M> se usa la identidad <M>{r`\sin \alpha \cos \beta=\frac{1}{2} [\sin(\alpha - \beta )+\sin(\alpha + \beta)]`}</M>.</li>
        <li> Para integrales de la forma  <M>{r` \displaystyle \indint{\sin mx\sin nx}{x} `}</M> se usa la identidad <M>{r`\sin \alpha \sin \beta=\frac{1}{2} [\cos(\alpha - \beta)-\cos(\alpha + \beta)]`}</M>.</li>
        <li> Para integrales de la forma <M>{r` \displaystyle \indint{\cos mx\cos nx}{x} `}</M> se usa la identidad <M>{r`\cos \alpha \cos \beta=\frac{1}{2} [\cos(\alpha - \beta)+\cos(\alpha + \beta)]`}</M>.</li>
      </ol>

      <h4>Potencias de seno y coseno con el mismo ángulo</h4>
      <p>
        Para evaluar integrales con potencias de seno y coseno, de la forma <M>{r` \displaystyle \indint{\sin^mx\cos^nx}{x} `}</M>, se usa el hecho de que <M>{r`\der{}{x} \sin x = \cos x`}</M> y que <M>{r`\der{}{x} \cos x = - \sin x`}</M>. Se contemplan tres casos:
      </p>
      <ol>
        <li> Si la potencia de coseno es impar, <M>{r`n=2k+1, k \in \mathbb{Z}`}</M>, se aparta un factor coseno y se usa la identidad pitagórica <M>{r`\cos^2x=1-\sin^2x `}</M> para expresar los demás factores como seno y usar la sustitución <M>{r`u=\sin x`}</M>:</li>
        <M block>
          {r`\indint{\sin^mx\cos^{2k+1}x}{x} = \indint{\sin^mx(\cos^2x)^k\cos x}{x} = \indint{\sin^mx(1-\sin^2x)^k\cos x}{x} = \indint{u^m(1-u^2)^k}{u}`}
        </M>
        <li> Si la potencia de seno es impar, <M>{r`m=2k+1, k \in \mathbb{Z}`}</M>, se aparta un factor seno y se usa la identidad pitagórica <M>{r`\sin^2x=1-\cos^2x `}</M> para expresar los demás factores como coseno y usar la sustitución <M>{r`u=\cos x`}</M>:</li>
        <M block>
          {r`\indint{\sin^{2k+1}x\cos^nx}{x} = \indint{(\sin^2x)^k\cos^nx\sin x}{x} = \indint{(1-\cos^2x)^k\cos^nx\sin x}{x} = \indint{-(1-u^2)^ku^n}{u}`}
        </M>
        <li> Si las potencias de tanto seno como coseno son pares, se hace uso de las siguientes identidades del ángulo medio y ángulo doble para linealizar el integrando:</li>
        <ol>
          <li> <M>{r`\sin^2x=\dfrac{1}{2}(1-\cos(2x))`}</M></li>
          <li> <M>{r`\cos^2x=\dfrac{1}{2}(1+\cos(2x))`}</M></li>
          <li> <M>{r`\sin (2x)= 2\sin x\cos x`}</M> </li>
          <li> <M>{r`\cos (2x)= \cos^2 x-\sin^2 x`}</M></li>
        </ol>
      </ol>

      <h4>Potencias de tangente y secante con el mismo ángulo</h4>
      <p>
        Para resolver integrales de forma <M>{r` \displaystyle \indint{\tan^mx\sec^nx}{x} `}</M> se usa una estrategia similar a la anterior, que se sirve del hecho de que <M>{r` \der{}{x} \tan x=\sec^2x `}</M> y que <M>{r` \der{}{x} \sec x=\tan x \sec x `}</M>. Se contemplan tres casos:
      </p>
      <ol>
        <li> Si la potencia de secante es par, <M>{r`n=2k, k \in \mathbb{Z}`}</M>, se aparta un factor secante cuadrado y se usa la identidad pitagórica <M>{r`\sec^2x=\tan^2x+1 `}</M> para expresar los demás factores como tangente:</li>
        <M block>
          {r`\indint{\tan^mx\sec^{2k}x}{x} = \indint{\tan^mx(\sec^2x)^{k-1}\sec^2x}{x} = \indint{\tan^mx(\tan^2x+1)^{k-1}\sec^2x}{x}.`}
        </M>
        Luego se usa la sustitución <M>{r`u=\tan x`}</M>, para que <M>{r`\mathrm{d}u=\sec^2 x`}</M>:
        <M block>
          {r`\indint{u^m(u^2+1)^{k-1}}{u}.`}
        </M>
        <li> Si la potencia de tangente es impar, <M>{r`m=2k+1, k \in \mathbb{Z}`}</M>, se aparta un factor secante por tangente y se usa la identidad pitagórica <M>{r`\tan^2x=\sec^2x-1 `}</M> para expresar los demás factores como secante:</li>
        <M block>
          {r`\indint{\tan^{2k+1}x\sec^nx}{x} = \indint{(\tan^2x)^k\sec^{n-1}x\tan x\sec x}{x} = \indint{(\sec^2x-1)^k\sec^{n-1}x\tan x\sec x}{x}.`}
        </M>
        Luego se usa la sustitución <M>{r`u=\sec x`}</M>, para que <M>{r`\mathrm{d}u=\sec x \tan x `}</M>:
        <M block>
          {r`\indint{(u^2-1)^ku^{n-1}}{u}.`}
        </M>
        <li> Si la potencia de tangente es par y la potencia de secante es impar, no hay una regla específica para proceder. Se debe apelar a las derivadas mencionadas arriba, a las integrales de tangente y secante, y posiblemente a integración por partes.  </li>
      </ol>

      <h4>Potencias de cotangente y cosecante con el mismo ángulo</h4>
      <p>
        Para resolver integrales de forma <M>{r` \displaystyle \indint{\cot^mx\csc^nx}{x} `}</M> se usa un método idéntico al previo a excepción de los signos. Se usan las derivadas <M>{r` \der{}{x} \cot x=-\csc^2x `}</M> y <M>{r` \der{}{x} \csc x=-\cot x \csc x `}</M>. Se contemplan tres casos:
      </p>
      <ol>
        <li> Si la potencia de cosecante es par, <M>{r`n=2k, k \in \mathbb{Z}`}</M>, se aparta un factor cosecante cuadrado y se usa la identidad pitagórica <M>{r`\csc^2x=1+\cot^2x`}</M> para expresar los demás factores como cotangente:</li>
        <M block>
          {r`\indint{\cot^mx\csc^{2k}x}{x} = \indint{\cot^mx(\csc^2x)^{k-1}\csc^2x}{x} = \indint{\cot^mx(1+\cot^2x)^{k-1}\csc^2x}{x}`}
        </M>
        Luego se usa la sustitución <M>{r`u=\cot x`}</M>, para que <M>{r`\mathrm{d}u=-\csc^2 x`}</M>:
        <M block>
          {r`-\indint{u^m(1+u^2)^{k-1}}{u}`}
        </M>
        <li> Si la potencia de cotangente es impar, <M>{r`m=2k+1, k \in \mathbb{Z}`}</M>, se aparta un factor cosecante por cotangente y se usa la identidad pitagórica <M>{r`\cot^2x=\csc^2x-1`}</M> para expresar los demás factores como cosecante:</li>
        <M block>
          {r`\indint{\cot^{2k+1}x\csc^nx}{x} = \indint{(\cot^2x)^k\csc^{n-1}x\cot x \csc x}{x} = \indint{(\csc^2x-1)^k\csc^{n-1}x\cot x \csc x}{x}`}
        </M>
        Luego se usa la sustitución <M>{r`u=\csc x`}</M>, para que <M>{r`\mathrm{d}u=-\cot x \csc x`}</M>:
        <M block>
          {r`-\indint{(u^2-1)^ku^{n-1}}{u}`}
        </M>
        <li> Si la potencia de cotangente es par y la potencia de cosecante es impar sucede lo mismo que en la subsección anterior. Es necesario servirse de las derivadas e integrales de cotangente y cosecante, y posiblemente del método de integración por partes.</li>
      </ol>


      <h3>Integración por sustitución trigonométrica</h3>
      <p>
        Para evaluar integrales con sumas dentro de radicales, de la forma <M>{r`\displaystyle \indint{\sqrt{\pm a^2\pm x^2}}{x}`}</M>, es útil sustituir <M>{r`x`}</M> por funciones trigonométricas, con el propósito de para utilizar identidades pitagóricas para remover la raíz. Se usa entonces la regla de sustitución de forma inversa, haciendo una sustitución de la forma <M>{r`x = g(\theta)`}</M>, con la variable original como función de la nueva variable <M>{r`\theta`}</M>, donde <M>{r`g(\theta)`}</M> es generalmente una función trigonométrica. Esto solo es posible si existe una función <M>{r`g^{-1}(\theta)`}</M>, por lo que es necesario que <M>{r`g(\theta)`}</M> sea una función inyectiva. {/* TODO: Por qué se necesita función inversa? El libro dice que para facilita el cálculo pero por qué eso facilita el cálculo? */}
      </p>
      <Theorem name="Regla de sustitución inversa">
        Sea <M>{r`g(\theta)`}</M> una función inyectiva:
        <M block>
          {r`\indint{f(x)}=\indint{f(g(\theta))g'(\theta)}{\theta}`}
        </M>
      </Theorem>

      <p>
        Como <M>{r`g(\theta)`}</M> debe ser inyectiva, los valores de <M>{r`\theta`}</M> deben restringirse. A continuación se muestran las sustituciones eficaces para tres integrandos con radicales, con sus respectivas restricciones para <M>{r`\theta`}</M>:
      </p>
      <ul>
        <li> Para <M>{r`\displaystyle \indint{\sqrt{a^2+x^2}}{x}`}</M> se usa la sustitución <M>{r`x = a\tan \theta, \theta \in (-\frac{\uppi}{2},\frac{\uppi}{2})`}</M>. El intervalo de <M>{r`\theta`}</M> se elige para que <M>{r`\sec \theta > 0`}</M>. La remoción de la raíz del integrando es como sigue: </li>
        <M block>
          {r`\sqrt{a^2+x^2}=\sqrt{a^2+a^2\tan^2\theta}=\sqrt{a^2(1+\tan^2\theta)}=\sqrt{a^2(\sec^2\theta)}=a\abs{\sec \theta}=a \sec \theta`}
        </M>

        <li> Para <M>{r`\displaystyle \indint{\sqrt{a^2-x^2}}{x}`}</M> se usa la sustitución <M>{r`x = a\sin \theta, \theta \in [-\frac{\uppi}{2},\frac{\uppi}{2}]`}</M>. El intervalo de <M>{r`\theta`}</M> se elige para que <M>{r`\cos \theta \geq 0`}</M>. La remoción de la raíz del integrando es como sigue: </li>
        <M block>
          {r` \sqrt{a^2-x^2} = \sqrt{a^2-a^2\sin^2\theta}=\sqrt{a^2(1-\sin^2\theta)}=\sqrt{a^2\cos^2\theta}=a\abs{\cos \theta}=a\cos \theta`}
        </M>

        <li> Para <M>{r`\displaystyle \indint{\sqrt{x^2-a^2}}{x}`}</M> se usa la sustitución <M>{r`x = a\sec \theta, \theta \in [0,\frac{\uppi}{2}) \text{ o } \theta \in [\uppi,\frac{3\uppi}{2})`}</M>. Los intervalos de <M>{r`\theta`}</M> se eligen para que <M>{r`\tan \theta \geq 0`}</M>. La remoción de la raíz del integrando es como sigue:</li>
        <M block>
          {r`\sqrt{x^2-a^2}=\sqrt{a^2\sec^2\theta-a^2}=\sqrt{a^2(\sec^2\theta-1)}=\sqrt{a^2\tan^2\theta}=a\abs{\tan \theta}=a \tan \theta `}
        </M>
      </ul>

      <p>
        Como el integrando quedará en términos de <M>{r`\theta`}</M>, cuando se realiza la sustitución inversa también se debe cambiar el <M>{r`\mathrm{d}x`}</M> y los límites de integración si la integral es definida. Más aún, una vez resuelta la integral en términos de <M>{r`\theta`}</M>, se debe volver a la variable inicial <M>{r`x`}</M>. Para ello, es útil dibujar un triángulo rectángulo con un ángulo <M>{r`\theta`}</M>, marcar los valores de los lados de acuerdo a la función trigonométrica que se usó para la sustitución (tal que un lado del triángulo sea <M>{r`x`}</M>) y hallar el lado faltante (en términos de <M>{r`x`}</M>) haciendo uso del teorema de Pitágoras. Con eso, se reemplaza la equivalencia de <M>{r`x`}</M> en la solución que ya se tiene en términos de <M>{r`\theta`}</M>.
      </p>
      <p>

        Puede ser complicado en ocasiones transformar el integrando a una de las tres formas expuestas arriba. La clave para expresar el segmento del integrando dentro de la raíz como una suma o resta de cantidades al cuadrado es completar cuadrados en el radicando. Luego, se adecua la sustitución inversa para obtener una identidad pitagórica al interior de la raíz y se remueve la raíz con uno de los casos listados arriba.
      </p>
      <p>

        La siguiente fórmula sirve para ahorrarse, en ocasiones, el efectuar sustituciones trigonométricas:
      </p>
      <Theorem name="Fórmula de sustitución trigonométrica" environmentName="Propiedad">
        <M block>
          {r`\int\frac{\mathrm{d}x}{\sqrt{x^2\pm a^2}} = \ln\abs{x+\sqrt{x^2\pm a^2}}+C`}
        </M>
      </Theorem>

      <h3>Integración por fracciones parciales</h3>

      <p>
        La integración por fracciones parciales permite integrar cualquier función racional. También es útil para expresiones que se puedan volver racionales con la sustitución apropiada, como expresiones de la forma <M>{r`\sqrt[n]{g(x)}`}</M> con la sustitución <M>{r`u=\sqrt[n]{g(x)}`}</M>. El método consiste en expresar la función como una suma de fracciones simples, denominadas <em>fracciones parciales</em> que se pueden integrar mediante otros métodos.
      </p>

      <p>
        Sea <M>{r`f(x)=\frac{p(x)}{q(x)} `}</M> una función racional, se debe expresar como una fracción propia previo a la aplicación del método. Si la función no es propia, es decir, si su numerador <M>{r` p(x) `}</M> tiene mayor o igual grado que el denominador <M>{r` q(x) `}</M>, se realiza la división de polinomios <M>{r`p(x)/q(x)`}</M> y se expresa como
        <M block>
          {r`f(x)=s(x)+\frac{r(x)}{q(x)}`}
        </M>
        donde <M>{r`s(x)`}</M> es el cociente de la división de polinomios  y <M>{r`r(x)`}</M> es su residuo. Ahora  <M>{r` \frac{r(x)}{q(x)} `}</M> es una función racional propia.
      </p>

      <p>
        Si la función aún no es integrable en esa forma, se factoriza el polinomio en el denominador y se expresa la función como una suma de fracciones  parciales. Existen cuatro casos para ese proceso, dependiendo de las características de <M>{r`q(x)`}</M>. Para caracterizar <M>{r`q(x)`}</M> se toma en cuenta el siguiente teorema del álgebra:
      </p>
      <Theorem name="Descomposición en factores">
        Todo polinomio con coeficientes reales en <M>{r`P_n`}</M> se puede descomponer en factores lineales y factores cuadráticos.
      </Theorem>

      <h4><M>{r` \bm{q(x)} `}</M> es un producto de diferentes factores lineales</h4>
      <p>
        Si <M>{r`q(x)`}</M> es un producto de diferentes factores lineales donde ninguno es múltiplo del otro, <M>{r`q(x)`}</M> se puede expresar como producto de factores lineales,
        <M block>
          {r`q(x)=(a_1x+b_1)(a_2x+b_2)\cdots (a_nx+b_n).`}
        </M> El teorema de fracciones parciales indica que existen constantes <M>{r`A_1, A_2,...,A_n`}</M> tal que
        <M block>{r`\begin{gather}
      \frac{r(x)}{q(x)}=\frac{A_1}{(a_1x + b_1)}+\frac{A_2}{(a_2x + b_2)}+\cdots+\frac{A_n}{(a_nx + b_n)}
      \end{gather}`}</M>
        por lo que la función racional <M>{r`f(x)`}</M> se puede escribir de forma:
        <M block>
          {r`f(x)=s(x)+\frac{A_1}{(a_1x+b_1)}+\frac{A_2}{(a_2x+b_2)}+\cdots+\frac{A_n}{(a_nx+b_n)}`}
        </M>
        Hay tres maneras de hallar los valores <M>{r`A_1, A_2,...,A_n`}</M>:
      </p>
      <ol>
        <li> Multiplicar ambos lados de la  por el producto de los denominadores, <M>{r` (a_1x+b_1)(a_2x+b_2)\cdots(a_nx+b_n) `}</M>. Reemplazar <M>{r`x`}</M> por un valor arbitrario, idealmente <M>{r`0`}</M>, <M>{r`1`}</M> o algún número que haga cancelar términos, y despejar de allí las constantes.</li>
        <li> Multiplicar ambos lados de la  por el producto de los denominadores, <M>{r` (a_1x+b_1)(a_2x+b_2)\cdots(a_nx+b_n) `}</M>. Con eso, se realiza identificación de coeficientes (se forma una ecuación con los coeficientes libres, otra con los que corresponden a factores lineales, otra con los que corresponden a factores cuadráticos y así) , obteniendo un sistema de ecuaciones <M>{r`n \times n`}</M> para encontrar las constantes.</li>
      </ol>

      <h4><M>{r` \bm{q(x)} `}</M> es un producto de factores lineales con repeticiones</h4>

      <p>
        Si <M>{r`q(x)`}</M> es un producto de factores lineales donde hay repeticiones, suponiendo que es el primer factor el que se repite, <M>{r`q(x)`}</M> se puede expresar como <M block>
          {r`q(x)=(a_1x+b_1)^k(a_2x+b_2)\cdots (a_nx+b_n)`}
        </M>. La función racional se escribe entonces como
        <M block>
          {r`f(x)=s(x)+\frac{A_1}{(a_1x+b_1)}+\frac{A_2}{(a_1x+b_1)^2}+\cdots+\frac{A_k}{(a_1x+b_1)^k}+\frac{A_{k+1}}{(a_2x+b_2)}+\cdots+\frac{A_{k+n-1}}{(a_nx+b_n)}`}
        </M>
        Es decir, los factores que están repetidos <M>{r`k`}</M> veces actúan como si fueran <M>{r`k`}</M> factores, de grados <M>{r`1`}</M> hasta <M>{r`k`}</M>. Luego, para encontrar las constantes <M>{r`A_1, A_2,...,A_n`}</M> se utiliza el mismo método que en el paso anterior.
      </p>

      <h4><M>{r` \bm{q(x)} `}</M> contiene factores cuadráticos irreducibles</h4>

      <p>
        Si <M>{r`q(x)`}</M> contiene un factor cuadrático irreducible, de la forma <M>{r`ax^2+bx+c`}</M> donde <M>{r`b^2-4ac<0`}</M>, entonces la descomposición de <M>{r`q(x)`}</M> en fracciones parciales tendrá al menos un término de la forma
        <M block>
          {r`\frac{Ax+B}{ax^2+bx+c}`}
        </M>
        además de otros factores lineales. Para integrar ese término, primero se separa en dos integrales <M>{r` \indint{\frac{Ax}{ax^2+bx+c}}{x} `}</M> y <M>{r` \indint{\frac{B}{ax^2+bx+c}}{x} `}</M> que se integrarán independientemente, se completa cuadrado en el denominador y se hace uso de las siguientes fórmulas:
        <M block>
          {r`\begin{gather*}
            \indint{\frac{1}{x^2+a^2}}{x} = \frac{1}{a}\arctan\left( \frac{x}{a}\right)+C \\
            \indint{\frac{1}{\sqrt{a^2-x^2}}}{x} = \arcsin\left( \frac{x}{a}\right)+C.
          \end{gather*}`}
        </M>
        Para los demás factores, se siguen los procedimientos explicados en los dos casos anteriores.
      </p>

      <h4><M>{r` \bm{q(x)} `}</M> incluye un factor cuadrático irreducible repetido</h4>
      <p>
        Si <M>{r`q(x)`}</M> contiene repeticiones del factor cuadrático irreducible, es decir algo de la forma <M>{r`(ax^2+bx+c)^{k}`}</M> donde <M>{r`b^2-4ac<0`}</M>, entonces la descomposición de <M>{r`q(x)`}</M> en fracciones parciales incluirá expresiones de la forma
        <M block>
          {r`\frac{A_1x+B_1}{(ax^2+bx+c)}+\frac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots\frac{A_kx+B_k}{(ax^2+bx+c)^k}.`}
        </M>
        Para integrar esos términos se debe completar cuadrado y utilizar las fórmulas expuestas en el caso anterior:
        <M block>
          {r`\indint{\frac{1}{x^2+a^2}}{x} = \frac{1}{a}\arctan\left( \frac{x}{a}\right)+C \; \text{  o } \indint{\frac{1}{\sqrt{a^2-x^2}}}{x} = \arcsin\left( \frac{x}{a}\right)+C.`}
        </M>
        Se termina la integral complementando con los procedimientos expuestos en los tres apartados previos.
      </p>

      <p>
        La siguiente fórmula sirve para ahorrarse, en ocasiones, el uso de fracciones parciales:
        <M block>
          {r`\int\frac{\mathrm{d}x}{x^2-a^2} = \frac{1}{2a} \ln\abs{\frac{x-a}{x+a}}+C`}
        </M>
      </p>

      <h3>Estrategia general para integrar funciones con integrales elementales</h3>

      <p>
        Dada la amplia disponibilidad de métodos de integración y el hecho de que la mayoría de integrales de funciones elementales se pueden resolver de múltiples formas, es útil tener una estrategia general para guiarse al integrar una función. Es recomendable seguir los pasos listados a continuación:
      </p>
      <ol>
        <li> Observar si la integral en cuestión hace parte de las integrales indefinidas estudiadas en esta sección. A continuación se recopilan dichas integrales y se sugiere memorizarlas:
          <M block>
            {r`\begin{align*}
            & \indint{0}{x} = C && \indint{a}{x} = ax+C \\
            &\indint{x^n}{x} = \frac{x^{n+1}}{n+1} + C \text{, si } n \neq -1&& \indint{\frac{f'(x)}{f(x)}}{x} = \ln\abs{f(x)}+C \\
            & \indint{\mathrm{e}^x}{x} = \mathrm{e}^x+C && \indint{a^x}{x} = \frac{a^x}{\ln(a)} + C \\
            & \indint{\sin(x)}{x} = -\cos(x)+C && \indint{\cos(x)}{x} = \sin(x) +C \\
            & \indint{\sec^2(x)}{x} = \tan(x) + C && \indint{\csc^2(x)}{x} = -\cot(x)+C \\
            & \indint{\tan(x)\sec(x)}{x} = \sec(x)+C && \indint{\cot(x)\csc(x)}{x} = -\csc(x)+C \\
            & \indint{\sec(x)}{x} = \ln\abs{\sec(x)+\tan(x)}+C && \indint{\csc(x)}{x} = -\ln\abs{\csc(x)+\cot(x)}+C \\
            & \indint{\tan(x)}{x} = -\ln\abs{\cos(x)}+C && \indint{\cot(x)}{x} = \ln\abs{\sin(x)} +C \\
            & \indint{\sinh(x)}{x} = \cosh(x)+C && \indint{\cosh(x)}{x} = \sinh(x)+C \\
            & \int \frac{\mathrm{d}x}{\sqrt{a^2-x^2}} = \arcsin\left(\frac{x}{a}\right) + C && \int \frac{\mathrm{d}x}{\sqrt{x^2\pm a^2}} = \ln\abs{x+\sqrt{x^2\pm a^2}}+ C \\
            & \int\frac{\mathrm{d}x}{x^2+a^2} = \frac{1}{a}\arctan\left(\frac{x}{a}\right) +C && \int\frac{\mathrm{d}x}{x^2-a^2} = \frac{1}{2a} \ln\abs{\frac{x-a}{x+a}} +C.
          \end{align*}`}
          </M>
          Si se tiene una de las integrales anteriores pero con una función lineal <M>{r`\alpha x + \beta`}</M> en lugar de la variable <M>{r`x`}</M>, integrar con la sustitución simple <M>{r`u =\alpha x + \beta`}</M>. Verbigracia, <M>{r`\displaystyle \indint{\cot(\alpha x+\beta)\csc(\alpha x + \beta)}{x} = -\frac{\csc(\alpha x+\beta)}{\alpha}+C.`}</M></li>
        <li> Simplificar el integrando algebraicamente lo máximo posible, intentando volverlo una combinación lineal de integrales conocidas.</li>
        <li> Intentar usar sustitución simple: buscar si hay una función <M>{r`u=g(x)`}</M> en el integrando junto con su diferencial <M>{r`\mathrm{d}u=g'(x) \: \mathrm{d}x`}</M>.</li>
        <li> Clasificar el integrando en orden:</li>
        <ol>
          <li> Si la función es un producto de seno y coseno o de potencias de funciones trigonométricas, se usan integrales trigonométricas.</li>
          <li> Si la función es racional, se utiliza el método de fracciones parciales.</li>
          <li> Si la función es un producto de una función algebraica (exceptuando las radicales) y una función trascendental, se usa integración por partes eligiendo <M>{r`f(x)=u`}</M> con ayuda de la sigla LIATE.</li>
          <li> Si la función es una función radical de forma <M>{r`\sqrt{\pm a^2\pm x^2}`}</M>, se apela al método de sustitución trigonométrica.</li>
          <li> Si la función es una función radical de forma <M>{r`\sqrt[n]{ax+b}`}</M>, se usa la sustitución <M>{r`u=\sqrt[n]{ax+b}`}</M> para racionalizar la función y se aplica el método de fracciones parciales.</li>
        </ol>
        <li> Si no se ha logrado integrar la función aplicando los pasos anteriores, se debe intentar hallar una sustitución ingeniosa, aplicar integración por partes (en ocasiones, si se tiene solo una función en lugar de un producto de funciones, se usa <M>{r`1`}</M> como <M>{r`v=g(x)`}</M>), reescribir el integrando con métodos algebraicos o usar una combinación de varios métodos. </li>
      </ol>

    </Section >

    <Section title="Aplicaciones geométricas de la integración">

      <h3>Área entre curvas</h3>

      <p>
        Para hallar el área de la región entre dos curvas <M>{r`y=f(x)`}</M> y <M>{r`y=g(x)`}</M> se procede con un método similar al usado para hallar el área bajo una curva con el que se definió la integral definida. Se inscriben en la región <M>{r`n`}</M> rectángulos de base <M>{r`\Delta x = \frac{b-a}{n}`}</M> y altura <M>{r`f(x_i^*)-g(x_i^*)`}</M> para plantear una suma de Riemann:
        <M block>
          {r`A \approx \sum_{i=1}^n (f(x_i^*)-g(x_i^*)) \Delta x.`}
        </M>
        Se sabe que entre mayor es el número de rectángulos inscritos mejor es la aproximación del área. Ergo, de la misma forma que se hizo para hallar el área bajo una curva, se saca el límite al infinito de una suma de Riemann:
        <M block>
          {r`A=\lim_{n \to \infty}\sum_{i=1}^n (f(x_i^*)-g(x_i^*)) \Delta x.`}
        </M>
        El límite al infinito de una suma de Riemann constituye una integral definida.
      </p>
      <Definition concept="Área entre curvas">
        El área de la región limitada por las curvas <M>{r`y=f(x)`}</M> y <M>{r`y=g(x)`}</M> en el intervalo <M>{r`[a,b]`}</M>, cuando <M>{r`f(x) \geq g(x)`}</M> para toda <M>{r`x \in [a,b]`}</M>, está dada por:
        <M block>
          {r`A=\defint{(f(x_i^*)-g(x_i^*))}{x}{a}{b}.`}
        </M>
      </Definition>
      <p>
        Si no se conoce el intervalo <M>{r`[a,b]`}</M> es útil hallar los puntos de intersección de las dos funciones, dado por el valor de <M>{r`x`}</M> en la ecuación <M>{r`f(x)=g(x)`}</M>. Si no se sabe qué función es la mayor, se puede proceder de dos formas:
      </p>
      <ul>
        <li> Realizar un bosquejo de las gráficas de las funciones en el intervalo <M>{r`[a,b]`}</M> en un mismo plano cartesiano.</li>
        <li> Determinar una función <M>{r`h(x)=f(x)-g(x)`}</M> y derivarla: si <M>{r`h'(x)>0`}</M>, entonces <M>{r`f(x)>g(x)`}</M>; si <M>{r`h'(x)<0`}</M>, entonces <M>{r`g(x)>f(x)`}</M>; y si <M>{r`h'(x)=0`}</M>, entonces <M>{r`f(x)=g(x)`}</M>.</li>
      </ul>
      <p>
        Como alternativa al proceso anterior, se puede usar la siguiente fórmula, más general, para el área entre curvas, que no requiere conocer qué función es mayor:
        <M block>
          {r`A=\defint{\abs{f(x_i^*)-g(x_i^*)}}{x}{a}{b}.`}
        </M>
        No obstante, como el integrando está encerrado en un valor absoluto, resulta necesario conocer en cuáles intervalos la resta de las funciones es positiva y en cuáles negativa, por lo que, a final de cuentas, sí se necesita saber cuál función es mayor en cada intervalo.
      </p>
      <p>
        En ocasiones es más conveniente integrar con respecto a <M>{r`y`}</M> que con respecto a <M>{r`x`}</M>, dependiendo de cómo se pueda obtener con mayor facilidad un intervalo para la integral definida.
      </p>

      <h3>Volumen de sólidos de revolución</h3>
      <p>
        Un sólido de revolución es un sólido generado al tomar una región plana y rotarla una revolución completa, <M>{r`2 \uppi`}</M> radianes, respecto a un eje de rotación. Entre los sólidos de revolución se encuentran la esfera, el cilindro y el cono. La fórmulas para los volúmenes de esos sólidos, y de cualquier sólido de revolución, se obtienen haciendo uso del cálculo integral.
      </p>
      <p>
        Sea <M>{r`S`}</M> un sólido de revolución en el intervalo <M>{r`[a,b]`}</M>, se puede atravesar con un plano <M>{r`P_x`}</M> para obtener una región bidimensional denominada <em>sección transversal</em>. El área de la sección transversal puede entenderse como un área entre curvas, para lo que cual ya se conoce una fórmula, por lo que ese área se puede expresar como una función de puntos de muestra <M>{r`A(x_i^*)`}</M>. Si se divide <M>{r`S`}</M> en <M>{r`n`}</M> "rebanadas", es decir sólidos que se forman al tomar el sólido entre dos secciones transversales, de ancho <M>{r`\Delta x`}</M>, se puede obtener el volumen de cada "rebanada", como el área de la sección transversal por el ancho:
        <M block>
          {r`V_{\text{"rebanada"}} = A(x_i^*) \Delta x.`}
        </M>
        Con lo anterior, se puede plantear una suma de Riemann de "rebanadas" para aproximar el volumen del sólido:
        <M block>
          {r`V \approx \sum_{i=1}^n A(x_i^*) \Delta x.`}
        </M>
        Al igual que antes, se saca el límite cuando el número <M>{r`n`}</M> de "rebanadas" tiende al infinito,
        <M block>
          {r`V = \lim_{n \to \infty} \sum_{i=1}^n A(x_i^*)\Delta x,`}
        </M>
        lo cual resulta en una integral definida. Con eso, se obtiene el volumen de un sólido de revolución en función del área transversal.
      </p>
      <Definition concept="Volumen de un sólido de revolución">
        Sea <M>{r`S`}</M> un sólido de revolución en el intervalo <M>{r`[a,b]`}</M>, si <M>{r`A(x_i^*)`}</M> es el área de una sección transversal de <M>{r`S`}</M>, entonces el <em>volumen de <M>{r`S`}</M></em> está dado por:
        <M block>
          {r`V = \defint{A(x_i^*)}{x}{a}{b}.`}
        </M>
      </Definition>
      <p>
        Se pueden clasificar las "rebanadas" como discos o arandelas para tener una función de área de la sección transversal <M>{r`A(x_i^*)`}</M> definida.
      </p>

      <h4>Método de discos</h4>
      <p>
        Se puede generar un sólido a partir de la rotación de una región bidimensional delimitada por la curva <M>{r`y=f(x)`}</M> y el eje <M>{r`x`}</M> en un intervalo <M>{r`[a,b]`}</M>, usando el eje <M>{r`x`}</M> como eje de rotación. Ese sólido será un sólido compacto. Para hallar el volumen de esa figura, se puede dividir en discos de igual altura perpendiculares al eje <M>{r`x`}</M>. Si se cuenta con <M>{r`n`}</M> discos, la altura <M>{r`h`}</M> de cada uno es <M>{r`\Delta x = \frac{b-a}{n}`}</M>. Cada disco tendrá un radio <M>{r`r=f(x_i^*)`}</M> y por tanto el área de su base, que es un círculo, será <M>{r`A_B = \uppi r^2 = \uppi f^2(x_i^*)`}</M>. Su volumen está dado por:
        <M block>
          {r`V_{\text{disco}} = A_B \cdot h = \uppi r^2 h = \uppi f^2(x_i^*) \Delta x.`}
        </M>
        Siguiendo la misma idea que se ha seguido antes, para obtener el área exacta, se debe contemplar el volumen de infinitos discos, por lo que se toma el límite cuando el número de discos <M>{r`n`}</M> tiende a infinito de la suma de los volúmenes de los discos,
        <M block>
          {r`V=\lim_{n \to \infty}\sum_{i=1}^{n}\uppi f^2(x_i^*) \Delta x,`}
        </M>
        lo cual constituye una integral definida.
      </p>
      <Theorem name="Método de discos" environmentName="Método">
        El volumen del sólido que se genera al rotar la región plana acotada por la curva <M>{r`y=f(x)`}</M> y el eje <M>{r`x`}</M> en el intervalo <M>{r`[a,b]`}</M> usando el eje <M>{r`x`}</M> como eje de rotación es:
        <M block>
          {r`V = \uppi \defint{f^2(x)}{x}{a}{b}.`}
        </M>
      </Theorem>

      <h4>Método de arandelas</h4>
      <p>
        Este método es análogo al anterior, pero trata sólidos huecos. Se puede generar un sólido a partir de la rotación de una región bidimensional delimitada por las curvas <M>{r`y=f(x)`}</M> y <M>{r`y=g(x)`}</M> en un intervalo <M>{r`[a,b]`}</M>, usando una recta horizontal <M>{r`y=L`}</M> como eje de rotación. Ese sólido será un sólido hueco. Para hallar el volumen de esa figura, se puede dividir en arandelas de igual altura, donde, si se tiene <M>{r`n`}</M> arandelas, la altura <M>{r`h`}</M> de cada una es <M>{r`\Delta x = \frac{b-a}{n}`}</M>. El área de la base de cada arandela está dada por el área de un círculo menos el área del hueco, que también se calcula como un círculo. Se tiene entonces un círculo grande de radio <M>{r`R = f(x_i^*) - L`}</M> y uno pequeño de radio <M>{r`r = g(x_i^*) - L`}</M>, para un área de la base de <M>{r`A_B = \uppi R^2- \uppi r^2 = \uppi(f(x_i^*)-L)^2 - \uppi (g(x_i^*)-L)^2`}</M>. Con lo anterior, sabiendo que el volumen de una arandela está dado por el producto entre el área de la base y la altura, se tiene:
        <M block>
          {r`V_{\text{arandela}}=A_B\cdot h=(\uppi R^2- \uppi r^2)h = (\uppi(f(x_i^*)-L)^2-\uppi (g(x_i^*)-L)^2 )\Delta x.`}
        </M>
        Como antes, para obtener el área exacta, se toma el límite cuando el número de arandelas <M>{r`n`}</M> tiende a infinito,
        <M block>
          {r`V=\lim_{n \to \infty}\sum_{i=1}^{n} (\uppi(f(x_i^*)-L)^2-\uppi (g(x_i^*)-L)^2) \Delta x,`}
        </M>
        lo cual puede ser escrito en forma de integral definida para obtener el método de arandelas:
      </p>
      <Theorem name="Método de arandelas" environmentName="Método">
        El volumen del sólido que se genera al rotar la región plana acotada por las curvas <M>{r`y=f(x)`}</M> y <M>{r`y=g(x)`}</M> sobre el intervalo <M>{r`[a,b]`}</M> usando la recta horizontal <M>{r`y=L`}</M> como eje de rotación es:
        <M block>
          {r`V = \uppi \defint{((f(x)-L)^2-(g(x)-L)^2)}{x}{a}{b}.`}
        </M>
      </Theorem>
      <p>
        Nótese que, si se usa el eje <M>{r`x`}</M> como eje de rotación para la formación de una arandela, entonces <M>{r`L=0`}</M> y la fórmula se reduce a:
        <M block>
          {r`V = \uppi \defint{(f^2(x)-g^2(x))}{x}{a}{b}`}
        </M>
        Más aún, para el caso especial en que <M>{r`g(x)=0`}</M>, es decir, la segunda función es el eje <M>{r`x`}</M>, el sólido deja de ser hueco y la fórmula se reduce a la usada en el método de discos.
      </p>

      <h3>Longitud de arco</h3>
      <p>
        Para hallar la longitud de una curva, comúnmente denominada <em>longitud de arco</em>, dada por la gráfica de una función <M>{r`f`}</M> en el intervalo <M>{r`[a,b]`}</M>, se procede de forma similar a las aplicaciones anteriores. Se inscriben bajo la curva <M>{r`n`}</M> cuadriláteros de base <M>{r`\Delta x = \frac{b-a}{n}`}</M> cuyos vértices superiores <M>{r`M_i`}</M> son puntos en la curva, de forma que los lados superiores de los rectángulos se aproximan a la forma de la curva. Así, la suma de las aristas superiores de los rectángulos es una aproximación a la longitud <M>{r`L`}</M> de la curva:
        <M block>
          {r` L \approx \sum_{i=1}^n \overline{M_i M_{i-1}}.`}
        </M>
        Los lados superiores de los rectángulos se pueden expresar en términos de sus vértices inferiores, <M>{r`x_i`}</M>, y sus imágenes, <M>{r`f(x_i)`}</M>, haciendo uso del teorema de Pitágoras,
        <M block>
          {r` \overline{M_iM_{i-1}} = \sqrt{(x_i-x_{i-1})^2+(f(x_i)-f(x_{i-1}))^2},`}
        </M>
        con lo que se puede expresar la suma de los lados superiores de los rectángulos como sigue:
        <M block>
          {r`L \approx \sum_{i=1}^n \sqrt{(x_i-x_{i-1})^2+(f(x_i)-f(x_{i-1}))^2}.`}
        </M>
      </p>
      <p>
        Por el {referenceById("Teorema del Valor Medio", DIFFERENTIAL_CALCULUS, "teorema-del-valor-medio-de-lagrange")}, se sabe que la diferencia entre las imágenes de una función es igual a la derivada de un valor intermedio por la diferencia de las variables. Por ello, se puede expresar <M>{r`(f(x_i)-f(x_{i-1}))`}</M> como <M>{r`f'(x_i^*)(x_i-x_{i-1})`}</M>. Sea <M>{r`\Delta x_i=x_i-x_{i-1}`}</M>, se simplifica la expresión anterior en mayor medida a <M>{r`f'(x_i^*)\Delta x`}</M>, lo cual se reemplaza para llegar a
        <M block>
          {r`L \approx \sum_{i=1}^n \sqrt{\Delta x_i^2+(f'(x_i^*))^2\Delta x_i^2}.`}
        </M>
      </p>
      <p>
        Para obtener la longitud exacta, se debe tomar el límite cuando el número <M>{r`n`}</M> de rectángulos tiende a infinito. Con eso se obtiene un límite de una suma de Riemann,
        <M block>
          {r` L = \lim_{n \to \infty}\sum_{i=1}^n \sqrt{1+(f'(x_i^*))^2}\Delta x_i,`}
        </M>
        que se puede expresar como integral definida para obtener la fórmula para la longitud de una curva:
      </p>
      <Definition concept="Longitud de arco">
        Sea <M>{r`f`}</M> una función continua en <M>{r`[a,b]`}</M>, la <em>longitud</em> <M>{r`L`}</M> de la curva <M>{r`y=f(x), x \in [a,b]`}</M> está dada por
        <M block>
          {r`L = \defint{\sqrt{1+(f'(x))^2}}{x}{a}{b}.`}
        </M>
        Si se tiene una curva que medida desde el eje <M>{r`y`}</M>, de forma <M>{r`x=g(y), y \in [c,d]`}</M>, la fórmula se convierte en
        <M block>
          {r`L = \defint{\sqrt{1+(g'(y))^2}}{y}{c}{d}.`}
        </M>
      </Definition>
      <p>
        A partir de lo anterior, se puede establecer también una función para obtener la longitud de una curva <M>{r`f`}</M> definida en <M>{r`[a,b]`}</M>, desde un número inicial <M>{r`(a,f(a))`}</M> hasta un un punto cualquiera <M>{r`(t,f(t))`}</M>:
        <M block>
          {r`L(t) = \defint{\sqrt{1+(f'(x))^2}}{x}{a}{t}.`}
        </M>
        Que se puede escribir en forma paramétrica si se toma el integrando como <M>{r`\mathrm{d}s = \sqrt{1+(f'(x))^2} \: \mathrm{d}x`}</M>:
        <M block>
          {r`\begin{gather*}
          \mathrm{d}s^2=(1+(f'(x))^2)(\mathrm{d}x)^2 \\
          \mathrm{d}s^2=\left(1+\left(\der[y][x]\right)^2\right)(\mathrm{d}x)^2 \\
          \mathrm{d}s^2=\left(\frac{\mathrm{d}x^2}{\mathrm{d}x^2}+\frac{\mathrm{d}y^2}{\mathrm{d}x^2}\right)(\mathrm{d}x)^2 \\
          \mathrm{d}s^2=\mathrm{d}x^2+\mathrm{d}y^2.
          \end{gather*}`}
        </M>
        {/* TODO: Mirar esto de la forma paramétrica... qué está pasando? */}
      </p>

    </Section>

    {/* TODO: Agregar sucesiones, series, curvas paramétricas. */}

  </NoteDocument >
);

export default CalculoIntegral;

