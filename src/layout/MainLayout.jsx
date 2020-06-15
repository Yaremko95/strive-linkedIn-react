import React from "react";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import NavBar from "../components/ui/navBar/NavBar";
import Footer from "../components/Footer";

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
      <hr />
      <Container className={classes.main}>{props.children}</Container>
      <Footer />
    </>
  );
}

export default MainLayout;
