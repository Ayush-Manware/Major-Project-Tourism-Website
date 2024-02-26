import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const IndianTourism = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://tourism-backend-file.onrender.com/")
        .then((res) => setData(res.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="indian-tourism-container">
      <img
        src="https://th.bing.com/th/id/OIP.RDFSH2sML4JwWj1pxaz1OQHaDg?w=318&h=165&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt="Banner"
        className="indian-tourism-banner"
      />

      <h1>Tourism of India</h1>
      <p>
        India, with its kaleidoscope of cultures, landscapes, and traditions,
        stands as a beacon for travelers worldwide. From the snow-capped peaks
        of the Himalayas to the sun-kissed beaches of Goa, Indian tourism offers
        a diverse tapestry of experiences. The country's rich history, spanning
        thousands of years, is showcased in its magnificent monuments such as
        the Taj Mahal, Amber Fort, and Qutub Minar. Furthermore, India's
        spiritual legacy draws millions of pilgrims to sacred sites like
        Varanasi, Rishikesh, and Amritsar. The vibrant cities of Delhi, Mumbai,
        and Kolkata pulsate with energy, offering a glimpse into modern India's
        dynamic lifestyle. Wildlife enthusiasts flock to national parks like
        Ranthambore and Jim Corbett in pursuit of rare glimpses of tigers and
        elephants. Additionally, India's culinary landscape is a feast for the
        senses, with each region boasting its own distinct flavors and
        delicacies. The warmth and hospitality of its people leave a lasting
        impression, as visitors are welcomed into the homes of locals with open
        arms. Whether exploring ancient ruins, embarking on a spiritual journey,
        or savoring delectable cuisine, India promises an unforgettable
        adventure for every traveler.
      </p>

      <div className="dynamic-cards-div">
        {data.map((item, index) => {
          return (
            <div className="indian-tourism-card" key={index}>
              <img src={item.stateImage} alt="State" className="state-image" />
              <h1>{item.state}</h1>
              {item.cities.map((city, cityindex) => {
                return (
                  <div className="indian-tourism-cities" key={cityindex}>
                    <img src={city.image} alt="city" className="cities-image" />
                    <h1>{city.name}</h1>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndianTourism;
