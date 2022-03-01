import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const PropertyDetails = lazy(() => import("./PropertyDetails"));

function HomePagePropertyDetails() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Suspense fallback={<CustomLoader loading={loading} />}>
        <PropertyDetails />
      </Suspense>
    </>
  );
}

export default HomePagePropertyDetails;
