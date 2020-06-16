import React from "react";
import { createUseStyles } from "react-jss";

function BrowserMapMemberContainer(props) {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "16px",
    },
  });
  const classes = useStyles();
  return <li className={classes.container}>{props.children}</li>;
}

export default BrowserMapMemberContainer;
