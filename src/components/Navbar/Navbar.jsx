import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <img
          src="./static/covid-logo.png"
          alt="covid-logo"
          className="covid-logo"
        />
      </Link>
      <ul className="flex-wrap">
        <li className="navlist-item text">
          <Link to="/home">
            <h5>Cases</h5>
          </Link>
        </li>
        <li className="navlist-item">
          <Link to="/auth">
            <h5 className="button">Login</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
