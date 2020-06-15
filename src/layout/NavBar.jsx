import React from "react";
import { AiOutlineHome, AiOutlinePlaySquare } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { BsBriefcase, BsBell, BsGrid3X3Gap } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

//import { library } from '@fortawesome/fontawesome-svg-core';

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Image,
} from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  faLinkedin , } from '@fortawesome/free-brands-svg-icons';
//import { faHome, faUserFriends, faBriefcase, faStickyNote, faBell } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="my-0 py-0">
      <Container className="my-0 py-0">
        <Navbar.Brand href="#home">
          <Button
            className="m-0 p-0"
            style={{ backgroundColor: "DodgerBlue !important" }}
          >
            <FaLinkedinIn size={30} />
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Nav className="ml-auto">
            {/* <ul class=""><li id="feed-nav-item" class="nav-item nav-item--feed" lang="en"> */}
            <Nav.Link className="m-0 p-0" href="#home">
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: "0.9rem !important",
                  fontWeight: "100 !important",
                }}
              >
                <li>
                  <AiOutlineHome />
                </li>
                <li>
                  <small>Home</small>
                </li>
              </ul>
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <FiUsers />{" "}
                </li>
                <li>
                  <small>My Network</small>
                </li>
              </ul>
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <BsBriefcase />{" "}
                </li>
                <li>
                  <small>Jobs</small>
                </li>
              </ul>{" "}
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <TiMessages />{" "}
                </li>
                <li>
                  <small>Messages</small>
                </li>
              </ul>{" "}
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <BsBell />{" "}
                </li>
                <li>
                  <small>Notifications</small>
                </li>
              </ul>{" "}
            </Nav.Link>
            <Nav.Link href="#home" className="border-right m-0 p-0">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  {" "}
                  <Image
                    src=""
                    roundedCircle
                    style={{ height: "20px", width: "20px" }}
                    className="p-0 m-0"
                  />{" "}
                </li>
                <NavDropdown
                  className="p-0 m-0"
                  title="Me"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </ul>
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <BsGrid3X3Gap />{" "}
                </li>
                <NavDropdown
                  className="p-0 m-0"
                  title="Me"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </ul>{" "}
            </Nav.Link>
            <Nav.Link className="m-0 p-0" href="#home">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <AiOutlinePlaySquare />{" "}
                </li>
                <li>
                  <small>Learning</small>
                </li>
              </ul>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
