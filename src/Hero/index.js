import React from "react";
import "./Hero.css";


function Hero() {
  const OWL = "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/17426035_1363415940410325_1423941097164729388_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=7-GuvLROnqMAX9yRV_K&_nc_ht=scontent-sjc3-1.xx&oh=6f34e4421a515a93464d0fade6afe1aa&oe=5F66C862";
  const PRO = "https://i.imgur.com/mRF0W1w.jpg";
  return (
    <div className="Hero">
      <div className="Hero-intro">
        <p className="Hero-greeting">Hello!</p> 
        <p className="Hero-self">
          I'm Diana, a Fullstack Software Engineer.
          <br/>
          From San Francisco, California <span role="img" aria-label="waterwave">🌊</span>
        </p>
      </div>
      <div className="Hero-image-container">
        <img className="Hero-image" src={PRO} alt="portrait" />
      </div>
    </div>
  )
}


export default Hero;