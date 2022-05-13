import React from "react";
import fish_image from "../assets/utils/home-fish.png";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="img_wrapper">
        <img src={fish_image} alt="fish" className="banner_img" />
      </div>
      <div className="banner_text">
        <h1>HOW IT WORKS</h1>
        <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
      </div>
    </div>
  );
};

export default Banner;
