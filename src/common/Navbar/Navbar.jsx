import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-TECHNO</div>
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <button className="donate-btntop">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
