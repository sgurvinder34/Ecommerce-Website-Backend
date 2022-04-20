
const db=require("../models")
const Product=db.product;

exports.create=(req,res)=>{
    const product={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        categoryid:req.body.categoryid
    }
    console.log("*********product******************",Product)
    Product.create(product).then(resp=>{
        console.log("product create",resp)
        res.status(200).send(resp)
    }).catch(err=>{
        console.log("error",err)
        res.status(500).send({
            message:"There was an error from our side while creating the product"
        })
    })
}

exports.update=(req,res)=>{
    const productid=req.params.id;
    const product={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        categoryid:req.body.categoryid
    }
    Product.update(product,{where:{id:categoryid}}).then(resp=>{
        res.status(200).send(resp);
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error while updating the product"
        })
    })
}
exports.delete = (req, res)=> {
    const productid = req.params.id;
    Product.destroy({ where: { id: productid } }).then(resp => {
        res.sendStatus(200).send(resp);
    }).catch(err => {
        res.sendStatus(500).send({
            message: "There Was an error from our side while deleting the product"
        });
    });
};

exports.findone=(req,res)=>{
    const productid=req.params.id;
    Product.findByPk(productid).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error from our side whiel finding one product"
        })
    })
}

exports.findall=(req,res)=>{
    const productid=req.params.id;
    let promise;
    if(productid){
        promise=Product.findAll({where:{id:productid}})
    }else {
        promise=Product.findAll();
    }

    promise.then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error from our side while finding all the products"
        })
    })
}
exports.productbycategoryid=(req,res)=>{
    const catgeoryid=req.params.id;
    Product.findAll({where:{id:categoryid}}).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"there was an error while finding all the product by category id"
        })
    })
}