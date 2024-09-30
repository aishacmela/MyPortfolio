import React, { useState } from "react";
import logo from "./Images/logo.png";
import "./Header.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo img-fluid" alt="Ayisha's logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                title="Homepage"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about.html" title="About Ayisha">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/work.html" title="Ayisha's work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact.html"
                title="Contact Ayisha"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
