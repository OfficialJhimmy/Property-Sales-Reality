import React, { useEffect } from "react";
import "./index.css";
import Clock from "../../assets/icons/clock-dynamic-premium.png";
import Lock from "../../assets/icons/lock-dynamic-color.png";
import Shield from "../../assets/icons/sheild-dynamic-color.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Grid3x3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="parent">
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Shield} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">Professional Company</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Clock} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">24 Hours Consultation</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Lock} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">Reliability</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid3x3;
