import React from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm(props) {
  const { credentials, login, setData } = props;
  return (
    <div>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
