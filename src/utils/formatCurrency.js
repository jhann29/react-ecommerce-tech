/**
 * Formatea montos en pesos colombianos (COP).
 */
export function formatCOP(amount) {
  if (amount == null || Number.isNaN(amount)) {
    return '$ 0';
  }

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
