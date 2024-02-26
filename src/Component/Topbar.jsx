import React from "react";
import logo from "./tourism-logo.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (

    <div className="topbar">
      <Link to={"/"}>
        <img src={logo} alt="#logo" className="logo-img" />
      </Link>

      <div className="topbar-right">
        <h3>Email : ayushmanware19@gmail.com</h3>
        <h3>Contact : 7470926977</h3>
        <Link to={"/Login"} className="h3">Login</Link>
        <Link to={"/Sign-up"} className="h3">Sign up</Link>
      </div>
    </div>
  );
};

export default Topbar;
