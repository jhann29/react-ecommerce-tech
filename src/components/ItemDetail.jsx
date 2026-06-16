import { Row, Col, Card, Badge } from 'react-bootstrap';
import ItemQuantitySelector from './ItemQuantitySelector';
import { formatCOP } from '../utils/formatCurrency';
import ProductImage from './ProductImage';

function ItemDetail({ product }) {
  return (
    <Row className="g-4">
      <Col md={6}>
        <Card className="shadow-sm">
          <ProductImage product={product} alt={product.title} />
        </Card>
      </Col>
      <Col md={6}>
        {product.category && (
          <Badge bg="dark" className="mb-2">{product.category}</Badge>
        )}
        <h1 className="h3">{product.title}</h1>
        <p className="text-muted fs-5 mb-3">{formatCOP(product.price)}</p>
        <p>{product.description}</p>
        <ItemQuantitySelector product={product} />
      </Col>
    </Row>
  );
}

export default ItemDetail;
