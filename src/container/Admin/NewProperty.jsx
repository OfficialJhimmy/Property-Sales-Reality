import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import { db } from "../../utils/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MetaTag from "../../components/MetaTag/MetaTag";
import "./admin.css";
import Sidebar from "./Sidebar";
import { BsPencilSquare } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { BsFillGeoFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GrStatusGood } from "react-icons/gr";
import { BiArea } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import CustomLoader from "../../components/CustomLoader/index";

const NewProperty = () => {
  const navigate = useNavigate();

  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [bathroom, setBathroom] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [area, setArea] = useState(0);
  const [status, setStatus] = useState("");

  const categories = ["Buy", "Rent", "Sale"];
  const statusList = ["Hot", "Featured", "Active"];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const createProperty = async (e) => {
    const propertyCollectionref = collection(db, "properties");

    e.preventDefault();
    await addDoc(propertyCollectionref, {
      imageURL,
      title,
      description,
      category,
      bathroom: Number(bathroom),
      bedroom: Number(bedroom),
      price: Number(price),
      location,
      longitude: Number(longitude),
      latitude: Number(latitude),
      area: Number(area),
      status,
      createdAt: new Date(),
    })
      .then(() => {
        toast.success("Property created successfully");
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error(error);
        toast.warning("something went wrong");
      });
  };
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Create Product" />
          <div className="admin__dashboard">
            <Sidebar />
            <div className="admin__dashboard--details">
              <h1 className="heading-secondary">Create A New Property</h1>
              <form className="create__property--form">
                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Property Name</h2>
                  <div className="admin__input--container">
                    <input
                      type="text"
                      placeholder="Property Name"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsPencilSquare className="admin__update--icon" />
                    </span>
                  </div>
                </div>

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
                  <h2 className="heading-secondary ">Location</h2>
                  <div className="admin__input--container">
                    <input
                      type="text"
                      placeholder="Location"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <GoLocation className="admin__update--icon" />
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

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Area</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Area"
                      required
                      onChange={(e) => setArea(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BiArea className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Bedroom</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Bedroom"
                      required
                      onChange={(e) => setBedroom(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <FaBed className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Bathroom</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Bathroom"
                      required
                      onChange={(e) => setBathroom(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <FaShower className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Longitude</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Longitude"
                      required
                      onChange={(e) => setLongitude(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsFillGeoFill className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Latitude</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Latitude"
                      required
                      onChange={(e) => setLatitude(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsFillGeoFill className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <ImageUpload setImageURL={setImageURL} />

                <textarea
                  placeholder="Property Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="100"
                  rows="10"
                  className="admin__textarea"
                ></textarea>
                <div className="admin__button">
                  <button
                    id="createProductBtn"
                    type="submit"
                    onClick={createProperty}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewProperty;
