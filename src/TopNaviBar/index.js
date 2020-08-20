import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './TopNaviBar.css'

function TopNaviBar() {
  return (
    <nav className="TopNaviBar">
      <NavLink className="TopNaviBar-left" activeClassName="active" exact to="/">
        Top
      </NavLink>
      <span className="TopNaviBar-right">
        <NavLink activeClassName="active" exact to="/about">
          About Diana
        </NavLink>
        <NavLink activeClassName="active" exact to="/projects">
          Projects
        </NavLink>
        <NavLink className="Navbar-signup" exact to="/contact">
          Contact
        </NavLink>
      </span>
    </nav>
  );
};

export default TopNaviBar;