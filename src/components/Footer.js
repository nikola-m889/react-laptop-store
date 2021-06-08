import React, { Component } from "react";
import { FooterStyle } from "../styled/FooterStyle";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <div className="footer-links">
          <div className="footer-col">
            <img src={logo} alt="logo" />
            <p>
              Fenix Tech is among the nation's leading information technology
              and electronic device suppliers, operating twenty-five large
              stores in major marketsnationwide.{" "}
            </p>
          </div>

          <div className="footer-col">
            <h3>Products/Services</h3>
            <ul>
              <li>
                <Link to="/" className="link2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link2">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link2">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact us</h3>
            <p>
              For all questions about orders or general inquiries please
              contact:
            </p>
            <ul>
              <li>Email: office@fenixtech.com</li>
              <li>Telephone: +1-1412-1232</li>
              <li>Adress: 2645 Elston Avenue, Chicago</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Social media</h3>
            <p>Fenix Tech with you since 2015</p>
          </div>
        </div>
      </FooterStyle>
    );
  }
}
