import React, { useEffect } from "react";
import "./index.css";
import Image6 from "../../assets/images/bg-banner6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const HelpingPeople = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="section_4">
      <div data-aos="fade-up" className="section_4_title">
        <h1>
          We've been Helping People Get Their Dream Homes For More Than A Decade
          Now
        </h1>
      </div>

      <div className="section_4_content">
        <div data-aos="zoom-in" className="image_container">
          <img src={Image6} alt="building" />
        </div>

        <div className="info">
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available at Property Sales Reality!
          </p>

          <div className="rows">
            <div className="row_1">
              <div className="fact">
                <h2>500</h2>
                <h3>Completed Houses</h3>
              </div>

              <div className="fact">
                <h2>2,500</h2>
                <h3>Rented Houses </h3>
              </div>
            </div>

            <div className="row_1">
              <div className="fact">
                <h2>10,000</h2>
                <h3>Sold Houses</h3>
              </div>

              <div className="fact">
                <h2>12,000</h2>
                <h3>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingPeople;
