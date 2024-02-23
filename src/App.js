import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndianTourism from "./Components/Indian Tourism/Indian-Tourism";
import TourPackages from "./Components/Packages/Tour-Packages";
import PlacesToVisits from "./Components/Places To Visit/Places-To-Visit";
import TourOffers from "./Components/Tour Offers/Tour-Offers";
import ContactUs from "./Components/Contact-us/Contact-Us";
import Login from "./Components/Topbar/Login/Login";
import SignUp from "./Components/Topbar/Sign-Up/Sign-Up";
import MainFile from "./Components/MainFile";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <MainFile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#Indian-Tourism" element={<IndianTourism />} />
        <Route path="/#Tour-Packages" element={<TourPackages />} />
        <Route path="/#Places-To-Visit" element={<PlacesToVisits />} />
        <Route path="/#Tour-Offers" element={<TourOffers />} />
        <Route path="/#Contact-Us" element={<ContactUs />} />
        <Route path="/#Login" element={<Login />} />
        <Route path="/#Sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
