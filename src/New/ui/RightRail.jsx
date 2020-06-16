import React from "react";
import { Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import CustomLink from "./links/CustomLink";
import Break from "./themantic-break/Break";
import CustomCard from "./cards/CustomCard";
import Profile from "../../pages/Profile";
import ProfileImage from "./profile-images/ProfileImage";
import BrowseMapContainer from "./browsemap/BrowseMapContainer";

function RightRail(props) {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
    },
  });
  const classes = useStyles();
  const { user } = props;
  return (
    <Col md={4} className={classes.container}>
      {user.username === "user27" && (
        <>
          <CustomLink
            color={"rgba(0,0,0,.6)"}
            underlined={false}
            size={"1.2rem"}
          >
            Edit Public Profile & URL <BsQuestionCircle />
          </CustomLink>
          <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
          <CustomLink
            color={"rgba(0,0,0,.6)"}
            underlined={false}
            size={"1.2rem"}
          >
            Add Profile in Another Language <BsQuestionCircle />
          </CustomLink>
        </>
      )}
      <CustomCard
        background={"fff"}
        height={"300px"}
        width={"100%"}
        padding={"6px"}
        margin={"10px 0"}
      />
      <BrowseMapContainer {...props} />
    </Col>
  );
}

export default withRouter(RightRail);
