const Delivery = require("../models/delivery.model.js");
const Sequelize = require("sequelize");

// Create Delivery
exports.create = (req, res) => {
  const delivery = {
    date: req.body.date,
    start: req.body.start,
    end: req.body.end,
    instructions: req.body.instructions,
    cart_id: req.body.cart_id,
    address_id: req.body.address_id
  };
  Delivery.create(delivery)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the delivery.",
      });
    });
};

// Find All Deliveries
exports.findAll = (req, res) => {
  Delivery.findAll()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find deliveries`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving deliveries",
      });
    });
};

// Find Single Delivery
exports.findOne = (req, res) => {
  const id = req.params.id;
  Delivery.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving delivery with id=" + id,
      });
    });
};

// Update Delivery
exports.update = (req, res) => {
  const id = req.params.id;
  Delivery.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Delivery was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating delivery with id=" + id,
      });
    });
};

// Delete Delivery
exports.delete = (req, res) => {
  const id = req.params.id;
  Delivery.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Delivery was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete delivery with id=" + id,
      });
    });
};
