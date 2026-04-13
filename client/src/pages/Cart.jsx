import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 16,
      textAlign: 'center' }}>
      <h2>Your cart is empty</h2>
      <a href='/'>Browse products</a>
    </div>
  );

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginBottom: 24 }}>Cart ({cart.length} items)</h1>
      {cart.map(item => (
        <div key={item.productId} style={{ display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 0', borderBottom: '1px solid #eee' }}>
          <div>
            <p style={{ fontWeight: 600, margin: 0 }}>{item.name}</p>
            <p style={{ color: '#666', margin: '4px 0 0', fontSize: 14 }}>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontWeight: 700 }}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(item.productId)}
              style={{ background: 'none', border: '1px solid #cc0000',
                color: '#cc0000', borderRadius: 4, padding: '4px 10px',
                cursor: 'pointer' }}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'right', marginTop: 24 }}>
        <p style={{ fontSize: 22, fontWeight: 700 }}>
          Total: ${total.toFixed(2)}
        </p>
        <button style={{ background: '#1D6A40', color: '#fff', border: 'none',
          borderRadius: 8, padding: '12px 32px', fontSize: 16,
          cursor: 'pointer', fontWeight: 600 }}>
          Checkout
        </button>
      </div>
    </div>
  );
}
