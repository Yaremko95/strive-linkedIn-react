import React from "react";
import { createUseStyles } from "react-jss";

function Button({ variant, type, children }) {
  const useStyles = createUseStyles((theme) => ({
    button: {
      transitionTimingFunction: " cubic-bezier(.4,0,.2,1)",
      transitionDuration: "167ms",
      alignItems: "center",
      border: "none",
      borderRadius: "2px",
      boxSizing: "border-box",
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: theme.text.weight.bold,
      display: "inline-flex",
      justifyContent: "center",
      minWidth: "6.4rem",
      maxWidth: "480px",
      overflow: "hidden",
      textAlign: "center",
      transitionProperty: "background-color,box-shadow,color",
      verticalAlign: "middle",
      fontSize: "1.1rem",
      minHeight: " 2.5rem",
      padding: ".3rem .6rem",
      lineHeight: "2rem",
      backgroundColor: variant === "filled" ? theme.primary.lightblue : "",
      color: variant === "filled" ? "white" : "",
      "&:hover": {
        backgroundColor: variant === "filled" ? theme.primary.darkblue : "",
        color: variant === "filled" ? "white" : "",
      },
    },
  }));
  const classes = useStyles();
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
