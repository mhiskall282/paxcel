const {DataTypes, Model} = require("sequelize")
const dbconfig = require("./../config/dbconfig")
const Shipment = require("./shipment");

class Location extends Model{}


Location.init({
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
    dbconfig,
    modelName:"Location",
    timestamps:true,
})

(async()=>{
    await Location.sync({alter:true,});
})
module.exports = Location;