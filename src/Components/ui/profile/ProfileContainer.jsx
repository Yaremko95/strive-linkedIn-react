import React from "react";
import { Row } from "react-bootstrap";
import ProfileJumbotron from "../ember/ProfileJumbotron";
import RightRail from "../RightRail";

function ProfileContainer(props) {
  console.log("inProfileContainer", props);
  return (
    <>
      {props.user && (
        <Row>
          <ProfileJumbotron {...props} />
          <RightRail {...props} />
        </Row>
      )}
      <div>Loading...</div>
    </>
  );
}

export default ProfileContainer;
