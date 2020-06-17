import React from "react";
import ContainerCard from "../cards/ContainerCard";

import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import CardEExp from "./CardEExp";

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
  return (
    <ContainerCard>
        <h2>Experience</h2>
      <div>
          
        <CardEExp />
        <CardEExp />
        <CardEExp />
      </div>
    </ContainerCard>
  );
}

export default ContainerEExp;