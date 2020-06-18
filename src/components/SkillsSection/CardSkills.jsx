import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ProfileImage from "../ui/profile-images/ProfileImage";
import { Card } from 'react-bootstrap'

//import ContainerCard from "../ui/cards/ContainerCard";
import IconButton from "../ui/button/IconButton";
import CardItemContainer from "../ui/cards/CardItemContainer";
import Break from "../ui/themantic-break/Break";
import { BsPencil, /*MdAdd*/ } from "react-icons/all";

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

    //const { user, profilesexperience } = props;
    //console.log("profilesexperience", props.profilesexperience);
    return (
        <>
            <CardItemContainer>
                <div className={"w-100"}>
                    <div className={classes.container}>

                        <Link className="mb-5"
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
                        <Card.Title>Business Development</Card.Title>
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
                        <Card.Title>Web Development</Card.Title>
                    </div>





                </div>
                <IconButton>
                    <BsPencil />
                </IconButton>


            </CardItemContainer>
            <div style={{ width: "calc(100% - 52px)", marginLeft: "auto" }}>
                <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
            </div>

        </>
    );
}

export default withRouter(CardSkills);
