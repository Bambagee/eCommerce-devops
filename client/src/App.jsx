import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav style={{ background: '#1E4D8C', padding: '12px 24px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center' }}>
          <Link to='/' style={{ color: '#fff', fontWeight: 700,
            fontSize: 20, textDecoration: 'none' }}>
            🛒 eCommerce
          </Link>
          <Link to='/cart' style={{ color: '#fff',
            textDecoration: 'none', fontWeight: 600 }}>
            Cart
          </Link>
        </nav>
        <Routes>
          <Route path='/'     element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}