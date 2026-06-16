import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { getTotalItems } = useCart();
  const total = getTotalItems();

  return (
    <Link
      to="/cart"
      className="btn btn-outline-light d-flex align-items-center gap-2"
      aria-label="Ver carrito"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>Carrito</span>
      {total > 0 && (
        <span className="badge bg-danger cart-widget-badge">{total}</span>
      )}
    </Link>
  );
}

export default CartWidget;
