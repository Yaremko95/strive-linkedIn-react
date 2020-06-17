import React from "react";
import ContainerCard from "../cards/ContainerCard";
import CustomLink from "../links/CustomLink";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ProfileSelfLink from "./ProfileSelfLink";

function DashboardAnalytics(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    link: {
      display: "flex",
      flexDirection: "column",

      justifyContent: "center",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  return (
    <ContainerCard background={"white"}>
      <Row>
        <Col md={4} className={"pl-0"}>
          <ProfileSelfLink
            to={"/"}
            number={"10"}
            title={"Who viewed your profile"}
          />
        </Col>
        <Col md={4} className={"pl-0"}>
          <ProfileSelfLink to={"/"} number={"0"} title={"Active views"} />
        </Col>
        <Col md={4} className={"pl-0"}>
          <ProfileSelfLink to={"/"} number={"6"} title={"Search Appearances"} />
        </Col>
      </Row>
    </ContainerCard>
  );
}

export default DashboardAnalytics;
