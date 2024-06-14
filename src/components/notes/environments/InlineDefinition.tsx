import generateIdAutomatically from "@/components/utils/generateIdAutomatically";
import { BoxContainer } from "./AbstractBox";

import "./Boxes.css";

interface InlineDefinitionProps {
  children: React.ReactNode | string;
  concept: React.ReactNode | string;
  id?: string;
}

export default function InlineDefinition({ children, concept, id }: InlineDefinitionProps) {
  id = id || generateIdAutomatically(concept);

  return (
    <BoxContainer>
      <p>{children}</p>
      <div className="definition-concept-side" id={id}>
        <strong>{concept}</strong>
      </div>
    </BoxContainer>
  );
}
