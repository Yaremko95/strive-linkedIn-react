import React from "react";
import { Row } from "react-bootstrap";
import ProfileJumbotron from "../ember/ProfileJumbotron";
import RightRail from "../Right.Rail";

function ProfileContainer(props) {
  return (
    <>
      <Row>
        <ProfileJumbotron {...props} />
        <RightRail {...props} />
      </Row>
    </>
  );
}

export default ProfileContainer;
