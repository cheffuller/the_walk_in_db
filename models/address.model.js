const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");

class Address extends Model {}

Address.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    line_1: {
      type: Sequelize.STRING,
      allowNull: false
    },
    line_2: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    delivery: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "address",
    sequelize,
    modelName: "Address",
  }
);

module.exports = Address;