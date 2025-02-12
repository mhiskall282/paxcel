const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbconfig");
const User = require("./users")
const Receiver = require("./receiver")

class Shipment extends Model {}

Shipment.init(
  {
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
    receiver: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:"Foreign for Receiver",
      references:{
        model:Receiver,
        key:"id"
      }
    },
    from_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    to_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    from_location: {
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
    },
  },
  {
    sequelize,
    freezeTableName:true,
    modelName:"Shipment",
    timestamps: true,
  }
);

(async()=>{
  await Shipment.sync({alter:true,});
})


module.exports = Shipment;
