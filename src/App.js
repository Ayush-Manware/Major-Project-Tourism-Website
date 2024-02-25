import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import IndianTourism from "./Component/Indian-Tourism";
import Packages from "./Component/Packages";
import Places from "./Component/Places";
import Offers from "./Component/Offers";
import Contactus from "./Component/Contactus";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import MainFile from "./MainFile";

function App() {
  return (
    <>
    <MainFile/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Indian-Tourism" element={<IndianTourism />} />
        <Route path="/Tour-Packages" element={<Packages />} />
        <Route path="/Places-To-Visit" element={<Places />} />
        <Route path="/Tour-Offers" element={<Offers />} />
        <Route path="/Contact-Us" element={<Contactus />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
