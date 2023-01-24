import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiSpark,
} from "react-icons/di";
import {
  SiCplusplus,
  SiJava,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiGo,
  SiPostman,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <SiCplusplus />,
        <DiPython />,
        <SiJava />,
        <DiJavascript1 />,
        <DiNodejs />,
        <DiReact />,
        <DiMongodb />,
        <SiScikitlearn />,
        <SiPytorch />,
        <SiTensorflow />,
        <DiSpark />,
        <SiGo />,
        <SiMysql />,
        <SiPostman />,
      ].map((tool) => (
        <Col xs={4} md={2} className="tech-icons" id={tool}>
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
