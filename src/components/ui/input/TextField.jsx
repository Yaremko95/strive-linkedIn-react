import React from "react";
import { createUseStyles } from "react-jss";
import { Form } from "react-bootstrap";

function TextField({ name, id, placeholder, type, value, onChange, required }) {
  const useStyles = createUseStyles((theme) => ({
    input: {
      fontSize: "1rem",
      lineHeight: "1.42857",
      fontWeight: "400",
      transitionDuration: " 334ms",
      transitionProperty: "border-color,box-shadow",
      boxShadow: "none",
      borderRadius: ".2rem",
      border: ".1rem solid rgba(0,0,0,.6)",
      fontFamily: "inherit",
      width: "100%",
      height: "2.5rem",
      boxSizing: "border-box",
      backgroundColor: "transparent",
      color: theme.text.color.dark,
      maxHeight: "initial",
      padding: "6px 10px",
      minHeight: " 112px",
    },
  }));
  const classes = useStyles();
  return (
    <Form.Control
      as={"textarea"}
      required={required}
      className={classes.input}
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
