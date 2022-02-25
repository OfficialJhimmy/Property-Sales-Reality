import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import ButtonArrow from "../../components/Button/ButtonArrow";
import "./index.css";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="error404__container">
        <h2 className="heading-primary">
          Oh No! Seems like the page you're looking for doesn't Exist!
        </h2>
        <p>Check out our Properties Catalogues to Find your Dream Home!</p>
        <Link to="/properties">
          <ButtonArrow title="Get Started" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
