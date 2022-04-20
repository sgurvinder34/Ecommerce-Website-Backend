const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const config=require("../config/auth.config");
const db=require("../models")

const Op=db.Sequelize.op;
const User=db.user;
const Role=db.role;

exports.signup=(req,res)=>{
    const sign={
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10)
    }
    User.create(sign).then(user=>{
        if(req.body.roles){
            Role.findAll({
                where:{
                    name:{
                        [Op.or]:req.body.roles
                    }
                }
            }).then(roles=>{
            user.setRole(roles).then(()=>{
                res.status(201).send({message:"user created successfully"})
            })
        })
        }else{
            console.log("cant find any role in req.body.role")
            Role.findAll({
                where:{
                    name:"customer"
                }
            }).then(role=>{
                console.log("Here i am")
                user.setRoles(role).then(resp=>{
                    res.status(201).send({message:"User registered successfully",user})
                })
            }).catch(err=>{
                res.status(500).send({message:"there was an internal error****",err})
            })
        }
    })
}


exports.signin=(req,res)=>{
    console.log("(((((((((((((((((((((((((((")
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(user=>{
        if(!user){
            return res.send(400).send({message:"The username is wrong"})
        }
        console.log("***********************************")
        var isvalidpassword=bcrypt.compareSync(req.body.password,user.password)
        if(!isvalidpassword){
            res.status(400).send({message:"The password was wrong"})
        }
        const token=jwt.sign({id:user.id},config.secret,{expiresIn:86400})
        const authorities=[];
        user.getRoles().then(roles=>{
            for(i=0;i<roles.length;i++){
                authorities.push("roles_"+roles[i].name.toUpperCase())
            }

            res.status(200).send({
            id:user.id,
            username:user.username,
            role:user.role,
            accessToken:token

            })

        })
        
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error from our side "
        })
    })
}
