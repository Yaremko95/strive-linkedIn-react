import React from "react";

import { MdAdd } from "react-icons/all";
import { Modal } from "react-bootstrap";
import ContainerCard from "../cards/ContainerCard";
import CardItemContainer from "../cards/CardItemContainer";
import CardTitle from "../titles/CardTitle";
import ModalCustom from "../modals/ModalCustom";
import IconButton from "../button/IconButton";
import CardEducation from "./CardEducation";
import EducationForm from "./../../form/EducationForm";
import Break from "../themantic-break/Break";
import UpdateData from "../../../data/UpdateData";
import { getUserFromLocalStorage } from "../../../authorization/Auth";

function ContainerEdu(props) {
  const { user, educations } = props;
  console.log("educations", props.educations);
  return (
    <>
      <ContainerCard background="white" margin={"0"}>
        <CardItemContainer>
          <CardTitle>Education</CardTitle>

          <ModalCustom
            title={"Add Education"}
            button={
              <IconButton>
                <MdAdd />
              </IconButton>
            }
          >
            <UpdateData
              method={"POST"}
              params={`${getUserFromLocalStorage()}/educations`}
              endpoint={`https://agile-brushlands-83006.herokuapp.com/profile/`}
              {...props}
            >
              <EducationForm />
            </UpdateData>
          </ModalCustom>
        </CardItemContainer>

        <div className={"mt-3"}>
          {educations.map((education) => (
            <>
              {" "}
              <CardEducation education={education} {...props} />
              <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
            </>
          ))}
        </div>
      </ContainerCard>
    </>
  );
}

export default ContainerEdu;
