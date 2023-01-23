import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CovidTracker from "../../assets/Projects/covid-tracker.png";
import Todo from "../../assets/Projects/todo.png";
import MLP from "../../assets/Projects/machine-learning-practice.png";
import WSP from "../../assets/Projects/web-scraping.png";
import CB from "../../assets/Projects/cyber-bully.jpeg";
import OEP from "../../assets/Projects/online-exam.png";
import DC from "../../assets/Projects/disney-clone.png";
import CD from "../../assets/Projects/cat_dog.jpeg";
import CKD from "../../assets/Projects/chronic_kidney_disease.jpeg";
import AD from "../../assets/Projects/alzheimer's_disease.webp";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ marginTop: "-30px" }}>
        <h1 className="project-heading">
          My Recent <strong className="text-highlight">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CovidTracker}
              isBlog={false}
              title="Covid Tracker Web-App"
              description="Covid Cases Tracker App built using ReactJS, CSS and Material UI components. Website helps in displaying Global as
              well as country wise Confirmed, Death, Total Confirmed and Total Death Cases."
              SrcLink="https://github.com/mohd-raza/Covid-Tracker-App"
              WebLink="https://mini-covid-tracker-project.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo List App"
              description="A Todo List App built using ReactJs and CSS. This App helps in keeping tracks of the tasks that needs to be done 
              and helps in editing and deleting and editing the tasks as and when required."
              SrcLink="https://github.com/mohd-raza/Todo-List-App"
              WebLink="https://todo-list-110.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLP}
              isBlog={false}
              title="Machine Learning Practice"
              description="This repository contains all the machine learning practice projects implemented using the Pandas, Numpy,
              Matplotlib, Scikit-Learn, and other different ML libraries available"
              SrcLink="https://github.com/mohd-raza/Machine-Learning-Practice"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WSP}
              isBlog={false}
              title="Web Scraping Projects"
              description="This repository includes hands on web-scraping projects such as Twitter Scraping, Infinte Scrolling Websites and Tabular
              Data. It utilizes Scrapy, Beautiful Soup and Selenium Libraries for the scraping and automation alongside using Chrome Driver."
              SrcLink="https://github.com/mohd-raza/Web-Scraping"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CB}
              isBlog={false}
              title="Cyber-Bully Tweets Classification"
              description="A Machine Learning Web-App built to classify various categories of cyber-bully tweets. Natural Language Processing(NLP) Techniques has been applied to preprocess the data. The Web-App has been designed using the Streamlit library"
              SrcLink="https://github.com/mohd-raza/Cyber-Bully-Classification-App"
              WebLink="https://mohd-raza-cyber-bully-classification-app-app-j552az.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OEP}
              isBlog={false}
              title="Online Examination Portal"
              description="This is a web-based application developed in Python and Django Framework. This project provides an automated and online Examination platform for certain Colleges or Universities. The application can be accessed by the school management, faculties, and students."
              SrcLink="https://github.com/mohd-raza/online-examination-portal"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CD}
              isBlog={false}
              title="Cat-Dog Classification"
              description="A Simple Image Classification Project used to classify Cat or Dog. It is built using Convuluted Neural Networks(CNN) in order to provide more accurate results. It is built using the Tensorflow and Keras Library."
              SrcLink="https://github.com/mohd-raza/Cat_or_Dog-Prediction"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DC}
              isBlog={false}
              title="Disney Clone"
              description="It is a Disney Clone Web Project built using NextJS and TMDB API. It utilizes Tailwind and Material UI Components for designing and styling purposes. It also has the functionality to create User's Wishlist of Movies and Shows. "
              SrcLink="https://github.com/mohd-raza/Disney-Clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CKD}
              isBlog={false}
              title="Improving CKD Detection using Normalization"
              description="In Progress..."
              center={true}
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AD}
              isBlog={false}
              title="Alzheimer's Disease Detection"
              description="In Progress..."
              center={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
