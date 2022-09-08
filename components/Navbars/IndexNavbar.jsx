import React from "react";
import Link from "next/link";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <Image src={'images/logo.png'} alt="logo-nav" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#services">Services</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
                <li className="scroll-to-section"><a href="#video">Videos</a></li>
                <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                <li className="scroll-to-section"><div className="main-red-button-hover"><a href="#contact">Contact Us Now</a></div></li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
