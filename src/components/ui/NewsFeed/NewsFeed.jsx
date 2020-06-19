import React from "react";
import NFCard from "./NFCard";
import { Col, Row } from "react-bootstrap";
import InteractionCard from "../NewsFeed/InteractionCard";

import LeftRailNf from "./LeftRailNF";
import ContainerAdd from '../addFeed/ContainerAdd'

function NewsFeed(props) {
  return (
    <Row>
      <Col md={2} className={"pr-0 pl-0"}>
        <LeftRailNf {...props} />
      </Col>
      <Col md={7}>
        <InteractionCard {...props} />
        <NFCard {...props} />
      </Col>
      <Col md={3}>
        <ContainerAdd />
      </Col>
    </Row>
  );
}
export default NewsFeed