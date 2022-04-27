import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const NavbarLogin = () => {
  return (
    <Navbar variant="light" className="p-0 d-none d-sm-block">
      <Container className="p-0 mb-2">
        <Nav>
          <LinkContainer to="/signin" className="p-0">
            <Nav.Link >Signin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register" className="p-0">
            <Nav.Link className="ms-2 ">Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavbarLogin;