const db=require("../models")


const checkduplicateemailorusername=(req,res,next)=>{
    db.user.findOne({
        where:{
            username:req.body.username
        }
    }).then(username=>{
        if(username){
            return res.status(400).send({
                message:"There is user present with this name"
            })
        }
        db.user.findOne({
            where:{
                email:req.body.email
            }
        }).then(email=>{
            if(email){
                return res.status(400).send({
                    message:"Email id is already present"
                })
            };next()
        })
    })
}

const checkrole=async(req,res,next)=>{
    if(req.body.role){
        for(i=0;i<req.body.role.length;i++){
            let roleincluded= await db.Roles.includes(req.body.role[i]);
            if(!roleincluded){
                res.status(400).send({message:"The role given is not there "})
                return;
            }
        }
    }next()
}



const verifysignup={checkduplicateemailorusername,checkrole};
module.exports=verifysignup;