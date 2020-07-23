import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ProfileImage from "../ui/profile-images/ProfileImage";
import Auth from "../../authorization/Auth";
import IconButton from "../ui/button/IconButton";
import CardItemContainer from "../ui/cards/CardItemContainer";
import { BsPencil } from "react-icons/all";

function CardSkills(props) {
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
    <>
      <CardItemContainer>
        <div className={"w-100"}>
          <div className={classes.container}>
            <Link className="mb-5">
              <ProfileImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                }
                width={"56px"}
                height={"56px"}
              />
            </Link>

            <span
              style={{
                maxWidth: "200px",
                position: "relative",
                overflow: "hidden",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "rgba(0,0,0,.7)",
                paddingBottom: "0",
                marginLeft: "16px",
              }}
            >
              Business Development
            </span>
          </div>

          <div className={classes.container}>
            <Link
            /* to={`/profile/${user.username}`} */
            >
              <ProfileImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                }
                width={"56px"}
                height={"56px"}
              />
            </Link>
            {/*  <BrowserMapMemberDetail user={user} /> */}
            <span
              style={{
                maxWidth: "200px",
                position: "relative",
                overflow: "hidden",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "rgba(0,0,0,.7)",
                paddingBottom: "0",
                marginLeft: "16px",
              }}
            >
              Web Development
            </span>
          </div>
        </div>
        {user.username === Auth.user && (
          <IconButton>
            <BsPencil />
          </IconButton>
        )}
      </CardItemContainer>
    </>
  );
}

export default withRouter(CardSkills);
