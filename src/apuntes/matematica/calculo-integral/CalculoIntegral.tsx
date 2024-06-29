import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import Properties from "@/components/notes/environments/Properties";
import { Notation, Tip, Warning } from "@/components/notes/environments/StickyNotes";
import Epigraph from "@/components/notes/Epigraph";
import NoteDocument from "@/components/notes/NoteDocument";
import Section from "@/components/notes/Section";
import H3 from "@/components/notes/Subsection";
import { referenceById } from "@/components/utils/hyperlinkManager";
import M, { r } from "@/math/LaTeX";
import { DIFFERENTIAL_CALCULUS, INTEGRAL_CALCULUS, VECTOR_CALCULUS } from "@/Router";

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
            note: <span>Esta regla se obtiene de la derivada del logaritmo natural de <M>{r`f(x)`}</M>, que se calcula directamente con la regla de derivación <M>{r`\der{\ln|x|} = \frac{1}{x}`}</M> y la regla de la cadena.</span>
          }
        ]}
      />

      <Properties
        title="Integrales de las derivadas de las funciones trigonométricas"
        initialCountValue={6 + 3 + 2}
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
          // {
          //   name: 'Integral de tangente',
          //   formula: <M>{r`\indint{\tan x}{x} = -\ln|\cos x| + C.`}</M>
          // },
          // {
          //   name: 'Integral de cotangente',
          //   formula: <M>{r`\indint{\cot x}{x} = \ln|\sin x| + C.`}</M>
          // },
          // {
          //   name: 'Integral de secante',
          //   formula: <M>{r`\indint{\sec x}{x} = \ln|\sec x + \tan x| + C.`}</M>
          // },
          // {
          //   name: 'Integral de cosecante',
          //   formula: <M>{r`\indint{\csc x}{x} = -\ln|\csc x + \cot x| + C.`}</M>
          // }
        ]}
      />
      <p>
        Nótese que estas no son las antiderivadas de las funciones trigonométricas, sino más bien las integrales definidas de las derivadas de las funciones trigonométricas. Para obtener las integrales de las funciones trigonométricas faltantes, tangente, cotangente, secante y cosecante, es necesario utilizar una técnica de integración: la {referenceById("integración por partes", INTEGRAL_CALCULUS, "integracion-por-partes", "")}.
      </p>

      <Properties
        title="Integrales de las funciones trigonométricas inversas"
        initialCountValue={6 + 3 + 2 + 6}
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
        Considérese el problema, más específico, de hallar el área bajo la gráfica de una función positiva y continua <M>{r`f`}</M> en un intervalo <M>{r`[a,b]`}</M>. Para aproximar ese área, se pretende inscribir en ella múltiples rectángulos, de forma que su base esté en el eje <M>{r`x`}</M> y que tengan una altura que toque la curva. Para el primer rectángulo, los vértices de su base los representan los puntos <M>{r`(x_0,0)`}</M> y <M>{r`(x_1,0)`}</M>. Si la distancia entre los vértices se denota por <M>{r`\Delta x=x_1-x_0`}</M>, la longitud de la base <M>{r`b`}</M> del rectángulo es igual a <M>{r`\Delta x`}</M>. Para la altura <M>{r`h`}</M> del rectángulo, se toma algún valor de la base, denominado punto de muestra y denotado por <M>{r`x^*`}</M>, tal que allí el rectángulo y la curva intersequen, de forma que <M>{r`h=f(x^*)`}</M>. Teniendo la base y la altura del rectángulo, se pueden reemplazar los valores en la fórmula del área de un rectángulo conocida de la Geometría Euclidiana:
        <M block>
          {r`A_{\text{rectángulo}}= b\cdot h = \Delta x \cdot f(x^*).`}
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

    
    </Section>

  </NoteDocument >
);

export default CalculoIntegral;

