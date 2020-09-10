import React from "react";
import { createUseStyles } from "react-jss";

function OnlineIcon(props) {
  const styles = createUseStyles({
    iconContainer: {
      background: "#469a1f",
      width: "8px",
      height: "8px",
      borderRadius: " 50%",
      flexShrink: "0",
      transition: "background 167ms ease-in-out",
      boxSizing: "border-box",
      animation: "fade-in 167ms ease-in",
      bottom: "2px",
      right: "3px",
      position: "absolute",
      boxShadow: "0 0 0 2px var(--white,#fff)",
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      verticalSlign: "baseline",
    },
  });
  const classes = styles();
  return <div className={classes.iconContainer}></div>;
}

export default OnlineIcon;
