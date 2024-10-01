import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({question, description}) {
  return (
    <div style={{marginBottom: '1rem'}}>
      <Accordion style={{borderRadius: '20px', paddingBottom: 0}}>
        <AccordionSummary style={{height: '100px',fontSize: '30px',color: '#000', marginBottom: '0'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {question}
        </AccordionSummary>
        <AccordionDetails style={{fontSize: '20px', paddingBottom: '40px', paddingTop: 0}}>
          {description}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
