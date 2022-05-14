import classes from "./Cuisine.module.css";
import Burger from "../../assets/cuisines/burger.jpeg";
import Card from "../../UI/Card";
const Cuisine = () => {
  return (
    <Card className={classes["cuisine-container"]}>
      <div className={classes["cuisine-wrapper"]}>
        <figure className={classes["cuisine-image--wrapper"]}>
          <img
            className={classes["cuisine-image"]}
            src={Burger}
            alt="Burger Restaurants"
          />
        </figure>
      </div>
      <h2 className={classes["cuisine-name"]}>Burger</h2>
    </Card>
  );
};

export default Cuisine;
