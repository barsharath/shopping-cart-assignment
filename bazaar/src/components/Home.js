import React, { useEffect } from 'react'
import { Button, Image, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchCategories, setCategoryId } from '../store/actions/categoriesAction';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.catItems);

  const handleClick = (catId) => {
    dispatch(setCategoryId(catId));
    navigate("/products");
  }

  return (
    <Container className="mt-2">
      {categories.filter(item => item.order != -1).sort((a, b) => a.order - b.order).map((item, index) => (
        <Row key={item.id} className={`d-flex justify-content-between align-items-center shadowBottom mt-2 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
          <Col md={3}>
            <Image src={item.imageUrl} thumbnail className="border-0" />
          </Col>
          <Col md={5} className="d-flex flex-column align-items-center my-3">
            <h3 className="fw-bolder">{item.name}</h3>
            <span>{item.description}</span>
            <Button className="buyButton mt-3" onClick={() => handleClick(item.id)}>{`Explore ${item.key}`}</Button>
          </Col>
        </Row>

      ))}
    </Container>
  )
}

export default Home