const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
    const Role=sequelize.define("Role",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING
        }

    },{
        tableName:"Role"
    });return Role
}