import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import Properties from "@/components/notes/environments/Properties";
import { Notation, Tip, Warning } from "@/components/notes/environments/StickyNotes";
import NoteDocument from "@/components/notes/NoteDocument";
import Section from "@/components/notes/Section";
import { referenceById } from "@/components/utils/hyperlinkManager";
import M, { r } from "@/math/LaTeX";
import { DIFFERENTIAL_CALCULUS, INTEGRAL_CALCULUS, VECTOR_CALCULUS } from "@/Router";

const CalculoVectorial = () => (
  <NoteDocument>

    <h1>Cálculo Vectorial</h1>

    <p>
      El <em>cálculo vectorial</em> es la rama de las matemáticas que estudia el cálculo en funciones de múltiples variables y en funciones vectoriales. En estos apuntes se estudia el cálculo vectorial en dos partes diferenciadas: el cálculo vectorial diferencial, que generaliza el cálculo diferencial a múltiples variables, y el cálculo vectorial integral, que hace lo propio con el cálculo integral.
    </p>

    <p>
      Antes de comenzar con el cálculo vectorial, es imprescindible tener claros los conceptos básicos de funciones con valores reales. Por ello, se inicia con una introducción a las funciones con valores reales y a los conjuntos con valores reales.
    </p>

    <Section title="Funciones con valores reales">

      <p>
        Una función es una regla que asigna un elemento a otro específico, mas nunca asigna al mismo elemento dos distintos. En las funciones con valores reales, esos elementos pueden ser números reales (escalares) o vectores reales.
      </p>
      <p>
        A causa de lo anterior, toda <em>función con valores reales</em> tiene la forma <M>{r`f\colon A\subseteq\mathbb{R}^{m}\to\mathbb{R}^{n}`}</M>, donde <M>{r`m, n \in \mathbb{N}_{>0}`}</M>. A cada elemento del conjunto <M>{r`A = \dom f`}</M>, que puede ser un vector o escalar dependiendo del valor de <M>{r`m`}</M>, le corresponde un único elemento <M>{r`f(\bvec{x}) \in \ran f \subseteq \mathbb{R}^{n}`}</M>, vector o escalar dependiendo del valor de <M>{r`n`}</M>. Las funciones con valores reales se clasifican precisamente de acuerdo a qué forma tienen sus elementos.
      </p>

      <Definition concept="Función de una variable">
        Una función <M>{r`f`}</M> es <em>de una variable</em> o <em>univariada</em> si tiene la forma <M>{r`f\colon A\subseteq\mathbb{R}\to \mathbb{R}^{n}`}</M>, tal que los elementos en su dominio son escalares.
      </Definition>
      <p>
        Las funciones de una variable se denotan por letras minúsculas.
      </p>
      <Definition concept="Función de múltiples variables">
        Una función <M>{r`f`}</M> es <em>de múltiples variables</em> o <em>multivariada</em> si tiene la forma <M>{r`f \colon A\subseteq\mathbb{R}^{m}\to \mathbb{R}^{n}`}</M> donde <M>{r`m>1`}</M>, tal que los elementos en su dominio son vectores.
      </Definition>
      <p>
        Nótese que las dos definiciones anteriores clasifican a las funciones de acuerdo con la forma de los elementos en su dominio. También existen clasificaciones complementarias de acuerdo con la forma de los elementos en su rango.
      </p>

      <Definition concept="Función escalar">
        Una <em>función escalar</em> <M>{r`f`}</M> es una función de forma <M>{r`f\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}`}</M>, tal que los elementos en su rango son escalares.
      </Definition>

      <Definition concept="Función vectorial">
        Una <em>función vectorial</em> <M>{r`\bvec{F}`}</M> es una función de forma <M>{r`\bvec{F}\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> donde <M>{r`n > 1`}</M>, tal que los elementos en su rango son vectores.
      </Definition>
      <p>
        Las funciones vectoriales se denotan por letras en negrilla para enfatizar que los elementos en su rango son vectores, <M>{r`\bvec{F}(\bvec{x}) \in \mathbb{R}^{n}`}</M>, en contraposición a las funciones escalares. Si la función vectorial es de una variable, se suele denotar por letras minúsculas; si es de múltiples variables, por letras mayúsculas. En la definición se optó por una letra mayúscula puesto que refiere tanto a funciones vectoriales de una variable como de múltiples variables.
      </p>
      <p>
        Como la función vectorial toma un elemento y le asigna un vector de valores, se puede expresar una función vectorial como un vector con <M>{r`n`}</M> funciones escalares, cada una de las cuales toma ese elemento y le asigna un valor,
        <M block>
          {r`\bvec{F}=(F_1,F_2,\ldots,F_n).`}
        </M>
        Esas funciones escalares se denominan sus <em>funciones escalares componentes</em>. Los componentes de una función vectorial se denotan por la letra de la función vectorial, sin negrilla (pues son funciones escalares), seguida de un subíndice.
      </p>

      <p>
        La última clasificación de funciones con valores reales describe a las funciones que toman un vector y devuelven un vector.
      </p>
      <Definition concept="Campo vectorial">
        Un campo vectorial <M>{r`\bvec{F}`}</M> es una función vectorial de múltiples variables.
      </Definition>
      <p>
        De acuerdo con la definición anterior, un campo vectorial tiene la forma <M>{r`\bvec{F}\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> donde <M>{r`m, n > 1`}</M>, tal que los elementos tanto en su dominio como en su rango son vectores: recibe un vector <M>{r`\bvec{x}\in \mathbb{R}^{m}`}</M> y tiene como imagen un vector <M>{r`\bvec{F}(\bvec{x}) \in \mathbb{R}^{n}`}</M>. Como es una función vectorial, se puede expresar de forma
        <M block>
          {r`\bvec{F}=(F_1,F_2,\ldots,F_n)`}
        </M>
        donde a sus funciones escalares componentes se les denomina en ocasiones <em>campos escalares componentes</em>. Se evalúa de la siguiente manera:
        <M block>
          {r`\begin{gather*}
            \bvec{F}(\bvec{x})=(F_1(\bvec{x}),F_2(\bvec{x}),\ldots,F_n(\bvec{x}))\\
            \bvec{F}(x_1,x_2,\ldots,x_m)=(F_1(x_1,x_2,\ldots,x_m),F_2(x_1,x_2,\ldots,x_m),\ldots,F_n(x_1,x_2,\ldots,x_m)).
          \end{gather*}`}
        </M>
      </p>

      <Notation>
        La convención usada para denotar funciones permite saber rápidamente si la función es escalar o vectorial, estando las segundas en negrilla. Más aún, permite saber si una función vectorial es de una variable o de múltiples variables, pues las primeras se denotan con letras minúsculas y las segundas con letras mayúsculas.
      </Notation>

      <Example title="Ejemplos de funciones escalares y vectoriales">
        Un ejemplo de una función escalar de una variable, <M>{r`f\colon\mathbb{R}\to\mathbb{R}`}</M>:
        <M block>
          {r`\begin{gather*}
		f(x)=x^2+\log_3(x)
	\end{gather*}`}
        </M>

        Un ejemplo de una función escalar de múltiples variables, <M>{r`g\colon\mathbb{R}^{5}\to\mathbb{R}`}</M>:
        <M block>
          {r`
		g\colon\begin{pmatrix}
				x_1\\x_2\\x_3\\x_4\\x_5
			\end{pmatrix}\mapsto\cos(x_1+x_3)+\sin(x_2+x_4)+\mathrm{e}^{x_5}.
	`}
        </M>

        Un ejemplo de una función vectorial de una variable, <M>{r`\bvec{F}\colon\mathbb{R}\to\mathbb{R}^4`}</M>:
        <M block>
          {r`
					\bvec{F}(x) = \begin{pmatrix}
						x^{x} \\ (1+x) / x^5 \\ \tanh x \\ x
					\end{pmatrix}.
				`}
        </M>

        Un ejemplo de un campo vectorial, <M>{r`\bvec{G}\colon\mathbb{R}^{3}\to\mathbb{R}^6`}</M>:
        <M block>
          {r`
			\bvec{G}\colon\begin{pmatrix}
			x\\y\\z
			\end{pmatrix}\mapsto\begin{pmatrix}
			\ln(x+y) \\ x^2 \\ \tan(x-y) \\y^2 \\ x^2+y^2 \\ \arccsc(y)
			\end{pmatrix}.
    `}
        </M>
      </Example>

      <h3>Gráfica de una función escalar</h3>
      <p>
        Las funciones escalares más simples son las de una variable, de forma <M>{r`f\colon A\subseteq \mathbb{R}\to\mathbb{R}`}</M>. La gráfica de dichas funciones es el conjunto de los puntos <M>{r`(x,f(x))`}</M>, dispuestos en el plano para todo <M>{r`x`}</M> en <M>{r`\dom f = A`}</M>. Esa curva es el siguiente subconjunto de <M>{r`\mathbb{R}^{2}`}</M>:
        <M block>
          {r`\text{gráfica } f = \set{(x,f(x)) \in\mathbb{R}^{2}\mid x\in A}`}
        </M>
      </p>
      <p>
        Generalizando lo anterior, para cualquier función escalar <M>{r`f\colon A\subseteq \mathbb{R}^n\to\mathbb{R}`}</M>, su gráfica será un subconjunto de <M>{r`\mathbb{R}^{n+1}`}</M>. Las gráficas de funciones escalares de una variable se denominan <em>curvas</em> y las gráficas de funciones escalares de dos variables se denominan <em>superficies</em>.
      </p>

      <Definition concept="Gráfica de una función escalar">
        Dada una función escalar <M>{r`f\colon A\subseteq\mathbb{R}^{n}\to\mathbb{R}`}</M>, su <em>gráfica</em> es el conjunto de los puntos <M>{r`(x_1,x_2,\ldots,x_n,f(x_1,x_2,\ldots,x_n))`}</M> para todo <M>{r`\bvec{x}\in A`}</M>. Definido por compresión:
        <M block>
          {r`\text{gráfica } f \coloneqq \set{(x_1,x_2,\ldots,x_n,f(x_1,x_2,\ldots,x_n)) \in \mathbb{R}^{n+1} \mid (x_1,x_2,\ldots,x_n) \in A}`}
        </M>
      </Definition>

      <Tip>
        La gráfica de una función no es más que un vector que contiene a todas las variables y a la imagen de la función. Recuérdese que <M>{r` f(x_1,x_2,\ldots,x_n) = f(\bvec{x})`}</M> es un número, que es distinto para cada vector <M>{r`\bvec{x}\in A`}</M> de variables.
      </Tip>
      <p>
        El comportamiento de funciones escalares <M>{r`f\colon A\subseteq \mathbb{R}^n\to\mathbb{R}`}</M> se puede entender mediante <em>conjuntos de nivel</em>. Un conjunto de nivel es un subconjunto de <M>{r`\mathbb{R}^{n}`}</M> en donde <M>{r`f`}</M> es constante.
      </p>

      <Definition concept="Conjunto de nivel">
        Sea <M>{r`f\colon A\subseteq \mathbb{R}^n\to\mathbb{R}`}</M> y <M>{r`c\in \mathbb{R}`}</M>, el <em>conjunto de nivel de <M>f</M> en <M>c</M></em> es el conjunto de todos los puntos en el dominio cuya imagen es <M>{r`c`}</M>.
        <M block>
          {r`\text{conjunto de nivel de } f \text{ en } c \coloneqq \{\bvec{x} \in A\mid f(\bvec{x})=c\} \subseteq \mathbb{R}^{n}`}
        </M>
      </Definition>
      <p>
        En funciones escalares de tres variables los conjuntos de nivel son subconjuntos de <M>{r`\mathbb{R}^{3}`}</M> y se denominan <em>superficies de nivel</em >. Similarmente, en funciones escalares de dos variables los conjuntos de nivel se llaman <em> curvas de nivel</em> por ser subconjuntos de <M>{r`\mathbb{R}^{2}`}</M>.
      </p>

      <h4> Gráficas de funciones escalares de dos variables</h4 >
      <p>
        Se estudian con más especificidad las gráficas de funciones escalares de dos variables, debido a que, por ser subconjuntos de <M>{r`\mathbb{R}^{3}`}</M>, se pueden visualizar en el espacio tridimensional y dibujar en el plano. Para todas las demás funciones escalares de múltiples variables, es complicado siquiera imaginar cómo se ven sus gráficas.
      </p>
      <p>
        Cada curva de nivel de una función definida en <M>{r`\mathbb{R}^{2}`}</M>, de forma <M>{r`f(x, y) = z`}</M>, se obtiene asignándole un valor constante <M>{r`c \in \mathbb{R}`}</M> a la variable <M>{r`z`}</M>. Así, toda curva de nivel es la intersección entre la superficie que es gráfica de la función y el plano <M>{r`z=c`}</M>, por lo que son paralelas al plano <M>{r`xy`}</M>.
      </p>
      <p>
        Tiene sentido entonces pensar en las curvas de nivel como "rebanadas horizontales" de la superficie. Al unir todas las curvas de nivel se obtiene la gráfica de la función. Análogamente, tiene sentido pensar también en "rebanadas verticales" de la superficie, que son las <em>secciones</em> de la gráfica.
      </p>
      < Definition concept="Sección">
        Sea <M>{r`f\colon A\subseteq\mathbb{R}^{2}\to\mathbb{R}`}</M> una función escalar de dos variables, una < em > sección</em > de la gráfica de <M>{r`f`}</M> es la intersección de la gráfica con un plano vertical.
      </Definition >
      <p>
        Las secciones se pueden obtener de dos maneras: o asignándole un valor constante a la variable <M>{r`x`}</M>, para obtener una sección paralela al plano <M>{r`yz`}</M>, o asignándole un valor constante a la variable <M>{r`y`}</M>, obteniendo una sección paralela al plano <M>{r`xz`}</M>. Si se establece <M>{r`x=a`}</M>, la sección obtenida será la intersección entre ese plano y la superficie; análogamente, al fijar <M>{r`y=b`}</M>, la sección obtenida es la intersección entre la superficie y el plano <M>{r`y=b`}</M>.
      </p>
      <p>
        Con eso en mente, para dibujar la gráfica de una función escalar de dos variables se siguen los siguientes pasos:
      </p>
      <ol>
        <li> Graficar las curvas de nivel de la función en <M>{r`\mathbb{R}^{2}`}</M>.</li>
        <li> Graficar las secciones de la función en <M>{r`\mathbb{R}^{3}`}</M>.</li>
        <li> Graficar la superficie en <M>{r`\mathbb{R}^{3}`}</M>.</li>
      </ol>
      {/*
    <p>
      En las figuras se muestran algunas imágenes del proceso de graficación del paraboloide de revolución <M>{r`f(x,y)=x^2+y^2`}</M>.
    </p>
    Paraboloide hiperbólico(silla de montar): <M>{r`x^2-y^2`}</M> % Ej 4 p. 83 Marsden y tromba 
    */}

    </Section>

    <h1>Parte 1: Cálculo Vectorial Diferencial</h1>

    <p>
      En esta primera parte del cálculo vectorial se generaliza el cálculo diferencial de funciones escalares de una variable a funciones vectoriales y a funciones de múltiples variables. Se estudian, en orden: los límites de funciones de múltiples variables; landerivación de funciones escalares de múltiples variables, mediante la derivación parcial, el gradiante y la derivada direccional; la optimización de funciones escalares de múltiples variables; la diferenciación de funciones vectoriales de una variable, ejemplificada por el estudio de trayectorias; y la derivación de campos vectoriales, mediante el rotacional y la divergencia
    </p>

    {/* TODO: A partir de la mitad de la sección de derivada direccional, estos apuntes están incompletos, tomados por encima. Las secciones de cinemática y derivación de funciones vectoriales sospecho que están muy incompletas.  */}

    <Section title="Límites de múltiples variables">

      <p>
        Para estudiar formalmente los límites con múltiples variables, es necesario definir el concepto de vecindad de un punto en <M>{r`\mathbb{R}^{n}`}</M>. Para ello, la próxima sección se ocupa de definir conjuntos abiertos y cerrados
      </p>

      <h3>Conjuntos con valores reales</h3>

      <p>
        Los conjuntos con valores reales son subconjuntos de <M>{r`\mathbb{R}^{n}`}</M>. Los elementos de un conjunto con valores reales <M>{r`A \subseteq\mathbb{R}^{n}`}</M> pueden ser escalares, si <M>{r`n=1`}</M>, o tuplas de <M>{r`n`}</M> elementos de forma
        <M block>
          {r`\bvec{x} = (x_1,x_2,\ldots,x_n) \in A \subseteq \mathbb{R}^{n}`}
        </M>
        Dichas tuplas de <M>{r`n`}</M> elementos pueden ser interpretadas como puntos o como vectores.
      </p>

      <h4>Conjuntos abiertos</h4>

      <p>
        Antes de entrar en detalle con los conjuntos abiertos, es necesario definir el concepto de entorno. Para ello, vale la pena tener presente la noción de distancia entre dos puntos en <M>{r`\mathbb{R}^{n}`}</M>.
      </p>
      <Tip>
        Al igual que la distancia entre dos valores <M>{r`a, b \in \mathbb{R}`}</M>se puede expresar matemáticamente por <M>|a-b|</M> o por <M>|b-a|</M>, la distancia entre dos puntos <M>{r`\bvec{v}, \bvec{w} \in \mathbb{R}^{n}`}</M> se puede expresar por <M>{r`\norm{\bvec{v}-\bvec{w}}`}</M> o por <M>{r`\norm{\bvec{w}-\bvec{v}}`}</M>. Es conveniente leer <M>{r`\norm{\bvec{v}-\bvec{w}}`}</M> como "la distancia entre <M>{r`\bvec{v}`}</M> y <M>{r`\bvec{w}`}</M>".
      </Tip>

      <p>
        Se puede definir un conjunto de puntos a partir de un punto específico, que contenga a todos los puntos en <M>{r`\mathbb{R}^{n}`}</M> cuya distancia al punto dado sea estrictamente menor a un determinado valor.
      </p>

      <Definition concept="Entorno">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}_{>0}`}</M> un escalar. Un <em>entorno</em> con centro en <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> se denota por <M>{r`B_{\varepsilon}(\bvec{v})`}</M> y es el conjunto dado por
        <M block>
          {r`B_{\varepsilon}(\bvec{v}) \coloneqq \{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
        </M>
      </Definition>

      <p>
        La interpretación geométrica de un entorno depende de <M>{r`n`}</M>. Para <M>{r`n=1`}</M>, el entorno <M>{r`B_{\varepsilon}(v)`}</M> es el intervalo abierto <M>{r`(v-\varepsilon,v+\varepsilon)`}</M>. Para <M>{r`n=2`}</M>, es un círculo con centro <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> que no incluye su circunferencia. A eso se le denomina <em>disco abierto</em>.
      </p>

      <Definition concept="Disco abierto">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{2}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Un <em>disco abierto</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`\bvec{v}`}</M> es un entorno en <M>{r`\mathbb{R}^{2}`}</M> de la forma
        <M block>
          {r`B_\varepsilon(\bvec{v}) \coloneqq \{\bvec{x}\in\mathbb{R}^{2}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
        </M>
        Si <M>{r`\bvec{v}=(v_x,v_y)`}</M>, el disco abierto se describe en coordenadas cartesianas como
        <M block>
          {r`B_\varepsilon(v_x,v_y) = \{(x,y)\colon (x-v_x)^2+(y-v_y)^2<\varepsilon^2\}.`}
        </M>
      </Definition>

      <p>
        Para <M>{r`n=3`}</M>, el conjunto es el interior de una esfera con centro <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> excluyendo su borde.
      </p>

      <Definition concept="Bola abierta">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{3}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Una <em>bola abierta</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`(\bvec{v})`}</M> es un entorno en <M>{r`\mathbb{R}^{3}`}</M> de la forma
        <M block>
          {r`B_\varepsilon(\bvec{v}) \coloneqq \{\bvec{x}\in\mathbb{R}^{3}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
        </M>
        Si <M>{r`\bvec{v}=(v_x,v_y,v_z)`}</M>, la bola abierta se describe en coordenadas cartesianas como
        <M block>
          {r`B_\varepsilon(v_x,v_y) = \{(x,y,z)\colon (x-v_x)^2+(y-v_y)^2+(z-v_z)^2<\varepsilon^2\}.`}
        </M>
      </Definition>

      <p>
        A partir de un entorno, se define un conjunto abierto.
      </p>

      <Definition concept="Conjunto abierto">
        <M>{r`U\subseteq \mathbb{R}^{n}`}</M> es un <em>conjunto abierto</em> si para todo punto <M>{r`\bvec{v}\in U`}</M> existe un entorno centrado en ese punto con radio <M>{r`\varepsilon \in \mathbb{R}_{>0}`}</M>.
        <M block>
          {r`\{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\} \subseteq U.`}
        </M>
      </Definition>

      <p>
        Intuitivamente, un conjunto abierto es un conjunto sin borde, pues para cada punto en el conjunto, siempre se puede encontrar un entorno.
      </p>

      <Notation>
        Para denotar un conjunto abierto cualquiera generalmente se usa la letra mayúscula <M>{r`U`}</M>.
      </Notation>

      <p>
        El conjunto vacío <M>{r`\varnothing`}</M> es abierto. También lo es el conjunto <M>{r`\mathbb{R}^{n}`}</M> para todo <M>{r`n \in \mathbb{N}\setminus\{0\}`}</M>.
      </p>

      <Definition concept="Vecindad de un punto">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M>, una <em>vecindad</em> de <M>{r`\bvec{v}`}</M> es cualquier conjunto abierto <M>{r`U`}</M> al que pertenezca <M>{r`\bvec{v}`}</M>.
      </Definition>

      <p>
        Un punto <M>{r`\bvec{v}\in U`}</M> es un punto frontera de <M>{r`U\subset \mathbb{R}^{n}`}</M> si para todo <M>{r`\varepsilon >0`}</M>, todas sus vecindades intersecan a <M>{r`U`}</M> e intersecan a <M>{r`U^\complement`}</M>. Todos los puntos frontera forman lo que intuitivamente es el borde de <M>{r`U`}</M>.
      </p>

      <Definition concept="Frontera de un conjunto">
        Sea <M>{r`A\subset\mathbb{R}^{n}`}</M> un conjunto, su <em>frontera</em>, denotada <M>{r`\partial A`}</M>, es el conjunto de todos los puntos <M>{r`\bvec{v}`}</M> tales que todas sus vecindades contienen como mínimo un punto en <M>{r`A`}</M> y un punto en <M>{r`A^\complement`}</M>.
      </Definition>

      <p>
        Nótese en la definición de frontera que los puntos en la frontera de un conjunto pueden ser o no elementos del conjunto. <M>{r`U`}</M> es un conjunto abierto si y solamente si no contiene a <M>{r`\partial U`}</M>.
      </p>

      <Tip>
        Como se estudian conjuntos con valores reales, el complemento de un conjunto se toma respecto a <M>{r`\mathbb{R}^{n}`}</M>. Es decir, sea <M>{r`A \in \mathbb{R}^{n}`}</M>,
        <M block>
          {r`A^\complement = \mathbb{R}^{n} \setminus A.`}
        </M>
      </Tip>

      <h4>Conjuntos cerrados</h4>
      <p>
        Un entorno que contiene su borde es un entorno cerrado.
      </p>
      <Definition concept="Entorno cerrado">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Un <em>entorno cerrado</em> con centro de <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> está dado por
        <M block>
          {r`\{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} \leq \varepsilon\}.`}
        </M>
      </Definition>
      <p>
        Al igual que sucede con los entornos (abiertos), la interpretación geométrica de un entorno cerrado depende de <M>{r`n`}</M>. Para <M>{r`n=1`}</M>, el entorno cerrado con centro <M>{r`v`}</M> y radio <M>{r`\varepsilon`}</M> es el intervalo cerrado <M>{r`[v-\varepsilon,v+\varepsilon].`}</M>. Se definen el disco cerrado y la bola cerrada con base en el entorno cerrado, de forma análoga a como se definieron antes el disco abierto y la bola abierta.
      </p>
      <Tip>
        La diferencia entre las definiciones de entorno, disco abierto, bola abierta y las de entorno cerrado, disco cerrado y bola cerrada es simplemente que en las primeras, siempre se usa el operador menor que, <M>{r`<`}</M>, mientras que en las segundas se emplea siempre el operador menor o igual que, <M>{r`\leq`}</M>.
      </Tip>

      <Definition concept="Disco cerrado">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{2}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Un <em>disco cerrado</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`(\bvec{v})`}</M> es un entorno cerrado en <M>{r`\mathbb{R}^{2}`}</M> de la forma
        <M block>
          {r`\{\bvec{x}\in\mathbb{R}^{2}\colon\norm{\bvec{x}-\bvec{v}} \leq \varepsilon\}.`}
        </M>
        Si <M>{r`\bvec{v}=(v_x,v_y)`}</M>, el disco cerrado se describe en coordenadas cartesianas como
        <M block>
          {r`\{(x,y)\colon (x-v_x)^2+(y-v_y)^2\leq\varepsilon^2\},`}
        </M>
        de forma que el disco contiene a su frontera, <M>{r` (x-v_x)^2+(y-v_y)^2=\varepsilon^2 `}</M>.
      </Definition>

      <Definition concept="Bola cerrada">
        Sea <M>{r`\bvec{v}\in\mathbb{R}^{3}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Una <em>bola cerrada</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`(\bvec{v})`}</M> es un entorno en <M>{r`\mathbb{R}^{3}`}</M> de la forma
        <M block>
          {r`\{\bvec{x}\in\mathbb{R}^{3}\colon\norm{\bvec{x}-\bvec{v}} \leq \varepsilon\}.`}
        </M>
        Si <M>{r`\bvec{v}=(v_x,v_y,v_z)`}</M>, la bola abierta se describe en coordenadas cartesianas como
        <M block>
          {r`\{(x,y,z)\colon (x-v_x)^2+(y-v_y)^2+(z-v_z)^2 \leq \varepsilon^2\}.`}
        </M>
        Nótese que contiene a su frontera, <M>{r` (x-v_x)^2+(y-v_y)^2+(z-v_z)^2 = \varepsilon^2`}</M>.
      </Definition>

      <p>
        Un conjunto que contiene su borde es cerrado.
      </p>
      <Definition concept="Conjunto cerrado">
        <M>{r`C\subset \mathbb{R}^{n}`}</M>  es un <em>conjunto cerrado</em> si para todo punto <M>{r`\bvec{v}\in C`}</M> existe un entorno cerrado centrado en ese punto con radio <M>{r`\varepsilon >0`}</M>.
        <M block>
          {r`\{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} \leq \varepsilon\}\subseteq C.`}
        </M>
      </Definition>
      <p>
        Naturalmente, se cumple que <M>{r`C \subset \mathbb{R}^{n}`}</M> es un <em>conjunto cerrado</em> si y solamente si <M>{r`C^\complement`}</M> es un conjunto abierto.
      </p>
      <Notation>
        Para denotar un conjunto cerrado cualquiera generalmente se usa la letra mayúscula <M>{r`C`}</M>.
      </Notation>

      <Definition concept="Conjunto acotado">
        Sea <M>{r`A\in \mathbb{R}^{n}`}</M> un conjunto, es un <em>conjunto acotado</em> si existe un entorno centrado en el origen tal que <M>{r`A`}</M> está contenido en él. <M>{r`A`}</M> es acotado si existe <M>{r`N>0`}</M> tal que
        <M block>
          {r`A \subseteq B_N(\bvec{0})`}
        </M>
      </Definition>
      <p>
        Un conjunto acotado no puede ser infinito, pues está encerrado por un intervalo (en <M>{r`\mathbb{R}`}</M>), un círculo (en <M>{r`\mathbb{R}^{2}`}</M>), una bola (en <M>{r`\mathbb{R}^{3}`}</M>) o en general un entorno.
      </p>
      <p>
        Juntando las definiciones de conjunto cerrado y conjunto acotado se llega al concepto de <em>compacto</em>.
      </p>
      <Definition concept="Compacto">
        Sea <M>{r`C\in \mathbb{R}^{n}`}</M> un conjunto, es <em>compacto</em> si es un conjunto cerrado y acotado.
      </Definition>
      <p>
        Todo entorno cerrado es compacto.
      </p>

      <h3>Límites de múltiples variables</h3>

      <Warning>
        La siguiente definición resulta fácil de entender si se comprende con claridad la definición de límite en una variable. De lo contrario, la definición no es intuitiva en absoluta. Se recomienda revisar la definición de límite en una variable antes de continuar.
      </Warning>
      <p>
        La definición de límite de múltiples variables es una generalización de la definición de límite en una variable. Varía en que el dominio de la función tiene que ser un conjunto abierto y en que el elemento al que tiende la variable debe encontrarse o bien en el dominio o bien en su frontera.
      </p>
      <Definition concept="Límite de múltiples variables">
        Dado un conjunto abierto <M>{r`U\subseteq \mathbb{R}^{n}`}</M>, una función escalar de múltiples variables <M>{r`f\colon U \to\mathbb{R}^{m}`}</M> y vectores <M>{r`\bvec{u} \in U \cup \partial U`}</M> y <M>{r`\bvec{v}\in\mathbb{R}^{m}`}</M>. El <em>límite</em> cuando <M>{r`\bvec{x}`}</M> tiende a <M>{r`\bvec{u}`}</M> se define como
        <M block>
          {r`\Big(\lim_{\bvec{x}\to \bvec{u}} f(\bvec{x}) = \bvec{v}\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < \norm{\bvec{x}-\bvec{u}} < \delta \implies \norm{f(\bvec{x})-\bvec{v}}< \varepsilon, \forall \bvec{x} \in U \Big).`}
        </M>
      </Definition>

      <h3>Continuidad en varias variables</h3>
      <p>
        También se generaliza el concepto de continuidad para funciones de múltiples variables.
      </p>
      <Definition concept="Continuidad en varias variables">
        La función de múltiples variables <M>{r`f`}</M> es continua en <M>{r`\bvec{v} \in \dom f`}</M> si
        <M block>
          {r`\lim_{\bvec{x}\to\bvec{v}} f(\bvec{x}) = f(\bvec{v}).`}
        </M>
      </Definition>
      <p>
        Análogamente a la definición de continuidad en un intervalo, una función de múltiples variables es continua en un conjunto abierto si lo es en cada punto de ese conjunto.
      </p>
      <Definition concept="Continuidad en un conjunto abierto">
        La función de múltiples variables <M>{r`f`}</M> es continua en el conjunto abierto <M>{r`B_\varepsilon(\bvec{v})`}</M> si lo es en cada punto que pertenece al conjunto.
      </Definition>

      <h4>Propiedades de las funciones continuas de múltiples variables</h4>

      <p>
        Sean <M>{r`\bvec{F},\bvec{G}\colon U \subseteq \mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> funciones vectoriales (o escalares) continuas en <M>{r`\bvec{v} \in U`}</M> y sea <M>{r`c \in \mathbb{R}`}</M>, entonces las siguientes funciones son continuas en <M>{r`\bvec{v}`}</M>:
      </p>
      <ul>
        <li> <M>{r`\bvec{F}+\bvec{G}`}</M>.</li>
        <li> <M>{r`\bvec{F}\cdot \bvec{G}`}</M>.</li>
        <li> <M>{r`\bvec{F}\times \bvec{G}, \quad \text{si } n=3`}</M>.</li>
        <li> <M>{r`c \, \bvec{F}`}</M>.</li>
      </ul>
      <p>
        Si además de lo anterior se cumple que <M>{r`n=1`}</M>, de forma que las funciones son escalares y las denoto ahora por <M>f</M> y <M>g</M>, y se cumple que <M>{r`g(\bvec{v})\neq 0`}</M>, también es continua la función
      </p>
      <ul>
        <li> <M>{r`f/g`}</M>.</li>
      </ul>

      <h3>Cálculo de límites de múltiples variables</h3>

      Se presenta un método general para calcular límites de funciones escalares de múltiples variables. Se toma el caso de dos variables, pero el método es generalizable a cualquier número de variables.

      <h4>Cálculo de límites para funciones escalares con dos variables</h4>

      Sea <M>{r`f\colon\mathbb{R}^{2}\to\mathbb{R}`}</M> y <M>{r`a,b\in\mathbb{R}`}</M>, los límites de <M>{r`f`}</M> son de la forma <M block>
        {r`\lim_{(x,y)\to(a,b)} f(x,y) = c.`}
      </M>

      <p><b>1. Intentar evaluar el límite.</b> Si la función es continua, reemplazar el valor de <M>{r`x`}</M> por <M>{r`a`}</M> y el de <M>{r`y`}</M> por <M>{r`b`}</M> para evaluar el límite. Si el cálculo arroja un escalar, se obtuvo la respuesta, el límite era fácil; de lo contrario, hay que usar uno de los siguientes 4 métodos. Se sugiere probarlos en orden.
      </p>

      <p><b>2. Usar coordenadas polares.</b> Las coordenadas polares representan los puntos con base en su distancia a un polo (radio). Si se coloca el polo en el punto <M>{r`(a,b)`}</M>, las coordenadas polares contemplan todos los puntos a cierta distancia de <M>{r`(a,b)`}</M>, por lo que permiten acercarse al punto desde todas las direcciones simultáneamente. Esto puede facilitar la evaluación del límite.
      </p>
      <p>
        Para que <M>{r`(a,b)`}</M> sea el polo, se debe realizar el siguiente cambio de variables:
        <M block>
          {r`\begin{gather*}
	x = a+r\cos\theta\\
	y = b+r\sin\theta.
\end{gather*}`}
        </M>
        Con ese cambio, ahora se evalúa el límite cuando los puntos se acercan al polo, es decir, cuando el radio tiende a <M>{r`0`}</M> para cualquier ángulo:
        <M block>
          {r`\lim_{r\to 0} f(r,\theta), \quad \forall \theta.`}
        </M>
        Eso es un límite univariado. Al evaluarlo, puede pasar que
      </p>
      <ul>
        <li> Se obtiene un escalar.</li>
        <li> Se obtiene una función <M>{r`g(\theta)`}</M>.</li>
        <ul>
          <li> Si la función tiene la forma <M>{r`0 \, g(\theta)`}</M> y se sabe que <M>{r`g(\theta)`}</M> <b>es acotada por valores finitos</b>, el límite es 0. Por ejemplo, <M block>
            {r`\lim_{r\to0}0(\sin^5\theta) = 0`}
          </M> porque <M>{r`-1\leq\sin^5\theta\leq 1.`}</M></li>
          <li> Si <M>{r`g(\theta)`}</M> no es acotada, este método no sirvió y probablemente el límite no existe. Se debe entonces intentar demostrar su inexistencia usando alguno de los métodos siguientes.</li>
          <Tip>
            Si existen dos valores de ángulos <M>{r`\theta_1`}</M> y <M>{r`\theta_2`}</M> tal que evaluados en <M>{r`g(\theta)`}</M> arrojan escalares distintos, se demuestra la inexistencia del límite.
          </Tip>
        </ul>
      </ul>

      <p>
        <b>3. Demostrar la inexistencia del límite tomando distintas direcciones.</b> En un límite univariado, solo es posible acercarse al punto por dos direcciones: izquierda y derecha. En contraposición, en límites de múltiples variables es posible acercarse al punto desde infinitas direcciones. Si acercarse al punto desde dos direcciones distintas da valores disímiles para el límite, el límite no existe.
      </p>
      <p>
        Para un límite que tiende a <M>{r`(a,b)`}</M>,
        <M block>
          {r`\displaystyle \lim_{(x,y)\to(a,b)} f(x,y)`}
        </M>
        se puede tomar cualquier función <M>{r`f(a)=b`}</M> como una dirección (e.g., <M>{r`y=b`}</M>, <M>{r`y=x+b-a`}</M>, <M>{r`y=x^2+b-a^2`}</M>, etcétera). En este caso, se está siguiendo la curva de la función seleccionada para aproximarse al punto del límite desde esa dirección. Al reemplaza <M>{r`y`}</M> en el límite por alguna dirección, se consigue un límite univariado. Si se realiza este proceso dos o más veces, se calcula el límite univariado, y se encuentran dos límites con valores distintos, entonces el límite inicial no existe.
      </p>

      <Warning>
        Que dos o más de esos límites sean iguales no indica nada sobre la existencia del límite y mucho menos que el límite sea igual a ese valor.
      </Warning>

      <p>
        <b>4. Demostrar la inexistencia del límite fijando variables. </b> Es una aplicación del concepto anterior. Se toma un valor constante <M>{r`a`}</M> para <M>{r`x`}</M> y se evalúa el límite <M>{r`\displaystyle \lim_{(a,y)\to(a,b)} f(x,y)`}</M>. Tras eso, se fija <M>{r`y`}</M> en <M>{r`b`}</M> y se evalúa el límite <M>{r`\displaystyle \lim_{(x,b)\to(a,b)} f(x,y)`}</M>. Si los límites son distintos, entonces el límite inicial no existe. Es útil para los límites que tienden al origen porque se fija cada variable en <M>{r`0`}</M> y las cosas se cancelan.
      </p>

      <Warning>
        Nuevamente, que los límites dan iguales no indica nada sobre la existencia del límite.
      </Warning>

      <p>
        Como generalización de lo anterior, dado un límite de <M>{`n`}</M> variables <M block>
          {r`\lim_{(x_1,x_2,\ldots,x_n) \to (a_1,a_2,\ldots,a_n)} f(\bvec{x}),`}
        </M>
        se pueden establecer valores constantes arbitrarios para <M>{r`n-1`}</M> variables y obtener el límite <M block>
          {r`\lim_{(x_1,a_2,\ldots,a_n) \to (a_1,a_2,\ldots,a_n)} f(\bvec{x})`}
        </M>
        que es un límite univariado sobre <M>{r`x_1`}</M>. Se repite el proceso con cada variable, obteniendo <M>n</M> límites univariados. Si al evaluar todos los límites, se obtienen dos o más límites con resultados diferentes, se prueba la inexistencia del límite inicial.
      </p>

      <p><b>5. Demostrar la existencia del límite usando la definición épsilon-delta. </b>
        Si se tiene dominio sobre la definición formal de límite, se puede tomar la definición y determinar un <M>{r`\delta`}</M> que garantice que la desigualdad se cumple para cada posible <M>{r`\varepsilon`}</M>, demostrando así la existencia del límite.
      </p>

      <Properties
        title="Propiedades de los límites de múltiples variables"
        description={<p>Las propiedades de los límites de múltiples variables son análogas a las propiedades de los límites de una variable, y por tanto igual de intuitivas. Sea <M>{r`U \subseteq \mathbb{R}^{m}`}</M> un conjunto abierto, sean <M>{r`\bvec{F},\bvec{G}\colon U \to \mathbb{R}^{n}`}</M> y sea <M>{r`\bvec{v} \in U \cup \partial U`}</M> un punto. Suponiendo que todos los límites a continuación existen, satisfacen las siguientes propiedades: </p>}
        properties={[
          {
            name: "Límite de una constante",
            formula: <M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} a = a`}</M>
          },
          {
            name: "Límite de una variable",
            formula: <M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} \bvec{x} = \bvec{v}`}</M>
          },
          {
            name: "Propiedad homogénea del límite",
            formula: <M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} (c \cdot \bvec{F}(\bvec{x})) = c \, \lim_{\bvec{x} \to \bvec{v}} \bvec{F}(\bvec{x})`}</M>
          },
          {
            name: "Propiedad de linealidad del límite",
            formula: <M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} (\bvec{F}(\bvec{x}) \pm \bvec{G}(\bvec{x})) = \lim_{\bvec{x} \to \bvec{v}} \bvec{F}(\bvec{x}) \pm \lim_{\bvec{x} \to \bvec{v}} \bvec{G}(\bvec{x})`}</M>
          },
          {
            name: "Límite del producto punto",
            formula: <M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} (\bvec{F}(\bvec{x}) \cdot \bvec{G}(\bvec{x})) = \lim_{\bvec{x} \to \bvec{v}} \bvec{F}(\bvec{x}) \cdot \lim_{\bvec{x} \to \bvec{v}} \bvec{G}(\bvec{x})`}</M>
          },
          {
            name: "Límite del cociente",
            formula: <span><M>{r`\displaystyle \lim_{\bvec{x} \to \bvec{v}} \frac{f(\bvec{x})}{g(\bvec{x})} = \cfrac{\lim\limits_{\bvec{x}\to\bvec{v}}f(\bvec{x})}{\lim\limits_{\bvec{x}\to\bvec{v}} g(\bvec{x})}`}</M>, si <M>{r`n=1`}</M> y <M>{r`\lim_{\bvec{x}\to\bvec{v}} g(\bvec{x})\neq 0`}</M>.</span>,
            note: <span>Se necesita que <M>{r`n=1`}</M> para que las funciones sean escalares y la operación de división esté definida. Por eso se denotan por <M>{r`f`}</M> y <M>{r`g`}</M>.</span>
          },
          {
            name: "Límite del producto cruz",
            formula: <span><M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} (\bvec{F}(\bvec{x}) \times \bvec{G}(\bvec{x})) = \lim_{\bvec{x}\to\bvec{v}} \bvec{F}(\bvec{x}) \times \lim_{\bvec{x}\to\bvec{v}} \bvec{G}(\bvec{x}) `}</M>, si <M>{r`n=3`}</M>.</span>,
            note: <span>Se restringe el codominio a <M>{r`\mathbb{R}^3`}</M> para que la operación de producto cruz esté definida.</span>
          },
          {
            name: "Límite de una función compuesta",
            formula: <span>Considérese <M>{r`\bvec{H}\colon \mathbb{R}^{n}\to\mathbb{R}^{k}`}</M>, tal que <M>{r`(\bvec{H} \circ \bvec{F})\colon \mathbb{R}^{m}\to\mathbb{R}^{k}`}</M>. Si <M>{r` \displaystyle \lim_{\bvec{x}\to\bvec{u}} \bvec{F}(\bvec{x}) = \bvec{v}`}</M> y <M>{r` \displaystyle \lim_{\bvec{y}\to\bvec{v}} \bvec{H}(\bvec{y}) = \bvec{w}`}</M>, entonces <M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{u}} (\bvec{H} \circ \bvec{F}) (\bvec{x}) = \bvec{w} `}</M>.</span>
          }
        ]}
      />
      {/* TODO: Revisar si esto existe.	\rule[1ex]{0pt}{3.5ex}OJO-ROM.&Límite de una potencia: &<M>{r`\displaystyle \lim_{x \to c}\bvec{F}(x)^{n }=\le\bvec{F}t(\lim_{x \to c}\bvec{F}(x) \right)^n \text{ si } n\in \mathbb{N}`}</M>. \\ % Dudo que esta propiedad exista para límites multivariables. No se mencionó en clase.*/}

      <Tip>
        En el límite de una función compuesta, las variables de <M>{r`\bvec{F}`}</M> y <M>{r`\bvec{H}`}</M> se denotan por letras distintas para enfatizar que <M>{r`\bvec{x}\in\mathbb{R}^{m}`}</M> mientras que <M>{r`\bvec{y}\in\mathbb{R}^{n}`}</M>.

        Se puede entender el límite de una función compuesta pensando en que <M>{r`\bvec{F}`}</M> toma valores cerca de <M>{r`\bvec{u}`}</M> y los lleva a <M>{r`\bvec{v}`}</M> y luego <M>{r`\bvec{H}`}</M> toma valores cerca de <M>{r`\bvec{v}`}</M> y los lleva a <M>{r`\bvec{w}`}</M>.
      </Tip>

    </Section>

    <Section title="Derivación de funciones escalares de múltiples variables">

      <h3>La derivada parcial</h3>

      <p>
        Al definir la derivada para funciones escalares de una variable, se deriva sobre la única variable que tiene la función. En el caso de funciones escalares de múltiples variables, es posible derivar la función con respecto a cada una de sus variables de forma independiente. A esa operación se le denomina <em>derivada parcial</em>.
      </p>

      <Definition concept="Derivada parcial">
        Sea <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y sea <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de <M>{r`n`}</M> variables. La <em>derivada parcial</em> de <M>{r`f`}</M> con respecto a la i-ésima variable de la función, <M>{r`x_i`}</M>, se define como la función
        <M block>
          {r`\parder{f(\bvec{x})}{x_i} \coloneqq \lim_{h\to 0} \frac{f(x_1, x_2, \ldots, x_i+h, \ldots, x_n)-f(\bvec{x})}{h}.`}
        </M>
        Si y solamente si el límite existe.
      </Definition>
      <p>
        La definición de derivada parcial es análoga a la definición de derivada. Recuérdese que en aquella definición, la idea es obtener una función que determine, para cualquier punto en <M>{r`f`}</M>, la pendiente de la recta tangente a él. <M>{r`\bvec{x}`}</M> representa cualquier punto en el dominio de <M>{r`f`}</M>. Se busca determinar la pendiente de la recta secante entre <M>{r`(\bvec{x}, f(\bvec{x}))`}</M> y otro punto muy cercano a él, tan cercano, que esa pendiente sea realmente la de la recta tangente. Con eso en mente, <M>{r`h`}</M> representa la distancia entre los puntos. En este caso, esa distancia es con respecto al eje cartesiano <M>{r`x_i`}</M>, por lo cual se selecciona a <M>{r`((x_1, x_2, \ldots, x_i+h, \ldots, x_n), f(x_1, x_2, \ldots, x_i+h, \ldots, x_n))`}</M> como punto cercano. La fracción en la definición corresponde entonces a la pendiente de la recta secante entre los dos puntos. Cuando <M>{r`h`}</M> tiende a 0, la distancia entre los puntos se hace infinitesimalmente pequeña y la pendiente de la recta secante se convierte en la pendiente de la recta tangente a <M>{r`f`}</M> en el punto <M>{r`(\bvec{x}, f(\bvec{x}))`}</M> en la dirección de <M>{r`x_i`}</M>.
      </p>
      <Tip>
        El párrafo anterior es bastante sucinto; si no es claro, se recomienda leer la {referenceById("sección sobre la definición de derivada en una variable.", DIFFERENTIAL_CALCULUS, "definicion-de-derivada")}
      </Tip>
      <p>
        La derivada parcial <M>{r`\partial f /\partial x_i`}</M> indica cómo crece (o decrece) la función en la dirección de la variable <M>{r`x_i`}</M>, es decir, respecto al eje cartesiano <M>{r`x_i`}</M>. Para toda función escalar de múltiples variables, si esta es diferenciable, se pueden calcular sus derivadas parciales con respecto a cada una de sus variables. Nótese que la derivada parcial sólo está definida para funciones escalares.
      </p>
      <p>
        Al calcular la derivada parcial <M>{r`\partial f /\partial x_i`}</M> solo interesa la variación con respecto al eje <M>{r`x_i`}</M>. Por ende, se toma <M>{r`x_i`}</M> como si fuera la única variable de la función y todas las demás variables como si fueran constantes. Con eso, el procedimiento para calcular una derivada parcial es el mismo que se sigue para calcular la derivada de una función escalar de una variable, haciendo uso de las mismas {referenceById("propiedades y reglas de derivación", DIFFERENTIAL_CALCULUS, "reglas-de-derivacion")}.
      </p>

      <Example title="Calcular derivadas parciales">
        Partiendo de una función <M>{r`f\colon U\subseteq \mathbb{R}^{3}\to \mathbb{R}`}</M> dada por <M>{r`f(x,y,z)=\sin(x^2-y)+\mathrm{e}^{z^2}x`}</M>, hallar la derivada parcial para cada variable.
        <M block>
          {r`\begin{gather*}
		\parder{f}{x} = 2x\cos(x^2-x) + \mathrm{e}^{z^2}. \\
		\parder{f}{y} = -\cos(x^2-x). \\
		\parder{f}{z} = 2z\mathrm{e}^{z^2}x.
	\end{gather*}`}
        </M>
      </Example>

      <Properties
        title="Propiedades de la derivada parcial"
        description={<span><p>Las propiedades de la derivada parcial respecto a cualquier variable son idénticas a las propiedades de la derivada clásica, salvo la regla de la cadena.</p><p> Sea <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto, sean <M>{r`f,g\colon U \to \mathbb{R}`}</M> funciones escalares de múltiples variables y sea <M>{r`c \in \mathbb{R}`}</M> una constante. Si las derivadas parciales <M>{r`\partial f / \partial x_i`}</M> y <M>{r`\partial g / \partial x_i`}</M>, entonces se cumplen las siguientes propiedades:</p></span>}
        properties={[
          {
            name: "Propiedad de homogeneidad",
            formula: <M>{r`\dparder{cf}{x_i} = c \, \dparder{f}{x_i}`}</M>
          },
          {
            name: "Propiedad de linealidad",
            formula: <M>{r`\dparder{f \pm g}{x_i} = \dparder{f}{x_i} \pm \dparder{g}{x_i}`}</M>
          },
          {
            name: "Regla del producto",
            formula: <M>{r`\dparder{fg}{x_i} = g\dparder{f}{x_i} + f \dparder{g}{x_i}`}</M>
          },
          {
            name: "Regla del cociente",
            formula: <span><M>{r`\dparder{\dfrac{f}{g}}{x_i} =\cfrac{g\dparder{f}{x_i} -f\dparder{g}{x_i}}{g^2}`}</M>, en los puntos <M>{r`\bvec{x}`}</M> donde <M>{r`g(\bvec{x})\neq0`}</M>.</span>
          }
        ]}
      />

      <p>Respecto a la regla de la cadena, nótese que para poder componer la función <M>{r`f\colon U \subseteq \mathbb{R}^n \to \mathbb{R}`}</M> con otra función, esa segunda función debe ser vectorial, de la forma <M>{r`\bvec{G} \colon \mathbb{R} \to \mathbb{R}^n`}</M>. Por ende, no existe una regla de la cadena para derivadas parciales, sino más bien una regla de la cadena multivariable, la cual se estudia más adelante. </p>

      <h4>Derivada parcial de enésimo orden</h4>

      <p>
        Al igual que pasa en la derivación de funciones escalares de una variable, existen derivadas parciales de múltiples órdenes. Sin embargo, como existe una derivada parcial por cada variable, se pueden calcular múltiples derivadas parciales de segundo orden y más aún de órdenes superiores.
      </p>

      <p>
        Sea <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y sea <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar diferenciable de <M>{r`n`}</M> variables, para cada derivada parcial <M>{r`\partial f /\partial x_i`}</M>, se puede calcular a su vez la derivada parcial para cada una de sus variables. A eso se le denomina <em>segunda derivada parcial</em> o <em>derivada parcial de segundo orden</em> y se debe especificar respecto a qué variable se calcula. La segunda derivada parcial con respecto a <M>{r`x_j`}</M> de la derivada parcial con respecto a <M>{r`x_i`}</M> de la función <M>{r`f`}</M> se denota por
        <M block>
          {r`\begin{gather*}
	\frac{\partial f}{\partial x_j} \left(\frac{\partial f}{\partial x_i}\right)
	\frac{\partial^2 f}{\partial x_j \partial x_i}
