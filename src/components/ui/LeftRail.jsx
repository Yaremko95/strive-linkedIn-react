import React from "react";
import { Col } from "react-bootstrap";
import ProfileJumbotron from "../ProfileJumbotron";
import { createUseStyles } from "react-jss";
import Dashboard from "./dashboard/Dashboard";
import ProgressBarComponent from "./ProgressBarSection/ProgressBarComponent";

import ContainerEExp from "./dashboard/ContainerEExp";

function LeftRail(props) {
  return (
    <Col lg={8}>
      <ProfileJumbotron {...props} />
      <ProgressBarComponent {...props} />

      <Dashboard {...props} />
      <ContainerEExp {...props} />
    </Col>
  );
}

export default LeftRail;
