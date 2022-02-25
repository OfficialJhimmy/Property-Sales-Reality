import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { GrStatusGood } from "react-icons/gr";
import { useParams } from "react-router-dom";
import MetaTag from "../../components/MetaTag/MetaTag";
import Sidebar from "./Sidebar";
import "./admin.css";
import CustomLoader from "../../components/CustomLoader/index";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const categories = ["Buy", "Rent", "Sale"];
  const statusList = ["Hot", "Featured", "Active"];

  const updateProperty = async () => {
    // e.preventDefault();
    const propertyDoc = doc(db, "properties", id);
    const newFields = {
      setCategory,
      setPrice,
      setStatus,
    };
    await updateDoc(propertyDoc, newFields);
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <div className="admin__dashboard">
            <MetaTag title="Dashboard - Edit a Property" />

            <Sidebar />

            <div className="admin__dashboard--details">
              <div className="update__property">
                <form className="create__property--form">
                  <div className="admin__input--wrapper">
                    <h2 className="heading-secondary ">Category</h2>
                    <div className="admin__input--container">
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="admin__input"
                      >
                        <option value="">Choose Category</option>
                        {categories.map((cate) => (
                          <option key={cate} value={cate}>
                            {cate}
                          </option>
                        ))}
                      </select>
                      <span className="admin__icon--container">
                        <BiCategory className="admin__update--icon" />
                      </span>
                    </div>
                  </div>

                  <div className="admin__input--wrapper">
                    <h2 className="heading-secondary ">Price</h2>
                    <div className="admin__input--container">
                      <input
                        type="number"
                        placeholder="Price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                        className="admin__input"
                      />
                      <span className="admin__icon--container">
                        <ImPriceTags className="admin__update--icon" />
                      </span>
                    </div>
                  </div>

                  <div className="admin__input--wrapper">
                    <h2 className="heading-secondary ">Status</h2>
                    <div className="admin__input--container">
                      <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="admin__input"
                      >
                        <option value="">Choose Status</option>
                        {statusList.map((sta) => (
                          <option key={sta} value={sta}>
                            {sta}
                          </option>
                        ))}
                      </select>
                      <span className="admin__icon--container">
                        <GrStatusGood className="admin__update--icon" />
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn-width"
                    type="submit"
                    onClick={updateProperty}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditProperty;
