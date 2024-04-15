import React from 'react';
import styled from 'styled-components';

const DefinitionBox = styled.div`
  background-color: #e6f7ff;  // Light blue background
  border-left: 5px solid #1890ff;  // Blue border on the left
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-top: 0;
  color: #106ba3;  // Slightly darker blue for the title
`;

interface DefinitionProps {
    concept: string;
    children: React.ReactNode;
}

const Definition: React.FC<DefinitionProps> = ({ concept, children }) => (
    <DefinitionBox>
        <Title>{concept}</Title>
        {children}
    </DefinitionBox>
);

export default Definition;