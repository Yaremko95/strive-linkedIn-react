import React from "react";
import { createUseStyles } from "react-jss";
import Break from "../themantic-break/Break";

function BrowserMapEExp(props) {

  const useStyles = createUseStyles((theme) => ({


    container: {
      padding: "0 0 0 8px",
      flex: " 1 0 0",
      display: "flex",
      flexDirection: "column",
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
    /* distanceBadge: {
      fontWeight: theme.text.weight.normal,
      verticalAlign: "baseline",
      position: "relative",
      fontSize: theme.text.size.t1,

      color: theme.text.color.light,
      marginLeft: "10px",
    }, */
    span: {
      fontSize: theme.text.size.t1,

      fontWeight: theme.text.weight.normal,
      color: theme.text.color.dark,
      maxWidth: "200px",
    },
  }));
  const classes = useStyles();
  const { user } = props;

  return (
    <div className={classes.container}>
      <span className={classes.name}>
        <span className={classes.nameAndIcon}>

          <span>
            Title
          </span>
          
        </span>
      </span>

      <span className={classes.span}>Company</span>
      <span className={classes.span}>Year</span>
      <span className={classes.span}>Location</span>

    </div>
  );
}

export default BrowserMapEExp;