import RangeSlider from "../../../RangeSlider/RangeSlider";
import Accordion from "../../../Accordion/Accordion";

const MinimumBasketAmountFilter = (props) => {
  return (
    <Accordion title="Minimum Sepet Tutarı">
      <RangeSlider />
    </Accordion>
  );
};

export default MinimumBasketAmountFilter;
