import React, { useState } from "react";
import Header from "../Layout/Header";
import classes from "./QuickPay.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Details from "../Details/Details";
import ErrorModal from "../UI/ErrorModal";

const QuickPay = (props) => {
  const [consumer, setconsumer] = useState();
  const [error, seterror] = useState();
  const [quick, setquick] = useState();

  const ConsumerHandler = (event) => {
    event.preventDefault();
    if (consumer === "123456789") {
      setquick(1);
      return;
    } else{
      seterror({
        title: "Invalid input",
        message: "Please enter a valid Consumer No",
      });
    return;}
  };

  const ConsumerChangeHandler = (event) => {
    setconsumer(event.target.value);
  };

  const errorHandler = () => {
    seterror(null);
    setconsumer('');
  };

  return (
    <div>
      <Header image={classes.img}></Header>
      {quick && <Details name="QuickPay" />}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
