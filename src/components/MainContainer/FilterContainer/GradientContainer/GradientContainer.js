import classes from "./GradientContainer.module.css";

const GradientContainer = ({ children }) => {
  return (
    <div className={classes["gradient-container"]}>
      <div className={classes["scrollable-container"]}>{children}</div>
    </div>
  );
};

export default GradientContainer;
