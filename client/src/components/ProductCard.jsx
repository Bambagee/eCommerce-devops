import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #e2e2e2', borderRadius: 8, padding: 16,
      background: '#fff' }}>
      <h3 style={{ margin: '0 0 8px', fontSize: 16 }}>{product.name}</h3>
      <p style={{ margin: '0 0 4px', color: '#666', fontSize: 14 }}>
        {product.description}
      </p>
      <p style={{ margin: '0 0 4px', color: '#888', fontSize: 13 }}>
        {product.category}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginTop: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 20, color: '#1E4D8C' }}>
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addToCart(product)}
          style={{ background: '#1E4D8C', color: '#fff', border: 'none',
            borderRadius: 6, padding: '8px 16px', cursor: 'pointer',
            fontWeight: 600 }}>
          Add to cart
        </button>
      </div>
      <p style={{ margin: '8px 0 0', fontSize: 12,
        color: product.stock > 0 ? '#1D6A40' : '#cc0000' }}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>
    </div>
  );
}