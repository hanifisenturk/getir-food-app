import classes from "./ContainerHeader.module.css";

const ContainerHeader = ({ children }) => {
  return <div className={classes["container-header"]}>{children}</div>;
};

export default ContainerHeader;
