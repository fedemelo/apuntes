import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import generateIdAutomatically from '@/components/utils/generateIdAutomatically';
import CopyLinkToClipboard from '@/components/utils/CopyLinkToClipboard';
import { BoxContainer, ButtonContainer, Title } from './AbstractBox';


const StyledAccordion = styled(Accordion) <{ color: string }>`
  width: 100%;
  border: 2px solid ${(props) => props.color};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

interface AbstractAccordionBoxProps {
  content: React.ReactNode;
  title: React.ReactNode | string;
  environmentName: string;
  environmentColor: string;
  additionalContent?: React.ReactNode;
  id?: string;
}

export default function AbstractAccordionBox({
  content,
  title,
  environmentName: name,
  environmentColor: color,
  additionalContent,
  id,
}: AbstractAccordionBoxProps) {
  id = id || generateIdAutomatically(title);
  const linkToCopy = `${window.location.origin}${window.location.pathname}#${id}`;
  const copyMessage = "Link copiado al portapapeles";

  return (
    <BoxContainer>
      <StyledAccordion color={color}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: color }}/>}>
          {id ? (
            <Title $color={color} $environmentName={name} id={id}>
              <strong>{title}</strong>
            </Title>
          ) : (
            <Title $color={color} $environmentName={name}>
              <strong />
            </Title>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {content}
          {id && (
            <ButtonContainer>
              <CopyLinkToClipboard link={linkToCopy} message={copyMessage} color={color} />
            </ButtonContainer>
          )}
        </AccordionDetails>
      </StyledAccordion>
      {additionalContent}
    </BoxContainer>
  );
}
