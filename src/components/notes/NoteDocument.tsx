import React from "react";
import { useEffect } from "react";
import "./NotesStyle.css";

const NoteDocument: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <div className="note-document">
      <div className="note-document-content">{children}</div>
    </div>
  );
};

export default NoteDocument;
