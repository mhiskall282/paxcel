const { DataTypes } = require("sequelize");
const dbconfig = require("./../config/dbconfig.js");

const Blockchain = dbconfig.define(
  "Blockchain",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    blockNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
      },
    trackingNumber: {
      type: DataTypes.UUID,
      allowNull: false,
      unique:true,
    },
    transactionHash: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Blockchain;