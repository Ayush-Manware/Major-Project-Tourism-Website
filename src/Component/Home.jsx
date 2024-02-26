import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import ImageSlider from "./Slider/Slider";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://tourism-backend-file.onrender.com/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <ImageSlider />

      <div className="home-content">
        <h1>The India Tourism - Guided & Customized Private Tour to India</h1>{" "}
        <hr /> <br />
        <p>
          <b>India Tourism</b> is an unequivocally welcoming nation, that
          bestows reverence and love for its visitors. A nation which follows
          only one belief blindly <b>“Atithi Devo Bhava”</b> which means “Guest
          is equivalent to God”. There is so much to discover, a land with
          varied civilizations, deep-rooted ideologies, uncountable faiths, that
          is also related to particular historical stories. <b>India Tourism</b>{" "}
          provides an outstanding rich heritage, tasty cuisines from numerous
          parts of the world, a multitude of enticing sightseeing spots, and
          much more while visiting this beautiful country. An avid traveler will
          simply find his place here.
          <br />
          <br />
          <b>Culture - India Tourism</b>
          <br />
          India is the country that quickly and last experiences on their mind
          get into one's heart. Perhaps there is no other nation with such a
          rich mixture of races, vivid colors, language, food, a land overloaded
          with vibr/ancy and intense inconsistencies. His country is the
          birthplace of Hinduism, Buddhism, Jainism and Sikhism; People in any
          area can be spotted adopting their own special cultural and religious
          traditions. Yoga is undeniably the biggest destination for spiritual
          visitors, and Rishikesh, situated in Northern India, is commonly
          regarded as the country's Yoga hub. Your trip to India will definitely
          send you goosebumps and a memory like a rollercoaster ride.
          <br />
          <br />
          <b>Architecture of India - India Tourism</b>
          <br />
          India has <b>32 UNESCO World Heritage-listed sites</b> around the
          country, making it an epitome of historical wonders, if we speak about
          the architectural beauty of India has an extensive array of attractive
          forts, palaces, temples and its ruins and shrines as well. India
          itself is an international tourist bundle, they only need to select a
          destination according to their desires and prepare their itinerary. If
          you have a deep urge to discover a wonderland on this planet, then
          pack our bags and come to India, a land that is truly blessed with an
          abundance of natural wonder.
          <br />
          <br />
          <b>Explore India - India Tourism</b>
          <br />
          Well, every part of the world has a different tale to tell, with
          enchanting elegance and majestic culture, Northern India is truly
          blessed, one can get absolutely soaked in valleys and waterfalls and
          lush greenery of Himalayan ranges. The western part of the world has a
          striking beauty of architectural wonder, and what people enjoy about
          this place is the contemporary lifestyle. And we're talking about the
          regions of the Sunderbans or the eastern part of India, well, no one
          can argue that this area is blessed with the scenic beauty of high
          hills, ondulating rivers and waterfalls. Finally, the southern area is
          blessed with planting and foliage loads, an exotic destination in the
          entire world, a combination of enticing beach sites, Tourists continue
          to see hills and waterfalls again and again! There are plenty of great
          reasons to visit India Tourism, so we have already offered a
          mini-tour.
          <br />
          <br />
          <b>Why Travel to India? - India Tourism</b>
          <br />
          Plan a trip once, and you will come to know that this nation
          embellishes exotic and energetic metropolitan conventions with both
          serene and plain village life. Welcoming you to "The Soul of
          Incredible India" with open arms and intriguing taglines such as,{" "}
          <b>"God's Own Country",</b> this country has its own special ways of
          making people fall in love with her!
          <br />
          Foreign tourists who fly to India, You are certainly in for a
          surprise, particularly for the first time. Things can seem a little
          messy, overwhelming, and out of reach before you start to become
          attuned to the way of life in this diverse country. You will better
          plan for the trip ahead by becoming acquainted with the terrain,
          climate, history, languages and other important pieces of knowledge.
          Here are a few specifics that would be helpful.
        </p>
      </div>

      <div className="home-dynamic">
        <h2>Find your Ideal Tour Packages</h2>

        <hr />

        <p>
          Travel in India like nothing you've ever experienced, from the
          magnificence Taj Mahal to the highlights of Kerala, Goa, and India,
          this is a great trip for first-time visitors as it encompasses all of
          the major tourist destinations.
        </p>

        <div className="home-card-container">
          {data.map((item, index) => (
            <Link to={`/Dynamic/${item.id}`} key={index}>
              <div className="state-cards">
                <img src={item.stateImage} alt="Alt" />
                <h1>{item.state}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
