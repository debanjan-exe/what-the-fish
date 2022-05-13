import React from "react";

const CategoriesBox = ({ fish_img, c_name }) => {
  return (
    <div className="category_box_wrapper">
      <img src={fish_img} alt="fish" className="category_box_img" />
      <h3 className="category_box_title">{c_name}</h3>
    </div>
  );
};

export default CategoriesBox;
