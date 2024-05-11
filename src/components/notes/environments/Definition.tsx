import generateIdAutomatically from "./idGenerator";

import "./BoxEnvironment.css";
import "./Definition.css";


interface DefinitionProps {
    children: React.ReactNode;
    concept: React.ReactNode | string;
    id?: string;
}

export default function Definition({ children, concept, id }: DefinitionProps) {
    id = id || generateIdAutomatically(concept);

    return (
        <div className="box-environment-container">
            <div className="box-environment definition-box">
                <div className="box-environment-title definition-title" id={id}>
                    <strong>{concept}</strong>
                </div>
                {children}
            </div>
            <div className="concept-side" id={id}>
                <strong>{concept}</strong>
            </div>
        </div>
    );
}


