const express=require("express")
const app=express();
const serverconfig=require("./config/server,config");
const db=require("./models/index.js")
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
function init(){
    var categoriesData = [
        {name: "Electronics", 
        description: "This category contains electrical appliances"},
        {name: "Vegetables", 
        description: "This category contains vegetables"},
    ]

    var productsData = [
        {name: "Samsung", 
        price: 1000},
    ]
    db.category.bulkCreate(categoriesData).then(() =>{
        console.log("category table is initialized with category data");
    }).catch((err) =>{
        console.log("Error in initializing categories table", err);
    })
    db.product.bulkCreate(productsData).then(() =>{
        console.log("category table is initialized with product data");
    }).catch((err) =>{
        console.log("Error in initializing products table", err);
    })


}
 

db.category.hasMany(db.product);

db.sequelize.sync({force:true}).then(() =>{
    //authenticate
    //drop all tables
    //recreate all tables
    console.log("models/tables are dropped and recreated");
    init();
    
})
require('./routes/category.routes')(app);
require('./routes/product.routes')(app);
require('./routes/auth.routes')(app);
require("./routes/cart.routes")(app);


app.listen(serverconfig.PORT, () => {
    console.log("my server is working");
});