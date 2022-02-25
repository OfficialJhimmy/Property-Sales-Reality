import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BiArea } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa";
import Button from "../Button/Button";

function PropertyCard({ property }) {
  return (
    <div className="property__card--wrapper">
      <div className="property__card--top">
        <img
          src={property.imageURL}
          alt="One of our Properties for sale"
          className="property__card--img"
        />
      </div>
      <div className="property__card--details">
        <h2 className="property-heading">{property.title}</h2>
        <h2 className="property-price-heading">&#x20A6;{property.price}</h2>
        <div className="property__card--smalldeets">
          <div className="smalldeets-left">
            <div className="smalldeets__icon small-margin-right">
              <BiArea className="property__card--icon" /> <p>{property.area}</p>
            </div>
            <div className="smalldeets__icon small-margin-right">
              <IoIosBed className="property__card--icon" />{" "}
              <p>{property.bedroom}</p>
            </div>
            <div className="smalldeets__icon">
              <FaShower className="property__card--icon" />
              <p>{property.bathroom}</p>
            </div>
          </div>
          <div className="smalldeets-right">
            <Link className="product-card" to={`/properties/${property.id}`}>
              <Button title="View" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
