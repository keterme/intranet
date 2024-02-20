import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from './Home';
import {CHRYSAL} from "../src/assets/chrysal.jpg";
import {RiLockPasswordFill} from "react-icons/ri"
import "./index.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username, try again",
    pass: "Invalid password, try again"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="app">
      <div className="login-form">
        <div className="title">.</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="error">
                {renderErrorMessage("uname")}
            </div>
            <div className="error">
                {renderErrorMessage("pass")}
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" 
                     name="uname" 
                     autocomplete="off"
                     placeholder="Input username ..."
                     required 
              />         
            </div>
            <div className="input-container">
              <label>Password</label>

              <input type="password" 
                           name="pass"
                           id="icon" 
                           placeholder="Input password ..."
                           required 
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );

  return (
    <div>
      {isSubmitted ? 
        <div className="App">
          <Home />
        </div>
      : renderForm}
    </div>
  );
}

export default Login;