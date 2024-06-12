import { Definition, Example, Theorem } from "@/components/notes/environments/Boxes";
import { Notation, Tip, Warning } from "@/components/notes/environments/StickyNotes";
import NoteDocument from "@/components/notes/NoteDocument";
import M, { r } from "@/math/LaTeX";

const CalculoVectorial = () => (
  <NoteDocument>

    <h1>Cálculo Vectorial</h1>

    <h2>Funciones con valores reales</h2>

    <p>
      Una función es una regla que asigna un elemento a otro específico, mas nunca asigna al mismo elemento dos distintos.
    </p>
    <p>
      En las funciones con valores reales, dichos elementos pueden ser tanto escalares <M>{r`x \in \mathbb{R}`}</M> como vectores <M>{r`\bvec{x}\in\mathbb{R}^{n}`}</M>, con <M>{r`n \in \mathbb{N} \setminus \{0, 1\}`}</M>. Ergo, toda <em>función con valores reales</em> tiene la forma <M>{r`f\colon A\subseteq\mathbb{R}^{m}\to\mathbb{R}^{n}`}</M>. A cada elemento del conjunto <M>{r`A=\dom f`}</M>, que puede ser un vector o escalar dependiendo del valor de <M>{r`m \in \mathbb{N} \setminus \{0\}`}</M>, le corresponde un único elemento <M>{r`f(\bvec{x}) \in \ran f \subseteq \mathbb{R}^{n}`}</M>, vector o escalar dependiendo de <M>{r`n \in \mathbb{N} \setminus \{0\}`}</M>. Las funciones con valores reales se clasifican de acuerdo a qué son sus elementos.
    </p>

    <Definition concept="Función escalar" id="funcion_escalar">
      Una <em>función escalar</em> <M>{r`f`}</M> es una función de forma <M>{r`f\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}`}</M> donde <M>{r`m \in \mathbb{N} \setminus \{0\}`}</M>, tal que los elementos en su rango son escalares.
    </Definition>

    <Definition concept="Función vectorial" id="funcion_vectorial">
      Una <em>función vectorial</em> <M>{r`\bvec{F}`}</M> es una función de de forma <M>{r`\bvec{F}\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> donde <M>{r`m \in \mathbb{N} \setminus \{0\}`}</M> y <M>{r`n \in \mathbb{N} \setminus \{0,1\}`}</M>, tal que los elementos en su rango son vectores.
    </Definition>

    <p>
      Una función vectorial de forma <M>{r`\bvec{F}\colon A \subseteq \mathbb{R}^{m}\to \mathbb{R}^{n}`}</M>, recibe un escalar o un vector elemento de <M>{r`\mathbb{R}^{m}`}</M> y tiene como imagen un vector <M>{r`\bvec{F}(\bvec{x}) \in \mathbb{R}^{n}`}</M>. Por eso, se puede expresar una función vectorial como un vector con <M>{r`n`}</M> funciones escalares,
      <M block>
        {r`\bvec{F}=(F_1,F_2,\ldots,F_n).`}
      </M>
    </p>

    <Notation>
      Las funciones escalares se denotan por letras minúsculas, usualmente las letras <M>{r`f`}</M>, <M>{r`g`}</M> y <M>{r`h`}</M>. Las funciones vectoriales se denotan por letras mayúsculas en negrilla,  usualmente las letras <M>{r`\bvec{F}`}</M>, <M>{r`\bvec{G}`}</M> y <M>{r`\bvec{H}`}</M>.
    </Notation>

    <Definition concept="Función de una variable">
      Una <em>función de una variable</em> <M>{r`f`}</M> es una función de forma <M>{r`f\colon A\subseteq\mathbb{R}\to \mathbb{R}^{n}`}</M>, tal que los elementos en su dominio son escalares.
    </Definition>

    <Definition concept="Función de múltiples variables">
      Una <em>función de múltiples variables</em> <M>{r`f`}</M> es una función de forma <M>{r`f\colon A\subseteq\mathbb{R}^{m}\to \mathbb{R}^{n}`}</M> donde <M>{r`m>1`}</M>, tal que los elementos en su dominio son vectores.
    </Definition>
    <p>
      Una función de una variable puede ser escalar o vectorial. Lo mismo sucede para una función de múltiples variables. En las definiciones se denotan como si fueran funciones escalares, pero bien podrían haberse denotado como funciones vectoriales. Así pues, existen funciones escalares de una o varias variables y funciones vectoriales de una o varias variables. Probablemente, las funciones que ha estudiado hasta el momento son funciones escalares de una variable.
    </p>

    <Definition concept="Campo vectorial" id="campo_vectorial">
      Un campo vectorial <M>{r`\bvec{F}`}</M> es una función vectorial de múltiples variables.
    </Definition>
    <p>
      De acuerdo con la definición anterior, un campo vectorial tiene la forma <M>{r`\bvec{F}\colon A\subseteq\mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> donde <M>{r`m,n \in \mathbb{N} \setminus \{0,1\}`}</M>, tal que los elementos en su dominio y rango son vectores: recibe un vector <M>{r`\bvec{x}\in \mathbb{R}^{m}`}</M> y tiene como imagen un vector <M>{r`\bvec{F}(\bvec{x}) \in \mathbb{R}^{n}`}</M>. Como es una función vectorial, se puede expresar de forma
      <M block>
        {r`
	\bvec{F}=(F_1,F_2,\ldots,F_n)
`}
      </M>
      y se evalúa de la siguiente manera:
      <M block>
        {r`\begin{gather*}
	\bvec{F}(\bvec{x})=(F_1(\bvec{x}),F_2(\bvec{x}),\ldots,F_n(\bvec{x}))\\
	\bvec{F}(x_1,x_2,\ldots,x_m)=(F_1(x_1,x_2,\ldots,x_m),F_2(x_1,x_2,\ldots,x_m),\ldots,F_n(x_1,x_2,\ldots,x_m)).
\end{gather*}`}
      </M>
    </p>

    <Example title="Funciones escalares y vectoriales">
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

    <Definition concept="Gráfica de una función escalar" id="grafica_funcion_escalar">
      Dada una función escalar <M>{r`f\colon A\subseteq\mathbb{R}^{n}\to\mathbb{R}`}</M>, su <em>gráfica</em> es el conjunto de los puntos <M>{r`(x_1,x_2,\ldots,x_n,f(x_1,x_2,\ldots,x_n))`}</M> para todo <M>{r`\bvec{x}\in A`}</M>. Definido por compresión:
      <M block>
        {r`\text{gráfica } f = \set{(x_1,x_2,\ldots,x_n,f(x_1,x_2,\ldots,x_n)) \in \mathbb{R}^{n+1} \mid (x_1,x_2,\ldots,x_n) \in A}`}
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
        {r`\text{conjunto de nivel de } f \text{ en } c = \{\bvec{x} \in A\mid f(\bvec{x})=c\} \subseteq \mathbb{R}^{n}`}
      </M>
    </Definition>
    <p>
      En funciones escalares de tres variables los conjuntos de nivel son subconjuntos de <M>{r`\mathbb{R}^{3}`}</M > y se denominan <em>superficies de nivel</em >. Similarmente, en funciones escalares de dos variables los conjuntos de nivel se llaman <em> curvas de nivel</em> por ser subconjuntos de <M>{r`\mathbb{R}^{2}`}</M >.
    </p>

    <h4> Gráficas de funciones escalares de dos variables</h4 >
    <p>
      Se estudian con más especificidad las gráficas de funciones escalares de dos variables, debido a que, por ser subconjuntos de <M>{r`\mathbb{R}^{3}`}</M>, se pueden visualizar en el espacio tridimensional y dibujar en el plano. Para todas las demás funciones escalares de múltiples variables, es complicado siquiera imaginar cómo se ven sus gráficas.
    </p>
    <p>
      Cada curva de nivel de una función definida en <M>{r`\mathbb{R}^{2}`}</M >, de forma <M>{r`f(x, y) = z`}</M>, se obtiene asignándole un valor constante <M>{r`c \in \mathbb{R}`}</M > a la variable <M>{r`z`}</M>. Así, toda curva de nivel es la intersección entre la superficie que es gráfica de la función y el plano <M>{r`z=c`}</M>, por lo que son paralelas al plano <M>{r`xy`}</M >.
    </p>
    <p>
      Tiene sentido entonces pensar en las curvas de nivel como "rebanadas horizontales" de la superficie. Al unir todas las curvas de nivel se obtiene la gráfica de la función. Análogamente, tiene sentido pensar también en "rebanadas verticales" de la superficie, que son las <em>secciones</em> de la gráfica.
    </p>
    < Definition concept="Sección">
      Sea <M>{r`f\colon A\subseteq\mathbb{R}^{2}\to\mathbb{R}`}</M > una función escalar de dos variables, una < em > sección</em > de la gráfica de <M>{r`f`}</M > es la intersección de la gráfica con un plano vertical.
    </Definition >
    <p>
      Las secciones se pueden obtener de dos maneras: o asignándole un valor constante a la variable <M>{r`x`}</M >, para obtener una sección paralela al plano <M>{r`yz`}</M >, o asignándole un valor constante a la variable <M>{r`y`}</M >, obteniendo una sección paralela al plano <M>{r`xz`}</M >. Si se establece <M>{r`x=a`}</M >, la sección obtenida será la intersección entre ese plano y la superficie; análogamente, al fijar <M>{r`y=b`}</M >, la sección obtenida es la intersección entre la superficie y el plano <M>{r`y=b`}</M >.
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
      En las figuras se muestran algunas imágenes del proceso de graficación del paraboloide de revolución <M>{r`f(x,y)=x^2+y^2`}</M >.
    </p>
    Paraboloide hiperbólico(silla de montar): <M>{r`x^2-y^2`}</M> % Ej 4 p. 83 Marsden y tromba 
    */}

    <h2>Límites de múltiples variables</h2>

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
      Al igual que la distancia entre dos valores <M>{`a, b \in \mathbb{R}`}</M>se puede expresar matemáticamente por <M>|a-b|</M> o por <M>|b-a|</M>, la distancia entre dos puntos <M>{r`\bvec{v}, \bvec{w} \in \mathbb{R}^{n}`}</M> se puede expresar por <M>{r`\norm{\bvec{v}-\bvec{w}}`}</M> o por <M>{r`\norm{\bvec{w}-\bvec{v}}`}</M>. Es conveniente leer <M>{r`\norm{\bvec{v}-\bvec{w}}`}</M> como "la distancia entre <M>{r`\bvec{v}`}</M> y <M>{r`\bvec{w}`}</M>".
    </Tip>

    <p>
      Se puede definir un conjunto de puntos a partir de un punto específico, que contenga a todos los puntos en <M>{r`\mathbb{R}^{n}`}</M> cuya distancia al punto dado sea estrictamente menor a un determinado valor.
    </p>

    <Definition concept="Entorno">
      Sea <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}_{>0}`}</M> un escalar. Un <em>entorno</em> con centro en <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> se denota por <M>{r`B_{\varepsilon}(\bvec{v})`}</M> y es el conjunto dado por
      <M block>
        {r`B_{\varepsilon}(\bvec{v}) = \{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
      </M>
    </Definition>

    <p>
      La interpretación geométrica de un entorno depende de <M>{r`n`}</M>. Para <M>{r`n=1`}</M>, el entorno <M>{r`B_{\varepsilon}(v)`}</M> es el intervalo abierto <M>{r`(v-\varepsilon,v+\varepsilon)`}</M>. Para <M>{r`n=2`}</M>, es un círculo con centro <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> que no incluye su circunferencia. A eso se le denomina <em>disco abierto</em>.
    </p>

    <Definition concept="Disco abierto">
      Sea <M>{r`\bvec{v}\in\mathbb{R}^{2}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Un <em>disco abierto</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`\bvec{v}`}</M> es un entorno en <M>{r`\mathbb{R}^{2}`}</M> de la forma
      <M block>
        {r`B_\varepsilon(\bvec{v})=\{\bvec{x}\in\mathbb{R}^{2}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
      </M>
      Si <M>{r`\bvec{v}=(v_x,v_y)`}</M>, el disco abierto se describe en coordenadas cartesianas como
      <M block>
        {r`B_\varepsilon(v_x,v_y)=\{(x,y)\colon (x-v_x)^2+(y-v_y)^2<\varepsilon^2\}.`}
      </M>
    </Definition>

    <p>
      Para <M>{r`n=3`}</M>, el conjunto es el interior de una esfera con centro <M>{r`\bvec{v}`}</M> y radio <M>{r`\varepsilon`}</M> excluyendo su borde.
    </p>

    <Definition concept="Bola abierta">
      Sea <M>{r`\bvec{v}\in\mathbb{R}^{3}`}</M> un punto y <M>{r`\varepsilon \in \mathbb{R}`}</M> un escalar tal que <M>{r`\varepsilon>0`}</M>. Una <em>bola abierta</em> con radio <M>{r`\varepsilon`}</M> y centro en <M>{r`(\bvec{v})`}</M> es un entorno en <M>{r`\mathbb{R}^{3}`}</M> de la forma
      <M block>
        {r`B_\varepsilon(\bvec{v})=\{\bvec{x}\in\mathbb{R}^{3}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}.`}
      </M>
      Si <M>{r`\bvec{v}=(v_x,v_y,v_z)`}</M>, la bola abierta se describe en coordenadas cartesianas como
      <M block>
        {r`B_\varepsilon(v_x,v_y)=\{(x,y,z)\colon (x-v_x)^2+(y-v_y)^2+(z-v_z)^2<\varepsilon^2\}.`}
      </M>
    </Definition>

    <p>
      A partir de un entorno, se define un conjunto abierto.
    </p>

    <Definition concept="Conjunto abierto">
      <M>{r`U\subseteq \mathbb{R}^{n}`}</M> es un <em>conjunto abierto</em> si para todo punto <M>{r`\bvec{v}\in U`}</M> existe un entorno centrado en ese punto con radio <M>{r`\varepsilon \in \mathbb{R}_{>0}`}</M>.
      <M block>
        {r`\{\bvec{x}\in\mathbb{R}^{n}\colon\norm{\bvec{x}-\bvec{v}} < \varepsilon\}\subseteq U.`}
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

    <Definition concept="Vecindad de un punto" id="vecindad">
      Sea <M>{r`\bvec{v}\in\mathbb{R}^{n}`}</M>, una <em>vecindad</em> de <M>{r`\bvec{v}`}</M> es cualquier conjunto abierto <M>{r`U`}</M> al que pertenezca <M>{r`\bvec{v}`}</M>.
    </Definition>

    <p>
      Un punto <M>{r`\bvec{v}\in U`}</M> es un punto frontera de <M>{r`U\subset \mathbb{R}^{n}`}</M> si para todo <M>{r`\varepsilon >0`}</M>, todas sus vecindades intersecan a <M>{r`U`}</M> e intersecan a <M>{r`U^\complement`}</M>. Todos los puntos frontera forman lo que intuitivamente es el borde de <M>{r`U`}</M>.
    </p>

    <Definition concept="Frontera de un conjunto" id="frontera">
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
    <Definition concept="Entorno cerrado" id="entorno_cerrado">
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

    <Definition concept="Disco cerrado" id="disco_cerrado">
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

    <Definition concept="Bola cerrada" id="bola_cerrada">
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
    <Definition concept="Conjunto cerrado" id="conjunto_cerrado">
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

    <Definition concept="Conjunto acotado" id="conjunto_acotado">
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
    <Definition concept="Compacto" id="compacto">
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
    <Definition concept="Límite de múltiples variables" id="limite_varias_variables">
      Dado un conjunto abierto <M>{r`U\subseteq \mathbb{R}^{n}`}</M>, una función escalar de múltiples variables <M>{r`f\colon U \to\mathbb{R}^{m}`}</M> y vectores <M>{r`\bvec{u} \in U \cup \partial U`}</M> y <M>{r`\bvec{v}\in\mathbb{R}^{m}`}</M>. El <em>límite</em> cuando <M>{r`\bvec{x}`}</M> tiende a <M>{r`\bvec{u}`}</M> se define como
      <M block>
        {r`\Big(\lim_{\bvec{x}\to \bvec{u}} f(\bvec{x}) = \bvec{v}\Big) \iff \Big(\forall \varepsilon \in \mathbb{R}_{>0} \ \exists \delta \in \mathbb{R}_{>0} \colon 0 < \norm{\bvec{x}-\bvec{u}} < \delta \implies \norm{f(\bvec{x})-\bvec{v}}< \varepsilon, \forall \bvec{x} \in U \Big).`}
      </M>
    </Definition>

    <h3>Continuidad en varias variables</h3>
    <p>
      También se generaliza el concepto de continuidad para funciones de múltiples variables.
    </p>
    <Definition concept="Continuidad en varias variables" id="continuidad_varias_variables">
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
      Es posible y es el último recurso. Hay que dominar la definición formal de límite.
    </p>

    {/* 
<h4>Propiedades de los límites de múltiples variables</h4> \label{sssec:propiedades_limites_varias}

Las propiedades de los límites de múltiples variables son análogas a las propiedades de los límites de una variable. Sean <M>{r`\bvec{F},\bvec{G}\colon U \subseteq \mathbb{R}^{m} \to \mathbb{R}^{n}`}</M> funciones vectoriales (se podrían tomar también ) donde <M>{r`U`}</M> es abierto y sea <M>{r`\bvec{v} \in U \cup \partial U`}</M>. Suponiendo que todos los límites a continuación existen, satisfacen las siguientes leyes: 
 
\begin{longtable}{lp{\textwidth/2-1.8cm}p{\textwidth/2}}
	\rule[1ex]{0pt}{2.5ex}i.&Límite de una constante: &<M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}}a=a`}</M>. \\
	\rule[1ex]{0pt}{2.5ex}ii.&Límite de una variable: &<M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} \bvec{x} = \bvec{v}`}</M>. \\
	\rule[1ex]{0pt}{2.5ex}iii.&Propiedad homogénea del límite: &<M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}}(c \cdot \bvec{F}(\bvec{x})) = c \lim_{\bvec{x}\to\bvec{v}} \bvec{F}(\bvec{x}) `}</M>. \\
	\rule[1ex]{0pt}{2.5ex}iv.&Propiedad de linealidad del límite: &<M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} (\bvec{F}(\bvec{x}) \pm \bvec{G}(\bvec{x}))= \lim_{\bvec{x}\to\bvec{v}} \bvec{F}(\bvec{x}) \pm \lim_{\bvec{x}\to\bvec{v}} \bvec{G}(\bvec{x})`}</M>. \\
	\rule[1ex]{0pt}{2.5ex}v.&Límite del producto punto: &<M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} (\bvec{F}(\bvec{x}) \cdot \bvec{G}(\bvec{x})) = \lim_{\bvec{x}\to\bvec{v}} \bvec{F}(\bvec{x}) \cdot \lim_{\bvec{x}\to\bvec{v}} \bvec{G}(\bvec{x}) `}</M>. \\
	\rule[1ex]{0pt}{3.5ex}vi.&Límite del cociente: & Si <M>{r`n=1`}</M> y <M>{r`\lim_{\bvec{x}\to\bvec{v}} g(\bvec{x})\neq 0`}</M>, entonces \break <M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} \frac{f(\bvec{x})}{g(\bvec{x})} = \cfrac{\lim\limits_{\bvec{x}\to\bvec{v}}f(\bvec{x})}{\lim\limits_{\bvec{x}\to\bvec{v}} g(\bvec{x})}`}</M>. \\ 
	\rule[1ex]{0pt}{2.5ex}vii.&Límite del producto cruz: & Si <M>{r`n=3`}</M>, entonces <M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{v}} (\bvec{F}(\bvec{x}) \times \bvec{G}(\bvec{x})) = \lim_{\bvec{x}\to\bvec{v}} \bvec{F}(\bvec{x}) \times \lim_{\bvec{x}\to\bvec{v}} \bvec{G}(\bvec{x}) `}</M>. \\
{/* 	\rule[1ex]{0pt}{3.5ex}OJO-ROM.&Límite de una potencia: &<M>{r`\displaystyle \lim_{x \to c}\bvec{F}(x)^{n }=\le\bvec{F}t(\lim_{x \to c}\bvec{F}(x) \right)^n \text{ si } n\in \mathbb{N}`}</M>. \\ % Dudo muchísisimo que esta propiedad exista para límites multivariables. No se mencionó en clase. 	\rule[1ex]{0pt}{2.5ex}viii.&Límite de una función compuesta: &Considérese <M>{r`\bvec{H}\colon \mathbb{R}^{n}\to\mathbb{R}^{k}`}</M>, tal que <M>{r`(\bvec{H} \circ \bvec{F})\colon \mathbb{R}^{m}\to\mathbb{R}^{k}`}</M>. Si <M>{r` \displaystyle \lim_{\bvec{x}\to\bvec{u}} \bvec{F}(\bvec{x}) = \bvec{v}`}</M> y <M>{r` \displaystyle \lim_{\bvec{y}\to\bvec{v}} \bvec{H}(\bvec{y}) = \bvec{w}`}</M>, entonces \break <M>{r`\displaystyle \lim_{\bvec{x}\to\bvec{u}} (\bvec{H} \circ \bvec{F}) (\bvec{x}) = \bvec{w} `}</M>. \\
\end{longtable}  */}

    <Warning>
      En las propiedades vi y vii se ponen condiciones para <M>{r`n`}</M>. Esto es necesario para que en el espacio de llegada <M>{r`\mathbb{R}^{n}`}</M> este definido el cociente (sólo definido en <M>{r`n=1`}</M>) y el producto cruz (sólo definido en <M>{r`n=3`}</M>).
    </Warning>


    <Tip>
      En el límite del cociente, las funciones se denotan por <M>{r`f`}</M> y <M>{r`g`}</M> en lugar de <M>{r`\bvec{F}`}</M> y <M>{r`\bvec{G}`}</M> porque como <M>{r`n=1`}</M>, su codominio es <M>{r`\mathbb{R}`}</M> y las funciones son funciones escalares.
    </Tip>


    <Tip>
      En el límite de una función compuesta, las variables de <M>{r`\bvec{F}`}</M> y <M>{r`\bvec{H}`}</M> se denotan por letras distintas para enfatizar que <M>{r`\bvec{x}\in\mathbb{R}^{m}`}</M> mientras que <M>{r`\bvec{y}\in\mathbb{R}^{n}`}</M>.

      Se puede entender el límite de una función compuesta pensando en que <M>{r`\bvec{F}`}</M> toma valores cerca de <M>{r`\bvec{u}`}</M> y los lleva a <M>{r`\bvec{v}`}</M> y luego <M>{r`\bvec{H}`}</M> toma valores cerca de <M>{r`\bvec{v}`}</M> y los lleva a <M>{r`\bvec{w}`}</M>.
    </Tip>

    <h2>Derivación de funciones escalares de múltiples variables</h2>
  </NoteDocument >
);

export default CalculoVectorial;