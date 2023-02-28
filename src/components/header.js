import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// TODO: styles

const styles = {

};

const Header = ({ currentPage, handlePageChange }) => {
      return (
            <Navbar expand="sm">
                  <Navbar.Brand>
                        Abigail Doyle
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                              <Nav.Link href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                                    About Me
                              </Nav.Link>
                              <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                                    Resume
                              </Nav.Link>
                              <Nav.Link href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                                    Portfolio
                              </Nav.Link>
                              <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                                    Contact
                              </Nav.Link>
                        </Nav>
                  </Navbar.Collapse>
          </Navbar>
      )
}

export default Header