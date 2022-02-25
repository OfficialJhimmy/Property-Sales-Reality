import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function ButtonArrow({ title }) {
  return (
    <div>
      <button className="btn-arrow">
        {title}
        <span>
          <FaLongArrowAltRight className="btn-icon" />
        </span>
      </button>
    </div>
  );
}

export default ButtonArrow;
