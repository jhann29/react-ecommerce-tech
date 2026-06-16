import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatCOP } from '../utils/formatCurrency';
import ProductImage from './ProductImage';

function Item({ product }) {
  return (
    <Card className="product-card h-100 shadow-sm">
      <ProductImage product={product} alt={product.title} />
      <Card.Body className="d-flex flex-column">
        {product.category && (
          <Badge bg="secondary" className="mb-2 align-self-start">
            {product.category}
          </Badge>
        )}
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="text-muted mb-2">
          {formatCOP(product.price)}
        </Card.Text>
        <Button as={Link} to={`/item/${product.id}`} variant="primary" className="mt-auto">
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
