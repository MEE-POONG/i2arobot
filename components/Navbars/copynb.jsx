import React from "react";
import Link from "next/link";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <Image src={'images/iodesign.png'} alt="logo-nav" />
              </a>
              <ul className="nav">
                <Nav className="me-auto">
                  <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="/lawnmower">gallery</a></li>
                  <li className="scroll-to-section"><a href="/catalog">catalog</a></li>
                  <li className="scroll-to-section"><div className="main-red-button-hover"><a href="/contact">Contact Us Now</a></div></li>
                </Nav>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div> */}


      <Navbar bg="light" expand="lg">

        <nav className="main-nav">
          <a href="/" className="logo">
            <Image src={'images/iodesign.png'} alt="logo-nav" />
          </a>
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <ul className="nav row ">
            <Nav className="me-auto row ">
              <li className="scroll-to-section col-2"><a href="/" className="active">Home</a></li>
              <li className="scroll-to-section col-2"><a href="/lawnmower">gallery</a></li>
              <li className="scroll-to-section col-2"><a href="/catalog">catalog</a></li>
              <li className="scroll-to-section col-6"><div className="main-red-button-hover"><a href="/contact">Contact Us Now</a></div></li>
            </Nav>
          </ul>
          {/* </Navbar.Collapse> */}
        </nav>

      </Navbar>
    </header>
  );
}
