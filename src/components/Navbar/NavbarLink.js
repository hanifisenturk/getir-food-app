import classes from "./NavbarLink.module.css";
const NavbarLink = (props) => {
  return (
    <div className={classes["hover-container"]}>
      <a className={classes["nav-link"]} href="#">
        <img className={classes.logo} src={props.src} alt="logo" />
      </a>
    </div>
  );
};

export default NavbarLink;
