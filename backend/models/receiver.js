const {DataTypes} = require("sequelize")
const dbconfig = require("./../config/dbconfig")


const Receiver = dbconfig.define("Receivers",{
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
    }
},{
    timestamps:true,
},)


module.exports = Receiver;
