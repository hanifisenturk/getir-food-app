import classes from "./RadioButton.module.css";

const RadioButton = ({ labelName, option }) => {
  return (
    <label className={classes["radio-container"]}>
      <input name={labelName} type="radio" />
      {option}
    </label>
  );
};

export default RadioButton;
