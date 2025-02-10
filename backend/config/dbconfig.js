const { Sequelize } = require('sequelize');
require("dotenv").config()

const sequelize = new Sequelize(process.env.DBDATABASE, process.env.DBNAME, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'postgres',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
