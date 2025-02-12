const {DataTypes, Model} = require("sequelize")
const dbconfig = require("./../config/dbconfig")

class Receiver extends Model{}

Receiver.init({
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
    dbconfig,
    modelName:"Receiver",
    timestamps:true,
    tableName:"Receiver",
})

(async()=>{
    await Receiver.sync({alter:true,});
})

module.exports = Receiver;
