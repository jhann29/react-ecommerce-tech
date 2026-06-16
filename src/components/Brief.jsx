import { Link } from 'react-router-dom';
import { Card, Button, Table, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/formatCurrency';

/**
 * Resumen de compra: productos, cantidades y subtotales.
 */
function Brief() {
  const { items, removeItem, getTotalPrice } = useCart();

  if (!items.length) {
    return (
      <Alert variant="info">
        Tu carrito está vacío.{' '}
        <Link to="/">Ver catálogo</Link>
      </Alert>
    );
  }

  return (
    <Card className="shadow-sm">
      <Card.Header as="h2" className="h4 mb-0">Resumen de compra</Card.Header>
      <Card.Body>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{formatCOP(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{formatCOP(item.price * item.quantity)}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <strong>Total: {formatCOP(getTotalPrice())}</strong>
          <Button as={Link} to="/checkout" variant="primary">
            Ir a checkout
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Brief;
