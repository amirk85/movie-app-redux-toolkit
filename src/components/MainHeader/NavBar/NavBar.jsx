import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <nav className="nav__container">
      <h2 className="app_title">Movie App</h2>
      <ul className="nav_list">
        <li>
          <NavLink className="home_link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
      </ul>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item className="dd_link">All</NavDropdown.Item>
        <NavDropdown.Item className="dd_link">Series</NavDropdown.Item>
        <NavDropdown.Item className="dd_link">Movies</NavDropdown.Item>
      </NavDropdown>
    </nav>
  );
}
