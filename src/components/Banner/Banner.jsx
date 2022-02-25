import React from "react";
import BannerSlider from "./BannerSlider";
import "./Banner.css";
import ButtonArrow from "../Button/ButtonArrow";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner__container">
        <div className="banner__content">
          <div className="welcome__text">
            <h1>
              Let's Help You Find
              <br />
              Your Dream Home
            </h1>
            <p>
              Good real estate where else, if not Property Sales Reality. We
              help you find a home of your taste and need. We provide a complete
              service for the or the sale, purchase or rental of real estate.
            </p>
            <Link to="/properties">
              <ButtonArrow title="Get Started" />
            </Link>
          </div>
          <div className="banner__stats">
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">1200+</h2>
              <p>Premium Product</p>
            </div>
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">4500+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">240+</h2>
              <p>Award Wins</p>
            </div>
          </div>
        </div>

        <div className="banner__slider">
          <BannerSlider />
        </div>
      </div>
    </>
  );
}

export default Banner;
