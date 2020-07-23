import React from "react";
import ContainerCard from "../ui/cards/ContainerCard";

import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import CardEExp from "./CardEExp";
import CardTitle from "../ui/titles/CardTitle";
import UpdateData from "../../data/UpdateData";
import ExperienceForm from "../form/ExperienceForm";
import ModalCustom from "../ui/modals/ModalCustom";
import NavButton from "../ui/navBar/NavButton";
import { MdAdd } from "react-icons/all";
import { Modal } from "react-bootstrap";
import Break from "../ui/themantic-break/Break";
import Auth from "../../authorization/Auth";
import CardItemContainer from "../ui/cards/CardItemContainer";
import IconButton from "../ui/button/IconButton";
import ContainerEdu from "../ui/education/ContainerEdu";

function ContainerEExp(props) {
  /* const useStyles = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    link: {
      display: "flex",
      flexDirection: "column",

      justifyContent: "center",
      alignItems: "center",
    },
  }));
  const classes = useStyles(); */
  const { user } = props;
  return (
    <ContainerCard background="white" margin={"0"}>
      <CardItemContainer>
        <CardTitle>Experience</CardTitle>
        {Auth.user === user.username && (
          <ModalCustom
            title={"Add Experience"}
            button={
              <IconButton>
                <MdAdd />
              </IconButton>
            }
          >
            <UpdateData
              method={"POST"}
              params={`${Auth.user}/experiences`}
              endpoint={`https://agile-brushlands-83006.herokuapp.com/profile/`}
              {...props}
            >
              <ExperienceForm />
            </UpdateData>
          </ModalCustom>
        )}
      </CardItemContainer>

      <div className={"mt-3"}>
        {props.experience.map((experience) => (
          <CardEExp {...props} profilesexperience={experience} />
        ))}
      </div>
    </ContainerCard>
  );
}

export default ContainerEExp;
