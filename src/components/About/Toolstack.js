import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiDocker, SiGit } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[<SiLinux />, <SiGit />, <SiVisualstudiocode />, <SiDocker />].map(
        (tool) => (
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>
        )
      )}
    </Row>
  );
}

export default Toolstack;
