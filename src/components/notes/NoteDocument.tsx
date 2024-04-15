import React from 'react';
import './NotesStyle.css';

const NoteDocument: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div className="note-document">{children}</div>;
};

export default NoteDocument;
