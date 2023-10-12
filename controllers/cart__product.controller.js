const Cart__Product = require("../models/cart__product.model");

// Create Cart__Product
exports.create = (req, res) => {
  const cart__product = {
    product_id: req.body.product_id,
    cart_id: req.body.cart_id,
  };
  Cart__Product.create(cart__product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the cart.",
      });
    });
};

// Delete Cart__Product
exports.delete = (req, res) => {
const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  Cart__Product.destroy({
    where: { cart_id: cart_id, product_id: product_id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete cart.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete cart",
      });
    });
};
