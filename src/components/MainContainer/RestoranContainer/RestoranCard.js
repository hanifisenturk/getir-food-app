import classes from "./RestoranCard.module.css";
import RestoranImage from "./RestoranImage";
import Image from "../../../assets/cuisines/pizza.jpeg";
import Mudavim from "../../../assets/mudavim.png";
import PromotionBadge from "./PromotionBadge";
import Card from "../../../UI/Card";
import RestaurantPoint from "./RestaurantPoint";
const RestoranCard = () => {
  return (
    <Card padding="1.6rem" className={classes["restoran-card"]}>
      <RestoranImage offer={Image} />
      <div className={classes["restoran-info--container"]}>
        <div className={classes["restoran-info--header_wrapper"]}>
          <div className={classes["restoran-info--header"]}>
            <h5>Bigg Pizza, Arifiye (Arif Bey Mah.) </h5>
            <RestaurantPoint
              style={{ padding: "0 3px", fontSize: "1.4rem" }}
              averagePoint={4.2}
              additionalInformation="(900+)"
            />
          </div>
          <PromotionBadge
            style={{ color: "rgb(93, 62, 188)", fontSize: "1.1rem" }}
            title="Müdavim + 30 TL İndirim"
            icon={Mudavim}
          />
        </div>

        <div className={classes["offer-info--expected"]}>
          <p className={classes["restorant-badge"]}>R</p>
          <div className={classes["expected-datas"]}>
            <p>35-45 dk</p>
            <p>Min. ₺75,00</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestoranCard;
