

const db = require("../models")

exports.create=(req,res)=>{
    const cartid={
        userid:req.userid
    }
    db.cart.create(cartid).then(cart=>{
        res.status(200).send(cart)
    }).catch(err=>{
        res.status(500).send({message:"There was an error from our side",err})
    })
}

exports.update=(req,res)=>{
    const cartid=req.params.id;
    db.cart.findByPk(cartid).then(cart=>{
        db.product.findAll({where:{
            id:req.body.productid
        }}).then(productlist=>{
            if(!productlist){
                return res.status(404).send({message:"No item is there in cart"})
            }
            cart.setProducts(productlist).then(()=>{
                let selectedproduct=[];
                let totalcost=0;
                cart.getProducts().then(products=>{
                    for(i=0;i<products.length;i++){
                        totalcost=totalcost+products[i].price
                        selectedproduct.push({
                            id:products[i].id,
                            name:products[i].id,
                            price:products[i].id
                        })
                    }res.status(200).send({
                        id:cartid,
                        products:selectedproduct,
                        TotalPrice:totalcost
                    })
                })
            })
        })

    })
}

exports.getcart=(req,res)=>{
    const cartid=req.params.id;
    db.cart.findByPk(cartid).then(cart=>{
        if(!cart){
            return res.status(400).send({
                message:"There is no item in cart"
            })
        }
        let selectedproducts=[];
        let totalprice=0;
        db.cart.FindAll({where:{id:cartid}}).then(products=>{
            for(i=0;i<products.length;i++){
                totalprice=totalprice+products[i].price
                selectedproducts.push({
                    id:products[i].id,
                    name:products[i].name,
                    price:products[i].price
                })
            }
            res.status(200).send({
                id:cartid,
                products:selectedproducts,
                TotalPrice:totalprice
            })
        })
    })
}