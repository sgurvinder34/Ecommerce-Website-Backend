const productcontroller=require("../controller/product.controller")
const requestvalidator=require("../middleware/requestvalidator")

module.exports=function(app){
    app.post("/ecomm/api/v1/product",[requestvalidator.validproductreq],productcontroller.create);
    app.put("ecomm/api/v1/product/:id",[requestvalidator.validproductreq],productcontroller.update);
    app.delete("/ecomm/api/v1/product/:id",productcontroller.delete);
    app.get("/ecomm/api/v1/product/:id",productcontroller.findone);
    app.get("/ecomm/api/v1/product",productcontroller.findall)
    app.get("/ecomm/api/v1/category/:categoryid/product",[requestvalidator.validproductreq],productcontroller.productbycategoryid);
}