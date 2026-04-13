import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const productAPI = {
  getAll:  (params) => api.get('/products', { params }),
  getById: (id)     => api.get(`/products/${id}`),
  create:  (data)   => api.post('/products', data),
};

export const cartAPI = {
  get:    ()     => api.get('/cart'),
  add:    (data) => api.post('/cart', data),
  remove: (id)   => api.delete(`/cart/${id}`),
  clear:  ()     => api.delete('/cart'),
};

export const orderAPI = {
  create: (data) => api.post('/orders', data),
  getAll: ()     => api.get('/orders'),
};