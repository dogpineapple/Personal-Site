import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Projects from '../Projects';
import Contact from '../Contact';
import Landing from '../Landing';
import About from '../About';
import TopNaviBar from '../TopNaviBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNaviBar />
        <div className="App-container"><Landing /></div>
        <div className="App-divider">
          <span className="App-divider-line"></span>
        </div>
        <div className="App-container"><About /></div>
        <div className="App-divider">
          <span className="App-divider-line"/>
        </div>
        <div className="App-container"><Projects /></div>
        <div className="App-divider">
          <span className="App-divider-line"/>
        </div>
        <div className="App-container"><Contact /></div>
      </BrowserRouter>
    </div>
  );
}

export default App;



{/* <BrowserRouter>
<TopNaviBar />
<Switch>
  <Route exact path="/about"><About /></Route>
  <Route exact path="/projects"><Projects /></Route>
  <Route exact path="/contact"><Contact /></Route>
  <Route exact path="/"><Landing /></Route>
  <Redirect to="/" />
</Switch>
</BrowserRouter> */}