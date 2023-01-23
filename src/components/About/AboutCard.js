import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="text-highlight">Mohammed Raza</span>, a passionate
            Computer Science Engineering student from{" "}
            <span className="text-highlight"> Mumbai, India</span>
            <br />
            <br />
            Apart from coding, some other activities I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Go to the gym
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Listen to Music
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Meditation
            </li>
          </ul>
          <p className="text-highlight">Fun Fact: I Never Give Up</p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
