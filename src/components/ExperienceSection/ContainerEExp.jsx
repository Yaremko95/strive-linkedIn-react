import React from "react";
import ContainerCard from "../ui/cards/ContainerCard";

import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import CardEExp from "./CardEExp";
import CardTitle from "../ui/titles/CardTitle";
import UpdateData from "../../data/UpdateData";
import ExperienceForm from "./ExperienceForm";

function ContainerEExp(props) {
  /* const useStyles = createUseStyles((theme) => ({
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
  const classes = useStyles(); */
  const { user } = props;
  return (
    <ContainerCard background="white">
      <CardTitle>Experience</CardTitle>
      <div>
        {props.experience.map((experience) => (
          <CardEExp profilesexperience={experience} />
        ))}
      </div>
      <UpdateData
        method={"POST"}
        endpoint={`https://striveschool.herokuapp.com/api/posts/`}
      >
        <ExperienceForm />
      </UpdateData>
    </ContainerCard>
  );
}

export default ContainerEExp;
