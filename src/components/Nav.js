import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <table className="titlebar">
        <tr className="tr">
          <td>
            <img width="150" src="movie.jpeg" alt="app icon" />
          </td>
          <h2 className="title">MovieFinder</h2>
        </tr>
      </table>
    </nav>
  );
};

export default Nav;
