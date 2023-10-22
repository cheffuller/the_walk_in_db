const Company = require("../models/company.model.js");
const Sequelize = require("sequelize");

// Create Company
exports.create = (req, res) => {
  const company = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    payment: req.body.payment,
    address_id: req.body.address_id,
    delivery_address_id: req.body.delivery_address_id
  };
  Company.create(company)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Company.",
      });
    });
};

// Find All Companies
exports.findAll = (req, res) => {
  Company.findAll()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Companies`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving Companies",
      });
    });
};

// Find Single Company
exports.findOne = (req, res) => {
  const id = req.params.id;
  Company.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Company with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving Company with id=" + id,
      });
    });
};

// Update Company
exports.update = (req, res) => {
  const id = req.params.id;
  Company.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Company was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update Company with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating Company with id=" + id,
      });
    });
};

// Delete Company
exports.delete = (req, res) => {
  const id = req.params.id;
  Company.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Company was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete Company with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete Company with id=" + id,
      });
    });
};
