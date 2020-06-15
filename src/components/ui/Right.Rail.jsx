import React from "react";
import { Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { BsQuestionCircle } from "react-icons/bs";
import CustomLink from "./links/CustomLink";
import Break from "./themantic-break/Break";

function RightRail(props) {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
    },
  });
  const classes = useStyles();
  return (
    <Col md={4} className={classes.container}>
      <CustomLink color={"rgba(0,0,0,.6)"} underlined={false} size={"1.2rem"}>
        Edit Public Profile & URL <BsQuestionCircle />
      </CustomLink>
      <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      <CustomLink color={"rgba(0,0,0,.6)"} underlined={false} size={"1.2rem"}>
        Add Profile in Another Language <BsQuestionCircle />
      </CustomLink>
    </Col>
  );
}

export default withRouter(RightRail);
