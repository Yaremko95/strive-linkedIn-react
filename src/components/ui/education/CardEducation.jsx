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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjgz-SpEKXN8h8rPSi19jdpsU2ZhVWu8CpC5yL7_ukA7eu6y4a&usqp=CAU"
              width={"56px"}
              height={"56px"}
            />

            <BrowserMapEdu />
          </Link>

          <div style={{ width: "calc(100% - 52px)", marginLeft: "auto" }}>
            {/* <Break color={"rgba(0,0,0,.15)"} weight={"1px"} /> */}
          </div>
        </div>

        <ModalCustom
          title={"Update Education"}
          button={<IconButton></IconButton>}
        >
          <ExperienceForm />
        </ModalCustom>
      </CardItemContainer>
    </>
  );
}

export default CardEducation;
