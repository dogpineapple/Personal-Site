import React from "react";
import "./Hero.css";


function Hero() {
  const PRO = "https://i.imgur.com/mRF0W1w.jpg";
  return (
    <div className="Hero">
      <div className="Hero-intro">
        <p className="Hero-greeting typewriter">Hello!</p> 
        <p className="Hero-self">
          I'm Diana, a Fullstack Software Engineer.
          <br/>
          From San Francisco, California <span role="img" aria-label="waterwave">🌊</span>
        </p>
      </div>
      <div className="Hero-image-container">
        <img className="Hero-image" src={PRO} alt="portrait" />
        <div className="Hero-image-square"/>
      </div>
    </div>
  )
}


export default Hero;