\end{gather*}`}
        </M>
        La segunda derivada parcial de <M>{r`f`}</M> con respecto a <M>{r`x_i`}</M> se denota por
        <M block>
          {r`\frac{\partial^2 f}{\partial^2 x_i}`}
        </M>
      </p>

      <Notation>
        En ocasiones, la segunda derivada parcial de <M>{r`f`}</M> con respecto a <M>{r`x_j`}</M> y <M>{r`x_i`}</M> se denota por <M>{r`\partial x_j \partial x_i f `}</M> o por <M>{r`F_{x_j\,x_i}`}</M>.
      </Notation>

      <p>
        Derivar parcialmente una función <M>{r`f`}</M> primero con respecto a una variable <M>{r`x_i`}</M> y luego con respecto a otra variable <M>{r`x_j`}</M> es igual a derivar primero con respecto a una variable <M>{r`x_j`}</M> y luego con respecto a la variable <M>{r`x_i`}</M>. Es decir,
        <M block>
          {r`\begin{gather*}
	\partial^2 f /\partial x_j \partial x_i = \partial^2 f /\partial x_i \partial x_j
\end{gather*}`}
        </M>
        A esa propiedad se le denomina la <em>simetría de la derivada parcial</em>.
      </p>

      <Example title="Calcular segundas derivadas parciales">
        Halle las segundas derivadas parciales de <M>{r`f(x,y,z)=x^2\cos(y-z)`}</M>.

        Se hallan las derivadas parciales de primer orden:

        <M block>
          {r`\begin{gather*}
		\parder{f}{x} = 2x\cos(y-z) \\
		\parder{f}{y} = -x^2 \sin(y-z) \\
		\parder{f}{z} = x^2 \sin(y-z)
	\end{gather*}`}
        </M>

        Se hallan las derivadas parciales de segundo orden de la derivada parcial con respecto a <M>{r`x`}</M>:
        <M block>
          {r`\begin{gather*}
		\frac{\partial f^2}{\partial x^2} = 2 \cos(y-z) \\
		\frac{\partial f^2}{\partial y \partial x} = -2x\sin(y-z) \\
		\frac{\partial f^2}{\partial z \partial x} = 2x\sin(y-z) 
	\end{gather*}`}
        </M>

        Se hallan las derivadas parciales de segundo orden de la derivada parcial con respecto a <M>{r`y`}</M>:
        <M block>
          {r`\begin{gather*}
		\frac{\partial f^2}{\partial x \partial y} = -2x\sin(y-x) \\
		\frac{\partial f^2}{\partial y^2} =  -x^2 \cos(y-z) \\
		\frac{\partial f^2}{\partial z \partial y} =  x^2 \cos(y-z)
	\end{gather*}`}
        </M>

        Se hallan las derivadas parciales de segundo orden de la derivada parcial con respecto a <M>{r`z`}</M>:
        <M block>
          {r`\begin{gather*}
		\frac{\partial f^2}{\partial x \partial z} = 2x\sin(y-z) \\
		\frac{\partial f^2}{\partial y \partial z} = x^2 \cos(y-z) \\
		\frac{\partial f^2}{\partial z^2} = -x^2 \cos(y-z)
	\end{gather*}`}
        </M>
      </Example>

      <p>
        Dada una función escalar de <M>{r`m`}</M> variables  <M>{r`f\colon U\subseteq \mathbb{R}^{m}\to\mathbb{R}`}</M>, si la función es de clase <M>{r`C^{n}`}</M>, tal que es <M>{r`n`}</M> veces continuamente diferenciable, es posible calcular <M>{r`m^n`}</M> <em>derivadas parciales de enésimo orden</em>. Sin embargo, entre ellas hay varias repetidas por simetría de la derivada parcial. A razón de eso, el número de derivadas parciales de enésimo orden únicas para una función con <M>{r`m`}</M> variables es un problema equivalente al número de formas en las cuales es posible distribuir <M>{r`n`}</M> elementos en <M>{r`m`}</M> contenedores. Haciendo uso de combinatoria, se llega a que la respuesta está dada por el siguiente coeficiente binomial:
        <M block>
          {r`\begin{pmatrix}
	n+m-1\\m-1
	\end{pmatrix}.`}
        </M>
      </p>
      {/* TODO: Aclarar esta combinatoria y mirar bien: qué da? */}

      <h3>El operador Nabla</h3>

      <Definition concept="Operador nabla">
        El operador <em>nabla</em> o <em>del</em>, denotado por el símbolo <M>{r`\nabla`}</M>, es un operador unario definido como el vector fila de operadores de derivadas parciales:
        <M block>
          {r`\nabla \coloneqq \left(\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_2},\ldots,\frac{\partial}{\partial x_n}\right).`}
        </M>
        donde <M>{r`n`}</M> es el número de variables de la función, vector o escalar con el que se opera.
      </Definition>

      <p>
        Haciendo uso de vectores unitarios de base estándar, nabla se define en términos de la base canónica de <M>{r`\mathbb{R}^n`}</M> como
        <M block>
          {r`\nabla = \sum_{i=1}^n \bvec{e}_i \frac{\partial}{\partial x_i}.`}
        </M>
      </p>

      <p>
        Nabla no es un vector, pues no tiene magnitud ni dirección, es un <em>operador vectorial</em>. Para nabla, están definidas la multiplicación por escalar y los productos punto y cruz. Por ende, puede ser operado con una función de múltiples variables para obtener un vector, con una función de una variable para obtener su derivada, y con cualquier vector o escalar para obtener el vector cero.
      </p>
      <ul>
        <li> La multiplicación de nabla por una función escalar da origen al <em>gradiente</em>. Si la función escalar es de una variable, se convierte en la derivada convencional en una dimensión.</li>
        <li> El producto punto de nabla con una función vectorial  da origen a la <em>divergencia</em>.</li>
        <li> El producto cruz de nabla con una función vectorial da origen al <em>rotacional</em>.</li>
      </ul>
      <Warning>
        Nabla no conmuta en el producto punto como sí lo hacen los vectores.
      </Warning>

      <p>
        Como el número de componentes de nabla, <M>{r`n`}</M>, está dado por el número de variables que tiene su operando, para funciones y vectores de tres variables, nabla se puede expresar como
        <M block>
          {r`\begin{gather*}
            \nabla = \left(\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right)\\
            \nabla = \uveci\frac{\partial}{\partial x} + \uvecj\frac{\partial}{\partial y} + \uvec{k}\frac{\partial}{\partial z}.
          \end{gather*}`}
        </M>
      </p>

      <h3>El gradiente</h3>

      <p>
        El gradiente es la generalización de la derivada convencional para cualquier función escalar, independientemente de su número de variables.
      </p>

      <Definition concept="Gradiente">
        Sean <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de múltiples variables, si todas las derivadas parciales <M>{r` \partial f / \partial x_i `}</M> existen para <M>{r`i \in \mathbb{N}\mid 1\leq i \leq n`}</M>, entonces el <em>gradiente</em> de <M>{r`f`}</M>, denotado por <M>{r`\nabla f`}</M>, es el campo vectorial definido por
        <M block>
          {r`\begin{align*}
            \nabla f & \coloneqq  \left(\frac{\partial f}{\partial x_1},\frac{\partial f}{\partial x_2},\ldots,\frac{\partial f}{\partial x_n}\right)\\
            \nabla f & = \bvec{e}_1 \parder{f}{x_1} + \bvec{e}_2 \parder{f}{x_2} + \cdots + \bvec{e}_n \parder{f}{x_n}
          \end{align*}`}
        </M>
        donde los vectores <M>{r`\bvec{e}_i`}</M> son los vectores unitarios de base estándar, aquellos que conforman la base canónica de <M>{r`\mathbb{R}^n`}</M>.
      </Definition>

      <p>
        Para una función <M>{r`g\colon U \subseteq\mathbb{R}^{3}\to\mathbb{R}`}</M>, el gradiente se puede definir como:
        <M block>
          {r`\nabla g = \uveci \parder{f}{x} + \uvecj \parder{f}{y} + \uvec{k} \parder{f}{z}`}
        </M>
      </p>

      <p>
        Calcular el gradiente de una función escalar <M>f</M> de <M>{r`n`}</M> variables resulta en un vector <M>{r`\nabla f`}</M>, que es un campo vectorial. Si no se evalúa el gradiente en algún punto, cada componente del vector es función escalar: la derivada parcial de <M>f</M> respecto a la variable correspondiente. Si se evalúa el gradiente en un punto <M>{r`\bvec{v} \in \mathbb{R}^{n}`}</M>, las componentes del vector <M>{r`\nabla f(\bvec{v}) \in \mathbb{R}^{n}`}</M> son números. Esto es análogo a lo que sucede con la derivada de una dimensión: si se evalúa en un punto, es un número; de lo contrario, es una función escalar de una variable.
      </p>

      <Properties
        title="Propiedades del gradiente"
        description={<p>Similar a la derivada parcial, el gradiente presenta las mismas propiedades que la derivada en una dimensión, salvo la regla de la cadena. Sean <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y <M>{r`f,g\colon U\to\mathbb{R}`}</M> funciones escalares de múltiples variables, si <M>{r`\nabla f`}</M> y <M>{r`\nabla g`}</M> existen, se cumple que</p>}
        properties={[
          {
            name: "Propiedad de homogeneidad",
            formula: <M>{r`\nabla (cf) = c\nabla f`}</M>
          },
          {
            name: "Propiedad de linealidad",
            formula: <M>{r`\nabla (f+g) = \nabla f + \nabla g`}</M>
          },
          {
            name: "Regla del producto",
            formula: <M>{r`\nabla (fg) = g \nabla f + f \nabla g`}</M>
          },
          {
            name: "Regla del cociente",
            formula: <span><M>{r`\displaystyle \nabla \left (\frac{f}{g}\right ) =\frac{g\nabla f -f\nabla g}{g^2}`}</M>, en los puntos <M>{r`\bvec{x}`}</M> donde <M>{r`g(\bvec{x})\neq0`}</M></span>
          }
        ]}
      />

      <Properties
        description={<p>También se pueden demostrar propiedades del gradiente que involucran campos vectoriales</p>}
        properties={[
          {
            name: "Gradiente del producto punto de campos vectoriales",
            formula: <M>{r`\nabla (\bvec{F}\cdot\bvec{G}) = (\bvec{F}\cdot \nabla)\bvec{G} + (\bvec{G}\cdot\nabla)\bvec{F} + \bvec{F}\times \rot \bvec{G} + \bvec{G}\times \rot \bvec{F}.`}</M>
          },
          {
            name: "Gradiente del producto punto de un campo vectorial por sí mismo",
            formula: <M>{r`\nabla (\bvec{F}\cdot\bvec{F}) = 2(\bvec{F}\cdot \nabla)\bvec{F} + 2\bvec{F} \times (\rot \bvec{F}).`}</M>
          },
          {
            name: "Gradiente al cuadrado del producto de funciones escalares",
            formula: <M>{r`\nabla^2 (fg) = f\nabla^2g+g\nabla^2f+2(\nabla f\cdot\nabla g)`}</M>
          }
        ]}
      />

      {/* TODO: Regla de la cadena multivariable! */}

      <h4>Campos gradientes</h4>

      <p>
        Si un campo vectorial se puede expresar como el gradiente de una función escalar, se denomina <em>campo gradiente</em>.
      </p>

      <Definition concept="Campo gradiente">
        Sea <M>{r`f\colon \mathbb{R}^{n}\to\mathbb{R}`}</M> una función escalar de múltiples variables. Un <em>campo gradiente</em> es un campo vectorial <M>{r`\bvec{F}`}</M> que tiene la forma
        <M>{r`\bvec{F} = \nabla f.`}</M>
      </Definition>

      <p>
        Los campos gradientes se denominan alternativamente <em>campos conservativos</em> porque en física, el trabajo en todo campo conservativo es cerrado. En ese contexto, la función escalar <M>{r`f\colon \mathbb{R}^{n}\to\mathbb{R}`}</M> es el <em>potencial</em> y el campo gradiente es el <em>campo de fuerza</em>.
      </p>

      <h3>La derivada direccional</h3>

      <p>
        La derivada direccional es la generalización de la derivación parcial. Dada una función escalar diferenciable <M>{r`f\colon U\subseteq \mathbb{R}^{n}\to \mathbb{R}`}</M>, la derivación parcial permite derivar <M>{r`f`}</M> con respecto a sus <M>{r`n`}</M> variables, es decir, con respecto a la dirección de cada uno de los <M>{r`n`}</M> ejes cartesianos de <M>{r`\mathbb{R}^{n}`}</M>. En contraste, la derivada direccional permite derivar <M>{r`f`}</M> con respecto a cualquier dirección posible en <M>{r`\mathbb{R}^{n}`}</M>.
      </p>

      <Definition concept="Derivada direccional">
        Sean <M>{r`U \subseteq \mathbb{R}^{n}`}</M> un conjunto abierto, <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de <M>{r`n`}</M> variables y <M>{r`\bvec{v}\in\mathbb{R}^{n} \mid \bvec{v}\neq \bvec{0}`}</M> un vector. La <em>derivada direccional</em> de <M>{r`f`}</M> en la dirección de <M>{r`\bvec{v}`}</M>, denotada por <M>{r`\mathrm{D}_{\bvec{v}} f`}</M>, está definida como la función
        <M block>
          {r`\mathrm{D}_{\bvec{v}} f(\bvec{x}) \coloneqq \lim_{h\to 0} \frac{f(\bvec{x}+h\uvec{v})-f(\bvec{x})}{h}`}
        </M>
        donde <M>{r`\uvec{v}`}</M> es el vector unitario de <M>{r`\bvec{v}`}</M>, es decir, su dirección.
      </Definition>

      <p>
        En la definición el vector unitario <M>{r`\uvec{v}`}</M> representa la dirección en la que apunta el vector <M>{r`\bvec{v}`}</M>, se calcula como <M>{r`\uvec{v} = \bvec{v}/\norm{\bvec{v}}`}</M> y tiene norma <M>1</M>.
      </p>
      <p>
        La definición anterior es una abstracción de la definición de derivada parcial. Al igual que se recordó en la definición de derivada parcial, <M>h</M> representa la distancia entre dos puntos para los cuales se quiere obtener la pendiente de su recta secante. En la definición de derivada parcial, se quiere separar los puntos <M>h</M> unidades en la dirección de alguno de los ejes cartesianos, por lo que basta con sumar <M>h</M> a uno de los componentes de <M>{r`\bvec{x}`}</M> para obtener el punto cercano. En esta definición, se busca separar los puntos <M>h</M> unidades en la dirección arbitraria <M>{r`\uvec{v}`}</M>, por lo que se realiza la suma <M>{r`\bvec{x}+h\uvec{v}`}</M>. Los puntos para los que se quiere hallar la pendiente de la recta secante son entonces <M>{r`(\bvec{x}, f(\bvec{x}))`}</M> y <M>{r`(\bvec{x}+h\uvec{v}, f(\bvec{x}+h\uvec{v}))`}</M>. La fracción en la definición corresponde a la fórmula que calcula esa pendiente. Cuando <M>h</M> tiende a <M>0</M>, los puntos se acercan tanto que se convierte en la fórmula que calcula la pendiente de la recta tangente al punto <M>{r`(\bvec{x}, f(\bvec{x}))`}</M> en la dirección <M>{r`\uvec{v}`}</M>.
      </p>

      <Notation>
        Existen varias notaciones para la derivada direccional. En estos apuntes, utilizo <M>{r`\mathrm{D}_{\bvec{v}} f`}</M>, pero puede toparse también con <M>{r`\nabla_{\bvec{v}} f`}</M>, <M>{r`\parder{f}{\bvec{v}}`}</M>, <M>{r`\partial_{\bvec{v}} f`}</M> y <M>{r`f'_{\bvec{v}}`}</M>
      </Notation>

      <p>
        La derivada derivada direccional de una función en la dirección <M>{r`\uvec{v}`}</M> en un punto <M>{r`\bvec{u}`}</M> representa la razón de cambio de la función en esa dirección desde ese punto. Entre más positiva es <M>{r`\mathrm{D}_{\bvec{v}} f(\bvec{u})`}</M>, mayor es la tasa de crecimiento de la función en la dirección <M>{r`\uvec{v}`}</M> desde el punto <M>{r`\bvec{u}`}</M> y entre más negativa, más rápido decrece la función en esa dirección.
      </p>

      {/* TODO! En este punto terminé la revisión de la parte de Diferencial de estos apuntes cuando fui monitor de Cálculo Vectorial en 2024-19. A partir de aquí y hasta el próximo TODO!, los apuntes están tal como se tomaron originalmente en 2021-20. */}

      <p>
        {/* TODO: Ahondar en esto. ¿Por qué? ¿Intuición detrás? */}
        La derivada direccional de <M>{r`f`}</M> en la dirección de <M>{r`\bvec{v}`}</M> en el punto <M>{r`\bvec{x}`}</M> se puede escribir como
        <M block>
          {r`\mathrm{D}_{\bvec{v}} f(\bvec{x}) = \der{}{t} f(\bvec{x}+t\bvec{v}) \mid_{t=0}`}
        </M>
        donde <M>{r`\bvec{x}+t\bvec{v}`}</M> es la ecuación vectorial de una recta: <M>{r`\bvec{x}`}</M> es un punto en la recta y <M>{r`\bvec{v}`}</M> es el vector director.
      </p>

      <p>
        Por último, se puede usar el gradiente para facilitar el cálculo de la derivada direccional, como se enuncia en el siguiente teorema.
      </p>

      <Theorem>
        Sea <M>{r`f`}</M> una función diferenciable, su derivada direccional en la dirección de <M>{r`\bvec{v}`}</M> se puede calcular como el producto punto entre su gradiente y la dirección <M>{r`\uvec{v}`}</M>.
        <M block>
          {r`\mathrm{D}_{\bvec{v}} f(\bvec{x}) = \nabla f(\bvec{x}) \cdot \uvec{v}`}
        </M>
      </Theorem>

      Lo anterior se debe a que

      <Example title="Derivada direccional">
        Sean <M>{r`f\colon \mathbb{R}^{3}\to\mathbb{R}`}</M> dada por <M>{r`f(x,y,z)=3x+y^2+4\cos(z)`}</M>, <M>{r`\bvec{u}=(2,3,\uppi/2)`}</M> y  <M>{r`\uvec{v}=(-1/\sqrt{2},1/\sqrt{2},0)`}</M>, halle la derivada direccional de <M>{r`f(\bvec{u})`}</M> en la dirección <M>{r`\uvec{v}`}</M>.

        {/* <M block>
        {r`\begin{gather*}
		\nabla f = \Big(3, 2y, -4\sin(z)\Big) \\
		\nabla f(\bvec{u}) = \left(3, 2(3), -4\sin\left(\frac{\uppi">
    \right)\right) = (3,6,-4) \\
		\nabla f(\bvec{u}) \cdot \uvec{v} = (3,6,-4) \cdot \left(\frac{-1}{\sqrt{2}},\frac{1}{\sqrt{2}},0\right) = \frac{-3}{\sqrt{2}}+\frac{6}{\sqrt{2}}=\frac{3}{\sqrt{2}} \\
		\mathrm{D}_{\bvec{v}} f(\bvec{u}) = \frac{3}{\sqrt{2}}
	\end{gather*}`}
      </M> */}
      </Example>

      <h4>Direcciones de máximo crecimiento y decrecimiento</h4>

      <p>
        Haciendo uso de las propiedades del producto punto, la operación <M>{r`\nabla f(\bvec{x})\cdot\uvec{v}`}</M> que da la derivada direccional de <M>{r`f`}</M> en la dirección de <M>{r`\bvec{v}`}</M> en el punto <M>{r`\bvec{x}`}</M>, se puede reescribir como
        {/* <M block>
        {r`\begin{ align }
\mathrm{ D }_{ \bvec{ v } } &= f(\bvec{ x }) \cdot\uvec{ v } \notag \\
\mathrm{ D }_{ \bvec{ v } }  &=\norm{ \nabla f(\bvec{ x }) } \norm{ \uvec{ v } } \cos\varphi \notag \\
\mathrm{ D }_{ \bvec{ v } }  &= \norm{ \nabla f(\bvec{ x }) } \cos\varphi \label{ eq: coseno_direccional }
\end{ align }`}
      </M> */}
        El análisis de la  arroja un teorema útil.La derivada direccional es máxima cuando el coseno del ángulo entre los vectores es máximo, que es cuando su valor es <M>{r`1`}</M> (recuérdese que para todo <M>{r`x`}</M>, <M>{r`-1\leq \cos(x)\leq 1`}</M>). Eso ocurre cuando los vectores son paralelos, pues <M>{r`\cos(0)=\cos(2\uppi)=1`}</M>.En otras palabras, la derivada direccional <M>{r`\mathrm{D}_{\bvec{v}}f`}</M> es máxima cuando <M>{r`\bvec{v}`}</M> es y <M>{r`\nabla f`}</M> tienen la misma dirección.Ergo, el gradiente <M>{r`\nabla f`}</M> apunta en la dirección en la cuál la derivada direccional de una función es máxima, que es la dirección de máximo crecimiento de <M>{r`f`}</M>.
      </p>

      <Theorem>
        Sea <M>{r`f\colon U\subseteq\mathbb{R}^{n}\to\mathbb{R}`}</M> una función diferenciable, el vector <M>{r`\nabla f`}</M> apunta en la dirección a lo largo de la cual <M>{r`f`}</M> crece más rápidamente.El vector <M>{r`- \nabla f`}</M> apunta en la dirección a lo largo de la cual <M>{r`f`}</M> decrece más rápidamente.
      </Theorem>

      <p>
        Usualmente se quiere hallar la dirección de máximo crecimiento o decrecimiento de una función <M>{r`f`}</M> desde un punto <M>{r`\bvec{v}`}</M>.En ese caso, se evalúa la gradiente para obtener que la dirección de máximo crecimiento de <M>{r`f`}</M> en <M>{r`\bvec{v}`}</M> está dada por la dirección de <M>{r`\nabla f (\bvec{v})`}</M>.Dicha dirección es el vector unitario
        {/* <M block>
{r`\begin{ equation }
\frac{ \nabla f(\bvec{ v }) } { \norm{ \nabla f(\bvec{ v }) } }.\tag{dirección de máximo crecimiento de <M>{r`f` }</M> en <M>{r`\bvec{v}`}</M>}
\end{ equation }`}
</M> */}
        El valor negativo de ese vector unitario es la dirección de mayor decrecimiento de <M>{r`f`}</M> en el punto <M>{r`\bvec{v}`}</M>.La norma del gradiente es igual al valor de la derivada direccional máxima.
      </p>

      <h5>
        Puntos estacionarios
      </h5>

      <p>
        También se puede analizar la  para el caso en el que la derivada direccional es nula, es decir, para el caso en el que no hay crecimiento ni decrecimiento en el punto en el que se evalúa.La derivada direccional es nula cuando el coseno del ángulo de los vectores es <M>{r`0`}</M>, o sea cuando <M>{r`\bvec{v}`}</M> es perpendicular a <M>{r`\nabla f`}</M>.Eso implica el siguiente teorema.
      </p>

      <Theorem>
        Sea <M>{r`f\colon U\subseteq\mathbb{R}^{n}\to\mathbb{R}`}</M> una función diferenciable, el vector <M>{r`\nabla f(\bvec{v})`}</M> es igual al vector nulo <M>{r`\bvec{0}`}</M> si y solamente si <M>{r`\bvec{v}`}</M> es un punto estacionario.
      </Theorem>

      <Definition concept="Punto estacionario">
        Un <em>punto estacionario</em> es un punto en el que una función no presenta crecimiento ni decrecimiento. Todo punto estacionario es o bien un extremo relativo (máximo o mínimo local) o bien un punto de silla.
      </Definition>

      <h4>Planos tangentes</h4>

      <p>
        El siguiente teorema abre la puerta a usar el gradiente para aplicaciones geométricas:
      </p>
      <Theorem environmentName="Lema" name="El gradiente es ortogonal a toda curva de nivel">
        Para cualquier función escalar de más de una variable, su gradiente siempre es ortogonal a cualquiera de sus conjuntos de nivel.
      </Theorem>

      <p>
        Se eximen explícitamente del teorema las funciones escalares de una variable puesto que su gradiente evaluado en un punto es un escalar, no un vector, y no tiene sentido hablar de ortogonalidad en ese caso.
      </p>

      <h5>Planos tangentes a superficies de nivel</h5>

      <p>
        Sea <M>{r`f`}</M> una función diferenciable <M>{r`f\colon U\subseteq\mathbb{R}^{3}\to\mathbb{R}`}</M> y <M>{r`d\in \mathbb{R}`}</M>, uno de sus conjuntos de nivel es <M>{r`f(x,y,z)=d`}</M>, que es concretamente una superficie de nivel. Sea <M>{r`(a,b,c)`}</M> un punto en la superficie de nivel, de forma que satisface <M>{r` f(a,b,c)=d `}</M>. Para hallar el plano tangente a la superficie de nivel <M>{r`f(x,y,z)=d`}</M> en el punto <M>{r`(a,b,c)`}</M>, se usa el hecho de que el vector <M>{r`\nabla f(a,b,c)`}</M> es normal a la superficie en el punto <M>{r`(a,b,c)`}</M>. Se tiene entonces un vector normal al plano tangente y un punto en él, por lo que se puede escribir la ecuación del plano como
        <M block>
          {r`(x-a,y-b,z-c) \cdot (\nabla f(a,b,c)) = 0.`}
        </M>
        Se iguala el producto punto a 0 para que el plano consista de todos los posibles vectores cuyo punto inicial es <M>{r`(a,b,c)`}</M>, que están dados por <M>{r` (x-a,y-b,z-c) `}</M>, que satisfagan ser perpendiculares al vector normal <M>{r`\bvec{n}=\nabla f(a,b,c)`}</M>.
      </p>

      <h5>Planos tangentes a superficies</h5>

      <p>
        Sea <M>{r`f`}</M> una función diferenciable <M>{r`f\colon U\subseteq\mathbb{R}^{2}\to\mathbb{R}`}</M>, su superficie está dada por <M>{r`f(x,y)=z`}</M>. Dados <M>{r`a,b \in U\subseteq \mathbb{R}`}</M>, se sabe que el punto <M>{r`(a,b,f(a,b))`}</M> se encuentra en la superficie. Se quiere implementar el procedimiento para hallar planos tangentes a superficies de nivel. Para ello se define una función <M>{r`g\colon U\subseteq\mathbb{R}^{3}\to\mathbb{R}`}</M> por
        <M block>
          {r`g(x,y,z)\coloneqq f(x,y)-z`}
        </M>
        con lo que se reescribe la superficie \(\) como una superficie de nivel:
        <M block>
          {r`\begin{align*}
	f(x,y)&=z \\
	f(x,y)-z&=0 \\
	g(x,y,z)&=0 
\end{align*}`}
        </M>
        Con eso, se puede usar el método para planos tangentes a superficies de nivel. Se obtiene la gradiente evaluada en el punto, <M>{r`\nabla g(a,b,f(a,b))`}</M> y se escribe la ecuación del plano como
        <M block>
          {r`(x-a,y-b,z-f(a,b)) \cdot (\nabla g(a,b,f(a,b))) = 0.`}
        </M>
      </p>

      <Tip>
        Si el gradiente de una función <M>{r`f`}</M> evaluado en un punto sea igual a <M>{r`\bvec{0}`}</M>, entonces el plano tangente a <M>{r`f`}</M> en ese punto es paralelo al plano <M>{r`xy`}</M>.
      </Tip>

      <h3>Diferenciabilidad de funciones escalares</h3>

      <h4>Diferenciabilidad de funciones escalares de dos variables</h4>

      <p>
        Sea <M>{r`f\colon U\subseteq \mathbb{R}^{2}\to\mathbb{R}`}</M> una función escalar de dos variables y sea <M>{r`(a,b)\in U`}</M> un punto. Se dice que <M>{r`f`}</M> es < em > diferenciable</em > en <M>{r`(a,b)`}</M> si y solamente si
      </p>
      < ul >
        <li>[i.] <M>{r`\dparder{f}{x}`}</M> y <M>{r`\dparder{f}{y}`}</M> existen en <M>{r`(a,b)`}</M>.</li>
        <li>[ii.] <M>{r`\displaystyle \lim_{(x,y)\to(a,b)} \cfrac{f(x,y)- \left[f(a,b)+\left(\dparder{f(a,b)}{x}\right)(x-a)+\left(\dparder{f(a,b)}{y}\right)(y-b)\right]}{\norm{(x,y)-(a,b)}} = 0`}</M>.</li>
      </ul >
      <p>
        En el ítem ii, el término que está entre corchetes es la mejor aproximación lineal a la función <M>{r`f`}</M> cerca del punto <M>{r`(a,b)`}</M>.A causa de eso, la ecuación del plano en <M>{r`\mathbb{R}^{3}`}</M> que es tangente a la superficie <M>{r`f`}</M> en el punto <M>{r`(a,b)`}</M> está dada por ese término igualado a <M>{r`z`}</M>:
        {/* <M block>{r`
	z = f(a,b)+\left(\parder{f(a,b)}{x}\right)(x-a)+\left(\parder{f(a,b)}{y}\right)(y-b). \tag{plano tangente a <M>{r`f`}</M> en <M>{r`(a,b)`}</M>}
`}</M> */}
      </p>

      <p>
        En ocasiones se puede demostrar diferenciabilidad de forma más sencilla, a partir de la siguiente condición necesaria.
      </p>
      <Theorem>
        Sea <M>{r`f\colon U\subseteq \mathbb{R}^{2}\to\mathbb{R}`}</M> una función escalar de dos variables y sea <M>{r`(a,b)\in U`}</M> un punto. Si <M>f</M> y una o ambas de sus primeras derivadas parciales son continuas en un entorno del punto <M>(a,b)</M>, entonces  <M>f(x,y)</M> es diferenciable en <M>(a,b)</M>.
      </Theorem>

      <h4>Diferenciabilidad continua</h4>

      <p>
        De forma análoga a las funciones escalares de una variable, la diferenciabilidad continua de una función consiste en que la función sea diferenciable y todas sus derivadas parciales sean continuas y diferenciables. Sea <M>{r`f`}</M> una función, si lo anterior sucede para las derivadas parciales de primer orden de <M>{r`f`}</M>, <M>{r`f`}</M> es <em>una vez continuamente diferenciable</em> y de clase <M>{r`C ^ 1`}</M>. Si ese es el caso para las derivadas parciales de enésimo orden de <M>{r`f`}</M>, <M>{r`f`}</M> es <em>ene veces continuamente diferenciable</em> y de clase <M>{r`C ^ n`}</M>. Si una función es de clase <M>{r`C ^ n`}</M> para un <M>{r`n \in \mathbb{N} \setminus \{0\} `}</M> arbitrariamente grande, entonces la función es <em>infinitamente diferenciable</em> y se cataloga como de clase <M>{r`C ^\infty`}</M>.
      </p>

    </Section>

    <Section title="Optimización de funciones escalares de múltiples variables">

      <h3>Extremos de funciones escalares de múltiples variables</h3>

      <Definition concept="Mínimo local">
        Sea <M>{r`f\subseteq \mathbb{R}^{n}\colon U\to\mathbb{R}`}</M> una función escalar de ene variables, <M>{r`f`}</M> tiene un <em>mínimo local</em> en el punto <M>{r`\bvec{v}`}</M> si existe un entorno en el que la imagen de <M>{r`\bvec{v}`}</M> es menor a cualquier otra imagen.
        <M block>
          {r`
            \text{Existe }\varepsilon >0\text{ tal que para todo }\bvec{x} \in B_\varepsilon(\bvec{v})\text{ se satisface } f(\bvec{v}) \leq f(\bvec{x}).
          `}
        </M>
        En ese caso, <M>{r`\bvec{v}, f(\bvec{v})`}</M> es el <em>punto mínimo local</em> y <M>{r`f(\bvec{v})`}</M> es el <em>valor mínimo</em> de <M>{r`f`}</M> en <M>{r`B_\varepsilon(\bvec{v})`}</M>.
      </Definition>

      <Definition concept="Máximo local">
        Sea <M>{r`f\subseteq \mathbb{R}^{n}\colon U\to\mathbb{R}`}</M> una función escalar de ene variables, <M>{r`f`}</M> tiene un <em>máximo local</em> en el punto <M>{r`\bvec{v}`}</M> si existe un entorno en el que la imagen de <M>{r`\bvec{v}`}</M> es mayor a cualquier otra imagen.
        <M block>
          {r`
            \text{Existe }\varepsilon >0\text{ tal que para todo }\bvec{x} \in B_\varepsilon(\bvec{v})\text{ se satisface }  f(\bvec{v}) \geq f(\bvec{x}).
          `}
        </M>
        En ese caso, <M>{r`\bvec{v}, f(\bvec{v})`}</M> es el <em>punto máximo local</em> y <M>{r`f(\bvec{v})`}</M> es el <em>valor máximo</em> de <M>{r`f`}</M> en <M>{r`B_\varepsilon(\bvec{v})`}</M>.
      </Definition>

      <h4>Puntos críticos</h4>

      <p>
        Si existe un extremo local en <M>{r`\bvec{v}`}</M>, entonces <M>{r`\bvec{v}`}</M> es un vector crítico. La conversa no siempre se cumple.
      </p>

      <Definition concept="Punto crítico de funciones escalares">
        El punto <M>{r`(\bvec{v}, f(\bvec{v}))`}</M> es un <em>punto crítico</em> de una función escalar <M>{r`f`}</M> si <M>{r`\nabla f(\bvec{v}) = \bvec{0}`}</M>. En ese caso, <M>{r`\bvec{v}`}</M> es un <em>vector crítico</em>.
      </Definition>

      <p>
        Para hallar los puntos críticos se resuelve la ecuación
        <M block>
          {r`\nabla f(\bvec{x}) = \bvec{0}`}
        </M>
        que implica igualar cada componente del vector gradiente a cero. Eso es equivalente a resolver el siguiente sistema de ene ecuaciones con ene variables:
        <M block>
          {r`
	\begin{cases}
		\dparder{f}{x_1} = 0 \\[1em] \dparder{f}{x_2} = 0\\[1em]
		\qquad \vdots \\[0.5em]
		\dparder{f}{x_n} = 0
	\end{cases}
`}
        </M>
      </p>

      <p>
        El sistema puede no tener solución, tener una solución o tener múltiples soluciones. Si existen soluciones, serán de la forma <M>{r`\bvec{v} = (v_1,v_2,\ldots,v_n)`}</M> y cada solución será un punto crítico.
      </p>

      <p>
        Si <M>{r`\bvec{v}`}</M> es un punto crítico, entonces puede que sea un punto estacionario, por lo que si <M>{r`\bvec{v}`}</M> no es un punto crítico degenerado, <M>{r`f(\bvec{v})`}</M> es o bien un extremo o bien un punto de silla.
      </p>

      <h3>Hessiano y criterios para puntos críticos</h3>

      <h4>Polinomio de Taylor de segundo grado para funciones escalares de múltiples variables</h4>

      <p>
        Sea <M>{r`f(x)`}</M> una función escalar de una variable de clase <M>{r`C^n`}</M>, se sabe que su serie de Taylor está dada por la siguiente serie infinita
        <M block>
          {r`f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n`}
        </M>
        Por ello, el polinomio de Taylor de enésimo grado centrado en el punto <M>{r`c`}</M> está dado por
        <M block>
          {r`
	P_n(x) = f(c)+f'(c)(x-c)+\frac{f''(c)}{2}(x-c)^2+\frac{f'''(c)}{3!}(x-c)^3+\cdots+\frac{f^{(n)}(c)}{n!}(x-c)^n.
`}
        </M>
        Para toda función escalar <M>{r`f`}</M>, el polinomio de Taylor de primer grado es la mejor aproximación lineal de la función alrededor de un punto. El polinomio de Taylor segundo grado es la mejor aproximación cuadrática de la función <M>{r`f`}</M> alrededor del punto <M>{r`c,f(c)`}</M>,
        <M block>
          {r`P_2(x) = f(c)+f'(c)(x-c)+\frac{f''(c)}{2}(x-c)^2.`}
        </M>
        En particular, si la función tiene un máximo o mínimo local en un <M>{r`c`}</M>, el polinomio de Taylor de segundo grado también tendrá un máximo o mínimo en <M>{r`c`}</M>, acorde. Por ello, cuando la primera derivada de la función evaluada en <M>{r`c`}</M> es cero, la segunda derivada da un criterio para saber que tipo de extremo es el punto crítico.
      </p>

      <p>
        Análogamente, sea <M>{r`f\colon U\subseteq \mathbb{R}^{n} \to \mathbb{R}`}</M> una función escalar de ene variables de clase <M>{r`C^3`}</M>. El polinomio de Taylor de primer grado centrado en el vector <M>{r`\bvec{v}`}</M> es
        <M block>
          {r`\begin{align*}
	P_1(\bvec{x}) &= f(\bvec{v})+\sum_{i=1}^{n} \frac{\partial f(\bvec{v})}{\partial x_i}(x_i-v_i) \\
	P_1(\bvec{x}) &= f(\bvec{v})+(\mathrm{D}f(\bvec{v}))(\bvec{x}-\bvec{v}) \\
\end{align*}`}
        </M>
        El polinomio de Taylor de segundo grado centrado en el vector <M>{r`\bvec{v}`}</M> es
        <M block>
          {r`\begin{align*}
	P_2(\bvec{x}) &= f(\bvec{v})+\sum_{i=1}^{n} \frac{\partial f(\bvec{v})}{\partial x_i} (x_i-v_i) + \frac{1}{2}\sum_{i,j=1}^{n} \frac{\partial ^2 f(\bvec{v})}{\partial x_i \partial x_j} (x_i-v_i)(x_j-v_j) \\
	P_2(\bvec{x}) &= (\nabla f(\bvec{v})) \cdot (x_1-v_1, x_2-v_2, \ldots, x_n-v_n) \\
	P_2(\bvec{x}) &= (\nabla f(\bvec{v})) \cdot (\bvec{x}-\bvec{v})
\end{align*}`}
        </M>
        {/*  Berenstein saca un polinomio de Taylor en la clase del 03 de septiembre de 2021. */}
        Nótese que, aunque se sabe que <M>{r`\partial^2 f /\partial x_j \partial x_i = \partial^2 f /\partial x_i \partial x_j`}</M>, esa segunda derivada debe sumarse dos veces en la sumatoria del tercer término del polinomio de Taylor de segundo grado.
      </p>

      <p>
        Como dicho arriba, si la función tiene un máximo o mínimo local en un <M>{r`\bvec{v}`}</M>, el polinomio de Taylor de segundo grado también tendrá un máximo o mínimo en <M>{r`\bvec{v}`}</M>, acorde. Dicho eso, a partir del polinomio de Taylor de segundo grado se puede establecer un criterio para identificar en qué puntos hay máximos y mínimos en una función escalar de múltiples variables.
      </p>

      <p>
        El polinomio de Taylor de segundo grado centrado en el vector <M>{r`\bvec{v}`}</M> se puede reescribir haciendo uso de la matriz hessiana, para que en lugar de sumatorias sus términos sean productos matriciales:
        <M block>
          {r`\begin{align*}
	P_2(\bvec{x}) &= f(\bvec{v})+(\mathrm{D}f(\bvec{v}))(\bvec{x}-\bvec{v}) + \frac{1}{2} \transpose{(\bvec{x}-\bvec{v})}[\mathrm{D}(\mathrm{D}f(\bvec{v}))](\bvec{x}-\bvec{v})\\
	P_2(\bvec{x}) &= f(\bvec{v})+(\mathrm{D}f(\bvec{v}))(\bvec{x}-\bvec{v}) + \frac{1}{2} \transpose{(\bvec{x}-\bvec{v})}[H(f(\bvec{v}))](\bvec{x}-\bvec{v}).
\end{align*}`}
        </M>
      </p>

      <h4>Hessiano</h4>

      <Definition concept="Matriz hessiana">
        Sea <M>{r`U\subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de ene variables de clase <M>{r`C^2`}</M>. La <em>matriz hessiana</em> de <M>{r`f`}</M> es la matriz cuadrada de tamaño <M>{r` n\times n `}</M> de sus segundas derivadas parciales.
        <M block>
          {r`\begin{align*}
            (H(f))_{ij} &= \dfrac{\partial^2 f}{\partial x_i \partial x_j}. \\
            H(f) &= \begin{pmatrix}
              \dfrac{\partial^2 f}{\partial x_1^2} & \dfrac{\partial ^2 f}{\partial x_1 \partial x_2} & \cdots& \dfrac{\partial^2 f}{\partial x_1 \partial x_n} \\[1em]
              \dfrac{\partial^2 f}{\partial x_2 \partial x_1} & \dfrac{\partial^2 f}{\partial x_2^2} & \cdots& \dfrac{\partial^2 f}{\partial x_2 \partial x_n} \\[1em]
              \vdots & \vdots & \ddots & \vdots \\[0.5em]
              \dfrac{\partial^2 f}{\partial x_n \partial x_1} & \dfrac{\partial^2 f}{\partial x_n \partial x_2} & \cdots&\dfrac{\partial^2 f}{\partial x_n^2} \\[1em]
            \end{pmatrix}
          \end{align*}`}
        </M>

        Por la propiedad de simetría de la derivada parcial, la matriz hessiana es una matriz simétrica. Esa proposición se conoce como el teorema de Clairaut o teorema de Schwarz.
      </Definition>

      <p>
        El Hessiano de una función escalar se define como el tercer término de su polinomio de Taylor de grado dos.
      </p>

      <Definition concept="Hessiano">
        Sea <M>{r`U\subseteq \mathbb{R}^{n}`}</M> un conjunto abierto y <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de ene variables de clase <M>{r`C^2`}</M>. El <em>hessiano</em> de <M>{r`f`}</M> en el punto <M>{r`\bvec{v}`}</M> es la función escalar de múltiples variables <M>{r`Hf(\bvec{v})`}</M> dada por
        <M block>
          {r`
            (Hf(\bvec{v}))(\bvec{x}) = \frac{1}{2} \sum_{i,j=1}^{n} \frac{\partial ^2 f(\bvec{v})}{\partial x_i \partial x_j} (x_i-v_i)(x_j-v_j).
          `}
        </M>
      </Definition>
      {/*  El hessiano no es este. En ningún lado aparece como hessiano esta función pero así la enseñó Berenstein. Según lo leído, creería que el hessiano es la matriz y esta función es el tercer término del polinomio de taylor de segundo orden. */}

      <p>
        El Hessiano es nulo, <M>{r`H(\bvec{x})=0`}</M>, si y solamente si <M>{r`\bvec{v}=\bvec{x}`}</M>. Mientras el Hessiano no sea nulo:
      </p>

      <ul>
        <li> La función <M>{r`H`}</M> es <em>definitivamente positiva</em> si <M>{r`H(\bvec{x}) \geq 0`}</M> para todo <M>{r`\bvec{x}`}</M>. Si <M>{r`H`}</M> es definitivamente positiva, entonces <M>{r`\bvec{v}`}</M> es un mínimo local.</li>

        <li> La función <M>{r`H`}</M> es <em>definitivamente negativa</em> si <M>{r`H(\bvec{x}) \leq 0`}</M> para todo <M>{r`\bvec{x}`}</M>. Si <M>{r`H`}</M> es definitivamente positiva, entonces <M>{r`\bvec{v}`}</M> es un máximo local local.</li>
      </ul>

      <p>
        El Hessiano es una función cuadrática. Por ende, las variables suelen estar a la segunda potencia y eso facilita identificar si el Hessiano será siempre positivo o siempre negativo. Sin embargo, el Hessiano no siempre tiene un signo fijo.
      </p>

      <Tip>
        Que el Hessiano de una función escalar de múltiples variables sea definitivamente positiva es análogo a que una función escalar de una variable sea cóncava hacia arriba.
      </Tip>

      <h4>Hessiano para funciones escalares de dos variables</h4>

      <p>
        Sea <M>{r`U \in\mathbb{R}^{2}`}</M> un conjunto abierto y sea <M>{r`f\colon U \to \mathbb{R}`}</M> una función escalar de dos variables de clase <M>{r`C^3`}</M>. Si <M>{r`\nabla f(\bvec{v})=\bvec{0}`}</M>, de forma que <M>{r`\bvec{v}`}</M> es un punto crítico, se cumple que
        <M block>{r`\begin{gather}
	\parder{f(\bvec{v})}{x} = \parder{f(\bvec{v})}{y} = 0.
\end{gather}`}</M>
      </p>

      <Warning>
        Se debe revisar si los puntos críticos hallados se encuentran en el dominio de <M>{r`f`}</M>. Si <M>{r`\bvec{v}\in U`}</M>, <M>{r`\bvec{v}`}</M> es un posible candidato para extremo o punto de silla; de lo contrario, <M>{r`\bvec{v}`}</M> se descarta. Si <M>{r`\bvec{v}`}</M> está en la frontera de <M>{r`U`}</M>, es un posible candidato para extremo o punto de silla pero <i>no</i> se puede usar el criterio dado por el determinante de la matriz de segundas derivadas.
      </Warning>

      <p>
        Se puede saber si el punto crítico <M>{r`\bvec{v}\in U`}</M> es un extremo o punto de silla haciendo uso del determinante de la matriz hessiana, dado por
        <M block>
          {r`
	\begin{vmatrix}
		\dnparder{2}{f}{x} & \dfrac{\partial^2 f}{\partial x \partial y} \\[2ex]
		\dfrac{\partial^2 f}{\partial y \partial x} & \dnparder{2}{f}{y}
	\end{vmatrix} = \left(\nparder{2}{f}{x}\right)\left(\nparder{2}{f}{y}\right) - \left(\frac{\partial^2 f}{\partial x \partial y}\right)^2.
`}
        </M>
        El determinante de la matriz hessiana da origen al siguiente criterio:
      </p>
      <ul>
        <li> Si <M>{r`\displaystyle \left(\nparder{2}{f(\bvec{v})}{x}\right)\left(\nparder{2}{f(\bvec{v})}{y}\right) - \left(\frac{\partial^2 f(\bvec{v})}{\partial x \partial y}\right)^2 >0 `}</M>, existe un extremo en <M>{r`f(\bvec{v})`}</M>.</li>
        <ul>
          <li> Si <M>{r`\displaystyle \nparder{2}{f(\bvec{v})}{x} >0 `}</M>, entonces <M>{r`f(\bvec{v})`}</M> es un mínimo.</li>
          <li> Si <M>{r`\displaystyle \nparder{2}{f(\bvec{v})}{x} <0 `}</M>, entonces <M>{r`f(\bvec{v})`}</M> es un máximo. </li>
        </ul>
        <li>  Si <M>{r`\displaystyle \left(\nparder{2}{f(\bvec{v})}{x}\right)\left(\nparder{2}{f(\bvec{v})}{y}\right) - \left(\frac{\partial^2 f(\bvec{v})}{\partial x \partial y}\right)^2 <0 `}</M>, hay un punto de silla <M>{r`f(\bvec{v})`}</M>.</li>
        <li>  Si <M>{r`\displaystyle \left(\nparder{2}{f(\bvec{v})}{x}\right)\left(\nparder{2}{f(\bvec{v})}{y}\right) - \left(\frac{\partial^2 f(\bvec{v})}{\partial x \partial y}\right)^2 = 0 `}</M>, es un <em>punto crítico degenerado</em>, por lo que no se puede afirmar nada sobre el comportamiento de la función en ese punto.</li>
      </ul>
      {/*  Criterio de Sylvester. */}
      <Tip>
        En las funciones escalares de una variable, los puntos de silla se ven como puntos de inflexión.
      </Tip>

      {/*  TODO: punto crítico degenerado es el mismo caso que si <M>{r`\nabla g(\bvec{v}) =0.`}</M> */}
      <h3>Hallar extremos locales de funciones escalares de múltiples variables restringidas a un compacto</h3>

      <p>
        Si se analiza únicamente el dominio de la función que está interseca con un compacto, siempre es posible hallar extremos locales para la función en los puntos analizados.
      </p>

      <Theorem name="Existencia de extremos en un compacto">
        Sea <M>{r`C \subseteq\mathbb{R}^{n}`}</M> un compacto y sea <M>{r`f \colon C \to \mathbb{R}`}</M> una función escalar continua, entonces existen dos puntos <M>{r`\bvec{u},\bvec{v} \in C`}</M> tal que
        <ul>
          <li> [i.] Para todo <M>{r`\bvec{x}\in C`}</M>, <M>{r`f(\bvec{u})\leq f(\bvec{x})`}</M>.</li>
          <li> [ii.] Para todo <M>{r`\bvec{x}\in C`}</M>, <M>{r`f(f(\bvec{v})\geq\bvec{x}) `}</M>.</li>
        </ul>
        En otras palabras, <M>{r`f|_C`}</M> tiene un mínimo local en algún <M>{r`\bvec{u}`}</M> y un máximo local en algún <M>{r`\bvec{v}`}</M>.
      </Theorem>

      {/* <Notation>
	Sea <M>{r`f`}</M> una función y <M>{r`A`}</M> un conjunto, la notación <M>{r`f|_A`}</M> se lee "<M>{r`f`"</M> restringida a <M>{r`A`}</M>} e indica que en lugar de tomar todos los puntos en el dominio de <M>{r`f`}</M> para un análisis, se toman aquellos en la intersección del dominio de <M>{r`f`}</M> con el conjunto <M>{r`A`}</M>. Si <M>{r`f\colon U \subseteq \mathbb{R}^{n} \to \mathbb{R}`}</M>, entonces
	<M block>
    {r`
		f|_A \colon A \cap U \subseteq \mathbb{R}^{n} \to \mathbb{R}.
	`}
</M>
	Geométricamente, <M>{r`f\mid_A`}</M> es la intersección de los gráficos de <M>{r`f`}</M> y <M>{r`A`}</M>.
</Notation> */}

      <p>
        Sea <M>{r`C\in \mathbb{R}^{n}`}</M> un compacto, existen dos métodos  para hallar los extremos locales de una función restringida al compacto.
      </p>

      <h4>Método de parametrización</h4>

      <p>
        El <em>método de parametrización</em> es útil para hallar los extremos locales de una función restringida a un  compacto si el compacto está descrito por más de una ecuación, como la región encerrada por las ecuaciones. Es decir, se quieren hallar los extremos de una función escalar <M>{r`f`}</M> restringida a las curvas <M>{r`y=g_1(x), y=g_2(x), \ldots y=g_n(x)`}</M>, que describen el compacto <M>{r`C`}</M> y en conjunto se denotan <M>{r`y=g_i(x)`}</M>.
      </p>

      <ol>
        <li> Hallar los puntos críticos de <M>{r`f`}</M> y tomar únicamente los vectores críticos <M>{r`\bvec{v}_i`}</M> que pertenezcan al compacto <M>{r`C`}</M>. Evaluar dichos vectores críticos en <M>{r`f`}</M> para obtener valores que candidatos a ser extremos locales.</li>
        <li> Dibujar la región que describe el compacto en <M>{r` \mathbb{R}^{2} `}</M>, graficando las curvas <M>{r`y=g_i(x)`}</M> e identificando la región que estas encierran.</li>
        <li> Hallar los puntos de intersección de las ecuaciones que describen el compacto. Si <M>{r`C`}</M> es descrito por dos ecuaciones de la forma <M>{r`y=g_1(x)`}</M> y <M>{r` y=g_2(x) `}</M>, la coordenada o coordenadas en <M>{r`x`}</M> donde intersecan las ecuaciones está dada por la ecuación</li>
        <M block>
          {r`g_1(x) = g_2(x).`}
        </M>
        <li> Realizar la parametrización de cada una de las ecuaciones que describen el compacto. Para parametrizar una curva de forma <M>{r`y=g_i(x)`}</M>, se escribe</li>
        <M block>
          {r`\begin{gather*}
		x = t.\\
		y = g_i(t).
	\end{gather*}`}
        </M>
        para todo <M>{r`t \in [a,b]`}</M>. Los valores <M>{r`a`}</M> y <M>{r`b`}</M> que definen el intervalo que restringe al parámetro <M>{r`t`}</M> está dado por las coordenadas en <M>{r`x`}</M> de los puntos de intersección de las ecuaciones que describen el compacto.
        <li> Reemplazar las parametrizaciones en la función original <M>{r`f(x,y)`}</M>, de forma que para cada curva <M>{r`y=g_i(x)`}</M> se obtiene una expresión <M>{r`f_i(t,g_i(t))`}</M>. </li>
        <li> Derivar cada una de las expresiones <M>{r`f_i(t,g_i(t))`}</M>, que son funciones escalares de una variable, con respecto al parámetro <M>{r`t`}</M>, usando métodos del cálculo diferencial.</li>
        <li> Igualar cada una de las derivadas <M>{r`f_i'(t,g_i(t))`}</M> a cero, </li>
        <M block>
          {r`\der{}{t}f_i(t,g_i(t)) = 0`}
        </M>
        para hallar los números críticos de cada una, que tendrán la forma <M>{r`t_i = c_i`}</M>.
        <li> Evaluar en cada expresión <M>{r`f_i(t,g_i(t))`}</M> sus puntos críticos <M>{r`c_i`}</M> y los extremos <M>{r`a`}</M> y <M>{r`b`}</M> que restringen al parámetro <M>{r`t`}</M>. Los valores obtenidos al evaluar son candidatos a ser extremos locales.</li>
        <li> Seleccionar el número más grande y el más pequeño entre todos los candidatos a ser extremos locales (aquellos obtenidos tras realizar las evaluaciones en las expresiones  <M>{r`f_i(t,g_i(t))`}</M> y aquellos que se obtienen al evaluar los puntos críticos). Esos son el valor máximo y el valor mínimo, respectivamente, de <M>{r`f`}</M> restringida a las curvas. </li>
      </ol>

      <Example title="Extremos con parametrización">
        Dada la función <M>{r`f(x,y)=x^2+y^2-2y`}</M> definida en el disco <M>{r`C \coloneqq x^2+y^2\leq 4`}</M>, hallar los extremos de la función en el disco.

        <M block>
          {r`\begin{gather*}
		\nabla f = (2x,2y-2) = (0,0).
		x=0 
		y=1
		(0,1) \in C
	\end{gather*}`}
        </M>

        Se revisa el borde de <M>{r`C`}</M>, es decir <M>{r`x^2+y^2= 4`}</M>:
        <M block>
          {r`\begin{gather*}
			x=2\cos\theta
			y=2\sin\theta
		\end{gather*}`}
        </M>
      </Example>
      {/*  TODO: Completar este ejemplo. Eran las 10:07 de la clase del 08 sep.  */}
      {/*  TODO: Agregar ejemplo con varias curvas. */}
      <h4>Método del multiplicador de Lagrange</h4>

      <p>
        El <em>método del multiplicador de Lagrange</em> es eficiente para hallar los extremos locales de una función restringida a un compacto si el compacto está descrito una ecuación o desigualdad. El método se cimenta en el teorema del multiplicador de Lagrange.
      </p>

      <Theorem name="Teorema del multiplicador de Lagrange">
        Sea <M>{r`U`}</M> un conjunto abierto y sean <M>{r`f,g\colon U\subseteq \mathbb{R}^{n} \to \mathbb{R}`}</M> funciones escalares de tipo <M>{r`C^2`}</M>. Tome como hipótesis que para todo <M>{r`\bvec{x} \in U`}</M>, <M>{r`\nabla g(\bvec{x}) \neq 0`}</M>. Sea <M>{r`S`}</M> el conjunto de nivel de <M>{r`g`}</M> para el valor <M>{r`c \in \mathbb{R}`}</M>, de forma que <M block>
          {r`S=\{\bvec{x}\in U\mid g(\bvec{x})=c\},`}
        </M> se toma <M>{r`S`}</M> como la frontera de un compacto. Si <M>{r`f|_S`}</M> tiene un extremo en <M>{r`\bvec{v}`}</M>, entonces existe un <em>multiplicador de Lagrange</em> <M>{r`\lambda \in \mathbb{R}`}</M> tal que
        <M block>
          {r`\nabla f (\bvec{v}) = \lambda \nabla g (\bvec{v}).`}
        </M>
      </Theorem>

      <p>
        Al hacer uso del multiplicador de Lagrange, se tienen dos funciones: <M>{r`f\colon C\subseteq \mathbb{R}^{n} \to \mathbb{R}`}</M> es la función a optimizar y <M>{r`g\colon C\subseteq \mathbb{R}^{n} \to \mathbb{R}`}</M> describe el compacto que restringe a la función, pues <M>{r`g(\bvec{x})=c`}</M> es el borde del compacto <M>{r`\partial C`}</M> y <M>{r`g(\bvec{x})\leq c`}</M> es el compacto <M>{r`C`}</M> en sí.
      </p>

      <ol>
        <li> Verificar la hipótesis del teorema de Lagrange. Para ello, se debe comprobar que las soluciones a la ecuación</li>
        <M block>
          {r`\nabla g(\bvec{x}) = 0`}
        </M>
        no satisfagan <M>{r` g(\bvec{x})=c `}</M>, de forma que no pertenezcan al borde del compacto.
        <li> Hallar los puntos críticos de <M>{r`f`}</M> y tomar únicamente los puntos críticos <M>{r`\bvec{v}_i`}</M> que satisfagan </li>
        <M block>
          {r`g(\bvec{v})\leq c`}
        </M>
        y por ende pertenezcan al compacto.
        <li> Plantear el siguiente sistema de ecuaciones:</li>
        <M block>
          {r`\begin{cases}
		\nabla f(\bvec{x}) = \lambda \nabla g (\bvec{x}) \\
		g(\bvec{x}) = c
	\end{cases}`}
        </M>
        Que en el caso de funciones escalares de dos variables tendrá la forma
        <M block>
          {r`\begin{cases}
	\dparder{f}{f} = \lambda\dparder{g}{x} \\[1em]
	\dparder{f}{y} = \lambda\dparder{g}{y} \\[1em]
	g(\bvec{x}) = c
	\end{cases}`}
        </M>
        <Tip>
          El sistema de ecuaciones puede no ser lineal, por lo que no se puede depender de la reducción gaussiana o en Gauss-Jordan para su resolución. Es útil tomar dos casos para cada variable: o bien <M>{r`x_i=0`}</M>, caso en el que ya se conoce una variable, o bien <M>{r`x_i\neq 0`}</M>, caso en el que se puede dividir por <M>{r`x_i`}</M> al despejar. Por ser mutuamente excluyentes, en alguno de los dos casos se llegará a una contradicción y el caso podrá descartarse.
        </Tip>
        <li>  Evaluar en <M>{r`f`}</M> los valores hallados para <M>{r`\bvec{x}`}</M> y los puntos críticos <M>{r`\bvec{v}_i`}</M>. De los valores obtenidos al evaluar, que son los candidatos a ser extremos locales, se selecciona el mayor como máximo local y el menor como el mínimo local.</li>
      </ol>

      <Example title="Extremos con multiplicador de Lagrange">
        Dada la función <M>{r`f(x,y)=x^2+y^2-2y`}</M> definida en el disco <M>{r`C \coloneqq x^2+y^2\leq 4`}</M>, hallar los extremos de la función en el disco.
        {/*  TODO: Completar multiplicador de Lagrange. Eran las 10:38 de la clase del 08 sep. */}</Example>

      {/* <Example title="Cilindro">
    </Example> */}

    </Section>

    <Section title="Derivación de funciones vectoriales">

      <p>Esta sección generaliza la derivación a funciones vectoriales. Tras eso, se enfoca en la derivación de funciones vectoriales de una variable y estudia la principal aplicación de la derivación de funciones vectoriales de una variable, que son las trayectorias. </p>

      <h3>La matriz jacobiana</h3>

      <p>
        La derivada de una función vectorial es una matriz de derivadas parciales denominada matriz jacobiana.
      </p>

      <Definition concept="Matriz jacobiana">
        Sea <M>{r`\bvec{F}\colon U \subseteq \mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> una función vectorial, de forma que <M>{r`n > 1`}</M>. Su derivada, denotada por <M>{r`\mathrm{D}\bvec{F}`}</M>, está dada por el vector columna de gradientes de sus funciones escalares componentes:
        <M block>
          {r`\mathrm{D}\bvec{F} = \begin{pmatrix}
            \nabla F_1 \\ \nabla F_2 \\ \vdots \\ \nabla F_n
          \end{pmatrix}`}
        </M>
        Si todos los gradientes están definidos. Eso a su vez genera una matriz  <M>{r`n \times m`}</M> de derivadas parciales, denominada <em>matriz jacobiana</em> de <M>{r`\bvec{F}`}</M>:
        <M block>
          {r`\mathrm{D}\bvec{F} = \begin{pmatrix}
            \dfrac{\partial F_1}{\partial x_1} & \dfrac{\partial F_1}{\partial x_2} & \cdots & \dfrac{\partial F_1}{\partial x_m} \\[1em]
            \dfrac{\partial F_2}{\partial x_1} & \dfrac{\partial F_2}{\partial x_2} & \cdots & \dfrac{\partial F_2}{\partial x_m} \\[1em]
            \vdots & \vdots & \ddots & \vdots \\[0.5em]
            \dfrac{\partial F_n}{\partial x_1} & \dfrac{\partial F_n}{\partial x_2} & \cdots & \dfrac{\partial F_n}{\partial x_m}
          \end{pmatrix} `}
        </M>
      </Definition>

      <p>
        Nótese que en la matriz jacobiana, cada fila está asociada a una función y cada columna a una variable. Evaluar la derivada de una función vectorial en un vector <M>{r`\bvec{v}\in U`}</M> se denota por <M>{r`\mathrm{D}\bvec{F}(\bvec{v})`}</M> y consiste en evaluar cada uno de los elementos de la matriz de derivadas en dicho vector.
      </p>

      <Notation>
        La matriz jacobiana de una función vectorial <M>{r`\bvec{F}`}</M> se denota por <M>{r`\mathrm{D}\bvec{F}`}</M> o por <M>{r`J\bvec{F}`}</M>. La primera notación enfatiza en que la matriz representa la derivada de la función, mientras que la segunda notación recuerda el nombre de la matriz.
      </Notation>

      <Warning>
        Tenga presente la definición de la matriz jacobiana como un vector columna de gradientes antes que la su definición como matriz. De lo contrario, puede que construya la matriz confundiendo filas con columnas.
      </Warning>

      <h4>El jacobiano</h4>

      <p>
        Cuando la matriz jacobiana es cuadrada, es posible calcular su determinante, al que convenientemente se le llama <em>determinante jacobiano</em> o simplemente <em>jacobiano</em>. El jacobiano será imprescindible al estudiar el cambio de variable en integrales múltiples, tanto así que tiene una notación especial, alternativa a la convencional notación de determinante <M>{r`\abs{\mathrm{D}\bvec{F}}`}</M>.
      </p>
      <Definition concept="Jacobiano">
        Sea <M>{r`\bvec{F}\colon U \subseteq \mathbb{R}^{n} \to \mathbb{R}^{n}`}</M> un campo vectorial, de forma que <M>{r`n > 1`}</M>, de clase <M>{r`C^1`}</M>. El <em>jacobiano</em> de <M>{r`\bvec{F}`}</M> se denota por <M>{r`\parder{\bvec{F}}{\bvec{x}}`}</M> y está dado por
        <M block>
          {r`\parder{\bvec{F}}{\bvec{x}} = \abs{\mathrm{D}\bvec{F}} = \begin{vmatrix}
            \dfrac{\partial F_1}{\partial x_1} & \dfrac{\partial F_1}{\partial x_2} & \cdots & \dfrac{\partial F_1}{\partial x_n} \\[1em]
            \dfrac{\partial F_2}{\partial x_1} & \dfrac{\partial F_2}{\partial x_2} & \cdots & \dfrac{\partial F_2}{\partial x_n} \\[1em]
            \vdots & \vdots & \ddots & \vdots \\[0.5em]
            \dfrac{\partial F_n}{\partial x_1} & \dfrac{\partial F_n}{\partial x_2} & \cdots & \dfrac{\partial F_n}{\partial x_n}
          \end{vmatrix}.`}
        </M>
      </Definition>
      <p>
        Si el jacobiano de una función vectorial, evaluado en un punto, es distinto de cero, entonces la función es invertible al menos en un entorno de ese punto.
      </p>
      <p>
        Si <M>{r`n = 2`}</M>, el jacobiano de una función vectorial <M>{r`\bvec{F}=(F_1,F_2)`}</M> se denota por <M>{r`\parder{(F_1,F_2)}{(x, y)}`}</M> y se calcula como
        <M block>
          {r`\parder{(F_1,F_2)}{(x, y)} = \begin{vmatrix}
            \dfrac{\partial F_1}{\partial x} & \dfrac{\partial F_1}{\partial y} \\[1em]
            \dfrac{\partial F_2}{\partial x} & \dfrac{\partial F_2}{\partial y}
          \end{vmatrix} = \dfrac{\partial F_1}{\partial x}\dfrac{\partial F_2}{\partial y} - \dfrac{\partial F_1}{\partial y}\dfrac{\partial F_2}{\partial x}.`}
        </M>
      </p>

      <h4>Diferenciabilidad de funciones vectoriales</h4>

      <p>
        Sean <M>{r`\bvec{F}\colon U\subseteq\mathbb{R}^{n} \to\mathbb{R}^{m}`}</M> una función vectorial de múltiples variables y <M>{r`\bvec{v} \in U`}</M>, se dice que <M>{r`\bvec{F}`}</M> es diferenciable en <M>{r`\bvec{v}`}</M> si y solamente si
      </p>
      <ol>
        <li> Todas las derivadas parciales de la matriz, <M>{r`\dparder{F_i(\bvec{v})}{x_j}`}</M>, existen.</li>
        <li> <M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} \cfrac{\norm{\bvec{F}(\bvec{x})- \left[\bvec{F}(\bvec{v})+\mathrm{D}\bvec{F}(\bvec{v})(\bvec{x}-\bvec{v})\right]}}{\norm{\bvec{x}-\bvec{v}}} = 0`}</M> </li>

      </ol>

      <Properties
        title="Propiedades de la derivación de funciones vectoriales"
        description={<p>Sea <M>{r`\bvec{F},\bvec{G}\colon \mathbb{R}^{n}\to \mathbb{R}^{m}`}</M> diferenciables en <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M> y <M>{r`\bvec{H}\colon\mathbb{R}^{m}\to\mathbb{R}^{k}`}</M> diferenciable en <M>{r`\bvec{F}(\bvec{v})`}</M>. Entonces, se cumplen las siguientes propiedades:</p>}
        properties={[
          {
            name: "Homogeneidad",
            formula: <M>{r`\mathrm{D}(c\bvec{F})(\bvec{v}) = c\mathrm{D}\bvec{F}(\bvec{v})`}</M>
          },
          {
            name: "Linealidad",
            formula: <M>{r`\mathrm{D}(\bvec{F} \pm \bvec{G})(\bvec{v}) = \mathrm{D}\bvec{F}(\bvec{v}) \pm  \mathrm{D}\bvec{G}(\bvec{v}) `}</M>
          },
          {
            name: "Regla de la cadena",
            formula: <M>{r`\mathrm{D} (\bvec{H} \circ \bvec{F}) (\bvec{v}) = \mathrm{D}\bvec{H}(\bvec{F}(\bvec{v})) \, \mathrm{D}\bvec{F}(\bvec{v}).`}</M>
          }
        ]}
      />

      <h3>Derivación de funciones vectoriales de una variable</h3>

      <p>
        Esta sección se centra en la derivación de funciones vectoriales de una variable. Recuérdese que una función vectorial de una variable es una función de la forma <M>{r`\bvec{f}\colon A \subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M>, que asigna vectores en el espacio a números reales.
      </p>

      <p>
        Las funciones vectoriales de una variable permiten describir con facilidad figuras y curvas con base en un parámetro. Por ejemplo, la recta <M>{r`\bvec{\ell}`}</M> en <M>{r`\mathbb{R}^n`}</M> que pasa por el punto <M>{r`\bvec{p}`}</M> y tiene dirección <M>{r`\bvec{v}`}</M> se puede describir como
        <M block>
          {r`\bvec{\ell}(t) = \bvec{p} + t\bvec{v}, \quad t\in \mathbb{R}.`}
        </M>
        Donde <M>{r`t`}</M> es el parámetro que describe la recta. Similarmente, <M>{r`\bvec{f}(t) = (\cos t, \sin t)`}</M> representa el círculo unitario y <M>{r`\bvec{f}(t) = (t-\sin t, 1-\cos t)`}</M> es la cicloide. Más aún, fácilmente se pueden parametrizar funciones escalares de una variable, como <M>{r`y=x^2`}</M>, como funciones vectoriales de una variable, <M>{r`\bvec{f}(t) = (t,t^2)`}</M>.
      </p>

      <Tip>
        Para graficar una función vectorial de una variable, y en general una curva paramétrica, es conveniente hacer una tabla de datos con columnas para la variable y para cada componente de la función vectorial: <M>{r`x, f_1(x), f_2(x), \ldots, f_n(x)`}</M>.
      </Tip>

      <p>
        La derivada de una función vectorial de una variable es simplemente un caso particular de la derivada de funciones vectoriales, en la cual, como solo se tiene una variable, la matriz de derivadas parciales solo tiene una columna y la derivada es un vector columna.
      </p>

      <Definition concept="Derivada de una función vectorial de una variable">
        Sea <M>{r`\bvec{f}\colon A \subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M> una función vectorial de una variable. La <em>derivada</em> de <M>{r`\bvec{f}`}</M> en un punto <M>{r`t`}</M> es el vector
        <M block>
          {r`\bvec{f}'(t) = \lim_{{h\to 0}} \frac{\bvec{f}(t+h)-\bvec{f}(t)}{h}.`}
        </M>
        dado por
        <M block>
          {r`\bvec{f}' = \begin{pmatrix}
            f_1' \\ f_2' \\ \vdots \\ f_n'
          \end{pmatrix} = \begin{pmatrix}
          \der{}{t}f_1 \\ \der{}{t}f_2 \\ \vdots \\ \der{}{t}f_n
        \end{pmatrix}.`}
        </M>
      </Definition>

      <p>
        La derivada <M>{r`\bvec{f}'`}</M> de una función vectorial de una variable evaluada en un punto es paralela a la recta tangente a la función en ese punto. Por ende, la recta tangente a la función en el valor <M>{r`t`}</M> está dada por la función
        <M block>
          {r`\bvec{\ell}(\lambda) = \bvec{f}(t) + \lambda \bvec{f}'(t).`}
        </M>
      </p>

      <h3>Trayectorias</h3>

      <p>
        La aplicación más cotidiana de las funciones vectoriales de una variable es la descripción de trayectorias. Una <em>trayectoria</em> describe el movimiento de un cuerpo en el espacio durante un intervalo de tiempo. La posición del cuerpo en un instante de tiempo <M>{r`t`}</M> se describe por un vector posición <M>{r`\mathbb{R}^{n}`}</M> en el espacio, por lo que resulta apropiado modelar la trayectoria como una función vectorial de una variable.
      </p>
      <Definition concept="Trayectoria">
        Una <em>trayectoria</em> en <M>{r`\mathbb{R}^{n}`}</M> es una función vectorial de una variable <M>{r`\sigma\colon [a,b]\subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M>, dada por
        <M block>
          {r`\sigma (t) = (x_1(t),x_2(t),\ldots,x_n(t)).`}
        </M>
      </Definition>
      <p>
        Traduciendo la definición a términos de física, <M>{r`a`}</M> representa el tiempo inicial y <M>{r`b`}</M> el tiempo final en el que se mide el movimiento. A cada tiempo <M>{r`t`}</M> entre esos dos instantes, la función le asigna una posición del cuerpo en el espacio, <M>{r`\sigma(t) \in \mathbb{R}^{n}`}</M>. El punto inicial de la trayectoria es entonces <M>{r`\sigma(a)`}</M> y <M>{r`\sigma(b)`}</M> corresponde al punto final.
      </p>
      <p>
        Una trayectoria está descrita sobre el plano si <M>{r`n=2`}</M> y sobre el espacio si <M>{r`n=3`}</M>. En general, una trayectoria en <M>{r`\mathbb{R}^{n}`}</M> es una curva en el espacio de <M>{r`n`}</M> dimensiones.
      </p>
      <p>
        Se puede tomar la suposición de que las trayectorias de los cuerpos en el espacio son suaves, o que por lo menos una trayectoria que no lo es puede construirse a partir de trayectorias suaves. Por lo tanto, se asume que las trayectorias son funciones de clase al menos <M>{r`C^1`}</M>. Con eso en mente, se puede definir la velocidad, rapidez, aceleración y longitud de la trayectoria.
      </p>

      <Definition concept="Velocidad">
        Sea <M>{r`\sigma\colon [a,b]\subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M> una trayectoria diferenciable en <M>{r`\mathbb{R}^{n}`}</M>. La <em>velocidad</em>, denotada por <M>{r`\sigma'`}</M>, es la derivada de la trayectoria con respecto al tiempo:
        <M block>
          {r`\sigma'(t) = (x_1'(t), x_2'(t), \ldots, x_n'(t)).`}
        </M>
      </Definition>
      <p>
        La velocidad es una función vectorial de una variable que describe la rapidez y la dirección del movimiento del cuerpo en el espacio. Si se evalúa en un instantge de tiempo <M>{r`t`}</M>, se obtiene un vector tangente a la trayectoria en ese punto, que representa la <em>velocidad instantánea</em>. La magnitud de la velocidad es la rapidez.
      </p>
      <Definition concept="Rapidez">
        Sea <M>{r`\sigma\colon [a,b]\subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M> una trayectoria diferenciable en <M>{r`\mathbb{R}^{n}`}</M>, la <em>rapidez</em> es la magnitud de la velocidad.
        <M block>
          {r`\norm{\sigma'(t)} = \sqrt{(x_1'(t))^2+(x_2'(t))^2+\cdots+(x_n'(t))^2}`}
        </M>
      </Definition>
      <p>
        La rapidez es una función escalar de una variable que simplemente describe la magnitud de la velocidad. La rapidez nunca es negativa, pues es una magnitud; atribuirle un valor negativo sería un intento de describir su dirección, lo cual le corresponde a la velocidad. La rapidez es cero si y solamente si la velocidad es el vector nulo, lo que implica que el cuerpo no se mueve.
      </p>
      <Definition concept="Aceleración">
        Sea <M>{r`\sigma\colon [a,b]\subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M> una trayectoria de clase <M>{r`C^2`}</M> en <M>{r` \mathbb{R}^{n} `}</M>. La <em>aceleración</em>, denotada por <M>{r`\sigma''`}</M>, es la derivada de la velocidad:
        <M block>
          {r`\sigma'' (t) = (x_1''(t),x_2''(t),\ldots,x_n''(t)).`}
        </M>
      </Definition>
      <p>
        La aceleración es una función vectorial de una variable que describe en qué medida cambia la velocidad del cuerpo en el espacio. Nótese que contempla tanto los cambios en la rapidez como los cambios en la dirección de la velocidad. La aceleración es el vector cero si y solamente si la velocidad es constante, lo que implica que la rapidez es constante y además el cuerpo se mueve en línea recta (de lo contrario, la dirección de la velocidad cambiaría y habría aceleración).
      </p>
      <Definition concept="Longitud de la trayectoria">
        Sea <M>{r`\sigma\colon [a,b]\subseteq \mathbb{R} \to \mathbb{R}^{n}`}</M> una trayectoria diferenciable en <M>{r`\mathbb{R}^{n}`}</M>. La <em>longitud de la trayectoria</em>, denotada por <M>{r`L (\sigma)`}</M>, es la longitud de arco de la trayectoria, dada por
        <M block>
          {r`L(\sigma) = \defint{\norm{\sigma' (t)}}{t}{a}{b} \geq 0.`}
        </M>
      </Definition>
      <p>
        La longitud de la trayectoria siempre es mayor o igual a la distancia entre el punto inicial y el punto final. Solamente es igual a dicha distancia si la trayectoria es una recta entre los dos puntos.
      </p>

    </Section>

    <Section title="Derivación de campos vectoriales">

      <p>
        Esta sección se hace énfasis en la derivación de campos vectoriales, pues para estos existen operadores diferenciales que no tienen análogos en el cálculo de funciones escalares o vectoriales de una variable.
      </p>

      <h3>La divergencia</h3>

      <Definition concept="Divergencia">
        Sea <M>{r`\bvec{F}\colon \mathbb{R}^{m}\to \mathbb{R}^{n}`}</M> un campo vectorial de clase <M>{r`C^1`}</M>, de forma que <M>{r`\bvec{F}= (F_1,F_2,\ldots,F_n)`}</M>. La <em>divergencia</em> de <M>{r`\bvec{F}`}</M>, denotada por <M>{r`\div\bvec{F}`}</M>, es la función escalar dada por el producto punto entre el operador nabla y el campo vectorial:
        <M block>
          {r`\begin{align*}
            \div\bvec{F} &= \nabla \cdot \bvec{F} \\
            \div\bvec{F} &= \left(\dparder{}{x_1}, \dparder{}{x_2},\ldots,\dparder{}{x_n}\right) \cdot (F_1,F_2,\ldots,F_n)\\
            \div\bvec{F} &= \sum_{i=1}^{n}\parder{F_i}{x_i}.
          \end{align*}`}
        </M>
      </Definition>

      <Warning>
        El producto punto entre vectores es conmutativo, sin embargo la divergencia no es conmutativa, pues el operador vectorial nabla no conmuta. En general,
        <M block>
          {r`\div\bvec{F}=\nabla \cdot \bvec{F} \neq \bvec{F}\cdot \nabla.`}
        </M>
      </Warning>

      <p>
        Para un campo vectorial en el espacio, <M>{r`\bvec{G}\colon \mathbb{R}^{3}\to \mathbb{R}^{3}`}</M>, de clase <M>{r`C^1`}</M>, <M>{r`\bvec{G}= (G_1,G_2,G_3)`}</M>, se tiene que
        <M block>
          {r`\begin{align*}
            \div\bvec{G} &= \nabla \cdot \bvec{G} \\
            \div\bvec{G} &= \left(\dparder{}{x}, \dparder{}{y},  \dparder{}{z}\right) \cdot (G_1,G_2,G_3)\\
            \div\bvec{G} &= \parder{G_1}{x_1}+ \parder{G_2}{x_2} + \parder{G_3}{x_3}.
          \end{align*}`}
        </M>
      </p>

      <p>

      </p>

      <Properties
        title="Propiedades de la divergencia"
        description={<p>Sean <M>{r`U_1, U_2 \subseteq \mathbb{R}^{m}`}</M> conjuntos abiertos, <M>{r`\bvec{F},\bvec{G}\colon U_1\to \mathbb{R}^{n}`}</M> campos vectoriales de clase <M>{r`C^1`}</M> y <M>{r`f,g\colon U_2 \to \mathbb{R}^{n}`}</M> funciones escalares, es posible demostrar las siguientes propiedades de la divergencia:</p>}
        properties={[
          {
            name: "Linealidad",
            formula: <M>{r`\div (\bvec{F}+\bvec{G}) = \div\bvec{F}+\div\bvec{G}`}</M>
          },
          {
            name: "Producto escalar",
            formula: <M>{r`\div (f\bvec{F}) = \nabla \cdot (f\bvec{F}) = f\div\bvec{F}+\bvec{F}\cdot \nabla f`}</M>
          },
          {
            name: "Producto cruz",
            formula: <M>{r`\div (\bvec{F} \times \bvec{G}) = \nabla \cdot (\bvec{F} \times \bvec{G}) = \bvec{G} \cdot \rot\bvec{F} - \bvec{F} \cdot \rot \bvec{G}.`}</M>
          },
          {
            name: "Producto cruz de gradientes",
            formula: <M>{r`\div(\nabla f \times \nabla g) = \nabla \cdot(\nabla f \times \nabla g) = 0.`}</M>
          },
          {
            name: "Divergencia del rotacional",
            formula: <M>{r`\div \rot \bvec{F} = \nabla \cdot (\nabla \times \bvec{F}) = 0`}</M>
          },
          {
            name: "Divergencia y laplaciano",
            formula: <M>{r`\div(f\nabla g - g\nabla f) = \nabla \cdot(f\nabla g-g\nabla f) = f\nabla^2g-g\nabla^2f`}</M>,
            note: <span>Al operador <M>{r`\nabla^2`}</M> se le denomina en ocasiones el <em>laplaciano</em> u <em>operador de Laplace</em>. También se denota por <M>{r`\Delta `}</M>.</span>
          }
        ]}
      />

      <p>
        Para las propiedades que contienen producto cruz, considérese que los campos vectoriales están definidos en <M>{r`\mathbb{R}^{3}`}</M>.
      </p>

      <p>
        Por la propiedad v, la divergencia del rotacional de un campo vectorial es siempre nula. Por ende, se puede usar la divergencia de un campo vectorial para saber si dicho campo podría ser el resultado de una operación de rotacional. Sea <M>{r`\bvec{F}`}</M> un campo vectorial,
        <M block>
          {r`\div \bvec{F} = 0 \ \iff \ \bvec{F} = \rot \bvec{G}`}
        </M>
        para algún campo vectorial <M>{r`\bvec{G}`}</M>.
      </p>

      <h3>El rotacional</h3>

      <Definition concept="Rotacional">
        Sea <M>{r`\bvec{F}\colon \mathbb{R}^{3}\to \mathbb{R}^{3}`}</M> un campo vectorial de clase <M>{r`C^1`}</M> de forma que <M>{r`\bvec{F}= (F_x,F_y,F_z)`}</M>. La <em>rotacional</em> de <M>{r`\bvec{F}`}</M>, denotada por <M>{r`\rot\bvec{F}`}</M>, es un campo vectorial dado por el producto cruz entre el operador nabla y el campo vectorial:
        <M block>
          {r`\begin{align*}
            \mathrm{rot}\bvec{F} &= \nabla \times \bvec{F} \\
            \rot\bvec{F} &= \left(\dparder{}{x}, \dparder{}{y},  \dparder{}{z}\right) \times (F_x,F_y,F_z) \\
            \rot\bvec{F} &= \begin{vmatrix}
                  \uveci & \uvecj & \uvec{k} \\[0.5	ex] \dparder{}{x} & \dparder{}{y} & \dparder{}{z} \\[1.7ex] F_x & F_y & F_z
                \end{vmatrix} \\
            \rot\bvec{F} &= \left(\dparder{F_z}{y}-\dparder{F_y}{z}\right) \uveci + \left( \dparder{F_z}{x} - \dparder{F_x}{z}\right) \uvecj +\left(\dparder{F_y}{x} - \dparder{F_x}{y} \right) \uvec{k}.
          \end{align*}`}
        </M>
      </Definition>

      <Properties
        title="Propiedades del rotacional"
        description={<p>Sean <M>{r`U_1, U_2 \subseteq \mathbb{R}^{3}`}</M> conjuntos abiertos, <M>{r`\bvec{F},\bvec{G}\colon U_1\to \mathbb{R}^{3}`}</M> campos vectoriales en el espacio de clase <M>{r`C^1`}</M> y <M>{r`f,g\colon U_2 \to \mathbb{R}^{3}`}</M> funciones escalares, se pueden probar las propiedades del rotacional que se enuncian a continuación:</p>}
        properties={[
          {
            name: "Linealidad",
            formula: <M>{r`\rot(\bvec{F}+\bvec{G}) = \rot\bvec{F}+\rot\bvec{G}.`}</M>
          },
          {
            name: "Producto de campos escalar y vectorial",
            formula: <M>{r`\rot(f\bvec{F}) = f\rot\bvec{F}+\nabla f \times \bvec{F}.`}</M>
          },
          {
            name: "Producto cruz entre campos vectoriales",
            formula: <M>{r`\rot(\bvec{F} \times \bvec{G}) = \bvec{F}\div \bvec{G} - \bvec{G}\div \bvec{F} + (\bvec{G} \cdot \nabla)\bvec{F} - (\bvec{F} \cdot \nabla)\bvec{G}.`}</M>
          },
          {
            name: "Rotacional de un campo gradiente",
            formula: <M>{r`\rot \nabla f = \nabla \times (\nabla f) = \bvec{0}`}</M>
          },
          {
            name: "Rotacional del rotacional",
            formula: <M>{r`\rot\rot \bvec{F} = \nabla (\div \bvec{F}) - \nabla^2 \bvec{F}`}</M>
          }
        ]}
      />

      <p>
        Por la propiedad iv, el rotacional de un campo vectorial es cero si y solamente si el campo vectorial es un campo gradiente. A causa de eso, el rotacional sirve para detectar si un campo vectorial puede ser el gradiente de una función escalar. Los campos gradientes no causan rotaciones. Sea <M>{r`\bvec{F}`}</M> un campo vectorial,
        <M block>
          {r`\rot \bvec{F} = 0 \ \iff \ \bvec{F} = \nabla f`}
        </M>
        para alguna función escalar <M>{r`f`}</M>.
      </p>

      {/* </Section>

    <Section title="Optimización de funciones vectoriales"> */}
      {/* <Definition concept="Punto crítico  de funciones vectoriales"> 
  El punto <M>{r`(\bvec{v},\bvec{F}(\bvec{v}))`}</M> es un <em>punto crítico</em> de <M>{r`\bvec{F}`}</M> si <M>{r`\mathrm{D}\bvec{F}(\bvec{v}) = \bvec{0}`}</M>. En ese caso, <M>{r`\bvec{v}`}</M> es un <em>vector crítico</em>.
</Definition>*/}

    </Section>

    {/* TODO! En este punto inicio la revisión de la parte de Integral de estos apuntes cuando fui monitor de Cálculo Vectorial en 2024-19. */}

    <h1>Parte 2: Cálculo Vectorial Integral</h1>

    <p>
      En esta segunda parte del cálculo vectorial se generaliza el cálculo integral de funciones escalares de una variable a funciones vectoriales y a funciones de múltiples variables. Se estudian, en orden: integrales dobles, integrales múltiples, integrales de línea y de superficie.
    </p>
    <p>
      Adicionalmente, para terminar el estudio de cálculo vectorial, la última parte de esta sección aborda los teoremas de Green, Gauss y Stokes, que requieren conocimientos tanto de cálculo vectorial diferencial como de cálculo vectorial integral.
    </p>

    <Section title="Integrales dobles">

      <p>
        En esta sección se estudia una de las muchas formas de generalizar la integración a funciones escalares de dos variables. Las <em>integrales dobles</em> son la generalización más natural a dos dimensiones de las integrales definidas de funciones de una variable. Esta sección sirve como antesala al estudio de las integrales múltiples.
      </p>

      <p>
        Puede resultar clarificador mencionar que, como al derivar funciones de múltiples variables siempre se deriva respecto a alguna dirección, entonces no existe algo así como la antiderivada general de una función de dos o más variables, a diferencia de lo que sucede con funciones de una variable. Por ende, no hay tal cosa como integrales múltiples <em>indefinidas</em>: todas las integrales múltiples son <em>definidas</em>.
      </p>

      <h3>Integrales dobles sobre regiones rectangulares</h3>

      <p>
        Se estudian primero integrales dobles exclusivamente sobre regiones rectangulares. Esto facilita definir la integral doble formalmente, como la generalización natural de las integrales definidas de funciones de una variable. Naturalmente, es conveniente recapitular la {referenceById("definición de la integral definida", INTEGRAL_CALCULUS, "la-integral-definida")} del cálculo integral antes de proceder.
      </p>

      <p>
        Sea <M>{r`f\colon R\to \mathbb{R}`}</M> una función escalar de dos variables, donde <M>{r`R = [a,b] \times [c,d]`}</M> es un rectángulo en el plano <M>{r`xy`}</M>. Supóngase que <M>{r`f`}</M> es positiva y continua. Se predetende calcular el volumen debajo de <M>{r`f`}</M>, que corresponde al volumen de la región en el espacio tridimensional que es, informalmente, una caja cuya base es <M>{r`R`}</M> y cuya tapa es la gráfica de <M>{r`f(x, y)`}</M>.
      </p>
      <p>
        Para aproximar ese volumen, se utiliza una suma de Riemman, al igual que en integrales de funciones de una variable. La diferencia es que en este caso, se deben sumar cajas cuya base esté en el plano <M>{r`xy`}</M>, en lugar de rectángulos con base en el eje <M>{r`x`}</M>.
      </p>
      <p>
        Para que todos los <M>{r`n`}</M> rectángulos tengan la misma base, las dimensiones de la base deben ser <M>{r`\Delta x = \frac{b-a}{n}`}</M> y <M>{r`\Delta y = \frac{d-c}{n}`}</M>. A partir de eso, se puede definir una diferencia de área como <M>{r`\Delta A = \Delta x \Delta y`}</M>. Para la altura <M>{r`h`}</M> de cada caja, se escoge un punto arbitrario <M>{r`(x_i, y_i)`}</M> de su base y se evalúa, de forma que <M>{r`h = f(x_i, y_i)`}</M>. Con eso, el volumen de cada caja está dado por
        <M block>
          {r`V_{\text{caja}} = f(x_i, y_i) \Delta A = f(x_i, y_i) \Delta x \Delta y.`}
        </M>
        y la suma de los volúmenes de todas las cajas es entonces la siguiente suma de Riemann:
        <M block>
          {r`\sum_{i,j=1}^n f(x_i, y_j) \Delta A = \sum_{i,j=1}^n f(x_i, y_j) \Delta x \Delta y.`}
        </M>
      </p>
      <Notation>
        La sumatoria sobre dos variables, <M>{r`\sum_{i,j=1}^n`}</M>, también se puede denotar usando una suma por cada variable, <M>{r`\sum_{i=1}^{n} \sum_{j=1}^{n}`}</M>. En estos apuntes, prefiero la primera notación porque es más compacta: escribir las dos sumatorias no añade información adicional.
      </Notation>
      <p>
        Para calcular con exactitud el volumen bajo la superficie, hace falta hacer uso de infinitas cajas, es decir, tomar el límite cuando <M>{r`n \to \infty`}</M> de la suma de Riemman. Con eso en mente, se define la integral doble de <M>{r`f`}</M> sobre <M>{r`R`}</M>.
      </p>
      <Definition concept="Integral doble sobre región rectangular">
        Sea <M>{r`f(x, y)`}</M> una función escalar definida sobre la región rectangular <M>{r`R = [a, b] \times [c, d]`}</M>. Se define la <em>integral doble</em> de <M>{r`f`}</M> sobre <M>{r`R`}</M> como
        <M block>
          {r`\int_{R} f(x, y) \: \mathrm{d}A = \lim_{n \to \infty} \sum_{i,j=1}^{n} f(x_i, y_j) \Delta A.`}
        </M>
        si el límite existe y no depende de la elección de los puntos <M>{r`(x_i, y_j)`}</M>.
      </Definition>

      <Notation>
        Hay múltiples notaciones para la integral doble de una función sobre una región <M>{r`R`}</M>. Se pueden usar uno o dos símbolos de integración y se puede escribir el diferencial como <M>{r`\mathrm{d}A`}</M> o <M>{r`\mathrm{d}x \: \mathrm{d}y`}</M>. También se puede omitir el diferencial, que se sobreentiende al especificar la región.
        <M block>{r`\int_{R} f = \int_{R} f(x, y) \: \mathrm{d}A = \iint_{R} f(x, y) \: \mathrm{d}x \: \mathrm{d}y.`}</M>
        A partir de este punto, se opta por la notación más sucinta.
      </Notation>
      <p>
        Siempre que el límite de la suma de Riemann exista independientemente de la elección de los puntos <M>{r`(x_i, y_j)`}</M>, se dice que la función <M>{r`f`}</M> es <em>integrable</em> sobre la región <M>{r`R`}</M>.
      </p>
      <Theorem name="Función integrable">
        Sea <M>{r`f(x, y)`}</M> una función escalar definida sobre la región rectangular <M>{r`R = [a, b] \times [c, d]`}</M>.
        <ul>
          <li>Si <M>{r`f`}</M> es continua en <M>{r`R`}</M>, entonces <M>{r`f`}</M> es integrable en <M>{r`R`}</M>.</li>
          <li>Si <M>{r`f`}</M> es una función acotada sobre <M>{r`R`}</M> y el conjunto de puntos donde <M>{r`f`}</M> es discontinua consiste de la unión de finita de gráficas de funciones continuas, entonces <M>{r`f`}</M> es integrable sobre <M>{r`R`}</M>.</li>
        </ul>
      </Theorem>

      <Properties
        title="Propiedades de la integral doble en regiones rectangulares"
        description={<p>Las propiedades de la integral doble son, en esencia, las mismas de la integral definida de una variable. Sean <M>{r`f, g`}</M> funciones escalares integrables sobre la región rectangular <M>{r`R`}</M> y <M>{r`c`}</M> una constante.</p>}
        properties={[
          {
            name: "Linealidad",
            formula: <M>{r`\int_{R} (f \pm g) = \int_{R} f \pm \int_{R} g.`}</M>
          },
          {
            name: "Homogeneidad",
            formula: <M>{r`\int_{R} cf = c \int_{R} f.`}</M>
          },
          {
            name: "Monotonía",
            formula: <span>Si <M>{r`f(x, y) \geq g(x, y)`}</M> para todo <M>{r`(x, y) \in R`}</M>, entonces <M>{r`\int_{R} f \geq \int_{R} g.`}</M></span>
          },
          {
            name: "Aditividad",
            formula: <span><M>{r`\int_{R} f = \int_{R_1} f + \int_{R_2} f`}</M> si y solamente si <M>{r`R = R_1 \cup R_2`}</M> y <M>{r`R_1 \cap R_2 = \varnothing`}</M>.</span>,
            note: <span>Esta última propiedad se puede extender a cualquier número de regiones disjuntas cuya unión sea <M>{r`R`}</M>.</span>
          }
        ]}
      />

      <h4>Calcular integrales dobles en regiones rectangulares</h4>

      <p>
        Tras definir formalmente la integral doble, se aborda cómo calcularla. Nótese que en la definición de la integral doble como suma de Riemann, se puede separar la sumatoria en dos, una para cada variable.
        <M block>
          {r`\int_{R} f = \lim_{n \to \infty} \sum_{i,j=1}^{n} f(x_i, y_j) \Delta A = \lim_{n \to \infty}  \sum_{j=1}^{n} \left( \sum_{i=1}^{n} f(x_i, y_j) \Delta x \right) \Delta y.`}
        </M>
        En esa expresión, la suma interna es el límite de una suma de Riemman y por ende se puede expresar como una integral definida con respecto a <M>{r`x`}</M>. Como la suma tiene lugar en la región rectangular <M>{r`R = [a, b] \times [c, d]`}</M>, la integral interna está definida sobre el intervalo <M>{r`[a, b]`}</M>:
        <M block>
          {r`\lim_{n \to \infty}  \sum_{j=1}^{n} \left( \sum_{i=1}^{n} f(x_i, y_j) \Delta x \right) \Delta y = \lim_{n \to \infty}  \sum_{j=1}^{n} \left( \int_{a}^{b} f(x, y_j) \: \mathrm{d}x \right) \Delta y.`}
        </M>
        Similarmente, la suma externa también se puede expresar como una integral definida, donde el integrando es la integral interna. Esa integral interna es, una vez calculada, una función con respecto a <M>{r`y`}</M>. Así, la integral doble se puede expresar como
        <M block>
          {r`\int_{R} f = \int_{c}^{d} \left( \int_{a}^{b} f(x, y) \: \mathrm{d}x \right) \: \mathrm{d}y.`}
        </M>
        Los paréntesis usualmente se omiten, pero es importante recordar que la integral interna se evalúa primero.
      </p>

      <p>
        El racionamiento anterior se puede interpretar geométricamente mediante el <em>principio de Cavalieri</em>, que es un método para calcular volúmenes. Este establece que, para calcular el volumen bajo una superficie, se deben sumar infinitas áreas de secciones transversales. Una <em>sección transversal</em> se obtiene al cortar la región bajo la superficie con un plano perpendicular al eje <M>{r`x`}</M> o <M>{r`y`}</M>. Sea <M>{r`A(y)`}</M> el área de una sección transversal paralela al plano <M>{r`xz`}</M> a la altura <M>{r`y`}</M>, el volumen bajo la superficie es entonces
        <M block>
          {r`\int_{c}^{d} A(y) \: \mathrm{d}y.`}
        </M>
        Sin embargo, para calcular el área de la sección transversal, se debe realizar precisamente la integral definida con respecto a <M>{r`x`}</M>. Por ende, se arriba a la misma fórmula que antes,
        <M block>
          {r`\int_{R} f = \int_{c}^{d} \int_{a}^{b} f(x, y) \: \mathrm{d}x \: \mathrm{d}y.`}
        </M>
        Este racionamiento permite visualizar que la integral sería equivalente si se hubiesen tomado secciones transversales perpendiculares al eje <M>{r`x`}</M>, en lugar de al eje <M>{r`y`}</M>. Eso sería como cambiar el orden de las sumatorias arriba, lo cual también es posible. Se concluye entonces que no importa cuál integral sea la interna:
        <M block>
          {r`\int_{c}^{d} \int_{a}^{b} f(x, y) \: \mathrm{d}x \: \mathrm{d}y = \int_{a}^{b} \int_{c}^{d} f(x, y) \: \mathrm{d}y \: \mathrm{d}x.`}
        </M>
      </p>
      <p>
        El resultado formal que resume lo anterior es el <em>Teorema de Fubini</em>.
      </p>
      <Theorem name="Teorema de Fubini">
        Sea <M>{r`f(x, y)`}</M> una función escalar integrable sobre la región rectangular <M>{r`R = [a, b] \times [c, d]`}</M>. Entonces, se tiene que
        <M block>
          {r`\int_{R} f = \int_{c}^{d} \int_{a}^{b} f(x, y) \: \mathrm{d}x \: \mathrm{d}y = \int_{a}^{b} \int_{c}^{d} f(x, y) \: \mathrm{d}y \: \mathrm{d}x.`}
        </M>
      </Theorem>

      <h3>Integrales dobles sobre regiones elementales</h3>

      <p>
        Se estudian ahora integrales dobles sobre regiones bidimensionales más generales. Para ello, se clasifican en tres tipos, que se denominan <em>regiones elementales</em>. La unión de regiones elementales permite describir cualquier región bidimensional acotada, es decir, cualquier región bidimensional tal que existe alguna región rectangular que la contiene. Las regiones elementales sobre el plano <M>{r`xy`}</M> son:
      </p>
      <ol>
        <li><b>Región de tipo 1:</b> Toda región que está delimitada por un intervalo <M>{r`[a, b]`}</M> en el eje <M>{r`x`}</M> y por dos curvas continuas, <M>{r`\phi_1(x)`}</M> y <M>{r`\phi_2(x)`}</M>, en el eje <M>{r`y`}</M>. Se toma como convención que <M>{r`\phi_2(x) > \phi_1(x)`}</M> para todos los <M>{r`x`}</M> en el intervalo <M>{r`[a, b]`}</M>.
          <M block>
            {r`D = \{(x, y) \in \mathbb{R}^2 \mid a \leq x \leq b \ \land \ \phi_1(x) \leq y \leq \phi_2(x)\}.`}
          </M>
        </li>
        <li><b>Región de tipo 2:</b> Toda región que está delimitada por un intervalo <M>{r`[c, d]`}</M> en el eje <M>{r`y`}</M> y por dos curvas continuas, <M>{r`\psi_1(y)`}</M> y <M>{r`\psi_2(y)`}</M>, en el eje <M>{r`x`}</M>. Igual que antes, se presume que <M>{r`\psi_2 > \psi_1`}</M> en el intervalo <M>{r`[c, d]`}</M>.
          <M block>
            {r`D = \{(x, y) \in \mathbb{R}^2 \mid c \leq y \leq d \ \land \ \psi_1(y) \leq x \leq \psi_2(y)\}.`}
          </M>
        </li>
        <li><b>Región de tipo 3:</b> Toda región que se puede representar o bien como una región de tipo 1 o bien como una región de tipo 2. Por ejemplo, el círculo unitario.</li>
      </ol>

      <p>
        Para extender la definición que ya se conoce de integral doble sobre regiones rectangulares para que incluya las regiones elementales, se toma un rectángulo <M>{r`R`}</M> que contenga a la región elemental <M>{r`D`}</M>. Dada una función <M>{r`f`}</M> definida en <M>{r`D`}</M>, se fabrica una función <M>{r`g`}</M> cuyo valor sea igual al de <M>{r`f`}</M> en <M>{r`D`}</M> y sea cero en el complemento de <M>{r`D`}</M>. Con eso, la integral doble de <M>{r`f`}</M> sobre <M>{r`D`}</M> se define como la integral doble de <M>{r`g`}</M> sobre <M>{r`R`}</M>, donde esa última integral está definida porque es una integral doble sobre una región rectangular.
      </p>
      <Definition concept="Integral doble sobre región elemental">
        Sea <M>{r`D`}</M> una región elemental en el plano y sea <M>{r`R`}</M> una región rectangular tal que <M>{r`D \subseteq R`}</M>. Sea <M>{r`f(x, y)`}</M> una función escalar continua sobre <M>{r`D`}</M>. Se define la función escalar <M>{r`g(x, y)`}</M> en el rectángulo <M>{r`R`}</M> como
        <M block>
          {r`g(x, y) = \begin{cases}
            f(x, y) & (x, y) \in D, \\
            0 & (x, y) \notin D \land (x, y) \in R. 
           \end{cases}`}
        </M>
        La <em>integral doble</em> de <M>{r`f`}</M> sobre <M>{r`D`}</M> se define como la integral doble de <M>{r`g`}</M> sobre <M>{r`R`}</M>:
        <M block>
          {r`\int_{D} f = \int_{R} g.`}
        </M>
      </Definition>
      <p>
        En la definición, <M>{r`g`}</M> es continua al interior de <M>{r`D`}</M> porque allí su valor es <M>{r`f`}</M> y <M>{r`f`}</M> es continua. También es continua en <M>{r`R \setminus D`}</M> porque allí su valor es <M>{r`0`}</M>. No hay garantías de que <M>{r`g`}</M> no sea continua en la frotera de la región elemental, <M>{r`\partial D`}</M>, no obstante, por la definición de región elemental, esa frontera está formada por la unión de gráficas de funciones continuas. Esto hace que, por el {referenceById("teorema de funciones integrables", VECTOR_CALCULUS, "funcion-integrable")}, <M>{r`g`}</M> sea integrable en <M>{r`R`}</M>.
      </p>

      <h4>Calcular integrales dobles en regiones elementales</h4>

      <p>
        Para calcular la integral doble sobre una región elemental, se sigue el mismo razonamiento que en el caso de regiones rectangulares. La diferencia fundamental es que la integral interna tendrá como límites las curvas que delimitan la región elemental. Para una región de tipo 1, la integral doble se calcula como
        <M block>
          {r`\int_{D} f = \int_{a}^{b} \int_{\phi_1(y)}^{\phi_2(y)} f(x, y) \: \mathrm{d}x \: \mathrm{d}y.`}
        </M>
        Nótese que la integral interna, que es con respecto a <M>{r`x`}</M>, tiene como límites las curvas con respecto a <M>{r`y`}</M>, de forma que tras evaluarla se obtiene una función con respeto a <M>{r`y`}</M> como integrando de la integral externa. Similarmente, para una región de tipo 2, la integral doble es
        <M block>
          {r`\int_{D} f = \int_{c}^{d} \int_{\psi_1(x)}^{\psi_2(x)} f(x, y) \: \mathrm{d}y \: \mathrm{d}x.`}
        </M>
        Para regiones de tipo 3, se puede optar por cualquiera de las fórmulas. En ocasiones, una de las dos puede resultar mucho más sencilla que la otra.
      </p>

      <Warning>
        Es importante enfatizar que la integral cuyos límites son funciones debe ser la interna y los límites deben estar en función de la variable de la integral externa, para que al evaluarla se obtenga una función con respecto a la variable restante. De lo contrario, no se podrá obtener un valor numérico.
      </Warning>

      <Tip>
        Antes de evaluar una integral doble, siempre debe inspeccionarse el tipo de la región. Si se descubre que la región es de tipo 3, debe ponderarse si cambiar el orden de integración puede simplificar el cálculo o, incluso, posibilitarlo.
      </Tip>

      <h4>El teorema del valor medio para integrales dobles</h4>

      <p>
        Para finalizar el estudio de las integrales dobles, se enuncia el teorema del valor medio para integrales dobles, análogo al teorema del valor medio del cálculo integral. El teorema establece que, para cualquier función continua sobre una región elemental, existe un punto en la región donde la función toma un valor tal que, si se multiplica por el área de la región, arroja el volumen entre la superficie y la región. Es decir, en algún punto de la región, la función toma el promedio de los valores de la función en la región.
      </p>
      <Theorem name="Teorema del valor medio para integrales dobles">
        Sea <M>{r`f(x, y)`}</M> una función continua sobre una región elemental <M>{r`D`}</M>. Existe un punto <M>{r`(x_0, y_0)`}</M> en <M>{r`D`}</M> tal que
        <M block>
          {r`\int_{D} f = f(x_0, y_0) \cdot A(D).`}
        </M>
        donde <M>{r`A(D)`}</M> denota el área de <M>{r`D`}</M>.
      </Theorem>

    </Section>

    <Section title="Integrales múltiples">

      <p>
        En esta sección se estudia una de las formas de generalizar la integración a funciones escalares de múltiples variables. Se inicia generalizando las integrales dobles a <em>integrales triples</em>, algunas de las cuales aún mantienen una interpretación geométrica como un volumen en el espacio tridimensional. Luego, se generaliza a <em>integrales múltiples</em> sobre regiones de <M>{r`n`}</M> dimensiones, con su interpretación geométrica, menos tangible, como hipervolúmenes.
      </p>

      <h3>Integrales triples</h3>

      <p>
        Las integrales triples se definen de forma análoga a las integrales dobles. Se definen primero sobre paralelepípedos rectangulares y luego sobre cualquier región en el espacio tridimensional.
      </p>
      <p>
        Sea <M>{r`f\colon R\to \mathbb{R}`}</M> una función escalar de tres variables, donde <M>{r`R`}</M> es un paralelepípedo rectangular en el espacio tridimensional, de forma que <M>{r`R = [a, b] \times [c, d] \times [e, f]`}</M>. Al igual que antes, cada dimensión de <M>{r`R`}</M> se segmenta en partes de igual tamaño: <M>{r`\Delta x = \frac{b-a}{n}`}</M>, <M>{r`\Delta y = \frac{d-c}{n}`}</M> y <M>{r`\Delta z = \frac{f-e}{n}`}</M>, con lo cual se obtiene una diferencia de volumen, <M>{r`\Delta V = \Delta x \Delta y \Delta z`}</M>. En este caso, cada parte de igual tamaño es a su vez un paralelepípedo rectangular, una caja. Se multiplica la diferencia de volumen de cada caja por la función evaluada en un punto arbitrario de la caja, <M>{r`f(x_i, y_j, z_k)`}</M>. Nótese que ese producto ya no es un volumen, sino un volumen multiplicado por un valor escalar, en ocasiones denominado <em>hipervolumen</em>. La suma de esos productos es la suma de Riemann,
        <M block>
          {r`\sum_{i,j,k=1}^n f(x_i, y_j, z_k) \Delta V,`}
        </M>
        que se convierte en la integral triple de <M>{r`f`}</M> sobre <M>{r`R`}</M> al tomar el límite cuando <M>{r`n \to \infty`}</M>.
      </p>

      <Definition concept="Integral triple sobre paralelepípedo rectangular">
        Sea <M>{r`f(x, y, z)`}</M> una función escalar definida sobre el paralelepípedo rectangular <M>{r`R = [a, b] \times [c, d] \times [e, f]`}</M>. Se define la <em>integral triple</em> de <M>{r`f`}</M> sobre <M>{r`R`}</M> como
        <M block>
          {r`\int_{R} f(x, y, z) \: \mathrm{d}V = \lim_{n \to \infty} \sum_{i,j,k=1}^{n} f(x_i, y_j, z_k) \Delta V.`}
        </M>
        si el límite existe y no depende de la elección de los puntos <M>{r`(x_i, y_j, z_k)`}</M>.
      </Definition>

      <Notation>
        Similar a antes, la integral triple se puede denotar de varias maneras,
        <M block>
          {r`\int_{R} f = \int_{R} f(x, y, z) \: \mathrm{d}V = \iiint_{R} f(x, y, z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z.`}
        </M>
      </Notation>

      <p>
        La mayoría de resultados sobre integrales dobles se extienden a integrales triples. Si una función es continua sobre un paralelepípedo rectangular, entonces es integrable. Las funciones acotadas que tienen discontinuidades confinadas a gráficas de funciones continuas también son integrables. Las propiedades de linealidad, homogeneidad, monotonía y aditividad se mantienen. Además, el teorema de Fubini también se extiende a integrales triples, por lo que, si la función es continua, las seis integrales iteradas posibles son equivalentes. En general, se puede cambiar el orden de integración si eso facilita el cálculo. Al igual que en las integrales dobles, el orden de los diferenciales determina el orden de integración, donde prima el diferencial más interno.
      </p>

      <p>
        Se pueden generalizar las integrales triples para toda región tridimensional acotada, es decir, que pueda estar contenida en un paralelepípedo rectangular, de la misma manera que se establecieron las integrales dobles para regiones elementales. Se define una función auxiliar <M>{r`g`}</M> que sea igual a la función original <M>{r`f`}</M> en la región <M>{r`W`}</M> y cero en el complemento de la región dentro del paralelepípedo <M>{r`R`}</M>. La integral triple de la función original sobre la región se define como la integral triple de la función auxiliar sobre el paralelepípedo,
        <M block>
          {r`\int_{W} f = \int_{R} g.`}
        </M>
        Al igual que en dos dimensiones, las regiones se clasifican en tipos:
      </p>
      <ol>
        <li><b>Región tridimensional de tipo 1:</b> Delimitada por una región bidimensional <M>{r`D`}</M> tipo 1 o tipo 2 en el plano <M>{r`xy`}</M> y por dos superficies continuas en el eje <M>{r`z`}</M>, que bien pueden ser de la forma <M>{r`\gamma_1(x,y) \leq z \leq \gamma_2(x,y)`}</M> o <M>{r`\gamma_1(y,x) \leq z \leq \gamma_2(y,x)`}</M>.

          Las funciones <M>{r`\gamma_1, \gamma_2\colon D \to \mathbb{R}`}</M> son continuas y acotadas en <M>{r`D`}</M> que, si intersecan, solo lo hacen en la frontera de <M>{r`D`}</M>. Se toma como convención que <M>{r`\gamma_2 > \gamma_1`}</M> en <M>{r`D`}</M>.
          <M block>
            {r`\begin{gather*}
            W = \{(x, y, z) \in \mathbb{R}^3 \mid a \leq x \leq b \ \land \ \phi_1(x) \leq y \leq \phi_2(x) \ \land \ \gamma_1(x, y) \leq z \leq \gamma_2(x, y)\} \\
            W = \{(x, y, z) \in \mathbb{R}^3 \mid c \leq y \leq d \ \land \ \psi_1(y) \leq x \leq \psi_2(y) \ \land \ \gamma_1(y, x) \leq z \leq \gamma_2(y, x)\}.
          \end{gather*}`}
          </M>
        </li>
        <li><b>Región tridimensional de tipo 2:</b> Prácticamente, se define igual que una región tridimensional de tipo 1, pero intercambiando la variable <M>{r`x`}</M> por <M>{r`z`}</M>. Es decir, una región elemental en el plano <M>{r`yz`}</M> y dos superficies continuas en el eje <M>{r`x.`}</M>
          <M block>
            {r`\begin{gather*}
            W = \{(x, y, z) \in \mathbb{R}^3 \mid e \leq z \leq f \ \land \ \chi_1(z) \leq y \leq \chi_2(z) \ \land \ \gamma_1(z, y) \leq z \leq \gamma_2(z, y)\} \\
            W = \{(x, y, z) \in \mathbb{R}^3 \mid c \leq y \leq d \ \land \ \psi_1(y) \leq z \leq \psi_2(y) \ \land \ \gamma_1(y, z) \leq z \leq \gamma_2(y, z)\}.
          \end{gather*}`}
          </M>
        </li>
        <li><b>Región tridimensional de tipo 3:</b> Definida igual que una región tridimensional de tipo 1, pero intercambiando <M>{r`y`}</M> por <M>{r`z`}</M>, con lo que se tiene una región elemental en el plano <M>{r`xz`}</M> y dos superficies continuas en el eje <M>{r`y`}</M>.
          <M block>
            {r`\begin{gather*}
            W = \{(x, y, z) \in \mathbb{R}^3 \mid a \leq x \leq b \ \land \ \phi_1(x) \leq z \leq \phi_2(x) \ \land \ \gamma_1(x, z) \leq z \leq \gamma_2(x, z)\} \\
            W = \{(x, y, z) \in \mathbb{R}^3 \mid e \leq z \leq f \ \land \ \chi_1(z) \leq x \leq \chi_2(z) \ \land \ \gamma_1(z, x) \leq z \leq \gamma_2(z, x)\}.
          \end{gather*}`}
          </M>
        </li>
        <li><b>Región tridimensional de tipo 4:</b> Análoga a las regiones bidimensionales de tipo 3, toda región que pueda ser expresada como una región de tipo 1, 2 o 3. Esencialmente el mismo ejemplo dado para regiones bidimensionales de tipo 3, el círculo unitario, es válido para regiones tridimensionales de tipo 4, ahora en forma de la esfera unitaria.</li>
      </ol>
      <p>
        Las integrales triples sirven para expresar directamente los volumenes de las regiones tridimensionales <M>{r`W`}</M>, si se integra sobre la función constante <M>{r`1`}</M>. Por ejemplo, para deducir la fórmula del volumen de la esfera, se puede integrar la función constante <M>{r`1`}</M> sobre la región de una la esfera de radio <M>{r`r`}</M> centrada en el origen. Si, por el contrario, el integrando es una función, la integral triple se interpreta como el promedio de los valores de la función en la región, multiplicado por el volumen de la región.
      </p>

      <Example title="Deducir la fórmula del volumen de una esfera, parte 1">
        Se desea deducir la fórmula del volumen de una esfera de radio arbitrario <M>{r`r`}</M>. Para ello, se integra la función constante <M>{r`1`}</M> sobre la esfera de radio <M>{r`r`}</M> centrada en el origen. La esfera de radio <M>{r`r`}</M> se puede expresar como
        <M block>
          {r`W = \{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \leq r^2\}.`}
        </M>
        Que, como región tridimensional de tipo 1, se puede expresar como
        <M block>
          {r`W = \{(x, y, z) \in \mathbb{R}^3 \mid -r \leq x \leq r \ \land \ -\sqrt{r^2-x^2} \leq y \leq \sqrt{r^2-x^2} \ \land \ -\sqrt{r^2-x^2-y^2} \leq z \leq \sqrt{r^2-x^2-y^2}\}.`}
        </M>
        Con eso en mente, la integral triple resultante es
        <M block>
          {r`\int_{W} 1 = \int_{-r}^{r} \int_{-\sqrt{r^2-x^2}}^{\sqrt{r^2-x^2}} \int_{-\sqrt{r^2-x^2-y^2}}^{\sqrt{r^2-x^2-y^2}} \: \mathrm{d}z \: \mathrm{d}y \: \mathrm{d}x.`}
        </M>
        Esa integral se puede resolver, pero su resolución es bastante extensa. Resulta mucho más sencillo si se cambia a coordenadas esféricas. Por ende, se pausa este ejemplo y se reanuda la sección de cambio de variable.
      </Example>

      <h3>Integrales múltiples</h3>

      <p>
        De la misma manera en que se extrapolaron las integrales dobles a integrales triples, se pueden definir, de forma general, las integrales múltiples. Esta definición realmente abarca las integrales dobles y triples, y además se extiende a integrales de cualquier número de variables.
      </p>

      <p>
        Similar a antes, sea <M>{r`f\colon R\to \mathbb{R}`}</M> una función escalar de <M>{r`n`}</M> variables, donde <M>{r`R \subseteq \mathbb{R}^n`}</M> es un hiperrectángulo, formalmente definido como el producto cartesiano de <M>{r`n`}</M> intervalos,
        <M block>
          {r`R = [a_1, b_1] \times [a_2, b_2] \times \cdots \times [a_n, b_n].`}
        </M>
        Similar a antes, se divide cada intervalo en partes de igual tamaño, <M>{r`\Delta x_i = \frac{b_i-a_i}{n}`}</M>, que son a su vez hiperrectángulos, y se obtiene una diferencia de hipervolumen dada por <M>{r`\prod_{i=1}^n \Delta x_i`}</M>.  Se toma un punto arbitrario <M>{r`\bvec{x}_i`}</M> en cada hiperrectángulo y se evalúa la función en cada uno de esos puntos, <M>{r`f(\bvec{x}_i)`}</M>. La suma de esos productos es la suma de Riemann,
        <M block>
          {r`\sum_{i_1,i_2,\ldots,i_n=1}^n f(\bvec{x}_i) \prod_{i=1}^n \Delta x_i,`}
        </M>
        que se convierte en la integral múltiple de <M>{r`f`}</M> sobre <M>{r`R`}</M> al tomar el límite cuando <M>{r`n \to \infty`}</M>,
        <M block>
          {r`\int_{R} f = \lim_{n \to \infty} \sum_{i_1,i_2,\ldots,i_n=1}^{n} f(\bvec{x}_i) \prod_{i=1}^n \Delta x_i.`}
        </M>
        solamente si el límite existe y no depende de la elección de los puntos <M>{r`\bvec{x}_i`}</M>.
      </p>

      <p>
        Expresada como integrales interadas en <M>{r`n`}</M> dimensiones, la integral múltiple se puede escribir como
        <M block>
          {r`\int_{R} f = \int_{R} f(\bvec{x}) \: \mathrm{d}^n\bvec{x} = \int_{a_n}^{b_n} \cdots \int_{a_2}^{b_2} \int_{a_1}^{b_1} f(x_1, x_2, \ldots, x_n) \: \mathrm{d}x_1 \: \mathrm{d}x_2 \cdots \mathrm{d}x_n.`}
        </M>
        Al igual que antes, las propiedades de las integrales iteradas, el teorema de Fubini y las circunstanicas bajo las cuales una función es integrable se extienden a integrales en <M>{r`n`}</M> dimensiones. Más aún, de la misma forma que se hizo con las integrales dobles y triples, la definición se puede extender a cualquier región acotada de <M>{r`n`}</M> dimensiones, definiendo una función auxiliar que sea igual a la función original en la región y cero en el complemento de la región dentro del hiperrectángulo.
      </p>

      <p>
        La interpretación geométrica de las integrales múltiples es análoga a la de las integrales dobles y triples: se entiende como la magnitud del espacio entre la gráfica de <M>{r`x_{n+1} = f(\bvec{x})`}</M> y la región de integración. También se puede entender como el promedio de los valores de la función en la región, multiplicado por el hipervolumen de la región. Si el integrando es <M>{r`1`}</M>, la integral múltiple es el hipervolumen de la región de integración en <M>{r`\mathbb{R}^n`}</M>.
      </p>

    </Section>

    <Section title="Sistemas coordenados y el teorema del cambio de variables">
      <p>
        Esta sección pretende exponer el teorema del cambio de variables. Este traza equivalencias entre una integral dada en términos de un sistema coordenado y otra integral expresada en términos de otro sistema coordenado. Suele suceder que una de las dos integrales es notablemente más sencilla que la otra y puede suceder que alguna sea incalculable de forma directa, por lo que el teorema es una herramienta muy valiosa.
      </p>
      <p>
        Para poder sacar provecho del teorema, naturalmente es necesario conocer al menos algunos sistemas coordenados alternativos al cartesiano, por lo cual, como antesala al teorema, se presentan los sistemas coordenados polar, cilíndrico y esférico. Se inicia con una formalización de los sistemas coordenados y del ya familiar sistema cartesiano, para luego presentar los sistemas alternativos.
      </p>

      <h3>Sistema coordenado</h3>

      <Definition concept="Sistema coordenado">
        Un <em>sistema coordenado</em> es un sistema que utiliza uno o más números, denominados <em>coordenadas</em>, para determinar unívocamente la posición de puntos y otros elementos geométricos en una variedad.
      </Definition>
      <p>
        La definición de <em>variedad</em> requiere de mucha más matemática que la que se aborda en estos apuntes. Como definición informal, una variedad es un espacio geométrico que localmente se parece a un <em>espacio euclidiano</em>. Un espacio euclidiano es un espacio en el que se satisfacen los axiomas de Euclides, lo cual esencialmente significa que es un espacio en el que se pueden medir distancias y ángulos. <M>{r`\mathbb{R}^n`}</M> para cualquier <M>{r`n \in \mathbb{N} \setminus \{0\}`}</M> es un espacio euclidiano.
      </p>
      <p>
        Existen múltiples sistemas coordenados para determinar puntos en alguna variedad, dependiendo de su dimensión. Sin embargo, todo sistema coordenado de <M>{r`n`}</M> dimensiones sastisface lo siguiente:
      </p>
      <ul>
        <li> Se fija arbitrariamente un punto <M>{r`\mathcal{O}`}</M> del espacio como <em>origen</em> del sistema coordenado.</li>
        <li> Cada punto se determina por <M>{r`n`}</M> coordenadas, una <M>{r`n`}</M>-tupla, que se puede entender como un <em>vector posición</em> dirigido desde el origen al punto.</li>
      </ul>
      <p>
        A causa de la segunda propiedad, los espacios euclidianos pueden entenderse de dos maneras: algebraicamente, como conjuntos de puntos, cada uno una <M>{r`n`}</M>-tupla, y geométricamente, como conjuntos de vectores, visualizados como segmentos de recta dirigidos desde el origen a cada punto.
      </p>

      <h4>Orientación de sistemas coordenados</h4>
      <p>
        En los sistemas coordenados de dos y tres dimensiones, es imprescindible definir la orientación del sistema, así sea de forma tácita. Se distingue entre sistemas <em>de mano derecha</em> y <em>de mano izquierda</em>. En la inmensa mayoría de casos, al igual que en el resto de estos apuntes, se utilizan sistemas de mano derecha, por lo que no se menciona explícitamente la orientación del sistema. Sin embargo, en algunas aplicaciones específicas, particularmente en gráficos de computadora, se utilizan sistemas de mano izquierda. A continuación se detalla la diferencia entre ambos.
      </p>
      <p>
        En sistemas coordenados bidimensionales, la distinción radica únicamente en la dirección que se toma como la positiva al medir ángulos. En sistemas tridimensionales, es además relevante la dirección que se toma como positiva para el tercer eje, con respecto a las direcciones positivas de los otros dos.
      </p>
      <p>
        Primero, con respecto a la dirección positiva de mediciones de ángulos:
      </p>
      <ul>
        <li>En un <b>sistema de mano derecha</b>, la dirección positiva es el sentido <b>contrario a las manecillas del reloj</b>. Usando la regla de la mano derecha, si el pulgar apunta en la dirección positiva del eje ortogonal a la rotación, la dirección positiva es aquella en la que es posible doblar los demás dedos de la mano.
        </li>
        <li>En un <b>sistema de mano izquierda</b>, la dirección positiva es el sentido <b>de las manecillas del reloj</b>. Análogamente, usando la regla de la mano izquierda, la dirección positiva es la aquella en la que es posible doblar los dedos de la mano izquierda si el pulgar apunta en la dirección positiva del eje ortogonal a la rotación.</li>
      </ul>
      <p>
        Segundo, para definir la dirección positiva del tercer eje respecto a la de los otros dos, sea el dedo pulgar la dirección positiva del eje <M>{r`x`}</M> y el dedo índice la dirección positiva del eje <M>{r`y`}</M>. Esa convención es hasta ahora independiente de la mano y de su orientación, pues simplemente representa dos ejes ortogonales. Con eso en mente:
      </p>
      <ul>
        <li>En un <b>sistema de mano derecha</b>, la dirección positiva del eje <M>{r`z`}</M> es aquella en la que apunta el dedo corazón (o el anular) cuando está doblado perpendicular a la palma, usando, por supuesto, la mano derecha.</li>
        <li>En un <b>sistema de mano izquierda</b>, la dirección positiva del eje <M>{r`z`}</M> es aquella en la que apunta el dedo corazón cuando está doblado perpendicular a la palma, usando la mano izquierda.</li>
      </ul>

      <Tip>
        Rara vez se menciona la orientación de un sistema coordenado: se presume universalmente que es de mano derecha. En los sistemas coordenados que se estudiarán, esto afecta la dirección del eje <M>{r`z`}</M> y sobretodo la forma en la que se miden los ángulos.
      </Tip>

      <h4>Conversión entre sistemas coordenados</h4>

      <p>
        Dadas coordenadas de un sistema coordenado, siempre es posible expresarlas en términos de otro sistema coordenado, mientras ambos sean de la misma dimensión. Para hacerlo, se utilizan las <em>transformaciones de coordenadas</em>, que son funciones que toman las coordenadas de un punto en un sistema coordenado y devuelven las coordenadas del mismo punto en otro sistema coordenado.
      </p>
      <p>
        En general, una transformación de coordenadas es un campo vectorial <M>{r`\bvec{T}\colon \mathbb{R}^n \to \mathbb{R}^n`}</M> donde <M>{r`n`}</M> es la dimensión de los sistemas coordenados. La forma general de una función que transforma de un sistema coordenado a otro es
        <M block>{r`
          \bvec{T}(\bvec{x}) = (T_1(\bvec{x}), T_2(\bvec{x}), \ldots, T_n(\bvec{x})),
        `}</M>
        donde <M>{r`\bvec{x}`}</M> son las coordenadas del sistema de origen y cada función componente del campo vectorial, <M>{r`F_i`}</M>, transforma las coordenadas del sistema de origen en la <M>{r`i`}</M>-ésima coordenada del sistema coordenado de destino.
      </p>
      <p>
        Para simplificar la notación, frecuentemente se denotan los componentes escalares de la transformación con las mismas letras de las coordenadas a las que transforman. Así pues, si una función de transformación de coordenadas <M>{r`T`}</M> transforma las coordenadas <M>{r`(x, y)`}</M> en <M>{r`(u, v)`}</M>, se denota como
        <M block>{r`
          T(x, y) = (u(x, y), v(x, y)).
        `}</M>
      </p>
      <p>
        Para que se puedan realizar conversiones en ambas direcciones de forma unívoca, las transformaciones de coordenadas deben ser <em>biyectivas</em>, es decir, deben ser: <em>inyectivas</em>, de forma que a cada elemento del dominio se le asigna uno distinto del codominio, y <em>sobreyectivas</em>, de forma que todos los elementos del codominio están cubiertos por esa asignación. Esto garantiza que a cada punto del sistema coordenado de origen le corresponde exactamante un punto del sistema coordenado de destino y viceversa.
      </p>
      <p>
        Para que eso suceda, la derivada de la transformación (que, por ser la transformación un campo vectorial, es la matriz jacobiana de derivadas parciales) debe ser no singular, es decir, su determinante no puede ser cero. Esto garantiza que la transformación sea invertible.
      </p>


      <h3>Coordenadas cartesianas</h3>

      <p>
        El <em>sistema coordenado cartesiano</em> es el sistema coordenado más común. Puede ser usado para representar puntos en cualquier dimensión.
      </p>
      <p>
        En el sistema coordenado cartesiano de <M>{r`n`}</M> dimensiones, se fija el origen <M>{r`\mathcal{O}`}</M> con <M>{r`n`}</M> coordenadas <M>{r`(0, 0,..., 0)`}</M>. A partir de ese punto, se establecen <M>{r`n`}</M> vectores unitarios de base estándar,
        <M block>
          {r`\begin{gather*}
            \bvec{e}_1 = (1,0,0,\ldots,0)\\
            \bvec{e}_2 = (0,1,0,\ldots,0)\\
            \vdots\\
            \bvec{e}_n = (0,0,0,\ldots,1).
          \end{gather*}`}
        </M>
        Los vectores unitarios de base estándar forman un sistema ortonormal, pues la norma de cada vector es unitaria y son ortogonales entre sí.
      </p>
      <p>
        Cuando el sistema coordenado cartesiano se trabaja en <M>{r`\mathbb{R}^{2}`}</M>, los dos vectores unitarios de base estándar tienen notaciones especiales:
        <M block>
          {r`\begin{align*}
            \uvec{i} = (1,0), \qquad \uvec{j} = (0,1).
          \end{align*}`}
        </M>
        Igualmente, cuando se trabaja en <M>{r`\mathbb{R}^{3}`}</M> se tiene:
        <M block>
          {r`\begin{align*}
            \uvec{i} = (1,0,0), \qquad \uvec{j} = (0,1,0),  \qquad \uvec{k} = (0,0,1).
          \end{align*}`}
        </M>
      </p>
      <Notation>
        Los vectores de base estándar en <M>{r`\mathbb{R}^{3}`}</M>se denotan también por <M>{r`\bvec{e}_x`}</M>, <M>{r`\bvec{e}_y`}</M> y <M>{r`\bvec{e}_z`}</M>.
      </Notation>
      <p>
        Se definen <em>ejes cartesianos</em>, que son rectas dirigidas, como el espacio generado por los vectores unitarios de base estándar. Cuando se trabaja en <M>{r`n`}</M> dimensiones, los ejes cartesianos se definen así:
        <M block>
          {r`\begin{gather*}
            x_1 \coloneqq \operatorname{span}(\bvec{e}_1) \\
            x_2 \coloneqq \operatorname{span}(\bvec{e}_2) \\
            \vdots \\
            x_n \coloneqq \operatorname{span}(\bvec{e}_n).
          \end{gather*}`}
        </M>
        En <M>{r`\mathbb{R}^{2}`}</M>, a los ejes se les llama <M>{r`x`}</M> y <M>{r`y`}</M>; en <M>{r`\mathbb{R}^{3}`}</M>, son <M>{r`x`}</M>, <M>{r`y`}</M> y <M>{r`z`}</M>:
        <M block>
          {r`\begin{align*}
            \text{eje } x \coloneqq \operatorname{span}(\uvec{i}) = t(1,0,0), \quad \text{para todo } t \in \mathbb{R}\\
            \text{eje } y \coloneqq \operatorname{span}(\uvec{j}) = t(0,1,0), \quad \text{para todo } t \in \mathbb{R}\\
            \text{eje } z \coloneqq \operatorname{span}(\uvec{k}) = t(0,0,1), \quad \text{para todo } t \in \mathbb{R}.
          \end{align*}`}
        </M>
        Cada eje tiene como dirección la dirección en la que aumentan las coordenadas cartesianas. En la representación convencional del sistema coordenado cartesiano en <M>{r`\mathbb{R}^{2}`}</M>, el eje <M>{r`x`}</M> apunta hacia la derecha y el eje <M>{r`y`}</M> apunta hacia arriba. En la representación bidimensional convencional del sistema coordenado cartesiano en <M>{r`\mathbb{R}^{3}`}</M>, el eje <M>{r`y`}</M> apunta a la derecham el eje <M>{r`z`}</M> apunta hacia arriba y el eje <M>{r`x`}</M> apunta hacia afuera del plano del dibujo.
      </p>
      {/*  TODO FIG: Sistema coordenado cartesiano en <M>{r`\mathbb{R}^{3}`}</M>. */}
      <p>
        En el sistema cartesiano, proyectar un punto sobre el eje <M>{r`x`}</M> resulta en su coordenada cartesiana <M>{r`x`}</M>, proyectar un punto sobre el eje <M>{r`y`}</M> resulta en su coordenada cartesiana <M>{r`y`}</M> y proyectar un punto sobre el eje <M>{r`z`}</M> resulta en su coordenada cartesiana <M>{r`z`}</M>. El punto <M>{r`(a,b,c)`}</M>, de tres dimensiones, se puede escribir como
        <M block>
          {r`a\uvec{i}+b\uvec{j}+c\uvec{k}.`}
        </M>
        El punto <M>{r`\bvec{p} = (p_1,p_2,\ldots p_n)`}</M>, de <M>{r`n`}</M> dimensiones, se puede expresar como
        <M block>
          {r`\bvec{p}=\sum_{i=1}^{n}p_i\bvec{e}_i.`}
        </M>
      </p>

      <h3>Coordenadas polares y cilíndricas</h3>

      <p>
        El <em>sistema coordenado polar</em> utiliza un ángulo y un valor de radio para determinar la posición de un punto en un plano. El <em>sistema coordenado cilíndrico</em> extiende el sistema polar a tres dimensiones, añadiendo una coordenada adicional para la altura del punto.
      </p>

      <h4>Coordenadas polares</h4>

      <p>
        El sistema coordenado polar consiste de un punto de origen <M>{r`\mathcal{O}`}</M> que se denomina <em>polo</em> y de un rayo con punto inicial en <M>{r`\mathcal{O}`}</M> y dirección arbitraria designado <em>eje polar</em>. Cada punto se determina por un par de números <M>{r`(r,\theta)`}</M> denominados <em>coordenadas polares</em>.
      </p>
      <ol>
        <li> El <em>radio polar</em> <M>{r`r`}</M> es la longitud del vector posición, dirigido del polo al punto.</li>
        <li> El <em>ángulo polar</em> <M>{r`\theta`}</M> es el ángulo entre el eje polar y el vector posición, medido desde el eje polar.</li>
      </ol>
      <p>
        Las coordenadas del polo son <M>{r`(0,\theta)`}</M> para cualquier valor de <M>{r`\theta`}</M>.
      </p>

      <p>
        El sentido positivo de <M>{r`\theta`}</M> es el contrario a las manecillas del reloj, por ser, implícitamente, un sistema de mano derecha. Si el eje polar coincide con la dirección positiva del eje <M>{r`x`}</M> de un plano cartesiano, los ángulos se miden igual en ambos sistemas coordenados.
      </p>

      <p>
        El valor de <M>{r`r`}</M> puede ser negativo, lo que indica que el radio va en el sentido opuesto a como iría convencionalmente, es decir, equivale a recorrer media circunferencia adicional, <M>{r`\uppi`}</M> radianes. El punto <M>{r`(-r, \theta)`}</M> es el mismo punto que <M>{r`(r, \theta+\uppi)`}</M>. En general, todo punto en un sistema polar se puede expresar de infinitas maneras:
        <M block>
          {r`(r,\theta) = (-r,\theta+\uppi(2k-1)) = (r,\theta+2k\uppi), \quad \text{para todo } k\in\mathbb{Z}.`}
        </M>
      </p>

      <p>
        Es fácil identificar la equivalencia entre coordenadas polares y coordenadas cartesianas, si ambos sistemas se superponen de forma que el polo coincida con el origen de un plano cartesiano y el eje polar coincida con el eje <M>{r`x`}</M>. Dado un punto con coordenadas cartesianas <M>{r`(x,y)`}</M>,
      </p>
      <ol>
        <li> El radio polar está dado por el Teorema de Pitágoras como <M>{r`r(x, y) = \sqrt{x^2+y^2}`}</M>.</li>
        <li> El ángulo polar se puede obtener por trigonometría simple cuando el punto está en el primer o cuarto cuadrante como <M>{r`\displaystyle \theta=\arctan\frac{y}{x}`}</M>.</li>
      </ol>
      <Warning>
        Si el punto <M>{r`(x,y)`}</M> se encuentra en los cuadrantes II o III del plano cartesiano, la fórmula para el ángulo polar <M>{r`\theta`}</M> será inexacta por la arcotangente. En esos casos debe sumarse <M>{r`\uppi`}</M> radianes a <M>{r`\theta`}</M>.
      </Warning>
      <p>
        De acuerdo con lo anterior, el campo vectorial <M>{r`\bvec{T}\colon \mathbb{R}^2 \to \mathbb{R}^2`}</M> que toma un punto en coordenadas cartesianas y devuelve uno en coordenadas polares está dado por <M>{r`\bvec{T}(x,y) = (r(x,y), \theta(x,y))`}</M>, donde <M>{r`r(x,y) = \sqrt{x^2+y^2}`}</M> y
        <M block>{r`
          \theta(x,y) = \begin{cases}
            \arctan\frac{y}{x} & \text{si } x > 0 \ \land \ y \geq 0, \\
            \arctan\frac{y}{x} + \uppi & \text{si } x < 0, \\
            \arctan\frac{y}{x} + 2\uppi & \text{si } x > 0 \ \land \ y < 0.
          \end{cases}
        `}</M>.
      </p>

      {/* y el ángulo polar que se muestra en la , se pueden hallar el radio y el ángulo. */}

      <p>
        Similarmente, usando trigonometría, se puede establecer la función que transforma cualquier punto con coordenadas polares <M>{r`(r, \theta)`}</M> a coordenadas cartesianas:
        <M block>
          {r`(x(r, \theta), y(r, \theta)) = (r\cos\theta, r\sin\theta).`}
        </M>
      </p>

      <h4>Coordenadas cilíndricas</h4>
      <p>
        El <em>sistema coordenado cilíndrico</em> está cimentado en el sistema coordenado polar. Usa <em>coordenadas cilíndricas</em>, que consisten de una terna ordenada de números <M>{r`(r, \theta, z)`}</M> en donde los primeros dos son las coordenadas polares del punto, que indican la ubicación de la proyección del punto en el plano <M>{r`xy`}</M>, y el último es la coordenada cartesiana <M>{r`z`}</M>, que especifica la altura del punto.
      </p>
      <p>
        Dado un punto <M>{r`P`}</M> con coordenadas cartesianas <M>{r`(x,y,z)`}</M>, sus coordenadas cilíndricas están dadas por:
      </p>
      <ol>
        <li> El radio polar <M>{r`r \geq 0`}</M>, que es el mismo que en coordenadas polares. La justificación para esto es el radio polar es igual a la magnitud de la proyección del vector posición <M>{r`\overrightarrow{0P}`}</M> sobre el plano <M>{r`xy`}</M>. Dicha proyección está dada por <M>{r`\proy_{xy}(\overrightarrow{0P}) = (x, y, 0)`}</M>, por lo que el radio polar es la norma de esa proyección,
          <M block>
            {r`r=\sqrt{x^2+y^2}.`}
          </M>
          <Warning>
            Las coordenadas cilíndricas no admiten valores negativos para el radio polar, a diferencia de las coordenadas polares, en las que están basadas.
          </Warning>
        </li>
        <li> El ángulo polar <M>{r`\theta`}</M>, también el mismo que en coordenadas polares, pues se mide desde el eje <M>{r`x`}</M> hasta la proyección <M>{r`\proy_{xy}(\overrightarrow{0P}) = (x, y, 0)`}</M>.</li>
        <M block>
          {r`\theta=\arctan\frac{y}{x}.`}
        </M>
        <Warning>
          Al igual que en las coordenadas polares, si el punto está sobre el cuadrante II o III del plano <M>{r`xy`}</M>, la fórmula para el ángulo <M>{r`\theta`}</M> es imprecisa y a su resultado se le debe sumar <M>{r`\uppi`}</M> radianes.
        </Warning>
        <li> La <em>altura</em> <M>{r`z`}</M>, igual a la coordenada cartesiana <M>{r`z`}</M>, que es la distancia entre el punto y el plano <M>{r`xy`}</M> (la distancia más corta, medida ortogonal al plano).</li>
      </ol>
      <p>
        Dado un punto con coordenadas cilíndricas <M>{r`(r, \theta, z)`}</M>, se puede convertir a coordenadas cartesianas <M>{r`(x,y,z)`}</M> usando trigonometría:
        <M block>
          {r`\begin{align*}
            x &= r\cos\theta \\
            y &= r\sin\theta \\
            z &= z
          \end{align*}`}
        </M>
      </p>
      <p>
        El sistema coordenado recibe el nombre de <em>cilíndrico</em> porque es particularmente útil para modelar escenarios en los que se presenta <em>simetría cilíndrica</em>, es decir, simetría alrededor de una recta. Las figuras con simetría cilíndrica son invariantes bajo rotaciones alrededor de un eje, verbigracia, cilindros, conos y prismas. El sistema coordenado cilíndrico facilita formular expresiones para describir las siguientes figuras:
      </p>
      <ul>
        <li> Si se fija el radio polar <M>{r`r`}</M> como una constante <M>{r`a`}</M>, es decir el conjunto de puntos <M>{r`\{(r, \theta, z)\colon r=a\}`}</M>, en coordenadas cilíndricas describe un <b>cilindro</b> con radio <M>{r`a`}</M> y altura infinita.</li>

        <li> Si se fija el ángulo polar como <M>{r`\theta = \alpha`}</M>, el conjunto de puntos <M>{r`\{(r, \theta, z)\colon \theta = \alpha\}`}</M> describe un <b>semiplano</b> con inicio el eje <M>{r`z`}</M>.
          <Tip>
            Tal semiplano se puede entender como una puerta cuyas bisagras están sobre el eje <M>{r`z`}</M>.
          </Tip>
        </li>

        <li> Si se fija la altura <M>{r`z = b`}</M>, el conjunto de puntos <M>{r`\{(r, \theta, z)\colon z=b\}`}</M> describe un <b>plano</b> paralelo al plano <M>{r`xy`}</M> que contiene al punto con coordenadas cartesianas <M>{r`(0,0,b)`}</M>. (Igual que sucede en las coordenadas cartesianas). </li>
      </ul>

      <h3>Coordenadas esféricas</h3>

      <p>
        El <em>sistema coordenado esférico</em> es una generalización alternativa del sistema coordenado polar a tres dimensiones, pero no es tan parecida a este como el sistema coordenado cilíndrico. Las <em>coordenadas esféricas</em> consisten de una terna ordenada de números <M>{r`(\rho, \theta, \varphi)`}</M> en donde el primero es la distancia del punto al origen, el segundo es el <em>ángulo polar</em> y el tercero es el <em>ángulo azimutal</em>, que es el ángulo entre el eje <M>{r`z`}</M> y el vector posición.
      </p>

      <p>
        Dado un punto con coordenadas cartesianas <M>{r`(x,y,z)`}</M>, sus coordenadas esféricas están dadas por
      </p>
      <ul>
        <li> El <em>radio</em> <M>{r`\rho \geq 0`}</M>, la distancia del origen al punto.
          <M block>
            {r`\rho = \sqrt{x^2+y^2+z^2}`}
          </M>
        </li>
        <li> El ángulo polar <M>{r`0 \leq \theta`}</M>, el mismo de las coordenadas polares, medido entre el eje cartesiano <M>{r`x`}</M> y la proyección <M>{r`\proy_{xy}(\overrightarrow{0P}) = (x, y, 0)`}</M>.
          <M block>
            {r`\theta = \arctan\frac{y}{x}.`}
          </M>
          <Warning>
            Al igual que en las coordenadas polares, si el punto está sobre el cuadrante II o III del plano <M>{r`xy`}</M>, la fórmula para el ángulo <M>{r`\theta`}</M> es imprecisa y a su resultado se le debe sumar <M>{r`\uppi`}</M> radianes.
          </Warning>
        </li>
        <li> El <em>ángulo azimutal</em> <M>{r`0 \leq \varphi \leq \uppi`}</M>, que mide la distancia desde la dirección positiva del eje <M>{r`z`}</M> hasta el vector posición <M>{r`\overrightarrow{0P}`}</M>.
          <M block>
            {r`\varphi = \arccos\frac{z}{\rho} = \arccos\frac{z}{\sqrt{x^2+y^2+z^2}}.`}
          </M>
          El ángulo azimutal se mide únicamente sobre el semiplano que inicia en el eje <M>{r`z`}</M> y contiene al vector posición. Es por eso que su valor está acotado por <M>{r`0`}</M> y <M>{r`\uppi`}</M>. El ángulo del semiplano con respecto al plano <M>{r`xy`}</M> lo dicta el ángulo polar.
        </li>
      </ul>

      <p>
        El sistema coordenado esférico recibe su nombre por razones análogas a las que dan nombre al cil´ndrico: es útil para modelar figuras con <em>simetría esférica</em>, es decir, simetría alrededor de un punto. Las figuras con simetría esférica son invariantes bajo rotaciones alrededor de un punto, de forma que todos los puntos a cierta distancia de aquel son equivalentes. El sistema coordenado esférico facilita particularmente describir las siguientes figuras:
      </p>
      <ul>
        <li> Si se fija el radio como <M>{r`\rho = a`}</M>, el conjunto de puntos <M>{r`\{(\rho, \theta, \varphi) \colon \rho=a\}`}</M> en coordenadas esféricas generan una esfera con centro en el origen y radio <M>{r`a`}</M>.</li>

        <li> Al igual que en coordenadas esféricas, si se fija el ángulo polar como <M>{r`\theta = \alpha`}</M>, se genera un semiplano con inicio el eje <M>{r`z`}</M>.</li>

        <li> Si se fija el ángulo azimutal como <M>{r`\varphi = \alpha`}</M>, el conjunto de puntos <M>{r`\{(\rho, \theta, \varphi)\colon \varphi = \alpha\}`}</M> genera un cono con eje central el eje cartesiano <M>{r`z`}</M> y altura infinita.</li>
      </ul>

      <p>
        Dado un punto con coordenadas esféricas <M>{r`(\rho, \theta, \varphi)`}</M >, se puede convertir a coordenadas cartesianas <M>{r`(x,y,z)`}</M> usando, nuevamente, trigonometría:
        <M block>
          {r`\begin{align*}
          x &= \rho \cos\theta \sin\varphi \\
          y &= \rho \sin\theta \sin\varphi \\
          z &= \rho \cos\varphi
        \end{align*}`}
        </M>
      </p>
      <p>
        Se puede relacionar el radio polar <M>{r`r`}</M>, de las coordenadas polares y cilíndricas, con el radio <M>{r`\rho`}</M> de las coordenadas esféricas como <M block>
          {r`r=\rho \sin\varphi.`}
        </M>
      </p>

      <Tip>
        Las dos diferencias entre las coordenadas cilíndricas y las esféricas son: primero, en las cilíndricas se mide el radio polar <M>{r`r`}</M> sobre el plano <M>{r`xy`}</M>, mientras que en las esféricas el radio <M>{r`rho`}</M> desde origen directamente al punto; segundo, la tercera coordenada de las cilíndricas es una distancia, la altura, mientras que la tercera coordenada de las esféricas es el ángulo azimutal.
      </Tip>

      <h4>Coordenadas geográficas</h4>

      <p>
        Las <em>coordenadas geográficas</em>, con las que se miden las posiciones en la Tierra, son un caso especial de las coordenadas esféricas. Se utilizan dos ángulos, la <em>latitud</em> y la <em>longitud</em>, y una distancia, la <em>altura</em>, para determinar la posición de un punto. La altura se puede omitir si el punto está en la superficie terrestre. Esto no es propiamente un sistema coordenado en el sentido matemático, pero es probablemente el sistema coordenado más cotidiano, por lo cual lo incluyo.
      </p>
      <p>
        Se toma el eje de rotación de la Tierra como el eje cartesiano <M>{r`z`}</M>, de forma que la <em>línea del Ecuador</em>, que es, por definición el, la circunferencia de diámetro máximo ortogonal al eje de rotación, corresponde al plano <M>{r`xy`}</M>. Con eso:
      </p>
      <ol>
        <li>La <em>latitud</em> geográfica corresponde a una transformación del ángulo azimutal. Esta se mide desde la línea del ecuador, el plano <M>{r`xy`}</M>, en lugar que desde el eje de rotación, el eje <M>{r`z`}</M>. Ergo, la latitud corresponde a <M>{r`\abs{\frac{\uppi}{2} - \varphi}`}</M> y se denomina <em>latitud norte</em> cuando <M>{r`\frac{\uppi}{2} - \varphi > 0`}</M> y <em>latitud sur</em> cuando <M>{r`\frac{\uppi}{2} - \varphi < 0`}</M>.</li>
        <li>La <em>longitud</em> geográfica corresponde al ángulo polar, con la diferencia de que es siempre positiva, <M>{r`\abs{\theta}`}</M> y se denomina <em>longitud este</em> si <M>{r`\theta > 0`}</M> y <em>longitud oeste</em> si <M>{r`\theta > 0`}</M>. Si <M>{r`\theta = 0`}</M>, la longitud es <M>{r`0`}</M> y corresponde al <em>meridiano de Greenwich</em>, que es el meridiano de referencia y por ende indica la posición del eje polar, o el eje <M>{r`x`}</M> en el sistema cartesiano.</li>
        <li>La altura geográfica corresponde a un corrimiento del radio <M>{r`\rho`}</M>, pues no se mide la altura con respecto al centro de la Tierra, que es el equivalente al origen, sino con respecto al nivel del mar. Se expresa con un valor en metros, la unidad de distancia del Sistema Internacional, seguida de la abreviatura s. n. m., o sea, m s. n. m. (metros sobre el nivel del mar).</li>
      </ol>
      <p>
        Es importante aclarar que los ángulos de las coordenadas geográficas no se miden en unidades absolutas como radianes, sino en un sistema sexagesimal constituido por grados (<M>{r`°`}</M>), minutos angulares (<M>{r`^{\prime}`}</M>) y segundos angulares (<M>{r`^{\prime\prime}`}</M>). Los grados se definen de forma tal que la circunferencia de la Tierra se divide en <M>{r`360°`}</M>. Un minuto ángular equivale a la sexagésima parte de un grado, <M>{r`1° = 60^{\prime}`}</M> y un segundo ángular equivale a la sexagésima parte de un minuto ángular, <M>{r`1^{\prime} = 60^{\prime\prime}`}</M>. Las mediciones inferiores al segundo angular se realizan con un sistema decimal.
      </p>

      <h3>Teorema del cambio de variables</h3>

      <p>
        El <em>teorema del cambio de variables</em> permite expresar una integral dada en términos de un sistema coordenado en términos de otro sistema coordenado.
      </p>
      <p>
        Se estudió anteriormente que es posible pasar de un sistema coordenado a otro de la misma dimensión haciendo uso de una función de transformación, que es un campo vectorial. No obstante, cuando se cambia de sistema coordenado, al realizar la transformación, puede que se modifique la magnitud del espacio sobre el cual se integra. Es decir: en transformaciones bidimensionales, la transformación puede modificar el área de la región de integración original; en transformaciones tridimensionales, puede distorsionarse su volumen.
      </p>
      <p>
        Es posible demostrar que una medida de la distorsión de la región está dado por el valor absoluto del jacobiano de la función de transformación de coordenadas. Por ende, el teorema de cambio de variables requiere de la función de transformación y de su jacobiano para poder realizar la transformación de la integral.
      </p>

      <Theorem name="Teorema de cambio de variables">
        Sean <M>{r`W, R \subseteq \mathbb{R}^n`}</M> regiones en el espacio. Sea <M>{r`\bvec{T}\colon W \to R`}</M> una función de transformación de coordenadas biyectiva y diferenciable, que transforma las coordenadas <M>{r`\bvec{x}`}</M> en <M>{r`\bvec{u}`}</M>. Si <M>{r`f\colon R \to \mathbb{R}`}</M> es integrable en <M>{r`R`}</M>, entonces
        <M block>{r`
          \int_{R} f(\bvec{x}) \: \mathrm{d}^n\bvec{x} = \int_{W} f(\bvec{x}(\bvec{u})) \abs{\parder{\bvec{x}}{\bvec{u}}} \: \mathrm{d}^n\bvec{u}.
        `}</M>
      </Theorem>

      <p>
        Usualmente el teorema de cambio de variables se aplica en dos o tres dimensiones. En dos dimensiones, el teorema se puede expresar como
        <M block>{r`
          \int_{R} f(x,y) \: \mathrm{d}x \: \mathrm{d}y = \int_{W} f(x(u,v), y(u,v)) \abs{\parder{(x,y)}{(u,v)}} \: \mathrm{d}u \: \mathrm{d}v.
        `}</M>
      </p>

      <p>
        Para aplicar el teorema con los sitemas coordenados convencionales, conviene conocer de antemano los jacobianos coorespondientes.
      </p>
      <ul>
        <li>Para transformar de coordenadas cartesianas a coordenadas polares y cilíndricas, el valor absoluto del jacobiano es
          <M block >{r`
            \abs{\parder{(x,y)}{(r, \theta)}} = \abs{\parder{(x,y,z)}{(r, \theta, z)}} = r.
          `}</M></li>
        <li>Para transformar de coordenadas cartesianas a coordenadas esféricas, el valor absoluto del jacobiano es
          <M block>{r`
          \abs{\parder{(x,y,z)}{(\rho, \theta, \varphi)}} = \abs{- \rho^2 \sin\varphi} = \rho^2 \sin\varphi.
          `}</M></li>
      </ul>
      <p>
        Para cerrar, no se debe estar restringido a sistemas coordenados conocidos a la hora de elegir la transformación a realizar. Es viable realizar transformaciones a sistemas coordenados arbitrarios, siempre y cuando se conozca la función de transformación y su jacobiano. De hecho, muchas integrales se simplifican notablemente haciendo transformaciones simples a extensiones o compresiones de los sistemas cartesianos. Por ejemplo, un cambio de variables válido podría ser
        <M block>{r`
          \begin{align*}
            x &= u - v, \\
            y &= 2u - v,
          \end{align*}
        `}</M>
        donde el jacobiano es <M>{r`\abs{\parder{(x,y)}{(u,v)}} = 1`}</M>.
      </p>

    </Section >

    <Section title="Aplicaciones de las integrales múltiples">
      <p>
        En esta sección se resumen brevemente algunas de las aplicaciones de la integración múltiple.
      </p>

      <h3>Valor promedio</h3>
      <p>
        Dada una sucesión de valores discretos, <M>{r`x_1, x_2,\dots, x_n`}</M>, el <em>valor promedio</em> de la sucesión es el valor que se obtiene al sumar todos los valores y dividir el resultado entre el número de valores, es decir,
        <M block>{r`
          \frac{1}{n}\sum_{i=1}^{n}x_i.
        `}</M>
        Similarmente, dados valores continuos modelados por una función escalar de una variable, <M>{r`f(x)`}</M>, el valor promedio de la función en un intervalo <M>{r`[a,b]`}</M>, denotado por <M>{r`\avg{f}`}</M>, es el valor que se obtiene al dividir la integral de la función en el intervalo entre la longitud del intervalo:
        <M block>{r`
          \avg{f} = \frac{1}{b-a}\int_{a}^{b}f(x) \: \mathrm{d}x.
        `}</M>
        Es posible extrapolar eso a funciones escalares de múltiples variables. Dada una función escalar <M>{r`f(x)`}</M> de <M>{r`n`}</M> variables, el valor promedio de la función en una región <M>{r`R \subseteq \mathbb{R}^n`}</M> está dado por la integral de la función en la región dividida por el hipervolumen de la región:
        <M block>{r`
          \avg{f} = \dfrac{\int_{R} f(\bvec{x}) \: \mathrm{d}^n\bvec{x}}{\int_{R} \mathrm{d}^n\bvec{x}}.
        `}</M>
      </p>

      <h3>Centro de masa</h3>

      <p>
        El centro de masa es el punto de todo cuerpo o sistema que resulta de ponderar la posición de cada partícula del cuerpo por su masa. Es útil porque permite manipular matemáticamente el objeto como si toda su masa estuviera concentrada en el centro de masa, lo cual posibilita tratar el objeto como una masa puntual. Es decir, para toda fuerza uniforme que actúe sobre el cuerpo o sistema, se puede considerar que actúa exclusivamente sobre su centro de masa. (Por ejemplo, cuando la fuerza de gravedad actúa sobre un cuerpo en caída libre, se puede considerar que actúa en el centro de masa del cuerpo y tratarlo como una masa puntual).
      </p>
      <p>
        Más aún, al estudiar el interior del cuerpo o sistema, se sabe que si se realiza una fuerza sobre el objeto en su centro de masa, no presentará rotación, independientemente de su forma. Contrariamente, si se realiza una fuerza en un punto distinto al centro de masa, el objeto rotará alrededor de su centro de masa.
      </p>
      <p>
        Considérese un sistema de <M>{r`n`}</M> cuerpos puntuales con masas <M>{r`{m_i}_{1\leq i\leq n}`}</M> dispuestos en el eje <M>{r`x`}</M>, en los valores <M>{r`{x_i}_{1\leq i\leq n}`}</M>. El <em>centro de masa</em> del sistema, denotado por <M>{r`\bar{x}`}</M>, es el punto en el eje <M>{r`x`}</M> que se encuentra en la posición promedio de los cuerpos, ponderada por sus masas:
        <M block>{r`
          \bar{x} = \frac{\sum_{i=1}^{n}m_ix_i}{\sum_{i=1}^{n}m_i}.
        `}</M>
        Si se tiene un cuerpo que se puede aproximar a una figura unidimensional, tal como una varilla lo suficientemente larga con relación a su diámetro como para que su masa se pueda considerar distribuida en una línea, el centro de masa del cuerpo se puede calcular de forma similar. Dada una varilla de longitud <M>{r`L`}</M> cuya densidad lineal de masa está dada por la función <M>{r`\rho`}</M> con respecto a la posición en la varilla, el centro de masa de la varilla está en la posición promedio de la varilla, ponderada por la densidad de masa:
        <M block>{r`
          \bar{x} = \frac{\int_{L} x\rho(x) \: \mathrm{d}x}{\int_{L} \rho(x) \: \mathrm{d}x}.
        `}</M>
        Este resultado se puede generalizar a cuerpos bidimensionales y tridimensionales, en los que se pondera la posición promedio por la densidad de masa. Para una placa relativamente plana, que se puede aproximar a una figura bidimensional, las coordenadas del centro de masa están dadas por
        <M block>{r`
            \bar{x} = \frac{\int_{D} x\rho(x,y) \: \mathrm{d}x \: \mathrm{d}y}{\int_{D} \rho(x,y) \: \mathrm{d}x \: \mathrm{d}y} \qquad \text{y} \qquad \bar{y} = \frac{\int_{D} y\rho(x,y) \: \mathrm{d}x \: \mathrm{d}y}{\int_{D} \rho(x,y) \: \mathrm{d}x \: \mathrm{d}y}.
        `}</M>
        Por último, para un cuerpo tridimensional, las coordenadas del centro de masa están dadas por
        <M block>{r`
            \bar{x} = \frac{\int_{W} x\rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}{\int_{W} \rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}, \quad \bar{y} = \frac{\int_{W} y\rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}{\int_{W} \rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}, \quad \text{y} \quad \bar{z} = \frac{\int_{W} z\rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}{\int_{W} \rho(x,y,z) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z}.
        `}</M>
      </p>

      <h3>Momento de inercia</h3>
      <p>
        El momento de inercia es una medida de la resistencia de un cuerpo a rotar alrededor de un eje. Es una medida similar a la masa, que mide la resistencia de un cuerpo al movimiento, con la diferencia de que el momento de inercia contempla también la forma del cuerpo: dependiendo de la forma de un cuerpo, es más fácil o difícil hacerlo girar.
      </p>
      <p>
        Dado un cuerpo cuya forma describe la región tridimensional <M>{r`W \subseteq \mathbb{R}^3`}</M> y suponiendo que tiene densidad uniforme <M>{r`\rho`}</M>, el <em>momento de inercia</em> del cuerpo con respecto al eje <M>{r`x`}</M> está dado por
        <M block>{r`
          I_x = \int_{W} \rho (y^2 + z^2) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z.
        `}</M>
        De forma similar, el momento de inercia con respecto al eje <M>{r`y`}</M> está dado por
        <M block>{r`
          I_y = \int_{W} \rho (x^2 + z^2) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z.
        `}</M>
        Y el momento de inercia con respecto al eje <M>{r`z`}</M> está dado por
        <M block>{r`
          I_z = \int_{W} \rho (x^2 + y^2) \: \mathrm{d}x \: \mathrm{d}y \: \mathrm{d}z.
        `}</M>
      </p>

    </Section>

    {/* <h3>Regla de integración de Leibniz</h3> */}
    {/* Richard Feynman, nobel laurate, in his best-selling memoir Surely You're Joking, Mr. Feynman!
      
      One thing I never did learn was contour integration. I had learned to do integrals by various methods shown in a book that my high school physics teacher Mr. Bader had given me. One day he told me to stay after class. "Feynman," he said, "you talk too much and you make too much noise. I know why. You're bored. So I'm going to give you a book. You go up there in the back, in the corner, and study this book, and when you know everything that's in this book, you can talk again." So every physics class, I paid no attention to what was going on with Pascal's Law, or whatever they were doing. I was up in the back with this book: "Advanced Calculus", by Woods. Bader knew I had studied "Calculus for the Practical Man" a little bit, so he gave me the real works—it was for a junior or senior course in college. It had Fourier series, Bessel functions, determinants, elliptic functions—all kinds of wonderful stuff that I didn't know anything about. That book also showed how to differentiate parameters under the integral sign—it's a certain operation. It turns out that's not taught very much in the universities; they don't emphasize it. But I caught on how to use that method, and I used that one damn tool again and again. So because I was self-taught using that book, I had peculiar methods of doing integrals. The result was, when guys at MIT or Princeton had trouble doing a certain integral, it was because they couldn't do it with the standard methods they had learned in school. If it was contour integration, they would have found it; if it was a simple series expansion, they would have found it. Then I come along and try differentiating under the integral sign, and often it worked. So I got a great reputation for doing integrals, only because my box of tools was different from everybody else's, and they had tried all their tools on it before giving the problem to me.*/}

  </NoteDocument >
);

export default CalculoVectorial;