const cartcontroller=require("../controller/cart.controller")
const authjwt=require("../middleware/authjwt")

module.exports=function(app){
    app.post("/ecomm/api/v1/cart/create",[authjwt.verifytoken],cartcontroller.create)
    app.put("/ecomm/api/v1/cart/update",[authjwt.verifytoken],cartcontroller.update)
    app.get("/ecomm/api/v1/cart/getcart",[authjwt.verifytoken],cartcontroller.getcart)


}