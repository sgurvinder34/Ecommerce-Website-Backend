const controller=require("../controller/auth.controller");
const verifysignup=require("../middleware/verifysignup")

module.exports=function(app){
    app.post("/ecomm/api/v1/auth/signup",[verifysignup.checkduplicateemailorusername,verifysignup.checkrole],controller.signup);

    app.post("/ecomm/api/v1/auth/signin",controller.signin)
}