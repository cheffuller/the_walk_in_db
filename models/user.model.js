const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Cart = require("./cart.model.js");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
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

    tableName: "user",
    sequelize,
    modelName: "User",
  }
);

User.hasMany(Cart, {foreignKey: 'id'})
Cart.belongsTo(User)

module.exports = User;
