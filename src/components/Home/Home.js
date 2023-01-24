import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/Programming-bro.svg";
import Particle from "../Particle";
import HomeIntro from "./HomeIntro";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi Folks!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🖐
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mohammed Raza</strong>
              </h1>

              <div
                style={{
                  paddingLeft: "50px",
                  paddingTop: "10px",
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col
              // sm={6}
              md={5}
              // style={{ marginTop: "-60px" }}
              className="img-column"
            >
              <img src={img1} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeIntro />
    </section>
  );
}

export default Home;
