const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const User = require("./user.model.js");
const Address = require("./address.model.js");
const Vendor = require("./vendor.model.js");

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    payment: {
      type: DataTypes.STRING,
    },
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done).
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "company",
    sequelize,
    modelName: "Company",
  }
);

Company.hasMany(User, {foreignKey: 'id'})
User.belongsTo(Company)
Company.hasMany(Address, {foreignKey: 'id'})
Company.belongsTo(Address)
Company.belongsToMany(Vendor, {through: 'company__vendor'})
Vendor.belongsToMany(Company, {through: 'company__vendor'})

module.exports = Company;
