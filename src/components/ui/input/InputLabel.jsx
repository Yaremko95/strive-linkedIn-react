import React from "react";
import { createUseStyles } from "react-jss";

function InputLabel(props) {
  const useStyles = createUseStyles((theme) => ({
    label: {
      fontSize: theme.text.size.t1,
      lineHeight: "1.42857",
      fontWeight: theme.text.weight.normal,
      color: theme.text.color.dark,
      display: "block",
      margin: " 1.2rem 0 .3rem",
    },
  }));
  const classes = useStyles();
  return <label className={classes.label}>{props.children}</label>;
}

export default InputLabel;
