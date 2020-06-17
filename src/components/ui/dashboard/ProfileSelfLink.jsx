import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";

function ProfileSelfLink({ to, number, title }) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
    number: {
      color: theme.primary.lightblue,
      fontSize: "2.2rem",
      fontWeight: theme.text.weight.normal,
    },
    title: {
      color: theme.text.color.dark,
      fontSize: theme.text.size.t1,
      fontWeight: theme.text.weight.normal,
    },
  }));
  const classes = useStyles();
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <span className={classes.container}>
        <span className={classes.number}>{number}</span>
        <span className={classes.title}>{title}</span>
      </span>
    </Link>
  );
}

export default ProfileSelfLink;
