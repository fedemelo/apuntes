import generateIdAutomatically from "./idGenerator";

import "./BoxEnvironment.css";
import "./Example.css";


interface ExampleProps {
    children: React.ReactNode;
    title: React.ReactNode | string;
    id?: string;
}

export default function Example({ children, title, id }: ExampleProps) {
    id = id || generateIdAutomatically(title);

    return (
        <div className="box-environment-container">
            <div className="box-environment example-box">
                <div className="box-environment-title example-title" id={id}>
                    <strong>{title}</strong>
                </div>
                {children}
            </div>
        </div>
    );
}
