import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import PropertyCard from "../../components/Property/PropertyCard";
import Footer from "../../components/Footer/Footer";
import { db } from "../../utils/firebase-config";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";

const ForSale = () => {
  const [forSale, setForSale] = useState([]);
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
    const saleCollectionRef = collection(db, "properties");

    const q = query(
      saleCollectionRef,
      where("category", "==", "Sale"),
      orderBy("id", "asc"),
      limit(9)
    );

    const getSale = async () => {
      const data = await getDocs(q);

      const isCollectionEmpty = data.size === 0;
      if (!isCollectionEmpty) {
        const lastDoc = data.docs[data.docs.length - 1];
        setForSale(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };
    getSale();
  }, []);

  const fetchMore = () => {
    setLoading(true);
    const saleCollectionRef = collection(db, "properties");

    const q = query(
      saleCollectionRef,
      where("category", "==", "Sale"),
      orderBy("id", "asc"),
      startAfter(lastDoc),
      limit(6)
    );

    const getSale = async () => {
      const data = await getDocs(q);
      const isCollectionEmpty = data.size === 0;
      if (!isCollectionEmpty) {
        const lastDoc = data.docs[data.docs.length - 1];
        setForSale(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
      <>
        <MetaTag title="Available Properties For Sale" />
        <Navbar />
        <section>
          <div className="section-pages">
            <div className="property__card--container">
              {forSale &&
                forSale.map((property) => (
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
                {/* {isEmpty && (
                    <h2 className="heading-primary">End of the page 😢</h2>
                  )} */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    </>
  );
};

export default ForSale;
