import { useNavigate } from 'react-router-dom';
import { Button, Image, Modal, Col } from 'react-bootstrap';
import cartIcon from '../static/images/cart.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const CartButton = () => {
  const { totalItems } = useSelector(state => state.cart);
  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false)
  }
  const navigate = useNavigate();

  return (
    <>
      <Button size="sm" className="cartButton shadow-none d-block d-lg-none" onClick={() => navigate('/cart')} >
        <Image src={cartIcon} alt="add item" className="cartIcon me-2" />
        {totalItems === 0 ? '0 item'
          :
          <span className="ms-2">{`${totalItems}`}
            {totalItems > 1
              ? ' items'
              : ' item'
            }
          </span>
        }
      </Button>
      <Button variant="primary" onClick={() => setShow(true)} className="cartButton shadow-none d-none d-lg-block">
        <Image src={cartIcon} alt="add item" className="cartIcon me-2" />
        {totalItems === 0 ? '0 item'
          :
          <span>{`${totalItems}`}
            {totalItems > 1
              ? ' items'
              : ' item'
            }
          </span>
        }
      </Button>

      <Modal className='d-none d-lg-block'
        show={show}
        size="md"
        onHide={hideModal}
        dialogClassName="modalDialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="text-white bg-dark white " >
          <Modal.Title>
            <span className="fw-bold" >My Cart</span> {totalItems === 0 ? ''
              :
              <span className="fs-5">({`${totalItems}`}
                {totalItems > 1
                  ? ' items)'
                  : ' item)'
                }
              </span>
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart hideModal={hideModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CartButton;