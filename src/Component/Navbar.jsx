import React from 'react'
import { Link } from 'react-router-dom'
/* https://tourism-backend-file.onrender.com/ */


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/Indian-Tourism"}>Indian Tourism</Link>
      <Link to={"/Tour-Packages"}>Tour Packages</Link>
      <Link to={"/Places-To-Visit"}>Places To Visit</Link>
      <Link to={"/Tour-Offers"}>Tour Offers</Link>
      <Link to={"/Contact-Us"}>Contact Us</Link>
    </div>
  )
}

export default Navbar