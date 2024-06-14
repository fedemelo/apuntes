import generateIdAutomatically from "./generateIdAutomatically";


export function setupSmoothScrollOnHashChange() {
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
  }


export function referenceById(textShown: string, notesPath: string, id: string = "", concept?: string) {
    if (concept) {
        id = generateIdAutomatically(concept) || id;
    }

    return <a href={`${notesPath}#${id}`}>{textShown}</a>
}