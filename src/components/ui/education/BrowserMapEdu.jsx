import React from "react";
import { createUseStyles } from "react-jss";

function BrowserMapEdu(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      padding: "0 0 0 15px",
      flex: " 1 0 0",
      display: "flex",
      flexDirection: "column",
      paddingLeft: "10px",
    },
    name: {
      maxWidth: "200px",
      position: "relative",
      overflow: "hidden",

      fontSize: theme.text.size.t12,
      fontWeight: theme.text.weight.bold,
      color: theme.text.color.dark,

      paddingBottom: "0",
    },
    nameAndIcon: {
      display: "flex",

      lineHeight: "0.9",
    },

    span: {
      fontSize: theme.text.size.t1,

      fontWeight: theme.text.weight.normal,
      color: theme.text.color.dark,
      maxWidth: "200px",
    },
  }));
  const classes = useStyles();
  const { user, education } = props;
  education.startDate = new Date(education.startDate).getFullYear();

  education.endDate = new Date(education.endDate).getFullYear();

  return (
    <div className={classes.container}>
      <span className={classes.name}>
        <span className={classes.nameAndIcon}>
          <span>{education.name}</span>
          {/* {console.log('USEREXPERIENCE',props.profilesexperience)} */}
        </span>
      </span>

      <span className={classes.span}>{education.degree}</span>
      <span className={classes.span}>
        {/*{new Date(props.profilesexperience.startDate)*/}
        {/*  .toDateString()*/}
        {/*  .substring(3)}{" "}*/}
        {/*-{" "}*/}
        {/*{new Date(props.profilesexperience.endDate).toDateString().substring(3)}*/}
      </span>
    </div>
  );
}

export default BrowserMapEdu;
