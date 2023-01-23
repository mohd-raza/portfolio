import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <p className="text-highlight">Made with ❤️ By Mohammed Raza © 2023</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
