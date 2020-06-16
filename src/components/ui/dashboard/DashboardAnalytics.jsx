import React from "react";
import ContainerCard from "../cards/ContainerCard";
import CustomLink from "../links/CustomLink";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

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
    <ContainerCard>
      <div className={"row"}>
        <Link to={"/"}>
          <span className={classes.link}>
            <span>10</span>
            <span>Active views</span>
          </span>
        </Link>
        <Link to={"/"}>
          <span className={classes.link}>
            <span>10</span>
            <span>Active views</span>
          </span>
        </Link>
        <Link to={"/"}>
          <span className={classes.link}>
            <span>10</span>
            <span>Active views</span>
          </span>
        </Link>
      </div>
    </ContainerCard>
  );
}

export default DashboardAnalytics;
