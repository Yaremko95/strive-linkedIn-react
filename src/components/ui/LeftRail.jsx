import React from "react";
import { Col } from "react-bootstrap";
import ProfileJumbotron from "../ProfileJumbotron";
import { createUseStyles } from "react-jss";
import Dashboard from "./dashboard/Dashboard";
import ProgressBarComponent from './ProgressBarSection/ProgressBarComponent'
import ExperienceComponent from '../ExperienceSection/ExperienceComponent'

function LeftRail(props) {
  const useStyle = createUseStyles({
    container: {},
  });
  const classes = useStyle();
  return (
    <Col lg={8}>
      <ProfileJumbotron {...props} />
      <ProgressBarComponent/>
      <Dashboard />
      <ExperienceComponent/>
      
    </Col>
  );
}

export default LeftRail;
