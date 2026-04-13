import { useState, useEffect } from 'react';
import { productAPI } from '../api';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts]   = useState([]);
  const [search, setSearch]       = useState('');
  const [category, setCategory]   = useState('');
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    setLoading(true);
    productAPI.getAll({ search, category })
      .then(r => { setProducts(r.data); setError(null); })
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, [search, category]);

  const categories = ['', 'Electronics', 'Footwear', 'Kitchen', 'Sports', 'Home'];

 return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginBottom: 24 }}>Products</h1>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <input
          placeholder='Search products...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, padding: '10px 14px', border: '1px solid #ddd',
            borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '10px 14px', border: '1px solid #ddd', borderRadius: 6 }}>
          {categories.map(c => (
            <option key={c} value={c}>{c || 'All categories'}</option>
          ))}
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error   && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
