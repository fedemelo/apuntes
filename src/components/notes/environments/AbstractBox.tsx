import { isValidElement } from "react";

import ReactDomServer from "react-dom/server";

import removeAccents from "remove-accents";
import { snakeCase } from "change-case";

import styled from "styled-components";


interface AbstractBoxProps {
  content: React.ReactNode;
  title: React.ReactNode | string;
  environmentName: string;
  environmentColor: string;
  additionalContent?: React.ReactNode;
  id?: string;
}

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Box = styled.div<{ color: string }>`
  padding-left: 1.2em;
  padding-right: 1.2em;
  padding-top: 2.5em;
  padding-bottom: 0.7em;

  background-color: white;

  border: 2px solid ${(props) => props.color};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0;
`;

const Title = styled.div<{ color: string; environmentName: string }>`
  position: absolute;
  top: -0.3em;
  left: 5%;

  color: white;

  padding-block: 0.5em;
  padding-inline: 1.5em;
  border-radius: 10px 10px 10px 10px;
  text-align: center;

  background-color: ${(props) => props.color};

  & > strong::before {
    content: "${(props) => props.environmentName} " counter(h2) "." counter(h3) ". ";
  }
`;


export default function AbstractBox({
  content,
  title,
  environmentName,
  environmentColor: color,
  additionalContent,
  id,
}: AbstractBoxProps) {
  id = id || generateIdAutomatically(title);

  return (
    <BoxContainer>
      <Box color={color}>
        <Title color={color} environmentName={environmentName} id={id}>
          <strong>{title}</strong>
        </Title>
        {content}
      </Box>
      {additionalContent}
    </BoxContainer>
  );
}


export function generateIdAutomatically(stringOrComponent: React.ReactNode | string) {
  let idString = "";

  if (typeof stringOrComponent === "string") {
    idString = stringOrComponent;
  } else if (isValidElement(stringOrComponent) && typeof stringOrComponent.props.children === "string") {
    idString = stringOrComponent.props.children;
  } else {
    const asString = ReactDomServer.renderToStaticMarkup(stringOrComponent);
    // Automatic ID generation fails if the input is not a string or an element with a string as children
    // Most notably, this will fail if the input contains a Math component
    throw new Error(
      `Failed to generate automatic ID for the box with title '${asString}'. Please provide an id prop manually.`
    );
  }

  return snakeCase(removeAccents(idString));
}
