import React, { useEffect } from 'react'
import { ListGroup, Col, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCategoryId } from '../store/actions/categoriesAction';


const NavbarSidemenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.catItems);
  let storeCatId = useSelector(state => state.categories.selectedCategoryId);
  if (storeCatId === null) {
    if (categories.length != 0) {
      storeCatId = categories.find(o => o.order === 1).id;
    }
  }

  const changeCategory = (catId) => {
    dispatch(setCategoryId(catId));
  }

  return (
    <>
      <Col sm={3} md={3} lg={2} xl={2} className="d-none d-sm-block sidebarBg ms-4 priceText">

        <ListGroup variant="flush">
          {categories.filter(item => item.order != -1).sort((a, b) => a.order - b.order).map((item, index) => (
            <ListGroup.Item key={item.id} onClick={() => changeCategory(item.id)} className={storeCatId === item.id ? 'fw-bold' : ''}> <Nav.Link>{item.name}</Nav.Link></ListGroup.Item>
          ))}

        </ListGroup>
      </Col>
    </>

  )
}

export default NavbarSidemenu
