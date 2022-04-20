const db=require("../models")
const config=require("../config/auth.config")
const jwt=require("jsonwebtoken")

const verifytoken=(req,res,next)=>{
    let token=req.headers["x-access-token"]
    if(!token){
        res.status(400).send({message:"No token provided"})
        return
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            console.log("Unauthorized user");
            return
        }
        userid=decoded.id
        next();
    })
}


const isadmin=(req,res,next)=>{
    db.user.findByPk(req.userid).then(user=>{
        user.getRole().then(roles=>{
            for (let i=0;i<roles.length;i++){
                if(roles[i]=="admin"){
                    next()
                    return
                }
            }res.status(403).send({message:"Require Admin Role"})
            return;
        })
    })
}

const authjwt={verifytoken,isadmin};
module.exports=authjwt