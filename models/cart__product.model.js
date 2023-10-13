const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Product = require("./product.model.js");
const Cart = require("./cart.model.js");

class Cart__Product extends Model {}

Cart__Product.init(
  {},
  {
    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "cart__product",
    sequelize,
    modelName: "Cart__Product",
  }
);

Product.belongsToMany(Cart, { through: "Cart__Product" });
Cart.belongsToMany(Product, { through: "Cart__Product" });

module.exports = Cart__Product;
