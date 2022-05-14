import { useState } from "react";

import classes from "./AccordionContainer.module.css";
import AccordionHeader from "./AccordionHeader";
import AccordionDetails from "./AccordionDetails";

const Accordion = ({ children, title }) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleHandler = () => {
    setIsToggled((state) => !state);
  };

  return (
    <div className={classes["accordion-container"]}>
      <AccordionHeader
        toggleStatus={isToggled}
        onClick={toggleHandler}
        title={title}
      />
      <AccordionDetails toggleStatus={isToggled}>{children}</AccordionDetails>
    </div>
  );
};

export default Accordion;
