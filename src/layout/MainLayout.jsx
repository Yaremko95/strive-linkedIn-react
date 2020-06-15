import React from "react";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

function MainLayout(props) {
  const useStyles = createUseStyles((theme) => ({
    main: {
      fontFamily: "'Source Sans Pro', sans-serif",
    },
  }));
  const classes = useStyles();
  return <Container className={classes.main}>{props.children}</Container>;
}

export default MainLayout;
