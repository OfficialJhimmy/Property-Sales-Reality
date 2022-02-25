import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase-config";
import PropertyCard from "../../components/Property/PropertyCard";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const propertyCollectionRef = collection(db, "properties");

    const q = query(propertyCollectionRef, orderBy("id", "asc"), limit(9));

    const getProperties = async () => {
      const data = await getDocs(q);

      const isCollectionEmpty = data.size === 0;
      if (!isCollectionEmpty) {
        const lastDoc = data.docs[data.docs.length - 1];
        setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };
    getProperties();
  }, []);

  const fetchMore = () => {
    setLoading(true);
    const propertyCollectionRef = collection(db, "properties");

    const q = query(
      propertyCollectionRef,
      orderBy("id", "asc"),
      startAfter(lastDoc),
      limit(6)
    );

    const getSale = async () => {
      const data = await getDocs(q);
      const isCollectionEmpty = data.size === 0;
      if (!isCollectionEmpty) {
        const lastDoc = data.docs[data.docs.length - 1];
        setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };
    getSale();
  };

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Look Through our Catalogue for new and Luxurious Properties" />
          <Navbar />
          <section>
            <div className="section-pages">
              <div className="property__card--container">
                {properties &&
                  properties.map((property) => (
                    <PropertyCard property={property} key={property.title} />
                  ))}
              </div>
              {loading && <CustomLoader loading={loading} />}
              <div className="pagination__wrapper">
                <div className="buttons-fetch">
                  {!loading && !isEmpty && (
                    <button onClick={fetchMore} className="btn-pagination">
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};

export default Properties;
