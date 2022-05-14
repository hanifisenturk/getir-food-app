import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = ({ style, title }) => {
  return (
    <button style={{ ...style }} className={classes["button-secondary"]}>
      {title}
    </button>
  );
};

export default ButtonSecondary;
