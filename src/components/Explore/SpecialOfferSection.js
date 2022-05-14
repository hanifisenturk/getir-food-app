import classes from "./SpecialOfferSection.module.css";
import SpecialOffers from "./SpecialOffers";

const SpecialOfferSection = () => {
  return (
    <section className={classes["container"]}>
      <SpecialOffers title="Keşfet" />
      <SpecialOffers title="Müdavim Restoranları" />
    </section>
  );
};

export default SpecialOfferSection;
