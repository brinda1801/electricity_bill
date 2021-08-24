import { Fragment } from "react";
import basic1 from "../../assets/basic2.jpg";
import classes from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../UI/Button";

const Header = (props) => {

  const history =  useHistory();

  const SubmitHandler = () =>{
    history.push('/Welcome');
  };
  
  return (
    <Fragment>
      <header className={classes.header}>
      <img src={logo} ></img>
        <h1>Electrcity Bill Payment App</h1>
        {(props.name === "logout")  && <Button onClick={SubmitHandler}>Logout</Button>}
      </header>
      <div className={classes["main-image"]}>
        <img className={props.image} src={basic1} alt="An image of Electrcity poles" />
      </div>
      
    </Fragment>
  );
};

export default Header;