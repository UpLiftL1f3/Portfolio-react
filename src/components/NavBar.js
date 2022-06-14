import React from 'react';
import '../pages/css/NavBar.css';
import icon from './assets/hamburgericon.png';

const NavBar = ({ toggle }) => {
  return (
    <header
      className="is-flex is-justify-content-space-between is-align-items-center"
      id=""
    >
      {/* Logo / Name */}
      <div className="logo" id="title">
        <a href="/" style={{ color: 'black', aHover: 'white' }}>
          <h1>Gil Benvenitz</h1>
        </a>
      </div>
      {/* NavBar Elements */}
      <nav className="mr-5" id="desktopNav">
        <a
          style={{ color: 'black', aHover: 'white' }}
          href="/portfolio"
          id="titleLink"
          className="mr-3 ml-3"
        >
          Portfolio
        </a>

        <a style={{ color: 'black' }} href="/resume" className="mr-3 ml-3">
          Resume
        </a>

        <a style={{ color: 'black' }} href="/contact" className="mr-3 ml-3">
          Contact Info
        </a>

        <a style={{ color: 'black' }} href="/about" className="mr-3 ml-3">
          About
        </a>
      </nav>
      {/* MobileNav toggle */}
      <img className="pancake" src={icon} alt="menuicon" onClick={toggle}></img>
    </header>
  );
};

export default NavBar;
