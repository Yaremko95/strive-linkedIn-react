import React from "react";

import { createUseStyles } from "react-jss";

import { BsPencil, MdAdd } from "react-icons/all";

import { IconBase } from "react-icons";
import CardItemContainer from "../cards/CardItemContainer";
import { Link } from "react-router-dom";
import ProfileImage from "../profile-images/ProfileImage";

import Break from "../themantic-break/Break";
import ModalCustom from "../modals/ModalCustom";
import IconButton from "../button/IconButton";
import ExperienceForm from "../../form/ExperienceForm";
import BrowserMapEdu from "./BrowserMapEdu";
import { getUserFromLocalStorage } from "../../../authorization/Auth";
import UpdateData from "../../../data/UpdateData";
import EducationForm from "../../form/EducationForm";

function CardEducation(props) {
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
  const { education, user } = props;
  console.log("..................", props);
  /*  const { user, profilesexperience } = props;
  console.log("profilesexperience", props.profilesexperience); */
  return (
    <>
      <CardItemContainer>
        <div className={"w-100"}>
          <Link
            className={classes.container} /* to={`/profile/${user.username}`} */
          >
            <ProfileImage
              src={education.image}
              width={"56px"}
              height={"56px"}
            />

            <BrowserMapEdu education={education} />
          </Link>

          <div style={{ width: "calc(100% - 52px)", marginLeft: "auto" }}>
            {/* <Break color={"rgba(0,0,0,.15)"} weight={"1px"} /> */}
          </div>
        </div>

        {getUserFromLocalStorage() === user.username && (
          <ModalCustom
            title={"Update Education"}
            button={
              <IconButton>
                <BsPencil />
              </IconButton>
            }
          >
            <UpdateData
              data={education}
              method={"PUT"}
              endpoint={`https://agile-brushlands-83006.herokuapp.com/profile/${user.username}/educations/${education._id}`}
              {...props}
            >
              <EducationForm />
            </UpdateData>
          </ModalCustom>
        )}
      </CardItemContainer>
    </>
  );
}

export default CardEducation;
