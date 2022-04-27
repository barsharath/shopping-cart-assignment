import  { useEffect } from 'react'
import { Card, Row, Col, Button, Image} from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { addToCart  } from "../store/actions/cartAction";
import { fetchProducts } from '../store/actions/productsActions';

const ProductItems = (props) => {  
  const dispatch = useDispatch();
  const catId = props.catId;

  useEffect(() => {
    dispatch(fetchProducts(catId));
  }, [catId]);

  let products = useSelector(state => state.products.items);
  
  if(products.length !== 0) {
    products = products.filter(item => item.category === catId);
  }

  const handleClick = (product) => {
    dispatch(addToCart(product));
  }

  return (
      <Row xs={1} sm={2} md={2} lg={4} xl={4} className="me-sm-4">
        {products.map((item) => (
          <Col className='m-0 p-0 mb-3 d-flex' key={item.id}>
            <Card className="m-1 mt-4 p-0 h-100 productCard">
              <Card.Body className="p-1 d-flex flex-column">
                <Card.Title className="fw-bold productTitle">{item.name}</Card.Title>
                <Row className="d-flex align-items-start">
                  <Col xs={5} sm={5} md={5} lg={12} className="align-items-start mb-2 pe-xs-only-0">
                    <Image src={item.imageURL} alt="kiwi" className="w-100 productImage" />
                  </Col>
                  <Col xs={7} sm={7} md={7} lg={12} className="ps-xs-only-0">
                    <Card.Text className="sidebarBg p-2 priceText">
                      {item.description}
                    </Card.Text>
                    <Button className="buyButton w-100 d-block d-sm-none d-flex justify-content-center align-self-end priceText" onClick={() => handleClick(item)}>
                      <span>Buy Now</span> <span className="d-block d-lg-none d-xl-none">&nbsp;@ Rs.{item.price}</span>
                    </Button>
                  </Col>
                  
                </Row>
                <Row className="d-flex align-items-center mb-3 mt-auto">
                  <Col className="d-none d-lg-block d-xl-block priceText ms-2 ">
                    MRP Rs.{item.price}
                  </Col>
                  <Col>
                    <Button className="buyButton w-100  d-sm-flex d-none d-sm-block  justify-content-center priceText" onClick={() => handleClick(item)}>
                      <span>Buy Now</span> <span className="d-block d-lg-none d-xl-none">&nbsp;@ Rs.{item.price}</span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>



  )
}

export default ProductItems