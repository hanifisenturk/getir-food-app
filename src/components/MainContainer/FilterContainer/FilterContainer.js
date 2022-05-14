import DeliveryTypeFilter from "./DeliveryType/DeliveryTypeFilter";
import classes from "./FilterContainer.module.css";
import SmartFilter from "./SmartFilter/SmartFilter";
import SortingFilter from "./SortingFilter/SortingFilter";
import MinimumBasketAmountFilter from "./MinimumBasketAmount/MinimumBasketAmountFilter";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import CuisinesFilter from "./Cuisines/CuisinesFilter";
import ContainerHeader from "../../../UI/ContainerHeader";

const FilterContainer = () => {
  return (
    <aside className={classes["filter-container"]}>
      <ContainerHeader>
        <h5>Filtreler</h5>
      </ContainerHeader>
      <div className={classes["filter-container--filters"]}>
        <SortingFilter />
        <SmartFilter />
        <DeliveryTypeFilter />
        <MinimumBasketAmountFilter />
        <PaymentMethod />
        <CuisinesFilter />
      </div>
    </aside>
  );
};

export default FilterContainer;
