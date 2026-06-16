import { Row, Col } from 'react-bootstrap';
import Item from './Item';

function ItemList({ products }) {
  if (!products?.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;
