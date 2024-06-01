import AbstractAccordion from "./AbstractAccordion";

interface AccordionProps {
  children: React.ReactNode;
  id?: string;
}

export function Prerequisites({ children, id }: AccordionProps) {
  return (
    <AbstractAccordion
      content={children}
      environmentName="Prerequisitos"
      environmentColor="var(--prerequisites-color)"
      id={id}
    />
  );
}


export function Acknowledgements({ children, id }: AccordionProps) {
  return (
    <AbstractAccordion
      content={children}
      environmentName="Agradecimientos"
      environmentColor="var(--acknowledgements-color)"
      id={id}
    />
  );
}