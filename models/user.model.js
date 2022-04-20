const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("User",{
        username:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        }
    },{
        tableName:"User"
    });return User
}