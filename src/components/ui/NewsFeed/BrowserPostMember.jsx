import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { Col } from "react-bootstrap";
import ProfileImage from "../profile-images/ProfileImage";
//import BrowserMapMemberDetail from "../browsemap/BrowserMapMemberDetail";
import BrowserPostMemberDetail from "./BrowserPostMemberDetail";
import Image from "react-bootstrap/Image";

function BrowserPostMember(props) {
  const useStyles = createUseStyles({
    container: {
      textDecoration: "none",
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "400",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
    },
  });
  const classes = useStyles();

  const { post } = props;

  return (
    <>
      {/* <Link className={classes.container} to={`/profile/${post.postname}`}> */}
      <ProfileImage
        src={post.user.image ? post.user.image : "/assets/LinkedInNoPic.png"}
        width={"56px"}
        height={"56px"}
      />
      <BrowserPostMemberDetail post={post} {...props} />
    </>

    /*  </Link> */
  );
}

export default withRouter(BrowserPostMember);
