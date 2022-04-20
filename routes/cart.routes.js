const cartcontroller=require("../controller/cart.controller")
const authjwt=require("../middleware/authjwt")

module.exports=function(app){
    app.post("/ecomm/api/v1/cart/create",[authjwt.verifytoken],cartcontroller.create)

}