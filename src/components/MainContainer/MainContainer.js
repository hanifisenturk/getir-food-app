import classes from "./MainContainer.module.css";
import FilterContainer from "./FilterContainer/FilterContainer";
import RestoranContainer from "./RestoranContainer/RestoranContainer";
import PastOrdersContainer from "./PastOrdersContainer/PastOrdersContainer";

const MainContainer = () => {
  return (
    <section className={classes["main-container"]}>
      <FilterContainer />
      <RestoranContainer />
      <PastOrdersContainer />
    </section>
  );
};

export default MainContainer;
