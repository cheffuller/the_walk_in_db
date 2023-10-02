const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,     
      min: 0,     
      idle: 10000
    }
});
  
const db = {};
  
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.company = require('./company.model')(sequelize, Sequelize);

module.exports = db;