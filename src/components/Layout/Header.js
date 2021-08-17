import { Fragment } from "react";
import basic1 from "../../assets/basic2.jpg";
import classes from "./Header.module.css";
import logo from "../../assets/logo.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <img src={logo} ></img>
        <h1>Electrcity Bill Payment App</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={basic1} alt="An image of Electrcity poles" />
      </div>
    </Fragment>
  );
};

export default Header;