import React from "react";
import { Col, Row } from "react-bootstrap";
import RightRail from "../components/ui/Right.Rail";
import ProfileJumbotron from "../components/ProfileJumbotron";

function Profile(props) {
  return (
    <>
      <h1>LinkedIn</h1>
      <Row>
        <ProfileJumbotron />
        <RightRail />
      </Row>
    </>
  );
}

export default Profile;
