import { useState } from "react";
import classes from "./RangeSlider.module.css";
import RangeSliderTooltip from "./RangeSliderTooltip";

const RangeSlider = (props) => {
  const sliderConfigs = { minValue: 5, maxValue: 300, step: 5 };
  const [sliderValue, setSliderValue] = useState(sliderConfigs.maxValue);
  const [transformDistance, setTransformDistance] = useState(100);

  const handler = (e) => {
    let value = e.target.value;
    setSliderValue(value);

   
    let distanceRatio = Number(
      ((value - sliderConfigs.minValue) * 100) /
        (sliderConfigs.maxValue - sliderConfigs.minValue)
    );
    
    setTransformDistance(distanceRatio);
  };

  return (
    <div className={classes["range-slider--container"]}>
      <span className={classes["amount-label"]}>5&nbsp;₺</span>
      <div className={classes["input-container"]}>
        <RangeSliderTooltip
          transformDistance={transformDistance}
          amount={sliderValue}
        />
        <input
          onChange={handler}
          className={classes["range-slider"]}
          type="range"
          min={sliderConfigs.minValue}
          max={sliderConfigs.maxValue}
          step={sliderConfigs.step}
          defaultValue={sliderConfigs.maxValue}
        />
      </div>
      <span className={classes["all-amounts"]}>Tümü</span>
    </div>
  );
};

export default RangeSlider;
