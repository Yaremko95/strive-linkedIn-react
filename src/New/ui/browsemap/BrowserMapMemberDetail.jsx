import React from "react";
import { createUseStyles } from "react-jss";
import Break from "../themantic-break/Break";

function BrowserMapMemberDetail(props) {
  const useStyles = createUseStyles({
    container: {
      padding: "0 0 0 8px",
      flex: " 1 0 0",
      display: "flex",
      flexDirection: "column",
    },
    name: {
      maxWidth: "200px",
      position: "relative",
      overflow: "hidden",
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "rgba(0,0,0,.9)",
      paddingBottom: "0",
    },
    nameAndIcon: {
      display: "flex",
    },
    distanceBadge: {
      fontWeight: "400",
      verticalAlign: "baseline",
      position: "relative",
      fontSize: "1rem",
      lineHeight: "1.42857",
      color: "rgba(0,0,0,.6)",
      marginLeft: "10px",
    },
    p: {
      fontSize: "1rem",
      lineHeight: "1.2",
      fontWeight: "400",
      color: "rgba(0,0,0,.9)",
      maxWidth: "200px",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.name}>
        <span className={classes.nameAndIcon}>
          <span>Diego Banovaz</span>
          <span>
            <span className={classes.distanceBadge}>2nd</span>
          </span>
        </span>
      </span>
      <span className={classes.p}>Computer Engineer & Startup Enthusiast</span>
    </div>
  );
}

export default BrowserMapMemberDetail;
