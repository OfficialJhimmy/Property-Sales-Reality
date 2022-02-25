import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="navbar-heading">Property Sales Reality</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/properties">Explore All</Link>
        </li>
        <li>
          <Link to="/for-sale">For Sale</Link>
        </li>
        <li>
          <Link to="/for-rent">For Rent</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <HiOutlineMenuAlt4 size={25} style={{ color: "#181618" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
