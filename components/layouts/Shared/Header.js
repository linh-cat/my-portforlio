/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Basepage from "../Basepage";

const Header = ({ isFixed }) => {
  return (
    <header className="header" style={isFixed ? { position: "fixed" } : {}}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <h1 className="title is-3">Greeting, I'm Linh</h1>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Experience</a>
            <a className="navbar-item">Portforlio</a>
            <a className="navbar-item">Blogs</a>
            <a className="navbar-item">Contact</a>

            <a className="navbar-item">
              <button className="button is-primary">Button</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
