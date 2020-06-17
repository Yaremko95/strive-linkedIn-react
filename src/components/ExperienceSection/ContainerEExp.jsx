import React from "react";
import ContainerCard from "../ui/cards/ContainerCard";

import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import CardEExp from "./CardEExp";
import CardTitle from "../ui/titles/CardTitle";
import UpdateData from "../../data/UpdateData";
import ExperienceForm from "./ExperienceForm";
import ModalCustom from "../ui/modals/ModalCustom";
import NavButton from "../ui/navBar/NavButton";
import { MdAdd } from "react-icons/all";
import { Modal } from "react-bootstrap";
import Break from "../ui/themantic-break/Break";

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
    <ContainerCard background="white">
      <CardTitle>Experience</CardTitle>

      <ModalCustom
        title={"Add Experience"}
        button={<MdAdd style={{ color: "black" }} />}
      >
        <UpdateData
          method={"POST"}
          endpoint={`https://striveschool.herokuapp.com/api/profile/userName/experiences`}
          {...props}
        >
          <ExperienceForm />
        </UpdateData>
      </ModalCustom>
      <div>
        {props.experience.map((experience) => (
          <CardEExp {...props} profilesexperience={experience} />
        ))}
      </div>
      <hr />
    </ContainerCard>
  );
}

export default ContainerEExp;
