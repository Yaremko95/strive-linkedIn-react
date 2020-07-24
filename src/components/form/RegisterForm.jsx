import React from "react";
import { Button, Form } from "react-bootstrap";

function RegisterForm(props) {
  const { credentials, register, setData } = props;
  return (
    <div>
      <Form
        onSubmit={(e) => {
          register(e);
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={credentials.name}
            onChange={(e) => setData({ name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter surname"
            value={credentials.surname}
            onChange={(e) => setData({ surname: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={credentials.username}
            onChange={(e) => setData({ username: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={(e) => setData({ email: e.target.value })}
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

export default RegisterForm;
