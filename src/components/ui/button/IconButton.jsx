import React from "react";
import { createUseStyles } from "react-jss";

function IconButton(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      fontSize: theme.text.size.t20,
      color: theme.primary.lightblue,
      cursor: "pointer",
      width: "3rem",
      height: "2.4rem",
      padding: "5px 5px",
      borderRadius: "49.5%",
      marginLeft:'auto',
      marginBottom:'20px',
    
   

      "&:hover": { backgroundColor: " rgba(152,216,244,.25)" },
    },
  }));
  const classes = useStyles();
  return <span className={classes.container}>{props.children}</span>;
}

export default IconButton;
