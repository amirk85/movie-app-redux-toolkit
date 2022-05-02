import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import SearchBox from "./SearchBox/SearchBox";

import "./NavBar.css";
export default function NavBar() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand className="app_title">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/watchlist">
              Watchlist
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SearchBox />
    </Navbar>
  );
}
