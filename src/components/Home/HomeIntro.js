import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function HomeIntro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-highlight"> INTRODUCE </span>{" "}
              MYSELF...
            </h1>
            <p className="home-about-body">
              I'm pursuing Bachelors in Computer Engineering at Dwarakadas
              Jivanlal Sanghvi College of Engineering 💻.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="text-highlight">
                  {" "}
                  C, C++, Java, Python, Javascript,.{" "}
                </b>
              </i>
              <br />
              <br />
              I'm mainly interested in &nbsp;
              <i>
                <b className="text-highlight">Machine Learning Algorithms</b>,
                <b className="text-highlight"> Full Stack Development</b>, and,
                recently
                <b className="text-highlight"> Cloud Computing</b>. I'm also
                very passionate about the field of
                <b className="text-highlight">
                  {" "}
                  Data Science and Software Engineering
                </b>
                .
              </i>
              <br />
              <br />I always try to learn new techniques and technologies every
              day.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Img} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-highlight">connect </span>with
              me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohd-raza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohd-raza-syed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:mohdraza.syed@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mxhd_raxa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/smrr_2511"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mohdraza.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiHashnode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeIntro;
