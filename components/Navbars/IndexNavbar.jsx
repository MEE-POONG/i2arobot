import React from "react";
import Link from "next/link";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Navbar className="header-area header-sticky wow slideInDown" expand="lg">
        <Container >
          <Navbar.Brand href="#">
            <Image src={'images/iodesign.png'} alt="logo-nav" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="main-nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">gallery</Nav.Link>
              <Nav.Link href="/catalog">catalog</Nav.Link>
              <div className="main-red-button-hover">
                <Nav.Link href="/contact">Contact Us Now</Nav.Link>
              </div>
            </Nav>
            {/* <Nav
                  className="main-nav"
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
