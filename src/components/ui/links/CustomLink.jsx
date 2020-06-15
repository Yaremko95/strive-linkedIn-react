import { createUseStyles } from "react-jss";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import React from "react";

function CustomLink({ color, underlined, size, children }) {
  const useStyles = createUseStyles({
    link: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    span: {
      display: "flex",
      justifyContent: "space-between",
      color: color,
      fontSize: size,
      lineHeight: "1.5",
      fontWeight: "600",
      textDecoration: underlined ? "underline" : "none",
    },
  });
  const classes = useStyles();
  return (
    <Link to={"/edit-profile"} className={classes.link}>
      <span className={classes.span}>{children}</span>
    </Link>
  );
}

export default CustomLink;
