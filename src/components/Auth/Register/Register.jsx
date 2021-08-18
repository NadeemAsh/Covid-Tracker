import React from "react";

const Register = () => {
  return (
    <div className="card-wrapper">
      <div className="flex-wrapper illustrations">
        <img src="./static/login.svg" alt="login" />
        <h1>Welcome!</h1>
        <h3>Create a new account</h3>
      </div>
      <div className="flex-wrapper inputs">
        <input className="input-field" type="text" placeholder="Full Name"/>
        <input className="input-field" type="email" placeholder="Email"/>
        <input className="input-field" type="password" placeholder="Password"/>
        <input className="input-field" type="password" placeholder="Re-Type Password"/>
        <button className="submit-button">Register</button>
      </div>
    </div>
  );
};

export default Register;
