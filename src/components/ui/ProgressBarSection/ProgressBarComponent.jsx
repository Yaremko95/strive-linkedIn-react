import React, { Component } from "react";
import ContainerCard from "../cards/ContainerCard";
import { ProgressBar } from "react-bootstrap";
import CardTitle from "../titles/CardTitle";

const spanStyle = {
  fontWeight: "bold",
  color: "black",
};

function ProgressBarComponent(props) {
  const { experience } = props;

  if (experience.length === 0 || experience.length === 1) {
    return (
      <ContainerCard background="white" style={{ backgroundColor: "white" }}>
        <CardTitle>
          Profile Strength: &nbsp;
          <span style={spanStyle}>Beginner</span>{" "}
        </CardTitle>
        <ProgressBar animated now={25} />
      </ContainerCard>
    );
  } else if (experience.length > 1 && experience.length < 3) {
    return (
      <ContainerCard background="white" style={{ backgroundColor: "white" }}>
        <CardTitle>
          Profile Strength: &nbsp;
          <span style={spanStyle}>Intermediate</span>{" "}
        </CardTitle>
        <ProgressBar animated now={50} />
      </ContainerCard>
    );
  } else {
    return (
      <ContainerCard background="white" style={{ backgroundColor: "white" }}>
        <CardTitle>
          Profile Strength: &nbsp;
          <span style={spanStyle}>Advanced</span>{" "}
        </CardTitle>
        <ProgressBar animated now={100} />
      </ContainerCard>
    );
  }
}

export default ProgressBarComponent;
