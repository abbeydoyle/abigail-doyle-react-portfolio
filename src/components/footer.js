import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import stackoverflow from "../assets/stackoverflow.png";

const styles = {};

export default function Footer() {
  return (
    <div className="content d-flex justify-content-evenly">
      <Row xs={1} md={3} lg={3}>
        <Col>
          <a
            href="https://github.com/abbeydoyle"
            target="_blank"
            rel="noreferrer"
            className="mx-auto"
          >
            <img src={github} alt="GitHub Logo" height="35px" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/abigaildoyle3"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn Logo" height="35px" />
          </a>
        </Col>
        <Col>
          <a
            href="https://stackoverflow.com/users/21307470/abbeydoyle"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stackoverflow} alt="Stack Overflow Logo" height="35px" />
          </a>
        </Col>
      </Row>
    </div>
  );
}
