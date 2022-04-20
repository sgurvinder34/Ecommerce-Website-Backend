const Sequelize=require("sequelize");
const dbconfig=require("../config/dbconfig.json");
const env="development"
const dbsetting=dbconfig[env];
const sequelize=new Sequelize(
    dbsetting.database,
    dbsetting.username,
    dbsetting.password,
    dbsetting.dialectinfo
)

const db={sequelize,Sequelize};
db.category=require("./category.model.js")(sequelize,Sequelize);
db.product=require("./product.model.js")(sequelize,Sequelize);
db.user=require("./user.model")(sequelize,Sequelize);
db.role=require("./role.model")(sequelize,Sequelize);
db.cart=require("./cart.model")(sequelize,Sequelize)


db.role.belongsToMany(db.user,{
    through:"user_role",
    foreignKey:"roleid",
    otherKey:"userid"
});

db.user.belongsToMany(db.role,{
    through:"user_role",
    foreignKey:"userid",
    otherKey:"roleid"
})


db.Roles=["Admin","User"]
db.user.hasMany(db.cart)

db.cart.belongsToMany(db.product,{
    through:"cart_product",
    foreignKey:"cartid",
    otherKey:"productid"
})

db.product.belongsToMany(db.cart,{
    through:"cart_product",
    foreignKey:"productid",
    otherKey:"cartid"
})

module.exports=db;