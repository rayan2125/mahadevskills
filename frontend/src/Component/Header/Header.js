import React from 'react';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header=()=> {
  return (
    <header>
         <div class="top-bar">
                <div class="container">
                    <div class="row clearfix">
                    <div class="col-md-12 col-sm-12 text-right hidden-xs top-donation-btn-container">
                            <span class="top-phone-no">
                                <i class="fa fa-phone-square"></i> 
                                +91-9929-129-108
                            </span>
                            <span class="top-email-info">
                                <i class="fa fa-paper-plane"></i>
                                <a href="mailto:info@mahadevskill.com">info@mahadevskill.com</a>
                            </span>
                        </div>
                    </div> 
                </div> 
            </div> 
       <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img src='https://mahadevskill.com/images/Mahadev_skill_logo.jpg' alt='Ascentia' className="img-fluid" />
          </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About us</Nav.Link>
           
              
              <Nav.Link href="/cources">Cources</Nav.Link>
              <Nav.Link href="/certificate">Certificate</Nav.Link>
              <Nav.Link href="/our-team">Our Team</Nav.Link>
                 <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {/* <Nav.Link href="/career">Career</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>

         
        </div>
      </Navbar>
  </header>
  );
}

export default Header;
