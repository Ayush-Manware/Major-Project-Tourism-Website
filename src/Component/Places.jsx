import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Places = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://tourism-backend-file.onrender.com/")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="places">
      <div className="places-flex">
        {data.map((item, index) => {
          return (
            <div className="places-cards" key={index}>
              <h3>{item.state}</h3>
              <img
                src={item.stateImage}
                alt="state"
                className="place-state-image"
              />

              {item.cities.map((city, cityindex) => {
                return (
                  <p>
                    <i className="fa-solid fa-angles-right"></i>
                    {city.name}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;
