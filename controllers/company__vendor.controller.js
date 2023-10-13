const Company = require("../models/company.model");
const Vendor = require("../models/vendor.model");
const Company__Vendor = require("../models/company__vendor.model");

// Create Company__Vendor
exports.create = async (req, res) => {
  const company = await Company.findByPk(req.body.company_id);
  const vendor = await Vendor.findByPk(req.body.vendor_id);

  company
    .addVendor(vendor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Company__Vendor.",
      });
    });
};

// Delete Company__Vendor
exports.delete = async (req, res) => {
  const company = await Company.findByPk(req.body.company_id);
  const vendor = await Vendor.findByPk(req.body.vendor_id);

  try {
    company.removeVendor(vendor).then((num) => {
      if (num == 1) {
        res.send({
          message: "Company__Vendor was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Company__Vendor.`,
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Company__Vendor",
    });
  }
};
