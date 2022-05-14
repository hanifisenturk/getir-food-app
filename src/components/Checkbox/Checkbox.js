import classes from "./Checkbox.module.css";

const Checkbox = ({ labelName, option }) => {
  return (
    <label className={classes["checkbox-container"]}>
      <input type="checkbox" name={labelName} />

      {option}
    </label>
  );
};

export default Checkbox;
