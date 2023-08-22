import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbars.css"
// import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap//";
import React from "react";

const NavbarComponent = () => {
  return (
    <header>
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="titlebrand">Vian Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-white">
            <Nav.Link href="./movie/popular" >Popular</Nav.Link>
            <Nav.Link href="./movie/top_rate" >Top Rated</Nav.Link>
            <Nav.Link href="./movie/Upcoming" >Upcoming</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default NavbarComponent;
