// dependencies
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"

// faux css
const styles = {
      border: {
            marginTop: "1rem",
            marginBottom: "1rem",
            border: "0",
            borderTop: "1px solid rgb(54, 52, 40)",
      }
};

// navbar header
const Header = ({ currentPage, handlePageChange }) => {
      return (
            <div>
            <Navbar expand="sm">
                  <Navbar.Brand>
                  <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
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
          <hr style = {styles.border}/>
          </div>
      )
}

export default Header