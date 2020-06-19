import React from "react";
import ContainerCard from "../cards/ContainerCard";
import { createUseStyles } from "react-jss";
import { Image } from "react-bootstrap";
import CardTitle from "../titles/CardTitle";

function LeftRailNf(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      margin: "16px 0 16px 0",
      boxShadow: " 0 0 0 1px rgba(0,0,0,.15)",
    },
    imageTop: {
      backgroundColor: "rgb(198, 178, 115)",
      paddingTop: " 5px",
      height: "95px",
      width: "100%",
    },
    profileImage: {
      width: "50%",
      border: "3px solid white",
      top: "-40px",
      left: "50px",
      position: "relative",

      borderRadius: "50%",
      zIndex: "100",
    },
    details: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  const { user } = props;
  console.log(props);
  return (
    <div className={classes.container}>
      <Image
        className={classes.imageTop}
        src={"https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"}
      />
      <Image className={classes.profileImage} src={user.image} />
      <div className={classes.details}>
        <span>Welcome {user.name}</span>
      </div>
    </div>
  );
}

export default LeftRailNf;
