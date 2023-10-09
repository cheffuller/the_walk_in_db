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
    },
    line_2: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    zip: {
      type: Sequelize.STRING,
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

sequelize.models.Company.hasMany(Address, { foreignKey: 'id' })
sequelize.models.Company.belongsTo(Address)

module.exports = Address;