const { sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
    const Product=sequelize.define("Product",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:true
        },
        price:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    },{
        tableName:"Product"
    });return Product
}