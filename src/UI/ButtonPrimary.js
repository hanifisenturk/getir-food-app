import classes from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ style, title }) => {
  return (
    <button style={{ ...style }} className={classes["button-primary"]}>
      {title}
    </button>
  );
};

export default ButtonPrimary;
