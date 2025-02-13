const {DataTypes} = require("sequelize")
const dbconfig = require("./../config/dbconfig")


const Package = dbconfig.define("Packages",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
    timestamps:true,
})


module.exports = Package;