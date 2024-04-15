import React from 'react';

import './BoxStyles.css';
import './DefinitionStyles.css';

interface DefinitionProps {
  children: React.ReactNode;
}

const Definition: React.FC<DefinitionProps> & {
  Title: React.FC<React.PropsWithChildren<{}>>;
} = ({ children }) => (
  <div className="definition-box">
    {children}
  </div>
);

Definition.Title = ({ children }) => (
  <strong className="definition-title">{children}. </strong>
);

export default Definition;