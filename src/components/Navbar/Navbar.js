import classes from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";
import SettingsButton from "./SettingsButton";
import GetirLogo from "../../assets/getirLogo.svg";
import YemekLogo from "../../assets/yemek.svg";
import BüyükLogo from "../../assets/büyük.svg";
import SuLogo from "../../assets/su.svg";
import CarsiLogo from "../../assets/çarşı.svg";

const WorldIconPath = (
  <path d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z"></path>
);

const GiftIconPath = (
  <path
    d="M6.005 6.013c0-0.002 0-0.005 0-0.008 0-3.312 2.685-5.997 5.997-5.997 1.539 0 2.942 0.579 4.004 1.532l-0.006-0.005c1.057-0.952 2.464-1.535 4.007-1.535 3.312 0 5.997 2.685 5.997 5.997 0 0.722-0.128 1.415-0.362 2.056l0.013-0.042h2.339c2.208 0 3.998 1.79 3.998 3.998s-1.79 3.998-3.998 3.998v0h-9.995v-1.999c0-1.104-0.895-1.999-1.999-1.999s-1.999 0.895-1.999 1.999v0 1.999h-9.995c-2.208 0-3.998-1.79-3.998-3.998s1.79-3.998 3.998-3.998v0h2.339c-0.215-0.593-0.34-1.277-0.34-1.99 0-0.003 0-0.006 0-0.009v0zM14.001 8.012v-1.999c0-1.104-0.895-1.999-1.999-1.999s-1.999 0.895-1.999 1.999c0 1.104 0.895 1.999 1.999 1.999v0zM19.998 8.012c1.104 0 1.999-0.895 1.999-1.999s-0.895-1.999-1.999-1.999c-1.104 0-1.999 0.895-1.999 1.999v0 1.999zM14.001 18.007h-11.994v9.995c0 2.208 1.79 3.998 3.998 3.998v0h7.996zM17.999 32h7.996c2.208 0 3.998-1.79 3.998-3.998v0-9.995h-11.994z"
    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
  ></path>
);

const UserIconPath = (
  <path
    d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948z M0.027 28.896c-0.207 1.16 0.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511s-14.77 3.815-15.972 10.511h-0z"
    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
  ></path>
);

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.links}>
        <div className={classes.logos}>
          <NavbarLink src={GetirLogo} />
          <NavbarLink src={YemekLogo} />
          <NavbarLink src={BüyükLogo} />
          <NavbarLink src={SuLogo} />
          <NavbarLink src={CarsiLogo} />
          {/* <NavbarLink text="getiryemek" />
          <NavbarLink text="getirbüyük" />
          <NavbarLink text="getirsu" />
        <NavbarLink text="getirçarşı" /> */}
        </div>

        <div className={classes["settings-button"]}>
          <SettingsButton icon={WorldIconPath} text="Türkçe (TR)" />
          <SettingsButton icon={GiftIconPath} text="Kampanyalar" />
          <SettingsButton arrow={true} icon={UserIconPath} text="Profil" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
