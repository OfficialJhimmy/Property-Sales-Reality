import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase-config";
import { useParams } from "react-router-dom";
import { BiArea } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import PropertyMap from "../../components/Map/PropertyMap";
import Navbar from "../../components/Navigation/Navbar";

function PropertyDetails() {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const propertyCollectionRef = doc(db, "properties", id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getProperty = () => {
      const data = getDoc(propertyCollectionRef).then((doc) => {
        // setProperties(doc.data(), doc.id);
        setProperties(Array(doc.data()));
      });
    };
    getProperty();
  }, [propertyCollectionRef]);
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Property Details" />
          <Navbar />
          <section>
            {properties.map((property) => (
              <div key={property.id} className="propertydetails__section">
                <div className="propertydetails__top">
                  <div className="details__img">
                    <img src={property.imageURL} alt="our property" />
                  </div>
                  <div className="details__info">
                    <div className="details__title">
                      <div className="details__title--id">
                        <h2 className="property-heading">{property.title}</h2>
                      </div>
                      <div className="details__title--id-2">
                        <p className="property__id">{id}</p>
                      </div>
                    </div>
                    <h2 className="property-price-heading">
                      &#x20A6; {property.price}
                    </h2>
                    <div className="details__icons">
                      <div className="details__icons--box">
                        <h2 className="heading-secondary">Area:</h2>
                        <BiArea className="details__svg" />{" "}
                        <p>{property.area}</p>
                      </div>
                      <div className="details__icons--box">
                        <h2 className="heading-secondary">Bedroom:</h2>
                        <IoIosBed className="details__svg" />
                        <p>{property.bedroom}</p>
                      </div>
                      <div className="details__icons--box u-icon-stand">
                        <h2 className="heading-secondary">Bathroom:</h2>
                        <FaShower className="details__svg" />
                        <p>{property.bathroom}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="propertydetails__bottom">
                  <h2 className="heading-secondary">
                    {property.title}'s Description
                  </h2>
                  <p>{property.description}</p>
                </div>
                <div className="property__map">
                  <PropertyMap property={property} />
                </div>
                <div className="property__disclaimer">
                  <h2 className="heading-secondary">
                    This property consists of an advertisement. Property Sales
                    Reality only serves as a medium for the advertisement of
                    this property. PropertySalesReality is only communicating
                    this property offer and is not responsible for selling the
                    property. Property Sales Reality neither warrants nor is
                    making any representations with respect to properties or
                    offers listed on the website.
                  </h2>
                </div>
              </div>
            ))}
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default PropertyDetails;
