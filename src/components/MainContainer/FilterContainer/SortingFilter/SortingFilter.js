import RadioButton from "../../../RadioButton/RadioButton";
import Accordion from "../../../Accordion/Accordion";
import classes from "./SortingFilter.module.css";

const SortingFilter = () => {
  return (
    <Accordion title="Sıralama">
      <RadioButton labelName="message" option="Akıllı Sıralama"></RadioButton>
      <RadioButton labelName="message" option="Restoran Puanı"></RadioButton>
      <RadioButton labelName="message" option="Teslimat Süresi"></RadioButton>
      <RadioButton
        labelName="message"
        option="Alfabetik Sıralama"
      ></RadioButton>
      <RadioButton
        labelName="message"
        option="En Çok Değerlendirilenler"
      ></RadioButton>
      <RadioButton labelName="message" option="İndirim Oranı"></RadioButton>
    </Accordion>
  );
};

export default SortingFilter;
