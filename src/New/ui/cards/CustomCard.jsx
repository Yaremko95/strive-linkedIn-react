import React from "react";
import { createUseStyles } from "react-jss";

function CustomCard({ width, height, margin, padding, background, children }) {
  const useStyles = createUseStyles({
    container: {
      boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
      backgroundColor: background,
      zIndex: "1000",
      width: width,
      height: height,
      padding: padding,
      margin: margin,
    },
  });
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}

export default CustomCard;
