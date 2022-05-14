import classes from "./Input.module.css";

const Input = ({ placeholder }) => {
  return (
    <input
      className={classes["filter-input"]}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
