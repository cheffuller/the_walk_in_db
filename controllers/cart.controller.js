const Cart = require("../models/cart.model.js");

// Create Cart
exports.create = (req, res) => {
  const cart = {
    item_quantity: req.body.item_quantity,
    total_price: req.body.total_price,
    status: req.body.status,
    user_id: req.body.user_id
  };
  Cart.create(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the cart.",
      });
    });
};

// Find All Carts
exports.findAll = (req, res) => {
  Cart.findAll()
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Carts`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Carts",
      });
    });
};

// Find Single Cart
exports.findOne = (req, res) => {
  const id = req.params.id;
  Cart.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving cart with id=" + id,
      });
    });
};

// Update Cart
exports.update = (req, res) => {
  const id = req.params.id;
  Cart.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating cart with id=" + id,
      });
    });
};

// Delete Cart
exports.delete = (req, res) => {
  const id = req.params.id;
  Cart.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete cart with id=" + id,
      });
    });
};
