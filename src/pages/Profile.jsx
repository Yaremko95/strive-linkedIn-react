import React from "react";
import { Col, Row } from "react-bootstrap";
import RightRail from "../components/ui/Right.Rail";
import ProfileJumbotron from "../components/ProfileJumbotron";

function Profile(props) {
  return (
    <>
      <Row>
        <ProfileJumbotron />
        <RightRail />
      </Row>
    </>
  );
}

export default Profile;
