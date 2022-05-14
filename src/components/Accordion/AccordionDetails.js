import { Fragment } from "react";
import classes from "./AccordionDetails.module.css";

const AccordionDetails = ({ children, toggleStatus }) => {
  const toggledClasses = toggleStatus
    ? `${classes["accordion-details"]} ${classes["accordion-details--animate"]}`
    : classes["accordion-details"];

  return toggleStatus && <div className={toggledClasses}>{children}</div>;
};
export default AccordionDetails;
