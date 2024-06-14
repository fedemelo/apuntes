import { useState } from "react";

import generateIdAutomatically from "@/components/utils/generateIdAutomatically";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface AbstractAccordionProps {
  content: React.ReactNode;
  environmentName: string;
  environmentColor: string;
  title?: React.ReactNode | string;
  id?: string;
}

export default function AbstractAccordion({
  content,
  title,
  environmentName: name,
  environmentColor: color,
  id,
}: AbstractAccordionProps) {
  const [expanded, setExpanded] = useState(false);
  id = id || generateIdAutomatically(name + title);

  return (
    <Accordion expanded={expanded} onChange={() => {setExpanded(!expanded)}}>
      <AccordionSummary
        expandIcon={expanded ? <VisibilityIcon /> : <VisibilityOffIcon />}
        sx={{ backgroundColor: color }}
      >
        <strong>
          {name}
          {title ? `: ${title}` : ""}
        </strong>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}
