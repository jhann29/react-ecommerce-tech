import { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import AddItemButton from './AddItemButton';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

function ItemQuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((q) => Math.max(MIN_QUANTITY, q - 1));
  const increase = () => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1));

  return (
    <div className="mt-4">
      <label className="form-label fw-semibold">Cantidad</label>
      <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
        <Button variant="outline-secondary" onClick={decrease}>-</Button>
        <input
          type="text"
          className="form-control text-center"
          value={quantity}
          readOnly
          aria-label="Cantidad seleccionada"
        />
        <Button variant="outline-secondary" onClick={increase}>+</Button>
      </InputGroup>
      <AddItemButton product={product} quantity={quantity} />
    </div>
  );
}

export default ItemQuantitySelector;
