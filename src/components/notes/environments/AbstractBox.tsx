import styled from "styled-components";

import generateIdAutomatically from "@/components/utils/generateIdAutomatically";
import CopyLinkToClipboard from "@/components/utils/CopyLinkToClipboard";

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-block: 1em;
`;

const Box = styled.div<{ color: string, $environmentName: string }>`
  padding-inline: 1.2em;
  padding-top: 2.5em;
  padding-bottom: 0.7em;

  background-color: white;

  border: 2px solid ${(props) => props.color};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0;
  position: relative;
`;

export const Title = styled.div<{ $color: string; $environmentName: string }>`
  position: absolute;
  top: -0.5em;
  left: 5%;

  color: white;

  padding-block: 0.5em;
  padding-inline: 1.5em;
  border-radius: 10px 10px 10px 10px;
  text-align: center;

  background-color: ${(props) => props.$color};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

interface AbstractBoxProps {
  content: React.ReactNode;
  title: React.ReactNode | string;
  environmentName: string;
  environmentColor: string;
  additionalContent?: React.ReactNode;
  id?: string;
  className: string;
}

export default function AbstractBox({
  content,
  title,
  environmentName: name,
  environmentColor: color,
  additionalContent,
  id,
  className,
}: AbstractBoxProps) {
  id = id || generateIdAutomatically(title);
  const linkToCopy = `${window.location.origin}${window.location.pathname}#${id}`;
  const copyMessage = "Link copiado al portapapeles";

  return (
    <BoxContainer>
      <Box color={color} $environmentName={name}>
        {id ? (
          <Title $color={color} $environmentName={name} id={id} className={className}>
            <strong>{title}</strong>
          </Title>
        ) : (
          <Title $color={color} $environmentName={name} className={className}>
            <strong/>
          </Title>
        )}
        {content}
        {id && (
          <ButtonContainer>
            <CopyLinkToClipboard
              link={linkToCopy}
              message={copyMessage}
              color={color}
            />
          </ButtonContainer>
        )}
      </Box>
      {additionalContent}
    </BoxContainer>
  );
}