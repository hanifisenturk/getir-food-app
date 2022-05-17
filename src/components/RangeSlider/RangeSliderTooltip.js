import classes from "./RangeSliderTooltip.module.css";

const RangeSliderTooltip = ({ amount, transformDistance }) => {
  
  let newPosition = +(9 - transformDistance * 0.18);
  return (
    <div
      style={{
        left: `calc(${transformDistance}% + ${newPosition}px - 18px )`,
      }}
      className={classes["tooltip-container"]}
    >
      {amount}&nbsp;₺
    </div>
  );
};

export default RangeSliderTooltip;
