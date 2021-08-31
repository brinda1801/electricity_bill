import React from "react";
import Header from "../Layout/Header";
import { Link } from 'react-router-dom';
import classes from './Payment.module.css';
import Card from "../UI/Card";

const Payment = (props) => {
  return (
    <div>
      <Header />
      <Card className={classes.label}>
          <p>Payment Done!!</p>
          <div ><span>Want to pay another Bill?</span><Link to='/Welcome' className={classes.Link}>Click Here</Link></div>
      </Card>
    </div>
  );
};

export default Payment;
