import React from "react";
import { useEffect } from "react";
import "./NoteDocument.css";
import { setupSmoothScrollOnHashChange } from "../utils/hyperlinkManager";

const NoteDocument: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  useEffect(setupSmoothScrollOnHashChange, []);

  return (
    <div className="note-document">
      <div className="note-document-content">{children}</div>
    </div>
  );
};

export default NoteDocument;
