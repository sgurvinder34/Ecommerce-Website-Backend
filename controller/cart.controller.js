const db = require("../models")

exports.create=(req,res)=>{
    const cart={
        userid:req.userid
    }
    db.cart.create(req.userid).then(cart=>{
        res.status(200).send(cart)
    }).catch(err=>{
        res.status(500).send({message:"There was an error from our side",err})
    })
}

exports.update=(req,res)=>{
    const cartid=req.params.id;
    db.cart.findByPk(cartid).then(cart=>{
        db.product.FindByPk({where:{id:req.body.productid}}).then(productlist=>{
            if(!productlist){
                res.status(400).send({
                    message:"There is no product"
                });return
            }
            cart.setProducts()
        })
    })
}