import { Link } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import Brief from './Brief';
import { formatCOP } from '../utils/formatCurrency';

function Checkout() {
  const { items, clearCart, getTotalPrice } = useCart();

  const handleFinish = () => {
    alert('¡Compra finalizada! Gracias por tu pedido.');
    clearCart();
  };

  if (!items.length) {
    return (
      <Alert variant="warning">
        No hay productos para finalizar.{' '}
        <Link to="/">Volver al catálogo</Link>
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="h3 mb-4">Checkout</h1>
      <Brief />
      <Card className="mt-4 shadow-sm">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div>
            <strong>Total a pagar: </strong>
            <span className="fs-5">{formatCOP(getTotalPrice())}</span>
          </div>
          <Button variant="success" size="lg" onClick={handleFinish}>
            Finalizar compra
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Checkout;
