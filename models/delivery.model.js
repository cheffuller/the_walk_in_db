const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Cart = require("./cart.model.js");
const Address = require("./address.model.js");

class Delivery extends Model {}

Delivery.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    cart_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Cart,
        key: "id"
      }
    },
    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Address,
        key: "id"
      }
    }
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done).
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "delivery",
    sequelize,
    modelName: "Delivery",
  }
);

Delivery.hasOne(Cart, {foreignKey: 'id'})
Delivery.belongsTo(Cart)
Delivery.hasOne(Address, {foreignKey: 'id'})
Delivery.belongsTo(Address)

module.exports = Delivery;
