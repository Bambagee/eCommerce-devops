require('dotenv').config();
const mongoose = require('mongoose');
const Product  = require('./models/Product');

const products = [
  { name: 'Wireless Headphones', price: 79.99, category: 'Electronics', stock: 50,
    description: 'Premium sound quality' },
  { name: 'Running Shoes',       price: 59.99, category: 'Footwear',    stock: 30,
    description: 'Lightweight and durable' },
  { name: 'Coffee Maker',        price: 49.99, category: 'Kitchen',     stock: 20,
    description: 'Brews in under 5 minutes' },
  { name: 'Yoga Mat',            price: 24.99, category: 'Sports',      stock: 100,
    description: 'Non-slip surface' },
  { name: 'Desk Lamp',           price: 34.99, category: 'Home',        stock: 40,
    description: 'LED, adjustable brightness' },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Seeded 5 products');
    process.exit(0);
  });
