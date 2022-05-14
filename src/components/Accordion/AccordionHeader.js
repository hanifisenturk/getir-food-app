import classes from "./AccordionHeader.module.css";

const AccordionHeader = ({ title, onClick, toggleStatus }) => {
  return (
    <div onClick={onClick} className={classes["accordion-header"]}>
      <span>{title}</span>
      <div className={classes["arrow-wrapper"]}>
        <svg
          data-testid="icon"
          color="#5D3EBC"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className={
            toggleStatus
              ? `${classes["accordion-header"]} ${classes["accordion-header--animate"]}`
              : classes["accordion-header-svg"]
          }
        >
          <path d="M28.084 7.516 15.988 19.635 3.892 7.539C3 6.647 1.56 6.647.668 7.539s-.892 2.332 0 3.224l13.719 13.719a2.277 2.277 0 0 0 3.224 0L31.33 10.763a2.277 2.277 0 0 0 0-3.224 2.284 2.284 0 0 0-3.247-.023z" />
        </svg>
      </div>
    </div>
  );
};

export default AccordionHeader;
