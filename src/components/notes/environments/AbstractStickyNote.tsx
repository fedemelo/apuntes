import generateIdAutomatically from "@/components/utils/generateIdAutomatically";

import styled from "styled-components";

const BoxContainer = styled.div`
  flex-direction: row;
  display: flex;
  margin-block: 1em;

  position: relative;

  justify-content: flex-start;
  align-items: stretch;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  // Simulate the shadow of the folded corner
  border-radius: 0 0 1.9em 0;
`;

const IconBox = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};

  width: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;


const Box = styled.div<{ color: string; $environmentName: string }>`
  position: relative;

  padding-right: 1.2em;
  padding-left: 1em;
  padding-block: 0.5em;

  background-color: white;

  border-top: 2px solid ${(props) => props.color};
  border-right: 2px solid ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.color};
  border-left: none;

  width: 100%;
  margin: 0;

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1em),
    calc(100% - 1em) 100%,
    0 100%
  );


  & > span::before {
    content: "${(props) => props.$environmentName} ";
    color: ${(props) => props.color};
    font-weight: bold;
  }

  // Folded corner
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: -2px;
    border-top: 1em solid ${(props) => props.color};
    border-right: 1em solid transparent;
  }

  // Hide the box corner, to make the folded corner look like a folded corner
  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    right: -4px; 
    border-top: 2em solid transparent;
  }
`;



interface AbstractStickyNoteProps {
  content: React.ReactNode;
  environmentName: string;
  environmentColor: string;
  environmentIcon: React.ReactNode;
  id?: string;
}

export default function AbstractStickyNote({
  content,
  environmentName: name,
  environmentColor: color,
  environmentIcon: icon,
  id,
}: AbstractStickyNoteProps) {
  id = id || generateIdAutomatically(name);

  return (
    <BoxContainer>
      <IconBox color={color}>{icon}</IconBox>
      <Box color={color} $environmentName={name} id={id}>
        <span>{content}</span>
      </Box>
    </BoxContainer>
  );
}
