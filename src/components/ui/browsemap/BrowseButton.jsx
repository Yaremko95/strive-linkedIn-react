import React from "react";
import { createUseStyles } from "react-jss";
import Button from "react-bootstrap/Button";

function BrowseButton(props) {
  const useStyles = createUseStyles({
    button: {
      fontSize: "1.5rem",
      backgroundColor: "transparent",
      color: "rgba(0,0,0,.6) !important",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Button variant="outline-light" className={classes.button}>
        {props.children}
      </Button>
    </div>
  );
}

export default BrowseButton;
