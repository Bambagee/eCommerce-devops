const router = require('express').Router();
const ctrl   = require('../controllers/cartController');

router.get   ('/',     ctrl.getCart);
router.post  ('/',     ctrl.addToCart);
router.delete('/:id',  ctrl.removeFromCart);
router.delete('/',     ctrl.clearCart);

module.exports = router;
