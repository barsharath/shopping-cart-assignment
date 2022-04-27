import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
const Login = () => {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  const checkValidation = () => {
    let errors = { ...validation };

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }
    //password validation
    const password = inputValues.password;
    if (!password) {
      errors.password = "Password is required";
    } else {
      errors.password = "";
    }
    setValidation(errors);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={7} lg={6}>
          <h5 className="mt-3 mb-2 ms-lg-5 fw-bold">Login</h5>
          <span className="ms-lg-5">Get acess to your Orders,Wishlists and Recomendatations</span>
        </Col>

        <Col>
          <Row>
            <Col>
              <Form id="loginForm"
                action="/"
                method="POST"
                className="w-75"
                onSubmit={handleSubmit}
              >
                <FloatingLabel
                  controlId="email"
                  label="Email"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.email}
                >
                  <Form.Control type="email" name="email" placeholder="Email" autocomplete="off" />
                </FloatingLabel>
                {validation.email != "" ? <div className="alert-dark p-1 mt-1">{validation.email}</div> : ''}
                <FloatingLabel
                  controlId="password"
                  label="Password"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.password}
                >
                  <Form.Control type="password" name="password" placeholder="Password" />
                </FloatingLabel>
                {validation.password != "" ? <div className="alert-dark p-1 mt-1">{validation.password}</div> : ''}
                <Button variant="primary" type="submit" shadow-none className="btn-block w-100 mt-4 buyButton">
                  Login
                </Button>

              </Form>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default Login