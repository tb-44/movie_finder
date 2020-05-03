import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="titlebar">
        <div>
          <img width="150" src="movie.jpeg" alt="app icon" />
        </div>
        <h2 className="title">MovieFinder</h2>
      </div>
    </nav>
  );
};

export default Nav;
