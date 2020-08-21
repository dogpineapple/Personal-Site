import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects';
import Contact from '../Contact';
import Landing from '../Landing';
import About from '../About';
import TopNaviBar from '../TopNaviBar';
import './App.css';

function App() {
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <TopNaviBar />
        <div className="App-container"><Landing /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="about"></span>
        </div>
        <div className="App-container"><About /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="projects"/>
        </div>
        <div className="App-container"><Projects /></div>
        <div className="App-divider">
          <span className="App-divider-line" id="contact"/>
        </div>
        <div className="App-container"><Contact /></div>
      </BrowserRouter>
    </div>
  );
}

export default App;