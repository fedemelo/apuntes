import NoteDocument from "@/components/notes/NoteDocument";
import { Definition } from "@/components/notes/environments/Boxes";

import M from "@/math/ASCIIMath";

const TeoriaDeGrafos = () => (
    <NoteDocument>
        <h1>Teoría de Grafos</h1>

        <h2>Introducción</h2>
        <p>Un grafo es una estructura matemática que representa relaciones entre pares de objetos.</p>

        <Definition concept="Grafo">
            Un <em>grafo</em> <M>G</M> es un par ordenado de conjuntos disjuntos <M>G=(V, E)</M> tal que <M>V</M> es un conjunto de <strong>vértices</strong> o <strong>nodos</strong> y <M>E</M> es un conjunto de <strong>arcos</strong> que conectan pares de vértices.
        </Definition>

        <p>Gráficamente, los grafos (usualmente) se representan en el plano: los vértices se representan por puntos y los arcos se representan por segmentos de recta que los conectan.</p>
        <p>
            Se pueden enfatizar que <M>V</M> es el conjunto de vértices de <M>G</M> escribiendo <M>V(G)</M>, para no confundirlo con un posible conjunto de vértices <M>V(H)</M> del grafo <M>H</M>. Lo mismo se puede hacer para <M>E(G)</M> y <M>E(H)</M>.
        </p>
        <p>
            Salvo que explícitamente se diga lo contrario, en estos apuntes se estudian grafos finitos. Eso significa que los conjuntos <M>V</M> y <M>E</M> son finitos.
        </p>
    </NoteDocument>
);

export default TeoriaDeGrafos;
