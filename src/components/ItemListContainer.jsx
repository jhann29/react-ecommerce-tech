import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import ItemList from './ItemList';
import { fetchProducts } from '../services/productService';

/**
 * Contenedor que obtiene productos de tecnología desde API local y renderiza ItemList.
 */
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Cargando catálogo...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      {greeting && <h2 className="mb-4">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
