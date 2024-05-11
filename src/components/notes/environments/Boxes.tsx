import AbstractBox from "./AbstractBox";

import "./Boxes.css";


interface BoxProps {
  children: React.ReactNode;
  title: React.ReactNode | string;
  id?: string;
}


type DefinitionProps = Omit<BoxProps, "title"> & {
  concept: React.ReactNode | string;
};

export function Definition({ children, concept, id }: DefinitionProps) {
  return (
    <AbstractBox
      content={children}
      title={concept}
      environmentName="Definición"
      environmentColor="var(--definition-color)"
      additionalContent={
        <div className="definition-concept-side" id={id}>
          <strong>{concept}</strong>
        </div>
      }
      id={id}
    />
  );
}


type TheoremProps = Omit<BoxProps, "title"> & {
  name: React.ReactNode | string;
};

export function Theorem({ children, name, id }: TheoremProps) {
  return (
    <AbstractBox
      content={children}
      title={name}
      environmentName="Teorema"
      environmentColor="var(--theorem-color)"
      // additionalContent={
      //   <div className="theorem-proof" id={id}>
      //     TODO: Add support for theorem proofs
      //   </div>
      // }
      id={id}
    />
  );
}


export function Example({ children, title, id }: BoxProps) {
  return (
    <AbstractBox
      content={children}
      title={title}
      environmentName="Ejemplo"
      environmentColor="var(--example-color)"
      id={id}
    />
  );
}
