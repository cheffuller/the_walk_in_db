const Product = require("../models/product.model.js");
const Sequelize = require("sequelize");

// Create Product
exports.create = (req, res) => {
  const product = {
    label: req.body.label,
    name: req.body.name,
    category: req.body.category,
    photo: req.body.photo,
    description: req.body.description,
    price: req.body.price,
    pack_size: req.body.pack_size,
    weight_value: req.body.weight_value,
    weight_unit: req.body.weight_unit,
    nutrition_info: req.body.nutrition_info,
    vendor_id: req.body.vendor_id
  };
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

// Find All Products
exports.findAll = (req, res) => {
  const id = req.params.id;
  Product.findAll()
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Products`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Products",
      });
    });
};

// Find Single Product
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id,
      });
    });
};

// Update Product
exports.update = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + id,
      });
    });
};

// Delete Product
exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id,
      });
    });
};