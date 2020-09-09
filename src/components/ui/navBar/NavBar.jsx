import React from "react";
import authAxios from "../../../authorization/authAxios";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";
import navMenu from "../../../constants/menu/navMenu";
import NavButton from "./NavButton";
import {
  getUserFromLocalStorage,
  getHeader,
} from "../../../authorization/Auth";

function NavBar(props) {
  const useStyles = createUseStyles((theme) => ({
    main: {
      backgroundColor: theme.primary.darkblue,
      padding: ".3rem 0",
      height: "54px",
    },
    logo: {
      height: "2rem",
      width: "2rem",
      backgroundColor: "white",
      borderRadius: "4px",
      marginLeft: "10px",
    },
  }));
  // const [image, setImage] = React.useState("");
  // React.useEffect(async () => {
  //   const user = getUserFromLocalStorage();
  //   let response = await fetch(
  //     `https://agile-brushlands-83006.herokuapp.com/profile/${user}`,
  //     {
  //       headers: {
  //         Authorization: getHeader(),
  //       },
  //     }
  //   );
  //   let data = await response.json();
  //   setImage(data.image);
  // });
  // const [storage, setStorage] = React.useState(false);
  console.log("avatar-button", props.avatar);
  const classes = useStyles();
  const logout = async () => {
    // const res = await authAxios.get("/profile/me", { withCredentials: true });
    // let user = {};
    // if (!res) {
    //   const secondRes = await axios.get("/users/me", {
    //     withCredentials: true,
    //   });
    //   user = secondRes.data;
    // } else {
    //   user = res.data;
    // }
    // });
    // if (response.ok) {
    //   props.history.push("profile/login");
    //   props.setTrigger(!props.triggerNav);
    // }
  };
  console.log("triggered button");
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
        {getUserFromLocalStorage() && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <SearchForm />
              <Nav className=" d-flex justify-content-between ml-auto">
                {navMenu.map(
                  (item) =>
                    item.label !== "Registration" &&
                    item.label !== "Login" && (
                      <Nav.Link
                        as={Link}
                        to={item.to}
                        className={"py-0"}
                        onClick={item.label === "Log out" && logout}
                      >
                        <NavButton
                          item={item}
                          avatar={props.avatar}
                          setTrigger={props.setTrigger}
                          trigger={props.triggerNav}
                        />
                      </Nav.Link>
                    )
                )}
              </Nav>
            </Navbar.Collapse>
          </>
        )}
        {!getUserFromLocalStorage() &&
          navMenu.map(
            (item) =>
              (item.label === "Registration" || item.label === "Login") && (
                <Nav.Link as={Link} to={item.to} className={"py-0"}>
                  <NavButton item={item} />
                </Nav.Link>
              )
          )}
      </Container>
    </Navbar>
  );
}
export default withRouter(NavBar);
