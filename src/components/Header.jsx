import React from "react";
import logo from "../assets/utils/logo.png";

const Header = () => {
  return (
    <div className="header_wrapper">
      <img src={logo} alt="logo" className="header_logo" />
      <i className="fa fa-bars"></i>
      <div className="header_right_menu">
        <a href="/"> Category</a>
        <a href="/"> FAQs</a>
        <a href="/"> My Cart</a>
        <button className="login_button">Login</button>
      </div>
    </div>
  );
};

export default Header;
