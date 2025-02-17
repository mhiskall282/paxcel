const { DataTypes } = require("sequelize");
const dbconfig = require("../config/dbconfig");
const User = require("./users")
const Receiver = require("./receiver")

const Shipment = dbconfig.define("Shipments",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    trackingNumber: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV1,
      unique: true,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment:"Foreign for Sender/user",
      references:{
        model:User,
        key:"id"
      }
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    to_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "created",
    },
    estimatedDelivery: {
      type: DataTypes.DATE,
      allowNull: false,
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
    timestamps: true,
  }
);

module.exports = Shipment;
