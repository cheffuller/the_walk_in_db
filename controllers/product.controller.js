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
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
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
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Products`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
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
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
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
        res.json({
          message: "Product was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
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
        res.json({
          message: "Product was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete Product with id=" + id,
      });
    });
};