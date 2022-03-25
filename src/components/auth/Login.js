import React, { useState, useNavigate, useLocation } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import FormContainer from "./FormContainer";
import LoadingSpinner from "../layout/LoadingSpinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-3">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer ?{" "}
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
