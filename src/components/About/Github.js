import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="text-highlight">My Github Contribution</strong>
      </h1>
      <GitHubCalendar
        username="mohd-raza"
        blockRadius={4}
        blockSize={15}
        blockMargin={5}
        color="#ff5e72"
        fontSize={16}
        showWeekdayLabels
        totalCount="{{count}} contributions in {{year}}"
      />
    </Row>
  );
}

export default Github;
