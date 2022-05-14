import classes from "./Header.module.css";
import yemekLogo from "../../assets/yemek.svg";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <a href="#">
          <img className={classes.logo} src={yemekLogo} alt="Logo" />
        </a>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
