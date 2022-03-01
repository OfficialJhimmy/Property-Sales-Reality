import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const ForSale = lazy(() => import("./index"));

function ForSaleIndex() {
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
        <ForSale />
      </Suspense>
    </>
  );
}

export default ForSaleIndex;
