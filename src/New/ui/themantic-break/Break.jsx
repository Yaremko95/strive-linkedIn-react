import React from "react";
import { createUseStyles } from "react-jss";

function Break({ color, weight }) {
  const useStyles = createUseStyles({
    root: {
      border: "0",
      borderTop: `${weight} solid ${color} `,
      display: "block",
      height: "1px",
      width: "100%",
    },
  });
  const classes = useStyles();
  return <hr className={classes.root} />;
}

export default Break;
