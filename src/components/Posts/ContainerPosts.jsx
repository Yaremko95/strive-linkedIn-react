// import React from 'react'
// import React from "react";
// import ContainerCard from "../ui/cards/ContainerCard";
// import { createUseStyles } from "react-jss";
// import { Link } from "react-router-dom";
// import CardEExp from "./CardEExp";
// import CardTitle from "../ui/titles/CardTitle";
// import UpdateData from "../../data/UpdateData";
// import ExperienceForm from "../form/ExperienceForm";
// import ModalCustom from "../ui/modals/ModalCustom";
// import NavButton from "../ui/navBar/NavButton";
// import { MdAdd } from "react-icons/all";
// import { Modal } from "react-bootstrap";
// import Break from "../ui/themantic-break/Break";
// import Auth from "../../authorization/Auth";
// import CardItemContainer from "../ui/cards/CardItemContainer";
// import IconButton from "../ui/button/IconButton";
// import ContainerEdu from "../ui/education/ContainerEdu";

// function ContainerPosts() {
//     const { user } = props;
//     return (
//       <ContainerCard background="white" margin = {"0"}>
//         <CardItemContainer>
//           <CardTitle></CardTitle>
//           {Auth.user === user.username && (
//             <ModalCustom
//               title={"Add Experience"}
//               button={
//                 <IconButton>
//                   <MdAdd />
//                 </IconButton>
//               }
//             >
//               <UpdateData
//                 method={"POST"}
//                 endpoint={`https://striveschool.herokuapp.com/api/profile/userName/experiences`}
//                 {...props}
//               >
//                 <ExperienceForm />
//               </UpdateData>
//             </ModalCustom>
//           )}
//         </CardItemContainer>
  
//         <div className={"mt-3"}>
//           {props.experience.map((experience) => (
//             <CardEExp {...props} profilesexperience={experience} />
//           ))}
//         </div>
       
        
        
//       </ContainerCard>
      
//     );
//   }

// export default ContainerPosts
