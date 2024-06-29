import React, { useState } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ProofContainer = styled.div`
  margin: 1em 0 0 0;
  padding: 3em 0 0 0;
  border-top: 2px solid var(--theorem-color);
  position: relative;
`;

const ProofContent = styled.div<{ $expanded: boolean }>`
  display: ${(props) => (props.$expanded ? 'block' : 'none')};
  margin: 0;
  padding: 0;
`;

const ProofLabel = styled.div`
  position: absolute;
  top: -2px;
  left: 5%;

  color: var(--theorem-color);

  margin: 0;
  padding: 0.5em 1em;
  border-radius: 0px 0px 10px 10px;
  border: 2px solid var(--theorem-color);

  text-align: center;

  font-weight: bold;
  background-color: white;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5%;
  cursor: pointer;
`;

const QED = styled.div`
  text-align: right;
  padding: 0 1em 0 0;
  margin: -1em 0 0 0;
  color: var(--theorem-color);
`;

interface ProofProps {
  children: React.ReactNode;
}

export default function Proof({ children }: ProofProps) {
  const [expanded, setExpanded] = useState<boolean>(true);
  
  return (
    <ProofContainer onClick={() => setExpanded(!expanded)}>
      <ProofLabel>
        Demostración
      </ProofLabel>
      <IconContainer >
        {expanded ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconContainer>
      <ProofContent $expanded={expanded}>
        {children}
        <QED>■</QED>
      </ProofContent>
    </ProofContainer>
  );
};
