export const PLACEHOLDER_IMAGE = '/images/placeholder-tech.svg';

/** URLs verificadas por categoría (respaldo si falla la imagen del producto). */
export const CATEGORY_FALLBACK_IMAGES = {
  iPhone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop&auto=format',
  Mac: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format',
  iPad: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop&auto=format',
  Audio: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&auto=format',
  Watch: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop&auto=format',
  Accesorios: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop&auto=format',
};

export function getProductImageSrc(product) {
  const primary = product?.images?.[0];
  if (primary) return primary;

  const categoryFallback = CATEGORY_FALLBACK_IMAGES[product?.category];
  return categoryFallback ?? PLACEHOLDER_IMAGE;
}
