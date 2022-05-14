import Accordion from "../../../Accordion/Accordion";
import RadioButton from "../../../RadioButton/RadioButton";

const DeliveryTypeFilter = (props) => {
  return (
    <Accordion title="Teslimat Yöntemi">
      <RadioButton labelName="Teslimat" option="Hepsi" />
      <RadioButton labelName="Teslimat" option="Getir Getirsin" />
      <RadioButton labelName="Teslimat" option="Restoran Getirsin" />
    </Accordion>
  );
};

export default DeliveryTypeFilter;
