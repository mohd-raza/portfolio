import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CovidTracker from "../../assets/Projects/covid-tracker.png";
import ProjectCards from "../Projects/ProjectCards";
const Experience = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: true,
    loop: true,
    rewind: true,
    autoplayTimeout: 6000,
    smartSpeed: 8000,
    stagePadding: 0,

    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   310: {
    //     items: 1,
    //   },
    //   500: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 2,
    //   },
    //   700: {
    //     items: 2,
    //   },
    //   1000: {
    //     items: 2.7,
    //   },
    //   1300: {
    //     items: 3.7,
    //   },
    //   1440: {
    //     items: 3.7,
    //   },
    // },
  };

  return (
    <section>
      <Container>
        <Particle />
        <Container className="experience-cont">
          <h1 className="project-heading">
            Here is a list of few{" "}
            <strong className="text-highlight">Experiences </strong>
          </h1>
          <OwlCarousel
            {...options}
            className="owl-theme"
            style={{ width: "100%" }}
          >
            <div>
              <ProjectCards
                imgPath={CovidTracker}
                isBlog={false}
                title="Covid Tracker Web-App"
                description="Covid Cases Tracker App built using ReactJS, CSS and Material UI components. Website helps in displaying Global as
              well as country wise Confirmed, Death, Total Confirmed and Total Death Cases."
                SrcLink="https://github.com/mohd-raza/Covid-Tracker-App"
                WebLink="https://mini-covid-tracker-project.netlify.app/"
              />
            </div>
          </OwlCarousel>
        </Container>
      </Container>
    </section>
  );
};

export default Experience;
