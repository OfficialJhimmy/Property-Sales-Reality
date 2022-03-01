import React, { useEffect } from "react";
import "./index.css";
import Image3 from "../../assets/images/image  3.jpg";
import ButtonArrow from "../Button/ButtonArrow.jsx";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="section_2">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="section_2_image_container"
      >
        <img src={Image3} alt="building2" />
      </div>

      <div data-aos="fade-up" className="section_2_slogan">
        <h2>
          Whether You're Buying, Selling Or Renting, We Can Help You Move
          Forward
        </h2>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="selection"
      >
        <div className="buy">
          <h3>Buy a home</h3>
          <p>
            Find your place with and immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>

          <Link to="/properties">
            <ButtonArrow title="Explore now" />
          </Link>
        </div>

        <div className="rent">
          <h3>Rent a home</h3>
          <p>
            We're creating a seasmless online expirience - from shopping on the
            largest rental network , to applying , to paying rent.
          </p>
          <Link to="/for-rent">
            <ButtonArrow title="Explore now" />
          </Link>
        </div>

        <div className="sell">
          <h3>Sell a home</h3>
          <p>
            Wether you get a cash offer throught Real Offers or choose to sell
            traditionally, we can help you navigate a successful sale.
          </p>
          <Link to="/for-sale">
            <ButtonArrow title="Explore now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
