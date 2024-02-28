import React, { useState } from "react";
import logo from "./tourism-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  // Function to handle logout
  const handleLogout = () => {
    axios.post("/logout")
    setIsLoggedIn(true)
    navigate("/")
  };

  return (
    <div className="topbar">
      <Link to={"/"}>
        <img src={logo} alt="#logo" className="logo-img" />
      </Link>

      <div className="topbar-right">
        <h3>Email : ayushmanware19@gmail.com</h3>
        <h3>Contact : 7470926977</h3>
        {isLoggedIn ? (
          <>
            <Link to={"/"} className="h3" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/Login"}  className="h3" data={{isLoggedIn,setIsLoggedIn}}>
              Login
            </Link>
            <Link to={"/Sign-up"} className="h3" data={{isLoggedIn,setIsLoggedIn}}>
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
