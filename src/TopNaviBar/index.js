import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './TopNaviBar.css'

function TopNaviBar() {
  const RESUME_URL = "https://drive.google.com/file/d/1OqgITW2aUGPUk8vtFsKeJJKLEqH-AcB5/view?usp=sharing";
  return (
    <nav className="TopNaviBar">
      <NavLink className="TopNaviBar-left" activeClassName="selected" exact smooth to="/#top">
        Diana Liang
      </NavLink>
      <span className="TopNaviBar-right">
        <NavLink activeClassName="selected" exact smooth to="/#about">
          About
        </NavLink>
        <NavLink activeClassName="selected" exact smooth to="/#projects">
          Projects
        </NavLink>
        <NavLink className="Navbar-signup" exact smooth to="/#contact">
          Contact
        </NavLink>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </span>
    </nav>
  );
};

export default TopNaviBar;