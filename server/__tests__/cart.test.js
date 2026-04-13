const request = require('supertest');
const app     = require('../app');

describe('Cart endpoints', () => {
  it('GET /api/cart returns array', async () => {
    const res = await request(app).get('/api/cart');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/cart adds item', async () => {
    const res = await request(app).post('/api/cart').send({
      productId: 'abc123', name: 'Test', price: 9.99
    });
    expect(res.status).toBe(200);
    expect(res.body.some(i => i.productId === 'abc123')).toBe(true);
  });
});
