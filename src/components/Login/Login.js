import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal";

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredpwd, setEnteredpwd] = useState();
  const [error, setError] = useState();

  const validation = (event) => {
    event.preventDefault();
    if (enteredUsername === "abc@gmail.com" && enteredpwd === "abc123") {
      setError({
        title: "Valid input",
      });
      return;
    } else {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Username and Password.",
      });
      return;
    }
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const pwdChangeHandler = (event) => {
    setEnteredpwd(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    setEnteredUsername("");
    setEnteredpwd("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={validation}>
          <label htmlFor="email">Username</label>
          <input
            id="email"
            type="email"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            id="pwd"
            type="password"
            value={enteredpwd}
            onChange={pwdChangeHandler}
          />
          <br></br>
          <Button type="submit">Login</Button>
          <Button type="login">Pay Without Registeration</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
