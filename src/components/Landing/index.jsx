import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div className="container">
      <div className="grid-wrapper">
        <div className="text-wrapper">
          <div className="covid-text">
            <h3>Covid-19 Alert</h3>
            <h1>
              Stay at Home Quarantine
              to stop Corona Virus
            </h1>
            <p>
              We have almost made it and if we continue like this, we can surely
              defeat it.
            </p>
            <div className="cases-button">
              <Link to='/home' className='link-color'>Current Situation</Link>
            </div>
          </div>
        </div>
        <div className="covid-illustration">
          <img src="./static/covid-illustration.png" alt="covid-illustration" />
        </div>
      </div>
    </div>
  );
};

export default index;
