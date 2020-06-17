import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ProfileImage from "../profile-images/ProfileImage";
import BrowserMapMemberDetail from "../browsemap/BrowserMapMemberDetail";
import BrowserMapEExp from "./BrowserMapEExp";


function CardEExp(props) {
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
    <Link className={classes.container} /* to={`/profile/${user.username}`} */>
      <ProfileImage
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"}
        width={"56px"}
        height={"56px"}
      />
      
      <BrowserMapEExp profilesexperience={props.profilesexperience}/>
      {/* <BrowserMapMemberDetail user={user} /> */}

    </Link>
  );
}

export default withRouter(CardEExp);