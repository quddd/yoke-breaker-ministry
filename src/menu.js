import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class Menu extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>The Yoke Breaker Ministry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#author">Author</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
