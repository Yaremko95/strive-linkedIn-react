import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import NavBar from "../components/ui/navBar/NavBar";
import Footer from "../components/Footer";
import DataSource from "../data/DataSource";
import { getImageLocalStorage } from "../authorization/Auth";
import MessengerContainer from "../components/ui/messenger/MessengerContainer";

function MainLayout(props) {
  const useStyles = createUseStyles((theme) => ({
    main: {
      fontFamily: "'Source Sans Pro', sans-serif",
      width: "1200px",
    },
  }));
  const classes = useStyles();
  const [triggerNav, setTrigger] = React.useState(false);

  const [avatar, setavatar] = React.useState("");
  console.log("avatar", avatar);
  useEffect(() => {
    const image = getImageLocalStorage();
    setavatar(image);
  });
  return (
    <>
      <NavBar
        setTrigger={setTrigger}
        trigger={triggerNav}
        setavatar={(e) => setavatar(e)}
        avatar={avatar}
      />
      <hr />
      <Container className={classes.main}>
        {React.cloneElement(props.children, {
          setTrigger: (e) => setTrigger(e),
          triggerNav,
          avatar,
          setavatar: (e) => setavatar(e),
        })}
      </Container>
      {/*<MessengerContainer />*/}

      <Footer />
    </>
  );
}

export default MainLayout;
