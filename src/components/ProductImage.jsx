import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
  CATEGORY_FALLBACK_IMAGES,
  PLACEHOLDER_IMAGE,
  getProductImageSrc,
} from '../constants/productImages';

/**
 * Imagen de producto con respaldo automático si la URL falla.
 */
function ProductImage({ product, alt, className, variant = 'top' }) {
  const initialSrc = getProductImageSrc(product);
  const [src, setSrc] = useState(initialSrc);
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleError = () => {
    if (fallbackStep === 0 && product?.category) {
      const categorySrc = CATEGORY_FALLBACK_IMAGES[product.category];
      if (categorySrc && categorySrc !== src) {
        setFallbackStep(1);
        setSrc(categorySrc);
        return;
      }
    }

    if (fallbackStep < 2 && src !== PLACEHOLDER_IMAGE) {
      setFallbackStep(2);
      setSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <Card.Img
      variant={variant}
      src={src}
      alt={alt ?? product?.title ?? 'Producto'}
      className={className}
      onError={handleError}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

export default ProductImage;
