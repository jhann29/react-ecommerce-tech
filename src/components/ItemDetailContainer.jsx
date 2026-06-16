import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import { fetchProductById } from '../services/productService';

/**
 * Obtiene un producto de tecnología por ID desde la URL y renderiza ItemDetail.
 */
function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
