import classes from "./SettingsButton.module.css";
const SettingsButton = (props) => {
  return (
    <button className={classes.button}>
      <span>
        <svg
          name="campaign-2"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          {props.icon}
        </svg>
      </span>
      {props.text}
      {props.arrow ? (
        <span>
          <svg
            name="campaign-2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={classes.arrow}
          >
            <path
              d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"
              class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
            ></path>
          </svg>
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default SettingsButton;
