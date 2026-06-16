import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function AddItemButton({ product, quantity }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div>
      <Button variant="success" onClick={handleAdd}>
        Agregar al carrito
      </Button>
      {added && (
        <Alert variant="success" className="mt-3 py-2">
          Producto agregado correctamente.
        </Alert>
      )}
    </div>
  );
}

export default AddItemButton;
