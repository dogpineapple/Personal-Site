import React from "react";
import "./AboutHeader.css";
import * as monhunImg from "../images/monhun.JPG";
import * as sample1 from "../images/princessmike.png";
import * as sample2 from "../images/joooditransparent.png";

function AboutHeader() {

  return (
    <div className="AboutHeader">
      <div className="AboutHeader-profilepic-cont">
        <img className="AboutHeader-profilepic" src={monhunImg} alt="monhun.png" />
        <p className="AboutHeader-profilepic-subtitle">*nervous laughs*</p>
      </div>
      <div className="AboutHeader-background">
        <h1>About <span role="img" aria-label="sunflower">🌻</span> </h1>
        <p>My name is Dingren Liang, but please call me <span className="AboutHeader-name">Diana</span>!</p>
        <p>I studied Full-stack Web Development at <span className="AboutHeader-rithm">Rithm School</span>, based in San Francisco (Aug 2020/Cohort R16).</p>
        <p>Before I started my journey with web development, I graduated from UC Davis with a B.S. in Global Disease Biology with a concentration. At UC Davis, I was a research intern at a grape pathology lab in UC Davis, where I was introduced to R for data analysis.
        Through R, I began to consider programming more seriously and it gave me an idea to take an Introduction to C Programming in my last year of college. The sense of achievement of being able to solve a difficult problem and being able to see how developing applications 
        can create so much impact and fun would become the reason why I love programming.</p>
        <p>Other than code, I enjoy playing video games, drawing, and watching anime! Some of my favorite games are League of Legends, MapleStory, and Dance Dance Revolution.</p>
        <section className="AboutHeader-sample">
        <p>Here are two of my most recent illustrations!</p>
          <img className="AboutHeader-sample-art" src={sample1} alt="sample1" />
          <img className="AboutHeader-sample-art" src={sample2} alt="sample2" />
        </section>
      </div>
    </div>
  )
}

export default AboutHeader;