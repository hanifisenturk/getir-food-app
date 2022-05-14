import Input from "../../../../UI/Input/Input";
import Accordion from "../../../Accordion/Accordion";
import Checkbox from "../../../Checkbox/Checkbox";
import GradientContainer from "../GradientContainer/GradientContainer";

const CuisinesFilter = (props) => {
  return (
    <Accordion title="Mutfaklar">
      <Input placeholder="Mutfak türü ara" />

      <GradientContainer>
        <Checkbox labelName="Hepsi" option="Hepsi" />
        <Checkbox labelName="Hepsi" option="İndirimliler" />
        <Checkbox labelName="Hepsi" option="Müdavim" />
        <Checkbox labelName="Hepsi" option="Burger" />
        <Checkbox labelName="Hepsi" option="Döner" />
        <Checkbox labelName="Hepsi" option="Kebap" />
        <Checkbox labelName="Hepsi" option="Tavuk" />
        <Checkbox labelName="Hepsi" option="Hepsi" />
        <Checkbox labelName="Hepsi" option="Hepsi" />
        <Checkbox labelName="Hepsi" option="Hepsi" />
      </GradientContainer>
    </Accordion>
  );
};

export default CuisinesFilter;
