const categorycontroller=require("../controller/category.controller")
const requestvalidator=require("../middleware/requestvalidator")

module.exports=function(app){
    app.post("/ecomm/api/v1/category",[requestvalidator.validcategory],categorycontroller.create);
    app.put("/ecomm/api/v1/category/:id",[requestvalidator.validcategory],categorycontroller.update);
    app.delete("/ecomm/api/v1/category/:id",categorycontroller.delete);
    app.get("/ecomm/api/v1/category/:id",categorycontroller.findone);
    app.get("/ecomm/api/v1/category",categorycontroller.findall)
}