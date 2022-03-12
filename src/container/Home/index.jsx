import React, { useState, useEffect } from "react";
import Grid3x3 from "../../components/Grids/Grid3x3";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import { db } from "../../utils/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import PropertyCard from "../../components/Property/PropertyCard";
import "./index.css";
import ButtonArrow from "../../components/Button/ButtonArrow";
import { Link } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import GetStarted from "../../components/GetStarted/index";
import HelpingPeople from "../../components/HelpingPeople/index";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navigation/Navbar";
import "../Properties/index.css";

const Home = () => {
  const [forSale, setForSale] = useState([]);
  const [forRent, setForRent] = useState([]);
  const [forFeatured, setForFeatured] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const saleCollectionRef = collection(db, "properties");

    const q = query(saleCollectionRef, where("category", "==", "Sale"));

    const getSale = async () => {
      const data = await getDocs(q);

      setForSale(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSale();
  }, []);

  useEffect(() => {
    const rentCollectionRef = collection(db, "properties");

    const q = query(rentCollectionRef, where("category", "==", "Rent"));

    const getRent = async () => {
      const data = await getDocs(q);

      setForRent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRent();
  }, []);

  useEffect(() => {
    const statusCollectionRef = collection(db, "properties");

    const q = query(statusCollectionRef, where("status", "==", "Featured"));

    const getStatus = async () => {
      const data = await getDocs(q);

      setForFeatured(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStatus();
  }, []);
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Welcome to Property Sales Reality -- Africa's Number one Property Firm" />

          <Navbar />
          <Banner />
          <section>
            <Grid3x3 />
            <div className="for-section">
              <GetStarted />
            </div>
            <div className="for--section">
              <div className="section-heading">
                <h2 className="heading-secondary">Our Featured Residence 🔥</h2>
                <div className="hide-on-mobile">
                  <Link to="/properties">
                    <ButtonArrow title="Explore now" />
                  </Link>
                </div>
              </div>

              <div className="property__card--container">
                {forFeatured &&
                  forFeatured
                    .slice(0, 6)
                    .map((property) => (
                      <PropertyCard property={property} key={property.title} />
                    ))}
              </div>
              <div className="hide-on-laptop">
                <Link to="/properties">
                  <ButtonArrow title="Explore now" />
                </Link>
              </div>
            </div>
            <div className="for--section">
              <div className="section-heading">
                <h2 className="heading-secondary">
                  Luxury Properties For Sale 🎈
                </h2>
                <div className="hide-on-mobile">
                  <Link to="/for-sale">
                    <ButtonArrow title="Explore now" />
                  </Link>
                </div>
              </div>
              <div className="property__card--container">
                {forSale &&
                  forSale
                    .slice(0, 6)
                    .map((property) => (
                      <PropertyCard property={property} key={property.title} />
                    ))}
              </div>
              <div className="hide-on-laptop">
                <Link to="/for-sale">
                  <ButtonArrow title="Explore now" />
                </Link>
              </div>
            </div>

            <div className="for--section">
              <div className="section-heading">
                <h2 className="heading-secondary">
                  Affordable Properties For Rent 😊
                </h2>
                <div className="hide-on-mobile">
                  <Link to="/for-rent">
                    <ButtonArrow title="Explore now" />
                  </Link>
                </div>
              </div>
              <div className="property__card--container">
                {forRent &&
                  forRent
                    .slice(0, 6)
                    .map((property) => (
                      <PropertyCard property={property} key={property.title} />
                    ))}
              </div>
              <div className="hide-on-laptop">
                <Link to="/for-rent">
                  <ButtonArrow title="Explore now" />
                </Link>
              </div>
            </div>

            <div className="for--section">
              <HelpingPeople />
            </div>
            <Testimonial />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
