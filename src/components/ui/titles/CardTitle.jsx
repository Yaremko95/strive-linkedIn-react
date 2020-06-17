import React from "react";
import ContainerCard from "../cards/ContainerCard";
import { createUseStyles } from "react-jss";

function CardTitle(props) {
  const useStyles = createUseStyles((theme) => ({
    h2: {
      fontSize: theme.text.size.t20,
      color: theme.text.color.dark,
    },
  }));
  const classes = useStyles();
  return <h2 className={classes.h2}>{props.children}</h2>;
}

export default CardTitle;
