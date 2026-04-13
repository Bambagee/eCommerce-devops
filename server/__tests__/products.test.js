const request  = require('supertest');
const mongoose = require('mongoose');
const app      = require('../app'); // see Step 3

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI ||
    'mongodb://localhost:27017/ecommerce-test');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('GET /api/products', () => {
  it('returns 200 and array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/products', () => {
  it('creates a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Test Item', price: 9.99, category: 'Test', stock: 1 });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Test Item');
  });

  it('rejects missing price', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Bad Item' });
    expect(res.status).toBe(400);
  });
});