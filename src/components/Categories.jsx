import React from "react";
import CategoriesBox from "./CategoriesBox";
import fish1 from "../assets/utils/fish1.png";
import fish2 from "../assets/utils/fish2.png";
import fish3 from "../assets/utils/fish3.png";

const Categories = ({ categories }) => {
  return (
    <div className="categories_wrapper">
      <h1>CATEGORIES</h1>
      <div className="category_boxes">
        {categories.map((cat) => (
          <CategoriesBox fish_img={cat.img_url} c_name={cat.name} id={cat.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
