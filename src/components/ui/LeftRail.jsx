import React from "react";
import { Col } from "react-bootstrap";
import ProfileJumbotron from "../ProfileJumbotron";
import { createUseStyles } from "react-jss";
import Dashboard from "./dashboard/Dashboard";
import ExperienceContainer from "./Experience/ExperienceContainer";

function LeftRail(props) {
  const useStyle = createUseStyles({
    container: {},
  });
  const classes = useStyle();
  return (
    <Col lg={8}>
      <ProfileJumbotron {...props} />
      <Dashboard />
      <ExperienceContainer />
    </Col>
  );
}

export default LeftRail;
