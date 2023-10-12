const Company__Vendor = require("../models/company__vendor.model");

// Create Company__Vendor
exports.create = (req, res) => {
  const company__vendor = {
    vendor_id: req.body.vendor_id,
    company_id: req.body.company_id,
  };
  Company__Vendor.create(company__vendor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Comapny__Vendor.",
      });
    });
};

// Delete Company__Vendor
exports.delete = (req, res) => {
  const company_id = req.body.company_id;
  const vendor_id = req.body.vendor_id;
  Company__Vendor.destroy({
    where: { company_id: company_id, vendor_id: vendor_id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Company__Vendor was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Company__Vendor.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Company__Vendor",
      });
    });
};
