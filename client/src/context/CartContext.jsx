import { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '../api';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cartAPI.get().then(r => setCart(r.data)).catch(console.error);
  }, []);

  const addToCart = async (product) => {
    const res = await cartAPI.add({
      productId: product._id,
      name:      product.name,
      price:     product.price
    });
    setCart(res.data);
  };

  const removeFromCart = async (productId) => {
    const res = await cartAPI.remove(productId);
    setCart(res.data);
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);