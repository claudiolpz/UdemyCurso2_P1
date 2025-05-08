import { Link } from "react-router";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MaterialAcordeon = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/material"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Material
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Acordeon
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center mb-2">Acordeon </h1>
      <hr className="mb-4" />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}

          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {" "}
          <Typography variant="h4" sx={{ width: "33%", flexShrink: 0 }}>
            TITULO 1
          </Typography>
          <Typography sx={{ color: "text.secundary" }}>SECUNDARIO</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="/images/fc.jpg" width="250"/>
            <hr />
            <Typography >
            Initial D mazda RX7 FC
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}

          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {" "}
          <Typography variant="h4" sx={{ width: "33%", flexShrink: 0 }}>
            TITULO 2
          </Typography>
          <Typography sx={{ color: "text.secundary" }}>SECUNDARIO 2 </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="/images/ae86vsfd.jpg" width="250"/>
            <hr />
            <Typography >
            Initial D mazda RX7 Fd vs AE86
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}

          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          {" "}
          <Typography variant="h4" sx={{ width: "33%", flexShrink: 0 }}>
            TITULO 3
          </Typography>
          <Typography sx={{ color: "text.secundary" }}>SECUNDARIO 3 </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="/images/civiv.jpg" width="250"/>
            <hr />
            <Typography >
            Initial D Honda Civic
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}

          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          {" "}
          <Typography variant="h4" sx={{ width: "33%", flexShrink: 0 }}>
            TITULO 4
          </Typography>
          <Typography sx={{ color: "text.secundary" }}>SECUNDARIO 4 </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="/images/aa.jpg" width="250"/>
            <hr />
            <Typography >
            Initial D Nissan SilEighty
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MaterialAcordeon;
