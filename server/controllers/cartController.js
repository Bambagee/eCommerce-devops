let cart = [];

exports.getCart = (req, res) => res.json(cart);

exports.addToCart = (req, res) => {
  const { productId, name, price, quantity = 1 } = req.body;
  const existing = cart.find(i => i.productId === productId);
  if (existing) { existing.quantity += quantity; }
  else { cart.push({ productId, name, price, quantity }); }
  res.json(cart);
};

exports.removeFromCart = (req, res) => {
  cart = cart.filter(i => i.productId !== req.params.id);
  res.json(cart);
};

exports.clearCart = (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
};
