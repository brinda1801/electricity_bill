import React, { useState } from "react";
import Header from "../Layout/Header";
import classes from "./QuickPay.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Details from "../Details/Details";

const QuickPay = (props) => {
  const [consumer, setconsumer] = useState();
  const [error, seterror] = useState();

  const ConsumerHandler = (event) => {
    event.preventDefault();
    if (consumer === "123456789") {
      seterror({
        no: { consumer },
      });
      return;
    } else alert("Its Invalid");
  };

  const ConsumerChangeHandler = (event) => {
    setconsumer(event.target.value);
  };

  return (
    <div>
      <Header image={classes.img}></Header>
      {error && <Details no={error.no} name="QuickPay"/>}
      <Card className={classes.input}>
        <form onSubmit={ConsumerHandler}>
          <label htmlFor="number">Consumer No</label>
          <input
            id="no"
            type="tel"
            onChange={ConsumerChangeHandler}
            value={consumer}
            placeholder="Enter 9 digit no."
            maxLength="9"
          />

          <br></br>
          <Button type="submit">Check Consumer No</Button>
        </form>
      </Card>
    </div>
  );
};

export default QuickPay;
