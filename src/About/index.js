import React from "react";
import * as monhunImg from "../images/monhun.JPG";
import * as sample1 from "../images/princessmike.png";
import * as sample2 from "../images/joooditransparent.png";

function About() {

  return (
    <div className="About">
      <div className="About-profilepic-cont">
        <img className="About-profilepic" src={monhunImg} alt="monhun.png" />
        <p className="About-profilepic-subtitle">*nervous laughs*</p>
      </div>
      <div className="About-background">
        <h1>About <span role="img" aria-label="sunflower">🌻</span> </h1>
        <p>My name is Dingren Liang, but please call me Diana!</p>
        <p>I studied full-stack development through <span className="About-rithm">Rithm School's full-stack web development program</span>, based in San Francisco (completed in Aug 2020).</p>
        <p>Before I started my journey with web development, I graduated from UC Davis with a B.S. in Global Disease Biology. At UC Davis, I was a research intern at a grape pathology lab in UC Davis, where I was introduced to R for data analysis.
        I realized that R programming felt more fulfilling than lab research work and that realization inspired me to take an Introduction to C Programming in my last year of college. The sense of achievement of being able to solve a difficult problem would become the reason why I love programming.</p>
        <p>Other than code, I enjoy playing video games, drawing, and watching anime! Some of my favorite games are League of Legends, FFXIV, MapleStory, and DDR.</p>
        <section className="About-sample">
        <p>Here are two of my most recent illustrations!</p>
          <img className="About-sample-art" src={sample1} alt="sample1" />
          <img className="About-sample-art" src={sample2} alt="sample2" />
        </section>
      </div>
    </div>
  )
}

export default About;