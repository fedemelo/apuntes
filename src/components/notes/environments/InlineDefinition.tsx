import generateIdAutomatically from "./idGenerator";

import "./Definition.css";
import "./BoxEnvironment.css";


interface InlineDefinitionProps {
    children: React.ReactNode | string;
    concept: React.ReactNode | string;
    id?: string;
}

export default function InlineDefinition({ children, concept, id }: InlineDefinitionProps) {
    id = id || generateIdAutomatically(concept);

    return (
        <div className="box-environment-container">
            <p>{children}</p>
            <div className="concept-side" id={id}>
                <strong>{concept}</strong>
            </div>
        </div>
    );
}
