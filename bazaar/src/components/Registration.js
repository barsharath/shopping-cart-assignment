import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
const Registration = () => {
  const [inputValues, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = { ...validation };

    //first Name validation
    if (!inputValues.firstName.trim()) {
      errors.firstName = "First name is required";
    } else {
      errors.firstName = "";
    }
    //last Name validation
    if (!inputValues.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else {
      errors.lastName = "";
    }

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

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      errors.confirmPassword = "";
    }
    setValidation(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={7} lg={5}>
          <h5 className="mt-3 mb-2 ms-md-5 fw-bold">Signup</h5>
          <span className="ms-md-5">We do not share your personal details with anyone</span>
        </Col>

        <Col>
          <Row>
            <Col>
              <Form id="registrationForm"
                action="/"
                method="POST"
                className="w-75"
                onSubmit={handleSubmit}
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="First Name"
                  className='p-0'
                  onChange={(e) => handleChange(e)}
                  value={inputValues.firstName}
                >
                  <Form.Control type="text" name="firstName" placeholder="First Name" autocomplete="off" />
                </FloatingLabel>
                {validation.firstName != "" ? <div className="alert-dark p-1 mt-1">{validation.firstName}</div> : ''}
                <FloatingLabel
                  controlId="lastName"
                  label="Last Name"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.lastName}>
                  <Form.Control type="text" name="lastName" placeholder="Last Name" autocomplete="off" />
                </FloatingLabel>
                {validation.lastName != "" ? <div className="alert-dark p-1 mt-1">{validation.lastName}</div> : ''}
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
                <FloatingLabel
                  controlId="confirmPassword"
                  label="Confirm Password"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.confirmPassword}
                >
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                </FloatingLabel>
                {validation.confirmPassword != "" ? <div className="alert-dark p-1 mt-1">{validation.confirmPassword}</div> : ''}
                <Button variant="primary" type="submit" shadow-none className="btn-block w-100 mt-4 buyButton">
                  Signup
                </Button>

              </Form>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default Registration