import React from "react";
import { Container, Row } from "react-bootstrap";

function MainLayout(props) {
  return (
    <Container>
      <h1>LinkedIn</h1>
      <Row>{props.children}</Row>
    </Container>
  );
}

export default MainLayout;
