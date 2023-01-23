import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillCode } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ objectFit: "cover", height: "205px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.center ? (
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
        ) : (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}
        {props.SrcLink ? (
          <Button variant="primary" href={props.SrcLink} target="_blank">
            <AiFillCode
              style={{
                fontSize: "20px",
                marginBottom: "4px",
                marginRight: "3px",
              }}
            />
            {props.isBlog ? "View Blog" : "Source Code"}
          </Button>
        ) : (
          ""
        )}

        {props.WebLink ? (
          <Button
            variant="primary"
            href={props.WebLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite
              style={{
                fontSize: "20px",
                marginBottom: "4px",
                marginRight: "3px",
              }}
            />{" "}
            Live Demo
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
