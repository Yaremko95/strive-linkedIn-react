import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { GoSearch } from "react-icons/go";

import { withRouter, useParams } from "react-router-dom";
function SearchForm(props) {
  const useStyles = createUseStyles((theme) => ({
    input: {
      height: "30px",
      width: "250px",
      border: "none",
      borderRadius: "2px",
      padding: "0 10px",
      position: "relative",
      fontSize: theme.text.size.t1,
      color: theme.text.color.dark,
      "&:focus": {
        border: "none",
        outline: "none",
      },
    },
    prepend: {
      position: "relative",
      left: "-25px",
      fontSize: "1.2rem",
      padding: "0 10px",
      backgroundColor: theme.secondary.light,
    },
    search: {
      color: theme.primary.lightblue,
    },
  }));
  const classes = useStyles();
  return (
    <div className={"d-flex"}>
      <input className={classes.input} />
      <div className={classes.prepend}>
        <GoSearch className={classes.search} />
      </div>
    </div>
  );
}

export default withRouter(SearchForm);
