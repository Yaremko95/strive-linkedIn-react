import React from "react";
import { Alert, Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavButton from "../ui/navBar/NavButton";

function LoginForm(props) {
  const mystyle = {
    border: "1px solid black",
    backgroundColor: "whitesmoke",
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "10rem",
  };
  const { credentials, login, setData, success } = props;
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="mt-5" style={mystyle}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png"
              style={{ width: "250px", marginLeft: "110px" }}
            ></img>
            <div className="mt-3 my-3 ml-3 mr-3">
              {!success && (
                <Alert variant={"danger"}>
                  Incorrect username or password!
                </Alert>
              )}
              <Form
                onSubmit={(e) => {
                  login(e);
                }}
              >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={credentials.username}
                    onChange={(e) => setData({ username: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setData({ password: e.target.value })}
                  />
                </Form.Group>

                <div className={"d-flex justify-content-between"}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Nav.Link as={Link} to={"/register"} className={"py-0"}>
                    <span>Sign Up</span>
                  </Nav.Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
