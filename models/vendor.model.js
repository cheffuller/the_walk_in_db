const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Address = require("./address.model.js");
const Product = require("./product.model.js");

class Vendor extends Model {}

Vendor.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
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

    tableName: "vendor",
    sequelize,
    modelName: "Vendor",
  }
);

Vendor.hasOne(Address, {foreignKey: 'id'})
Vendor.belongsTo(Address)
Vendor.hasMany(Product, {foreignKey: 'id'})
Product.belongsTo(Vendor)


module.exports = Vendor;
