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
     {/*<p>
      En las figuras se muestran algunas imágenes del proceso de graficación del paraboloide de revolución <M>{r`f(x,y)=x^2+y^2`}</M >.
    </p>
    % Paraboloide hiperbólico(silla de montar): <M>{r`x^2-y^2`}</M> % Ej 4 p. 83 Marsden y tromba */}

  </NoteDocument >
);

export default CalculoVectorial;