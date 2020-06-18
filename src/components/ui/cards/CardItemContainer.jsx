import React from "react";
import { createUseStyles } from "react-jss";

function CardItemContainer(props) {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
  });
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
}

export default CardItemContainer;
