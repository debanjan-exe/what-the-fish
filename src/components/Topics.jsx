import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Topics = () => {
  return (
    <div className="topic_wrapper">
      <h1>TOPICS THAT YOU CANT MISS</h1>
      <div className="topic_box_wrapper">
        <h3>TOPICS THAT YOU CANT MISS</h3>
        <p>
          Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
          nisl adipiscing posuere et a. Tincidunt consectetur sapien
          pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
          massa felis, et. Cursus tortor ut fames sapien a vulputate amet
          malesuada.
        </p>
        <a href="/" className="topics_read_more">
          Read more
          <AiOutlineRight />
        </a>
      </div>
      <div className="topic_box_wrapper img2">
        <h3>HOW TO CLEAN/CUT YOUR SEAFOOD</h3>
        <p>
          Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
          nisl adipiscing posuere et a. Tincidunt consectetur sapien
          pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
          massa felis, et. Cursus tortor ut fames sapien a vulputate amet
          malesuada.
        </p>
        <a href="/" className="topics_read_more">
          Read more
          <AiOutlineRight />
        </a>
      </div>
    </div>
  );
};

export default Topics;
