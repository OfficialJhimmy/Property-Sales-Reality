import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <ul className="brand">
          <li>
            <span>Property Sales Reality</span>
          </li>
          <li>
            <span>LAGOS, NG</span>
          </li>
          <li>
            <span>Call us: +234 905 749 2540</span>
          </li>
          <li>
            <div className="socials">
              <AiOutlineInstagram className="socials__icon" />

              <AiOutlineFacebook className="socials__icon" />

              <AiOutlineTwitter className="socials__icon" />
            </div>
          </li>
        </ul>

        <ul className="services">
          <li>
            <span>Properties</span>
          </li>
          <li>
            <Link to="/properties">Explore</Link>
          </li>
          <li>
            <Link to="/for-sale">For Sale</Link>
          </li>
          <li>
            <Link to="/for-rent">For Rent</Link>
          </li>
        </ul>

        <ul className="support">
          <li>
            <span>Support</span>
          </li>
          <li>
            <Link to="/">FAQ's</Link>
          </li>
          <li>
            <Link to="/">Support Center</Link>
          </li>
          <li>
            <Link to="/">Help Center</Link>
          </li>
        </ul>

        <ul className="subscribe">
          <li>
            <span>Subscribe</span>
          </li>
          <li>
            <p>Subscribe to get the latest new and promo from us</p>
          </li>
          <li>
            <div className="subscribe_input">
              <input
                type="text"
                placeholder="Email Address"
                className="input__sub"
              />
              <button aria-label="Submit">
                <BsArrowRight />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer--copyright">
        <div className="footer--bottom__left">
          <p>&#169;2022. All rights reserved Property Sales Reality.</p>
        </div>
        <div className="footer--bottom__right">
          <p>
            Developed by{" "}
            <a
              href="https://twitter.com/jhimmyofficial"
              target="_blank"
              rel="noreferrer"
            >
              {""}JhimmyOfficial
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
