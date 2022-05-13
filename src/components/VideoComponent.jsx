import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  return (
    <div className="video_component_wrapper">
      <h1>A GLANCE AT OUR PRODUCT</h1>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=827QFRWNgFw?controls=0&showinfo=0"
        className="react-player"
        width="100%"
        height="100%"
        style={{ borderRadius: "50px", overflow: "hidden" }}
      />
    </div>
  );
};

export default VideoComponent;
