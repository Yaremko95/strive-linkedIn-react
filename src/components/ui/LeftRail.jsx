import React from "react";
import { Col } from "react-bootstrap";
import ProfileJumbotron from "../ProfileJumbotron";
import { createUseStyles } from "react-jss";
import Dashboard from "./dashboard/Dashboard";
import ProgressBarComponent from "./ProgressBarSection/ProgressBarComponent";

import ContainerEExp from "../ExperienceSection/ContainerEExp";
import ContainerSkills from "../SkillsSection/ContainerSkills";
import ContainerEdu from "./education/ContainerEdu";

function LeftRail(props) {
  return (
    <Col lg={8}>
      <ProfileJumbotron {...props} />
      <ProgressBarComponent {...props} />

      <Dashboard {...props} />
      <ContainerEExp {...props} />
      <ContainerSkills {...props} />

      <ContainerEdu {...props} />
    </Col>
  );
}

export default LeftRail;
