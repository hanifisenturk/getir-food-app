import classes from "./RangeSliderTooltip.module.css";
import { useEffect, useState, useRef } from "react";

const RangeSliderTooltip = ({ amount, transformDistance }) => {
  console.log(transformDistance);
  const [distance, SetDistance] = useState(transformDistance);

  return (
    <div
      style={{
        left: transformDistance,
      }}
      className={classes["tooltip-container"]}
    >
      {amount}&nbsp;₺
    </div>
  );
};

export default RangeSliderTooltip;
