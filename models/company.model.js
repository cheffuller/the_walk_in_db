const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require('./index');
// const sequelize = new Sequelize("sqlite::memory:");

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     operatorsAliases: false,
  
//     pool: {
//       max: 5,     
//       min: 0,     
//       idle: 10000
//     }
// });

class Company extends Model {}

Company.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    payment: {
      type: Sequelize.STRING,
    },
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: "company",
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "company", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(Company === sequelize.models.Company);

// module.exports = (sequelize, Sequelize) => {

//     const Company = sequelize.define('company ', {

//         id: {
//             type: Sequelize.UUID,
//             defaultValue: Sequelize.UUIDV4,
//             allowNull: false,
//             primaryKey: true
//         },
//         name: {
//             type: Sequelize.STRING
//         },
//         address_id: {
//             references: {
//                 model: Address,
//                 key: 'address_id'
//             }
//         },
//         // delivery_address_id: {
//         //     type: Sequelize.STRING,
//         //     references: {
//         //         model: Address,
//         //         key: 'id'
//         //     }
//         // },
//         phone: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         payment: {
//             type: Sequelize.STRING
//         }
//     }, {
//         // don't delete database entries but set the newly added attribute deletedAt
//         // to the current date (when deletion was done). paranoid will only work if
//         // timestamps are enabled
//         paranoid: true,

//         // don't use camelcase for automatically added attributes but underscore style
//         // so updatedAt will be updated_at
//         underscored: true,

//         // disable the modification of tablenames; By default, sequelize will automatically
//         // transform all passed model names (first parameter of define) into plural.
//         // if you don't want that, set the following
//         freezeTableName: true,

//         // define the table's name
//         tableName: 'company',
//     });

    return Company;

// };
