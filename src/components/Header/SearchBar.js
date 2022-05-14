import classes from "./SearchBar.module.css";
import House from "../../assets/house.svg";
const SearchBar = () => {
  return (
    <form className={classes.form}>
      <div className={classes["form-container"]}>
        <input type="text" required placeholder="Yemek veya restoran ara" />
        <div className={classes["search-icon--container"]}>
          <svg
            name="search"
            color="#5d3ebc"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={classes["search-icon"]}
          >
            <path
              d="M14.414 28.788c3.408 0 6.511-1.184 8.975-3.152l5.887 5.887c0.624 0.624 1.632 0.624 2.256 0s0.624-1.632 0-2.256l-5.887-5.887c1.968-2.464 3.152-5.583 3.152-8.975 0-7.951-6.447-14.398-14.398-14.398s-14.398 6.447-14.398 14.398c0 7.951 6.463 14.382 14.414 14.382zM14.414 3.192c6.191 0 11.199 5.007 11.199 11.199 0 3.072-1.232 5.855-3.232 7.871-0.016 0.016-0.032 0.016-0.048 0.032s-0.016 0.032-0.032 0.048c-2.016 2-4.799 3.232-7.871 3.232-6.191 0-11.199-5.007-11.199-11.199s4.991-11.183 11.183-11.183z"
              class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
            ></path>
          </svg>
        </div>
        <div className={classes["address-actions"]}>
          <div className={classes["address-selector"]}>
            <button>
              <figure className={classes["house-icon--container"]}>
                <img
                  className={classes["house-icon"]}
                  src={House}
                  alt="Choose an address"
                />
              </figure>
              <p>Ev</p>
              <div className={classes["arrow-container"]}>
                <svg
                  color="#5d3ebc"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className={classes["right-arrow-icon"]}
                >
                  <path d="M3.293 13.707a0.996 0.996 0 0 0 1.411 0l6.002 -6.002a0.996 0.996 0 0 0 0 -1.411L4.704 0.293c-0.39 -0.39 -1.02 -0.39 -1.411 0s-0.39 1.02 0 1.411l5.292 5.292L3.293 12.287a1.008 1.008 0 0 0 0 1.421z" />
                </svg>
              </div>
            </button>
          </div>
          <div className={classes["expected-arriving-time"]}>
            <span>TVS</span>
            &nbsp;
            <time>10-50dk</time>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
