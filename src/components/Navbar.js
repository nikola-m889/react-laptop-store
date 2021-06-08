import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../styled/Navigation";
import { StoreButton } from "../styled/StoreButton";

import logo from "../logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const activateMenu = () => {
    setClick(!click);
  };

  return (
    <Navigation>
      <div className="nav-left">
        <div
          className="rmenu"
          onClick={() => {
            activateMenu();
          }}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <ul className="nav-menu">
        <div className={click ? "links active" : "links"}>
          <div className="nav-links">
            <Link
              to="/"
              className="link"
              onClick={() => {
                activateMenu();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="link"
              onClick={() => {
                activateMenu();
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="link"
              onClick={() => {
                activateMenu();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
        <Link to="/cart" className="link">
          <StoreButton>
            <span className="s1"></span>
            <i className="fas fa-cart-plus">
              <span>Cart</span>
            </i>
          </StoreButton>
        </Link>
      </ul>
    </Navigation>
  );
}
