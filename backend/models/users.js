const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
}, {
  timestamps: true,
});

module.exports = User;
