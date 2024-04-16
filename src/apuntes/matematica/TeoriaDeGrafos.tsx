import Math from '@/math/Math';

import NoteDocument from '@/components/notes/NoteDocument';
import Definition from '@/components/notes/environments/Definition';

const TeoriaDeGrafos = () => <NoteDocument>
    <h1>Definición de grafo</h1>

    <h2>Introducción</h2>
    <p>
        Un grafo es una estructura matemática que representa relaciones entre pares de objetos.
    </p>

    <Definition concept="Grafo">
        Un <em>grafo</em> <Math>G</Math> es un par ordenado de conjuntos disjuntos <Math>G=(V, E)</Math> tal que <Math>V</Math> es un conjunto de <strong>vértices</strong> o <strong>nodos</strong> y <Math>E</Math> es un conjunto de <strong>arcos</strong> que conectan pares de vértices.
    </Definition>

    <p>
        Gráficamente, los grafos (usualmente) se representan en el plano: los vértices se representan por puntos y los arcos se representan por segmentos de recta que los conectan.
    </p>
    <p>
        Se pueden enfatizar que <Math>V</Math> es el conjunto de vértices de <Math>G</Math> escribiendo <Math>V(G)</Math>, para no confundirlo con un posible conjunto de vértices <Math>V(H)</Math> del grafo <Math>H</Math>. Lo mismo se puede hacer para <Math>E(G)</Math> y <Math>E(H)</Math>.
    </p>
    <p>
        Salvo que explícitamente se diga lo contrario, en estos apuntes se estudian grafos finitos. Eso significa que los conjuntos <Math>V</Math> y <Math>E</Math> son finitos.
    </p>
</NoteDocument>

export default TeoriaDeGrafos;