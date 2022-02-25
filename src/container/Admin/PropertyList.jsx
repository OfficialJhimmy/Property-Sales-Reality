import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader";
import MetaTag from "../../components/MetaTag/MetaTag";

const PropertyList = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const propertyCollectionRef = collection(db, "properties");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertyCollectionRef);

      setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProperties();
  }, [propertyCollectionRef]);

  // const deleteProductHandler = async (id) => {
  //   const propertyDoc = doc(db, "properties", id);
  //   await deleteDoc(propertyDoc);
  // };

  const columns = [
    { field: "id", headerName: "Property ID", minWidth: 200, flex: 0.5 },

    {
      field: "title",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="u-align-items-icon">
            <Link to={`/admin/property/${params.getValue(params.id, "id")}`}>
              <FiEdit className="admin__change--icon" />
            </Link>

            {/* <button onClick={() => deleteProductHandler(id)}>
              <AiTwotoneDelete className="admin__change--icon" />
            </button> */}
          </div>
        );
      },
    },
  ];

  const rows = [];

  properties &&
    properties.forEach((item) => {
      rows.push({
        id: item.id,
        location: item.location,
        price: item.price,
        title: item.title,
      });
    });
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="ADMIN - Property List" />
          <div className="admin__dashboard">
            <Sidebar />
            <div className="admin__list--container">
              <h2 className="heading-primary productListHeading">
                All Products
              </h2>

              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PropertyList;
