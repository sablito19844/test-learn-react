import React from "react";
import {NavLink} from "react-router-dom"
import "./nav.css";
const Nav = () => {
  return (
    // test
    <div className="navbar">
      <div className="container">
        <a href="##" className="logo">
          Logo
        </a>
        <ul>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
