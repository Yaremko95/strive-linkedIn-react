import React from "react";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import NavBar from "./NavBar";

function MainLayout(props) {
  const useStyles = createUseStyles((theme) => ({
    main: {
      fontFamily: "'Source Sans Pro', sans-serif",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container>
        {" "}
        className={classes.main}>{props.children}
      </Container>
    </>
  );
}

export default MainLayout;
