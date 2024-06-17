import generateIdAutomatically from "../utils/generateIdAutomatically";


interface SubsectionProps {
  children: React.ReactNode | string;
  id?: string;
}

export default function Subsection({
  children,
  id
}: SubsectionProps) {
  id = id || generateIdAutomatically(children);
  return (
    <h3 id={id}>
        {children}
    </h3>
  );
}
