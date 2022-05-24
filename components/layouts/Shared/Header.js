/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

const Header = ({ isFixed }) => {
  const [scroll, setScroll] = useState(false);
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={scroll ? "header scroll" : "header"}
      style={isFixed ? { position: "fixed", zIndex: "1" } : {}}
    >
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <a className="title" href="#home">
              Greeting, I'm Linh
            </a>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <h5 className="title is-5">Senior Frontend Developer</h5>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="#home">
              Home
            </a>
            <a className="navbar-item" href="#skill">
              Skill
            </a>
            <a className="navbar-item" href="#experience">
              Experience
            </a>
            <a className="navbar-item">Portforlio</a>
            <a className="navbar-item">Blogs</a>
            <a className="navbar-item">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
