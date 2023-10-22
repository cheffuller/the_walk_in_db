const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Cart__Product = require("../models/cart__product.model");

// Create Cart__Product
exports.create = async (req, res) => {
  const cart = await Cart.findByPk(req.body.cart_id);
  const product = await Product.findByPk(req.body.product_id);

  cart
    .addProduct(product)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          "Some error occurred while creating the cart__product.",
      });
    });
};

// Delete Cart__Product
exports.delete = async (req, res) => {
  const cart = await Cart.findByPk(req.body.cart_id);
  const product = await Product.findByPk(req.body.product_id);

  try {
    cart.removeProduct(product).then((num) => {
      if (num == 1) {
        res.json({
          message: "Cart__product was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete cart__product.`,
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not delete cart__product",
    });
  }
};
