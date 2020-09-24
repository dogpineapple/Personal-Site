import React from "react";
import "./AboutHeader.css";
import * as monhunImg from "../images/monhun.JPG";

function AboutHeader() {

  return (
    <div className="AboutHeader">
      <div className="AboutHeader-profilepic-cont">
        <img className="AboutHeader-profilepic" src={monhunImg} alt="monhun.png"/>
        <p className="AboutHeader-profilepic-subtitle">*nervous laughs*</p>
      </div> 
      <div className="AboutHeader-background">
        <h1>About <span role="img" aria-label="sunflower">🌻</span> </h1>
        <p>My name is Dingren Liang, but please call me Diana!</p>
        <p>I am a recent graduate of <span className="AboutHeader-rithm">Rithm School's full-stack web development program</span>, based in San Francisco (Aug 2020).</p>
        <p>Before I started my journey with web development, I graduated from UC Davis with a B.S. in Global Disease Biology. At UC Davis, I was a research intern at a grape pathology lab in UC Davis, where I was introduced to R for data analysis.
        I realized that R programming felt more fulfilling than lab research work and that realization inspired me to take an Introduction to C Programming in my last year of college. The sense of achievement of being able to solve a difficult problem would become the reason why I love programming.</p>
        <p>Other than programming, I enjoy playing video games and watching anime! Some of my favorite games are League of Legends, MapleStory, and DDR.</p>   
      </div>
    </div>
  )
}

export default AboutHeader;