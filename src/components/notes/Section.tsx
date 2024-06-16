import React, { useState } from 'react';
import styled from 'styled-components';


export const SectionAccordion = styled.div`
  width: 100%;
  margin-bottom: 1em;
  display: block;
`;

const SectionTitle = styled.h2<{ $expanded: boolean }>`
  font-size: 1.5em;
  color: white;
  background-color: var(--section-color);
  padding: 0.2em 0;
  width: 100%;
  text-align: center;
  
  border-radius: 0 10px 10px 10px;
  cursor: pointer;
`;

export const SectionContent = styled.div<{ $expanded: boolean }>`
  display: ${(props) => (props.$expanded ? 'block' : 'none')};
  width: 100%;
  padding: 0;
  margin: 0;
`;

interface SectionProps {
  title: React.ReactNode | string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <SectionAccordion>
      <SectionTitle $expanded={expanded} onClick={() => {setExpanded(!expanded)}}>
        {title}
      </SectionTitle>
      <SectionContent $expanded={expanded}>
        {children}
      </SectionContent>
    </SectionAccordion>
  );
};

export default Section;
