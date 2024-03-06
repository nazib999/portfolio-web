import React from "react";
import "./Intro.scss";
import img from "../../images/profile.jpg";
import down from "../../images/down.png";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Md Nazib Ullah</h1>
          <h3>
            A Front-End Developer <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
