import React from 'react';
import styled from 'styled-components';

const ProofContainer = styled.div`
  margin: 1em 0 0 0;
  padding: 3em 0 0 0;
  border-top: 2px solid var(--theorem-color);
  position: relative;
`;

const ProofLabel = styled.div`
  position: absolute;
  top: 0;
  left: 5%;

  color: white;

  padding: 0em 1.5em 0.5em 1.5em;
  margin: 0 0 0em 0;
  border-radius: 0px 0px 10px 10px;


  text-align: center;

  font-weight: bold;
  padding: 0.5em 1em;
  background-color: var(--theorem-color);
`;

const QED = styled.div`
  font-style: italic;
  margin-top: 1em;
  text-align: right;
`;

interface ProofProps {
  children: React.ReactNode;
}

export default function Proof({ children }: ProofProps) {
  return (
    <ProofContainer>
      <ProofLabel>Demostración</ProofLabel>
      <div>{children}</div>
      <QED>QED</QED>
    </ProofContainer>
  );
};