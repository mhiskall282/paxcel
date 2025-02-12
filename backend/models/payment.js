const { DataTypes, Model } = require("sequelize");
const dbconfig = require("./../config/dbconfig");
const Shipment = require("./shipment");
const User = require("./users");
const Product = require("./product");

class Payment extends Model {}

Payment.init(
  {
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
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
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
    },
  },
  {
    dbconfig,
    modelName: "Payment",
    tableName: "Payment",
    timestamps:true,
  }
);

(async()=>{
  await Payment.sync({alter:true,});
})

module.exports = Payment;
