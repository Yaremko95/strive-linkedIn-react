import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ProfileImage from "../profile-images/ProfileImage";
import { Col } from "react-bootstrap";
import BrowserMapMemberDetail from "./BrowserMapMemberDetail";

function BrowserMapMember(props) {
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

  const { user } = props;

  return (
    <Link className={classes.container} to={`/profile/${user.username}`}>
      <ProfileImage
        src={
          user.image
            ? user.image
            : "https://lh3.googleusercontent.com/proxy/o2hwLlL4TSf2pEksv7MJXe8_rGSJ6DVHW3Bb0dc1829FyVhEmDXAfthN6fFvaZxuIf-m44p1YkU5HKXy_8GJxqueV-TXsDYZOxZ_NTRaOIhX8-6-Mw"
        }
        width={"56px"}
        height={"56px"}
      />
      <BrowserMapMemberDetail user={user} />
    </Link>
  );
}

export default withRouter(BrowserMapMember);
