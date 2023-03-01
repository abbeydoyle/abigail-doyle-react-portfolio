import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// TODO: styles

const styles = {
      // header: {
      //       background: "rgb(84, 81, 63)"
      // }
      border: {
            marginTop: "1rem",
            marginBottom: "1rem",
            border: "0",
            borderTop: "1px solid rgb(54, 52, 40)",
      }
};

const Header = ({ currentPage, handlePageChange }) => {
      return (
            <div>
            <Navbar expand="sm" style={styles.header}>
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
          <hr style = {styles.border}/>
          </div>
      )
}

export default Header