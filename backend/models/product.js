const {DataTypes} = require("sequelize")
const dbconfig = require("./../config/dbconfig")


const Product = dbconfig.define("Products",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    weight:{
        type:DataTypes.DECIMAL,
        allowNull:true,
    },
    item_type:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    dimension:{
        type:DataTypes.STRING,
        allowNull:true,
        comment:"Dimension of Item"
    },
},
{
    timestamps:true,
})


module.exports = Product;