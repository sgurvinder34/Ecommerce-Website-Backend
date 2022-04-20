
module.exports=(sequelize,Sequelize)=>{
    const Category=sequelize.define("Category",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            aloowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:true
        }
    },{
        tableName:"Category"
    });
    return Category
}