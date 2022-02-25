import React from "react";
import RingLoader from "react-spinners/RingLoader";
function CustomLoader({ loading }) {
  return (
    <div className="loading">
      <RingLoader color={"#83B2E7"} loading={loading} size={60} />
    </div>
  );
}

export default CustomLoader;
