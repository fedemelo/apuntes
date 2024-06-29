import React from 'react';
import styled from 'styled-components';

const EpigraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px 0;
`;

const Quote = styled.p`
  font-style: italic;
  margin: 0;
`;

const Author = styled.p`
  margin: 5px 0 0 0;
`;

interface EpigraphProps {
  author: string;
  children: React.ReactNode;
}

const Epigraph: React.FC<EpigraphProps> = ({ author, children }) => {
  return (
    <EpigraphContainer>
      <Quote>“{children}”</Quote>
      <Author>— {author}</Author>
    </EpigraphContainer>
  );
};

export default Epigraph;
