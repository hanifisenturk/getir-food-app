import Accordion from "../../../Accordion/Accordion";
import Input from "../../../../UI/Input/Input";
import RadioButton from "../../../RadioButton/RadioButton";
import classes from "./PaymentMethod.module.css";
import GradientContainer from "../GradientContainer/GradientContainer";

const PaymentMethod = (props) => {
  return (
    <Accordion title="Ödeme Yöntemi">
      <Input placeholder="Ödeme yöntemi ara" />
      <GradientContainer>
        <RadioButton labelName="payment" option="Hepsi" />
        <h6 className={classes["payment-type"]}>Online Ödeme</h6>
        <RadioButton labelName="payment" option="Kredi / Banka Kartı" />
        <h6 className={classes["payment-type"]}>Kapıda Ödeme</h6>
        <RadioButton labelName="payment" option="Kredi / Banka Kartı" />
        <RadioButton labelName="payment" option="Nakit" />
        <RadioButton labelName="payment" option="Multinet Kartı" />
        <RadioButton labelName="payment" option="Sodexo Kartı" />
        <RadioButton labelName="payment" option="Sodexo Pass Mobil Uygulama " />
        <RadioButton labelName="payment" option="Ticket Kartı" />
        <RadioButton labelName="payment" option="Setcard Kartı" />
        <RadioButton labelName="payment" option="Metropol Kartı" />
        <RadioButton labelName="payment" option="Paye Kart" />
        <RadioButton labelName="payment" option="CIO Kart" />
        <h6 className={classes["payment-type"]}>
          Online Yemek Kartı ile Ödeme
        </h6>
        <RadioButton labelName="payment" option="Sodexo Online Ödeme" />
      </GradientContainer>
    </Accordion>
  );
};

export default PaymentMethod;
