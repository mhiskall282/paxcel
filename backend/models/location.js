const {DataTypes, Model} = require("sequelize")
const dbconfig = require("./../config/dbconfig")
const Shipment = require("./shipment");


const Location = dbconfig.define("Locations",{
    long:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lat:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"unknown",
    },
    shipment_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Shipment,
            key:"id",
        }
    },
},{
    timestamps:true,
})


module.exports = Location;