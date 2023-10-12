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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find deliveries`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send({
          message: "Delivery was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send({
          message: "Delivery was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete delivery with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete delivery with id=" + id,
      });
    });
};
