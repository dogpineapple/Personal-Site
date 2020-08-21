import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './TopNaviBar.css'

function TopNaviBar() {
  return (
    <nav className="TopNaviBar">
      <NavLink className="TopNaviBar-left" activeClassName="selected" exact smooth to="/#top">
        Top
      </NavLink>
      <span className="TopNaviBar-right">
        <NavLink activeClassName="selected" exact smooth to="/#about">
          About Diana
        </NavLink>
        <NavLink activeClassName="selected" exact smooth to="/#projects">
          Projects
        </NavLink>
        <NavLink className="Navbar-signup" exact smooth to="/#contact">
          Contact
        </NavLink>
        <a href="https://drive.google.com/file/d/1eQjO364AMVgQIJDect-Gg_XDbRInDZm0/view?usp=sharing">
          Resume
        </a>
      </span>
    </nav>
  );
};

export default TopNaviBar;