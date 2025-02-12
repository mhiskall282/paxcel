const {DataTypes,Model} = require("sequelize")
const dbconfig = require("./../config/dbconfig")

class Product extends Model{}

Product.init({
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
    dbconfig,
    modelName:"Product",
    freezeTableName:false,
    timestamps:true,
})

(async()=>{
    await Product.sync({alter:true,});
})
module.exports = Product;