import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const ForRent = lazy(() => import("./index"));

function ForRentIndex() {
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
        <ForRent />
      </Suspense>
    </>
  );
}

export default ForRentIndex;
