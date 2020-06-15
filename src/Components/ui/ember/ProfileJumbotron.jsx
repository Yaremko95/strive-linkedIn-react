import React, { Component, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  Button,
  Jumbotron,
} from "react-bootstrap";
import ProfileImage from "../profile-images/ProfileImage";

function ProfileJumbotron(props) {
  const ColStyle = {
    height: "190px",
  };
  const CameraRowStyle = {
    display: "flex",
    justifyContent: "end",

    paddingRight: "1.1rem",
  };
  const CameraIconStyle = {
    color: "#054397",
    backgroundColor: "white",
    borderRadius: "50px",
    padding: "8px",
    marginTop: "1rem",
    marginLeft: "auto",
  };
  const ProfileImageStyle = {
    width: "170px",
    borderRadius: "90px",
    border: "2px solid black",
    marginTop: "3rem",
    marginRight: "0.8rem",
  };
  const ProfileJumbotronBtns = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    marginTop: "3.5rem",
  };
  const PenIconStyle = {
    color: "#0073B1",
    fontSize: "1.3rem",
  };
  const DropdownProfileBtn = {
    backgroundColor: "#0073B1",
    marginRight: "0.5rem",
  };
  const MoreProfilebtn = {
    border: "1px gray solid",
    marginRight: "1.3rem",
  };
  const ProfileInfoStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "0",
    paddingLeft: "1.5rem",
  };
  const h3Style = {
    display: "flex",
  };
  const JumbotronStyle = {
    backgroundImage: `url('https://coverfiles.alphacoders.com/648/64823.jpg')`,
    backgroundPosition: "top-center",
    backgroundSize: "100% 190px",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    borderRadius: "0px",
    border: "1px solid #DCDCDC",
    backgroundColor: "white",
    boxShadow: " 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
  };
  const SpanStyle = {
    color: "#0073B1",
    fontWeight: "bold",
  };
  const DottedDivStyle = {
    display: "flex",
    width: "100%",
    height: "100px",
    border: "2px dashed gray",
  };
  const pStyle = {
    padding: "12px",
    margin: "0px",
  };
  const ExitIconStyle = {};

  // const [user, setUser] = React.useState({});
  // useEffect(() => {
  //   setUser(props.user);
  // }, []);
  const { user } = props;
  return (
    <>
      {console.log("user", props)}
      <Col lg={8} style={ColStyle}>
        <Jumbotron style={JumbotronStyle}>
          <div style={CameraRowStyle}>
            <i style={CameraIconStyle} class="fa fa-camera"></i>
          </div>
          <Row>
            <Col style={ProfileInfoStyle}>
              <img
                style={ProfileImageStyle}
                src={user.image ? user.image : "/assets/LinkedInNoPic.png"}
              />
              <h4 style={h3Style}> {user.name}</h4>
              <h6 style={h3Style}>{user.bio}</h6>
              <h7 style={h3Style}>
                Spain &nbsp;.&nbsp;&nbsp;{" "}
                <span style={SpanStyle}>
                  {"   "} 60 Connections&nbsp; . &nbsp; Contact Info
                </span>
              </h7>
            </Col>
            <Col style={ProfileJumbotronBtns}>
              <Dropdown>
                <Dropdown.Toggle style={DropdownProfileBtn} id="dropdown-basic">
                  Add profile section
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button style={MoreProfilebtn} variant="light">
                More...
              </Button>
              <div style={PenIconStyle}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </div>
            </Col>
          </Row>

          <div style={{ padding: "30px", justifyContent: "center" }}>
            <div style={DottedDivStyle}>
              {/* <div className='row'><i style={ExitIconStyle}class="fa fa-times" aria-hidden="true"></i></div> */}

              <div style={pStyle}>
                <b>Show recruiters you're open</b> to job opportunities-you
                control who sees this
                <br />
                <span style={{ display: "flex", color: "#0073B1" }}>
                  <b>Get started</b>
                </span>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Col>
    </>
  );
}

export default ProfileJumbotron;
