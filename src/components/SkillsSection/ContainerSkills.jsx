import React from 'react';
import ContainerCard from "../ui/cards/ContainerCard"
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import CardSkills from "./CardSkills";
import CardTitle from "../ui/titles/CardTitle";
import { MdAdd } from "react-icons/all";
import CardItemContainer from "../ui/cards/CardItemContainer";
import IconButton from "../ui/button/IconButton";

function ContainerSkills(props) {
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
    //const { user } = props;
    return (
        <ContainerCard background="white">
            <CardItemContainer>
                <CardTitle>Skills</CardTitle>

                <IconButton>
                    <MdAdd />
                </IconButton>

            </CardItemContainer>


            <CardSkills />


        </ContainerCard>
    );
}

export default ContainerSkills;
