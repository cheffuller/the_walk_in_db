const Vendor = require("../models/vendor.model.js");
const Sequelize = require("sequelize");

// Create Vendor
exports.create = (req, res) => {
  const vendor = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    contact: req.body.contact,
  };
  Vendor.create(vendor)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Vendor.",
      });
    });
};

// Find All Vendors
exports.findAll = (req, res) => {
  const id = req.params.id;
  Vendor.findAll()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Vendors`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving Vendors",
      });
    });
};

// Find Single Vendor
exports.findOne = (req, res) => {
  const id = req.params.id;
  Vendor.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Vendor with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving Vendor with id=" + id,
      });
    });
};

// Update Vendor
exports.update = (req, res) => {
  const id = req.params.id;
  Vendor.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Vendor was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update Vendor with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating Vendor with id=" + id,
      });
    });
};

// Delete Vendor
exports.delete = (req, res) => {
  const id = req.params.id;
  Vendor.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Vendor was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete Vendor with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete Vendor with id=" + id,
      });
    });
};
