import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ProfileImage from "../ui/profile-images/ProfileImage";
import BrowserMapMemberDetail from "../ui/browsemap/BrowserMapMemberDetail";
import BrowserMapEExp from "./BrowserMapEExp";
import Break from "../ui/themantic-break/Break";
import ModalCustom from "../ui/modals/ModalCustom";
import { MdAdd } from "react-icons/all";
import UpdateData from "../../data/UpdateData";
import ExperienceForm from "./ExperienceForm";
import ContainerCard from "../ui/cards/ContainerCard";
import Auth from "../../authorization/Auth";

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

  const { user, profilesexperience } = props;
  console.log("profilesexperience", props.profilesexperience);
  return (
    <>
      {Auth.user === user.username && (
        <ModalCustom
          title={"Add Experience"}
          button={<MdAdd style={{ color: "black" }} />}
        >
          <UpdateData
            data={profilesexperience}
            method={"PUT"}
            endpoint={`https://striveschool.herokuapp.com/api/profile/userName/experiences/${profilesexperience._id}`}
            {...props}
          >
            <ExperienceForm />
          </UpdateData>
        </ModalCustom>
      )}
      <Link
        className={classes.container} /* to={`/profile/${user.username}`} */
      >
        <ProfileImage
          src={
            props.profilesexperience.image
              ? props.profilesexperience.image
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          }
          width={"56px"}
          height={"56px"}
        />

        <BrowserMapEExp profilesexperience={props.profilesexperience} />
        {/* <BrowserMapMemberDetail user={user} /> */}
      </Link>

      <div style={{ width: "calc(100% - 52px)", marginLeft: "auto" }}>
        <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      </div>
    </>
  );
}

export default withRouter(CardEExp);
