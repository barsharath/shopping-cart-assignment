import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Slider from './components/Slider';
import Registration from './components/Registration';
import Products from './components/Products';
import Home from './components/Home';
import NavbarSidemenu from './components/NavbarSidemenu';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { fetchCategories } from './store/actions/categoriesAction';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <Container fluid>
      <Row className="shadowBottom ">
        <Col className="d-flex justify-content-between ">
          <Header />
        </Col>
      </Row>
      <Row className="shadowBottom">
        <Col className="d-flex justify-content-center m-0 p-0">
          <Routes>
            <Route path="/" element={<Slider />} />
          </Routes>
        </Col>
      </Row>

      <Row className="my-2 d-flex justify-content-center">
        <Routes>
          <Route path="/products" element={<NavbarSidemenu />} />
        </Routes>
        <Col>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Col>
      </Row>
      <Row className="sidebarBg mt-3">
        <Col className="d-flex justify-content-center"><Footer /></Col>
      </Row>
    </Container>
  );
}

export default App;
