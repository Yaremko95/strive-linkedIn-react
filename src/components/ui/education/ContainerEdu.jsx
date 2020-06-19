import React from "react";

import { MdAdd } from "react-icons/all";
import { Modal } from "react-bootstrap";
import ContainerCard from "../cards/ContainerCard";
import CardItemContainer from "../cards/CardItemContainer";
import CardTitle from "../titles/CardTitle";
import ModalCustom from "../modals/ModalCustom";
import IconButton from "../button/IconButton";
import CardEducation from "./CardEducation"
import EducationForm from "./EducationForm";
import Break from "../themantic-break/Break";


function ContainerEdu(props) {

  const { user } = props;
  return (
    <>
    <ContainerCard background="white" margin= {"0"} >
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
            
              <EducationForm />
           
          </ModalCustom>
        
      </CardItemContainer>
      

      <div className={"mt-3"}>        
      <CardEducation/>
     <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      <CardEducation/>
      <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      <CardEducation/>
      </div>
      </ContainerCard>
      </>
    
  );
}

export default ContainerEdu;