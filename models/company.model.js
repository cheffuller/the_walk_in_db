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
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment: {
      type: DataTypes.STRING,
    },
    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Address,
        key: "id",
      },
    },
    delivery_address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Address,
        key: "id",
      },
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


Company.hasMany(User, { foreignKey: "id" });
User.Company = User.belongsTo(Company);
Company.hasMany(Address, { foreignKey: "id" });
Company.Address = Company.belongsTo(Address);

(module.exports = Company);
