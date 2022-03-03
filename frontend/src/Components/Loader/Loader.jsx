import React from "react";
import "./Loader.css";
import imgs from "./preloader.gif";

const Loader = () => {
  return (
    // <div className="loadingPage">
    //   <div className="loadingCircle"></div>
    // </div>
    <div class="loader-container">
      <img draggable="false" src={imgs} alt=""/>
    </div>
  );
};

export default Loader;
