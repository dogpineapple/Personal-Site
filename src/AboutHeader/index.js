import React from "react";
import * as kaori from "../images/kaoripink.png";
import "./AboutHeader.css";

function AboutHeader() {

  return (
    <div className="AboutHeader">
      <div className="AboutHeader-profilepic-cont">
        <img className="AboutHeader-profilepic" src={kaori} alt="kaori.png"/>
      </div> 
      <div className="AboutHeader-background">
        <h1>About -</h1>
        <p>My name is Dingren Liang, but please call me Diana!</p>
        <p>I am a recent graduate of <span className="AboutHeader-rithm">Rithm School's full-stack web development program</span>, based in San Francisco (Aug 2020).</p>
        <p>I graduated from UC Davis in 2019 with a bachelors in Global Disease Biology. Before I started my journey with web development, I was a research intern at a grape pathology lab in UC Davis and a retail worker at a korean cosmetic brand. Lab work and retail work were almost synonymous with repetitive tasks and because of that, I took Introduction to C Programming in my last year of college. The excitement of being able to solve a problem after struggling would become the reason why I love programming.</p>
        <p>Other than programming, I enjoy playing video games and watching anime! Some of my favorite games are League of Legends, MapleStory, and DDR.</p>   
      </div>
    </div>
  )
}

export default AboutHeader;