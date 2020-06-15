import React from "react";
import { Col, Row } from "react-bootstrap";
import RightRail from "../components/ui/Right.Rail";

function Profile(props) {
  return (
    <>
      <h1>LinkedIn</h1>
      <Row>
        <Col md={8}></Col>
        <RightRail />
      </Row>
    </>
  );
}

export default Profile;
