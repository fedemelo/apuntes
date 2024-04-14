import React from 'react';
import styled from 'styled-components';

// Define a styled container for the note document
const StyledNoteDocument = styled.div`
  background: white;
  margin: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;

  // Here you can define styles specific to your document elements
  h1 {
    font-size: 2em;
    color: darkblue;
  }

  h2 {
    font-size: 1.5em;
    color: darkred;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    text-align: justify;
  }  

  math {
    font-family: 'Times New Roman', Times, serif;
    background-color: #f4f4f4;
    padding: 3px 6px;
    border-radius: 4px;
  }
`;

// Define the NoteDocument component using TypeScript
const NoteDocument: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <StyledNoteDocument>{children}</StyledNoteDocument>;
};

export default NoteDocument;
