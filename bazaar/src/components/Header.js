import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import NavbarHome from './NavbarHome';
import CartButton from './CartButton';
import Logo from './Logo';
import NavbarLogin from './NavbarLogin';

const Header = () => {
  return (
    <Container fluid className="p-0 mx-4">
      <Row>
        <Col xs={3} sm={3} md={3} lg={2} className="align-self-center m-0 ">
          <LinkContainer to="/" className="p-0">
            <Nav.Link ><Logo /></Nav.Link>
          </LinkContainer>
        </Col>
        <Col xs={2} sm={4} md={3} lg={2} className="mt-auto p-0">
          <NavbarHome />
        </Col>
        <Col className="mt-auto">
          <Container>
            <Row>
              <Col className='d-flex justify-content-end m-0 p-0'>
                <NavbarLogin />
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-end m-0 p-0'>
                <CartButton />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;