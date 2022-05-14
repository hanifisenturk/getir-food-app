import classes from "./RestaurantPoint.module.css";

const RestaurantPoint = ({ averagePoint, additionalInformation, style }) => {
  return (
    <div style={{ ...style }} className={classes["restaurant-point"]}>
      <svg
        data-testid="icon"
        color="#5D3EBC"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M31.928 12.297a1.448 1.448 0 0 0-1.177-.988l-9.286-1.352-4.156-8.414c-.247-.494-.756-.814-1.308-.814s-1.061.32-1.308.814l-4.156 8.414-9.286 1.352a1.45 1.45 0 0 0-.814 2.47l6.714 6.54-1.584 9.243a1.47 1.47 0 0 0 .581 1.424c.45.32 1.046.363 1.526.116l8.298-4.374 8.313 4.374c.494.262 1.075.218 1.526-.116s.669-.872.581-1.424l-1.584-9.243 6.714-6.54c.436-.378.581-.959.407-1.482z" />
      </svg>
      <span>{averagePoint}</span>
      {additionalInformation ? <span>{additionalInformation}</span> : ""}
    </div>
  );
};

export default RestaurantPoint;
