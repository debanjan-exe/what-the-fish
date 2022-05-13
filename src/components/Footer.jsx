import React from "react";
import logo from "../assets/utils/logo.png";

const Footer = () => {
  return (
    <div className="footer_wrapper_main">
      <div className="footer_wrapper">
        <img src={logo} alt="logo" />
        <div className="r">
          <div className="left">
            <h4>Support</h4>
            <h4>About Us</h4>
            <h4>Privacy Policy</h4>
          </div>
          <div className="right">
            <h4>Terms & Conditions</h4>
            <h4>Return & Refund Policy</h4>
            <h4>Shipping & Delivery Policy</h4>
          </div>
        </div>
      </div>
      <p>Sea Basket | All Rights Reserved | 2021 Copyright</p>
    </div>
  );
};

export default Footer;
