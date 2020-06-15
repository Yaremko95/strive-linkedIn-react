import React from "react";
import { Col, Row } from "react-bootstrap";
import RightRail from "../components/ui/Right.Rail";
import ProfileJumbotron from "../components/ui/ember/ProfileJumbotron";
import DataSource from "../data/DataSource";
import ProfileContainer from "../components/ui/profile/ProfileContainer";

function Profile(props) {
  return (
    <DataSource query={"all"}>
      <ProfileContainer />
    </DataSource>
  );
}

export default Profile;
