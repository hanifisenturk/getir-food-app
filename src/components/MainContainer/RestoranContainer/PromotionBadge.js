import classes from "./PromotionBadge.module.css";

const PromotionBadge = ({ style, title, icon }) => {
  return (
    <div style={{ ...style }} className={classes["promotion-badge"]}>
      {icon ? <img src={icon} alt="promotion_icon" /> : ""}
      {title}
    </div>
  );
};

export default PromotionBadge;
