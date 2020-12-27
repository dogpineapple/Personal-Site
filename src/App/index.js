import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects';
import Contact from '../Contact';
import Hero from '../Hero';
import About from '../About';
import TopNaviBar from '../TopNaviBar';
import * as noscrollCat from "../images/noscrollcat.png";
import * as scrollCat from "../images/scrollcat.png";

function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function onScroll(evt) {
      setIsScrolling(true);
      setTimeout(() => { setIsScrolling(false) }, 700);
    }

    window.addEventListener('scroll', onScroll);

    return function cleanUp() {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="App" id="top">
      <BrowserRouter>
        <TopNaviBar />
        <div className="App-container"><Hero /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="about"></span>
        </div>
        <div className="App-container"><About /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="projects" />
        </div>
        <div className="App-container"><Projects /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="contact" />
        </div>
        <div className="App-container"><Contact /></div>
        <img className="App-scrollcat" src={isScrolling ? scrollCat : noscrollCat} alt="scrollcat" />
      </BrowserRouter>
    </div>
  );
}

export default App;