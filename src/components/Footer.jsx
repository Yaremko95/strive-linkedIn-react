import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footerLinks: {
    fontSize: "1rem",
    color: "grey",
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "'Source Sans Pro', sans-serif",
  },

  subText: {
    fontSize: "12px",
  },

  dropColor: {
    border: "2px solid blue",
    "&&:hover": {
      border: "2px solid black",
    },
  },
});

const Footer = ({ children }) => {
  const classes = useStyles();
  return (
    <footer>
      <Row className="text-center justify-content-center mt-5">
        <Col xs="8">
          <Row className="mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="Linkedin Logo"
            />
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5">
            <Col>
              <Row>
                <Col className={classes.footerLinks}>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Community Guidelines
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Privacy & Terms
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Sales Solutions
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Safety Center
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={classes.footerLinks}>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Accessibility
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Careers
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Ad Choices
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Mobile
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={classes.footerLinks}>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Talent Solutions
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Marketing Solutions
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Advertising
                    </a>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      Small Business
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className={classes.footerLinks}>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      <img src="https://img.icons8.com/material-outlined/24/000000/help.png" />
                      Questions?
                    </a>
                    <p className={classes.subText}>Visit our Help Center</p>
                  </p>
                  <p>
                    <a href="#" className={classes.footerLinks}>
                      <img src="https://img.icons8.com/metro/26/000000/settings.png" />
                      Manage your account
                    </a>
                    <p className={classes.subText}>Go to your settings</p>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className={classes.dropColor}
                    >
                      Select your Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Espanol</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <p>LinkedIn Corporation © 2020</p>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
