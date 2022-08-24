const { product, category } = require("../models")

const validcategory=(req,res,next)=>{
    if(!req.body.name){
        res.status(400).send({
            message:"Name cant be empty in category"
        })
        return
    }next()
}

const validproductreq=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
        res.status(400).send({
            message:"The name and price cant be empty"
        })
    }
    else{
        if(req.body.categoryid){
            category.findByPk(req.body.categoryid).then(resp=>{
                if(!resp){
                    res.status(400).send({
                        message:"The category id is not present"
                    });return
                }else if(!req.body.price || req.body.price<=0){
                    res.status(400).send({
                        message:"Please enter a valid price"
                    });return
                }else next()
            })

        }else{
            res.status(400).send({
                message:"Please enter a category id"
            });return
        }
    }
}



module.exports={validcategory,validproductreq}