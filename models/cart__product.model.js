const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Product = require("./product.model.js");
const Cart = require("./cart.model.js");

class Cart__Product extends Model {}

Cart__Product.init(
  {
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    cart_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Cart,
            key: 'id'
        }
    }
  },
  {
    timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done).
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "cart__product",
    sequelize,
    modelName: "Cart__Product",
  }
);

Product.belongsToMany(Cart, {through: 'cart__product'})
Cart.belongsToMany(Product, {through: 'cart__product'})