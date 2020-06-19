import React from "react";
import { createUseStyles } from "react-jss";

function ContainerCard({ background, children, padding, margin }) {
  const useStyles = createUseStyles({
    container: {
      boxShadow: " 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
      transition: "box-shadow 83ms",
      margin: margin ? margin :"16px 0 16px 0",
      padding: padding ? padding : "24px",
      borderRadius: "2px",
      backgroundColor: background ? background : "inherit",
    
    },
  });
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}

export default ContainerCard;
