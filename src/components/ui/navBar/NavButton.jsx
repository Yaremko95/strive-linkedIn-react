import React from "react";
import { Nav } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import ProfileImage from "../profile-images/ProfileImage";

function NavButton({item, color}) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: color ? color : theme.secondary.lighter,
      marginRight: "20px",
    },
    icon: {
      fontSize: "1.3rem",
    },
    label: {
      fontSize: "0.7rem",
      fontWeight: theme.text.weight.bold,
    },
  }));
  const classes = useStyles();
 
  return (
    <div className={classes.container}>
      {item.icon ? (
        <item.icon className={classes.icon} />
      ) : (
        <ProfileImage src={"/assets/image.jpg"} height={"1.3rem"} />
      )}
      <span className={classes.label}>
        {item.label} {item.secondaryIcon && <item.secondaryIcon />}
      </span>
    </div>
  );
}

export default NavButton;
