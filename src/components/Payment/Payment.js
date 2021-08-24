import React from "react";
import Header from "../Layout/Header";
import { Link } from 'react-router-dom';
import classes from './Payment.module.css';
import Card from "../UI/Card";

const Payment = (props) => {
  return (
    <div>
      <Header />
      <Card>
          <p>Payment Done!!</p>
          <p>Another Payment?</p><Link to='/Welcome'>Click Here</Link>
      </Card>
    </div>
  );
};

export default Payment;
