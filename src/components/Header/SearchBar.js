import { useState, useRef } from "react";
import classes from "./SearchBar.module.css";
import House from "../../assets/house.svg";
const SearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const searchBarRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    if (e.target.value === "") {
      return setIsTyping(false);
    }

    setIsTyping(true);
  };

  const exitFromSearchBarHandler = () => {
    searchBarRef.current.value = "";
    setIsTyping(false);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["form-container"]}>
        <input
          ref={searchBarRef}
          onChange={changeHandler}
          type="text"
          placeholder="Yemek veya restoran ara"
        />
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
        {!isTyping ? (
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
              <time>5-50dk</time>
            </div>
          </div>
        ) : (
          <svg
            onClick={exitFromSearchBarHandler}
            className={classes["exit-icon"]}
            viewBox="0 0 32 32"
          >
            <path d="M31.331.669a2.279 2.279 0 0 0-3.226 0L16.001 12.773 3.897.669c-.892-.892-2.334-.892-3.226 0s-.892 2.334 0 3.226l12.104 12.104L.671 28.103c-.892.892-.892 2.334 0 3.227s2.334.892 3.226 0l12.104-12.105L28.105 31.33c.892.892 2.334.892 3.226 0s.892-2.334 0-3.227L19.227 15.999 31.331 3.895c.892-.869.892-2.334 0-3.226z" />
          </svg>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
