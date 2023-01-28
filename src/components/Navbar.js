import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex"
          style={{
            fontSize: "2rem",
          }}
          id="brand"
        >
          Mohammed Raza
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#home" id="nav-top">
            {/* Home */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <AiOutlineHome style={{ marginBottom: "3px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            {/* About */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <AiOutlineUser style={{ marginBottom: "3px" }} />
                About
              </Nav.Link>
            </Nav.Item>
            {/* Project */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "3px", marginRight: "3px" }}
                />
                Projects
              </Nav.Link>
            </Nav.Item>
            {/* Experience */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experience"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <FaLaptopCode
                  style={{ marginBottom: "3px", marginRight: "3px" }}
                />
                Experience
              </Nav.Link>
            </Nav.Item>
            {/* Education */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <TbSchool style={{ marginBottom: "3px", marginRight: "3px" }} />
                Education
              </Nav.Link>
            </Nav.Item>
            {/* Resume */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-text"
              >
                <CgFileDocument
                  style={{ marginBottom: "3px", marginRight: "3px" }}
                />
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
