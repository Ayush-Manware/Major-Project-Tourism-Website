// Dynamic.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Dynamic = () => {
  const id = Number(useParams().id);
  const navi = useNavigate()

  const [dynamicData, setDynamicData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tourism-backend-file.onrender.com/`)
      .then((res) => {
        setDynamicData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!dynamicData) {
    return <div>Loading...</div>;
  }

  const filter = dynamicData.filter((f) => f.id === id);


  return (
    <div className="dynamic-container">
      {filter.map((item, index) => {
        return (
          <div className="dynamic-div" key={index}>
            <img
              src={item.stateImage}
              alt="State-Image"
              className="state-image-dynamic"
            />
            <h1 className="state-name-dynamic">{item.state}</h1>
            <div className="dynamic-cities">
              {item.cities.map((city, cityIndex) => (
                // <Link to={`/city/${city.id}`} key={cityIndex}>
                 <div className="city-card" key={cityIndex}>
                    <img src={city.image} alt="City Image" className="city-image" />
                    <h1 className="city-name">{city.name}</h1>
                    {city.places.map((places, placesIndex)=>{
                        return(
                            <div className="places" key={placesIndex} >
                                <img src={places.image} alt="places" className="places-image" />
                                <h1>{places.name}</h1>
                                {/* <p>{places.discription}</p> */}
                            </div>
                        )
                    })}
                 </div>
                // </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dynamic;
