import React from "react";
import "./index.css";

function Button({ title }) {
  return (
    <>
      <button className="btn">{title}</button>
    </>
  );
}

export default Button;
