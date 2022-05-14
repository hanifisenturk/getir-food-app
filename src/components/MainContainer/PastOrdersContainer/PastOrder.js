import classes from "./PastOrder.module.css";
import Card from "../../../UI/Card";
import ButtonPrimary from "../../../UI/ButtonPrimary";
import ButtonSecondary from "../../../UI/ButtonSecondary";

const PastOrder = () => {
  return (
    <Card className={classes["past-order--container"]}>
      <p className={classes["past-order--restaurant"]}>
        Hot Döner, Serdivan (Kemalpaşa Mah.)
      </p>
      <div className={classes["past-order--details"]}>
        <span>17 Nis 2022 15:14</span>
        <span>₺35,50</span>
      </div>
      <div className={classes["past-order--actions"]}>
        <ButtonSecondary title="Sipariş Detayı" />
        <ButtonPrimary title="Tekrarla" />
      </div>
    </Card>
  );
};

export default PastOrder;
