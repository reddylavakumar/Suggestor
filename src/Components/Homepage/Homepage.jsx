import React, { useState } from "react";
import "./Homepage.css";
const Homepage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="main-container">
        <div className="login">
          <button onClick={() => setIsLogin(true)} className="login-button">
            LOG-IN
          </button>
        </div>
        <div className="register">
          <button onClick={() => setIsLogin(false)} className="register-button">
            REGISTER
          </button>
        </div>
      </div>
      <div className="main">
        {isLogin ? (
          <div className="log">
            <div className="log-content">Login Page</div>
            <b>Enter UserName : </b>
            <input type="text" className="uname" placeholder="Enter username" />
            <br></br>
            <b>Enter Password : </b>
            <input
              type="password"
              className="psd"
              placeholder="Enter Password"
            /><br></br>
            <button type="submit" className="log-submit">
              Log-In
            </button>
          </div>
        ) : (
          <div className="reg">
            <div className="log-content">Registration Page</div>
            <div className="reg-content">
              <b>Enter your e-mail</b>
              <input
                type="email"
                className="emailid"
                placeholder="Enter email id"
              /><br></br>
              <b>Enter your Full Name</b>
              <input
                type="text"
                className="full-name"
                placeholder="Enter FullName"
              /><br></br>
              <b>Enter Password : </b>
              <input
                type="password"
                className="reg-psd"
                placeholder="Enter password"
              /><br></br>
              <button type="submit" className="reg-submit">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
