const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const shipment = sequelize.define('shipment', {
  name: {
    trackingNumber: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "created"
  },
  estimatedDelivery: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = User;
