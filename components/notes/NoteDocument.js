import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import './NotesStyle.css';
const NoteDocument = ({ children }) => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange, false);
        handleHashChange();
        return () => {
            window.removeEventListener('hashchange', handleHashChange, false);
        };
    }, []);
    return _jsx("div", { className: "note-document", children: children });
};
export default NoteDocument;
