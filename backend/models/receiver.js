const {DataTypes} = require("sequelize")
const dbconfig = require("./../config/dbconfig")


const Receiver = dbconfig.define("Receivers",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            max: 25,
        },
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            max:15,
        }
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
},{
    timestamps:true,
},)


module.exports = Receiver;
