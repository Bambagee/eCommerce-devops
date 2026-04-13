const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name:     String,
    price:    Number,
    quantity: { type: Number, default: 1 }
  }],
  total:  { type: Number, required: true },
  status: { type: String, enum:
    ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  email:  { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
