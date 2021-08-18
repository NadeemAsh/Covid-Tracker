import React from "react";

const Login = () => {
  return (
    <div className="card-wrapper">
      <div className="flex-wrapper illustrations">
        <img src="./static/login.svg" alt="login" />
        <h1>Welcome!</h1>
        <h3>Please Login to continue</h3>
      </div>
      <div className="flex-wrapper inputs">
        <input className="input-field" type="email" placeholder="Email"/>
        <input className="input-field" type="password" placeholder="Password"/>
        <button className="submit-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
