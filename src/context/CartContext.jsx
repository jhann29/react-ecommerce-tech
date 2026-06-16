import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

/**
 * Contexto global del carrito de compras.
 * Permite agregar, eliminar y consultar productos con cantidades.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    if (!product || quantity <= 0) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0] ?? product.image,
          quantity,
        },
      ];
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setItems([]);

  const getTotalItems = () =>
    items.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
      getTotalItems,
      getTotalPrice,
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
}

export default CartContext;
