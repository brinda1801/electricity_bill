import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Details.module.css";

const Details = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>QuickPay</h2>
        </header>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td></td>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input value="XYZ ABC" readOnly></input>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>Consumer No</label>
              </td>
              <td>
                <input value="123456789" readOnly></input>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>Month</label>
              </td>
              <td>
                <select name="Month" >
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sept</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <label>Bill Amount</label>
              </td>
              <td>
                <input value="1200" readOnly></input>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <footer className={classes.actions}>
          <Button>Pay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Details;
