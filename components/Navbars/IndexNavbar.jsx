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
                <Image src={'images/iodesign.png'} alt="logo-nav" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="/lawnmower">gallery</a></li>
                <li className="scroll-to-section"><a href="/video">video</a></li>
                <li className="scroll-to-section"><a href="/catalog">catalog</a></li>
                <li className="scroll-to-section"><div className="main-red-button-hover"><a href="/contact">Contact Us Now</a></div></li>
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
