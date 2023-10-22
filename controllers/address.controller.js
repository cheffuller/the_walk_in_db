const Address = require("../models/address.model.js");
const Sequelize = require("sequelize");

// Create Address
exports.create = (req, res) => {
  const address = {
    line_1: req.body.line_1,
    line_2: req.body.line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    delivery: req.body.delivery
  };
  Address.create(address)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the address.",
      });
    });
};

// Update Address
exports.update = (req, res) => {
  const id = req.params.id;
  Address.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "address was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update address with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating address with id=" + id,
      });
    });
};

// Delete Address
exports.delete = (req, res) => {
  const id = req.params.id;
  Address.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Address was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete address with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete address with id=" + id,
      });
    });
};
