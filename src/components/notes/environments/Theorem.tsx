import generateIdAutomatically from "./idGenerator";

import "./BoxEnvironment.css";
import "./TheoremStyles.css";


interface TheoremProps {
    children: React.ReactNode;
    name: React.ReactNode | string;
    id?: string;
}

export default function Theorem({ children, name, id }: TheoremProps) {
    id = id || generateIdAutomatically(name);

    return (
        <div className="box-environment-container">
            <div className="box-environment theorem-box">
                <div className="box-environment-title theorem-title" id={id}>
                    <strong>{name}</strong>
                </div>
                {children}
            </div>
            <div className="theorem-proof" id={id}>
                {/* TODO: Add support for proofs */}
            </div>
        </div>
    );
}


