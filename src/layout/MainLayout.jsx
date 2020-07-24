import React from "react";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import NavBar from "../components/ui/navBar/NavBar";
import Footer from "../components/Footer";
import DataSource from "../data/DataSource";

function MainLayout(props) {
  const useStyles = createUseStyles((theme) => ({
    main: {
      fontFamily: "'Source Sans Pro', sans-serif",
      width: "1200px",
    },
  }));
  const classes = useStyles();
  const [triggerNav, setTrigger] = React.useState(false);
  return (
    <>
      <NavBar setTrigger={setTrigger} trigger={triggerNav} />
      <hr />
      <Container className={classes.main}>
        {React.cloneElement(props.children, {
          setTrigger: () => setTrigger(),
          triggerNav,
        })}
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
