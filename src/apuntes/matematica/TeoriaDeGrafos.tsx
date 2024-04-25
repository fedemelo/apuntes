import { LaTeX } from "@/math/Math";

import NoteDocument from "@/components/notes/NoteDocument";
import Definition from "@/components/notes/environments/Definition";

const TeoriaDeGrafos = () => (
    <NoteDocument>
        <h1>Definición de grafo</h1>

        <h2>Introducción</h2>
        <p>Un grafo es una estructura matemática que representa relaciones entre pares de objetos.</p>

        <Definition concept="Grafo">
            Un <em>grafo</em> <LaTeX>G</LaTeX> es un par ordenado de conjuntos disjuntos <LaTeX>G=(V, E)</LaTeX> tal que <LaTeX>V</LaTeX> es un conjunto de <strong>vértices</strong> o <strong>nodos</strong> y <LaTeX>E</LaTeX> es un conjunto de <strong>arcos</strong> que conectan pares de vértices.
        </Definition>

        <p>Gráficamente, los grafos (usualmente) se representan en el plano: los vértices se representan por puntos y los arcos se representan por segmentos de recta que los conectan.</p>
        <p>
            Se pueden enfatizar que <LaTeX>V</LaTeX> es el conjunto de vértices de <LaTeX>G</LaTeX> escribiendo <LaTeX>V(G)</LaTeX>, para no confundirlo con un posible conjunto de vértices <LaTeX>V(H)</LaTeX> del grafo <LaTeX>H</LaTeX>. Lo mismo se puede hacer para <LaTeX>E(G)</LaTeX> y <LaTeX>E(H)</LaTeX>.
        </p>
        <p>
            Salvo que explícitamente se diga lo contrario, en estos apuntes se estudian grafos finitos. Eso significa que los conjuntos <LaTeX>V</LaTeX> y <LaTeX>E</LaTeX> son finitos.
        </p>
    </NoteDocument>
);

export default TeoriaDeGrafos;
