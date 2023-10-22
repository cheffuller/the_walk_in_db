const Company = require("../models/company.model.js");
const User = require("../models/user.model.js");
const Sequelize = require("sequelize");

// Create User
exports.create = (req, res) => {
  const user = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    company_id: req.body.company_id
  }
  User.create(user)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Find All Users
exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Users`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving Users",
      });
    });
};

// Find Single User
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving User with id=" + id,
      });
    });
};

// Update User
exports.update = (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "User was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete User
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "User was deleted successfully!",
        });
      } else {
        res.json({
          message: `Cannot delete User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete User with id=" + id,
      });
    });
};
