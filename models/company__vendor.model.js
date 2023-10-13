const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Company = require("./company.model.js");
const Vendor = require("./vendor.model.js");

class Company__Vendor extends Model {}

Company__Vendor.init(
  {},
  {
    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "company__vendor",
    sequelize,
    modelName: "Company__Vendor",
  }
);

Company.belongsToMany(Vendor, { through: "Company__Vendor" });
Vendor.belongsToMany(Company, { through: "Company__Vendor" });

module.exports = Company__Vendor;
