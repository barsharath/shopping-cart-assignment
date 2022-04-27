import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Accordion, Row, Col } from 'react-bootstrap';
import ProductItems from './ProductItems';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../store/actions/categoriesAction';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  
  const categories = useSelector(state => state.categories.catItems);
  let categoryId = useSelector(state => state.categories.selectedCategoryId);
  if(categoryId === null) {
    let defaultCategory = categories.find(o => o.order === 1);
    if (defaultCategory) {
      categoryId = defaultCategory.id;
    }
  }

  return (
    <>
      <Row className="d-none d-sm-block">
        <Col>
          <ProductItems catId={categoryId} />
        </Col>
      </Row>

      <Accordion defaultActiveKey={categoryId} className="d-block d-sm-none mx-4">
      {categories.filter(item=>item.order != -1).sort((a, b) => a.order - b.order).map((item, index) => (
        <Accordion.Item eventKey={item.id} key={item.id}>
          <Accordion.Header >{item.name}</Accordion.Header>
          <Accordion.Body>
             <ProductItems catId={item.id}/>
          </Accordion.Body>
        </Accordion.Item>
      ))}
      </Accordion>

    </>
  )
}

export default Products