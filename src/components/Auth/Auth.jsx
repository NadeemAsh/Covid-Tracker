import React, { useState } from "react";
import "./Auth.css";
import Login from "./Login/Login";
import Register from "./Register/Register";

const switchTabs = {
  1: Login,
  2: Register,
};

const Auth = () => {
  const [tab, setTabs] = useState(1);
  const Component = switchTabs[tab];

  return (
    <>
      <div className="TabSwitch">
        <button
          className={`TabButton ${tab === 1 ? "active" : ""}`}
          onClick={() => setTabs(1)}
        >
          <h3>Login</h3>
        </button>
        <button
          className={`TabButton ${tab === 2 ? "active" : ""}`}
          onClick={() => setTabs(2)}
        >
          <h3>Register</h3>
        </button>
      </div>
      <Component/>
    </>
  );
};

export default Auth;
