import ContainerHeader from "../../../UI/ContainerHeader";
import PastOrder from "./PastOrder";
import classes from "./PastOrdersContainer.module.css";

const PastOrdersContainer = () => {
  return (
    <div className={classes["past-orders--container"]}>
      <ContainerHeader>
        <h5>Geçmiş Siparişler</h5>
        <a href="#">Tümünü Gör</a>
      </ContainerHeader>

      <PastOrder />
      <PastOrder />
      <PastOrder />
      <PastOrder />
    </div>
  );
};

export default PastOrdersContainer;
