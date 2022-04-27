import { useDispatch, useSelector } from 'react-redux';
import lowestPriceImage from '../static/images/lowest-price.png';
import multiplyIcon from '../static/images/close.svg';
import arrowRight from '../static/images/arrow-right.svg';
import { Button, Image, Col, Container, Row } from 'react-bootstrap';
import { addToCart, removeFromCart } from "../store/actions/cartAction";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
    const { items, totalPrice, totalItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addItem = (product) => {
        dispatch(addToCart(product));
    }
    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    }

    const shopNow = () => {
        if (props.hideModal) {
            props.hideModal();
        }
        navigate("/");
    }

    return (
        <>
            {totalItems !== 0
                ?
                <Row>
                    <Col>
                        <Container className="sidebarBg p-2 ">
                            <Row className="bg-white mt-4 py-2 d-block d-lg-none">
                                <Col><span className="fw-bold fs-4" >My Cart</span> {totalItems === 0 ? ''
                                    :
                                    <span className="fs-6">({`${totalItems}`}
                                        {totalItems > 1
                                            ? ' items)'
                                            : ' i                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       tem)'
                                        }
                                    </span>
                                }</Col>
                            </Row >
                            {items.map((item) => (
                                <Row className="bg-white mt-3 py-2 align-self-center">
                                    <Col lg={2} md={2} sm={3} xs={2} className="p-0">
                                        <Image src={item.imageURL} alt={item.name} className="w-100" />
                                    </Col>
                                    <Col lg={8} md={8} sm={7} xs={7} className="d-flex flex-column align-self-center ms-0 pl-0">
                                        <h6>{item.name}</h6>
                                        <Col className="d-flex align-items-center p-0">
                                            <Button className="incDecButton priceText me-2" onClick={() => removeItem(item)}>-</Button>
                                            <span>{item.qty}</span>
                                            <Button className="incDecButton priceText m-0 ms-2" onClick={() => addItem(item)}>+</Button>
                                            <Image src={multiplyIcon} alt="multitply" className="ms-2" />
                                            <span className="ms-2">Rs.{item.price}</span>
                                        </Col>
                                    </Col>
                                    <Col className="d-flex justify-content-end align-self-center">Rs.{item.price * item.qty}</Col>
                                </Row>
                            ))}
                            <Row className="bg-white mt-3 py-3 align-self-center mx-3 rounded">
                                <Col lg={2} md={2} sm={3} xs={3}><Image src={lowestPriceImage} alt="kiwi" className="w-100" /></Col>
                                <Col className="d-flex flex-column align-self-center">
                                    <span className="priceText">You won't find it cheaper anywhere</span>
                                </Col>
                            </Row>
                        </Container>
                        <Row className="bg-white mx-4">
                            <Col className="d-flex justify-content-center py-2">
                                <span className="priceText">Promo code can be applied on payment page</span>
                            </Col>
                        </Row>
                        <Row className="bg-white">
                            <Col className="d-flex justify-content-center py-2">
                                <Button className="buyButton w-100 d-flex justify-content-between priceText rounded">
                                    <span className='ms-2 ps-1'>Proceed to Checkout</span>
                                    <Col className="d-flex justify-content-end align-self-center">
                                        <span >Rs{totalPrice} </span>
                                        <Image src={arrowRight} alt="right" className="ms-2" />
                                    </Col>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                :
                <Row >
                    <Col className="d-flex flex-column py-2">
                        <div className="d-flex flex-column align-self-center justify-content-center vh50">
                            <h5 className="align-self-center justify-content-center" > No items in your cart </h5>
                            <span className="align-self-center justify-content-center ">Your favourite items are just a click away</span>
                        </div>
                        <Button className="buyButton py-2 mt-2 w-100" onClick={() => shopNow()}>Start Shopping</Button>

                    </Col>
                </Row>

            }
        </>

    )
}

export default Cart