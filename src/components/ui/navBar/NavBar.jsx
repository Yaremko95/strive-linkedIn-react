import React from "react";

import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";
import navMenu from "../../../constants/menu/navMenu";
import NavButton from "./NavButton";

export default function NavBar() {
  const useStyles = createUseStyles((theme) => ({
    main: {
      backgroundColor: theme.primary.darkblue,
      padding: ".3rem 0",
      height:'54px'
    },
    logo: {
      height: "2rem",
      width: "2rem",
      backgroundColor: "white",
      borderRadius: "4px",
      marginLeft: "10px",
    },
  }));
  const classes = useStyles();
  return (
    <Navbar expand="lg" className={classes.main}>
      <Container className="px-4">
        <Navbar.Brand as={Link} to={"/"}>
          <Image
            className={classes.logo}
            src={
              "https://seeklogo.com/images/L/linkedin-icon-logo-FBADE03110-seeklogo.com.png"
            }
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <SearchForm />
          <Nav className=" d-flex justify-content-between ml-auto">
            {navMenu.map((item) => (
              <Nav.Link as={Link} to={item.to} className={"py-0"}>
                <NavButton item={item} />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
