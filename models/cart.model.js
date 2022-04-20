const { sequelize, Sequelize } = require("../models");

module.exports=(sequelize,Sequelize)=>{
    const Cart=sequelize.define("Cart",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        price:{
            type:Sequelize.INTEGER,
            allowNull:true
        }
    },{
        tableName:"Cart"
    });return Cart
}