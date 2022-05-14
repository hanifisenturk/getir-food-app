const Card = ({ children, className }) => {
  const classNames = className;

  return <div className={classNames}>{children}</div>;
};

export default Card;
