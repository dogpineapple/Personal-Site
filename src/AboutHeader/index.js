import React from "react";
import "./AboutHeader.css";

function AboutHeader() {

  return (
    <div className="AboutHeader">
      <div className="AboutHeader-profilepic-cont">
        <img className="AboutHeader-profilepic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/118310445_3225084867545741_7664178207222972142_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=jcXIQKHUWDUAX9OTXaT&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=b14a413a916a8ac2fd80dbaa5bf411ad&oe=5F648340" alt="kaori.png"/>
        <p className="AboutHeader-profilepic-subtitle">*nervous laughs*</p>
      </div> 
      <div className="AboutHeader-background">
        <h1>About -</h1>
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