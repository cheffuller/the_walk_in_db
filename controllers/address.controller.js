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
  };
  Address.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send({
          message: "address was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update address with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
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
        res.send({
          message: "Address was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete address with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete address with id=" + id,
      });
    });
};
