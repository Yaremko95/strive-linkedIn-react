import React from "react";
import { Row } from "react-bootstrap";
import ProfileJumbotron from "../cards/ProfileJumbotron";
import RightRail from "../RightRail";
import LeftRail from "../LeftRail";

function ProfileContainer(props) {
  console.log("inProfileContainer", props);
  return (
    <>
      {props.user && (
        <Row>
          <LeftRail {...props} />
          <RightRail {...props} />
        </Row>
      )}
      <div>Loading...</div>
    </>
  );
}

export default ProfileContainer;
