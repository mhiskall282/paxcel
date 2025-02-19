const { DataTypes } = require("sequelize");
const dbconfig = require("./../config/dbconfig");
const Shipment = require("./shipment");
const User = require("./users");
const Package = require("./package");

const Payment = dbconfig.define("Payments",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false,
      autoIncrement: true,
    },
    transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
    },
    shipment_id: {
      type: DataTypes.INTEGER,
      comment: "Foreign of shipment",
      references: {
        model: Shipment,
        key: "id",
      },
    },
    owner_id: {
      type: DataTypes.INTEGER,
      comment: "Foreign of user",
      references: {
        model: User,
        key: "id",
      },
    },
    package_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Package,
        key: "id",
      },
    },
    paymentMethod:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    cryptoType:{
      type: DataTypes.STRING,
      allowNull:true,
      defaultValue:"ETH",
    },
    cardNumber:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    cvc:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    expiryDate:{
      type: DataTypes.DATE,
      allowNull:true,
    },
    status:{
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue:"pending",
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    credit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps:true,
  }
);


module.exports = Payment;
