import generateIdAutomatically from "@/components/utils/generateIdAutomatically";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AbstractAccordionProps {
  content: React.ReactNode;
  environmentName: string;
  environmentColor: string;
  title?: React.ReactNode | string;
  id?: string;
}

export default function AbstractAccordion({
  content,
  environmentName: name,
  environmentColor: color,
  title,
  id,
}: AbstractAccordionProps) {
  id = id || generateIdAutomatically(name + title);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={{backgroundColor: color}}>
        <strong>
          {name}
          {title ? `: ${title}` : ""}
        </strong>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}
