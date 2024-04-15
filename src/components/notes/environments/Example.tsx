import './BoxStyles.css';
import './ExampleStyles.css';

const Example: React.FC<{ children: React.ReactNode }> & {
    Title: React.FC<{ children: React.ReactNode }>;
} = ({ children }) => (
    <div className="example-box">{children}</div>
);

Example.Title = ({ children }: { children: React.ReactNode }) => (
    <p className="example-title">Ejemplo: {children}</p>
);

export default Example;