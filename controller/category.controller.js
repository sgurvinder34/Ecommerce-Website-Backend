const db=require("../models")
const Category=db.category;

exports.create=(req,res)=>{
    const category={
        name:req.body.name,
        description:req.body.description
    }
    console.log(category)
    Category.create(category).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"There Was an error from our side while creating the category"
        })
    })
}
exports.update=(req,res)=>{
    const categoryid=req.params.id;
    const category={
        name:req.body.name,
        description:req.body.description
    }
    Category.update(category,{where:{id:categoryid}}).then(resp=>{
        res.status(200).send(resp);
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error from our side while updating the category"
        })
    })
}

exports.delete=(req,res)=>{
    const categoryid=req.params.id;
    Category.destroy({where:{id:categoryid}}).then(resp=>{
        res.sendStatus(200).send(resp)
    }).catch(err=>{
        res.sendStatus(500).send({
            message:"There was an error from our side while deleting the category"
        })
    })
}

exports.findone=(req,res)=>{
    const categoryid=req.params.id;
    Category.findByPk(categoryid).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"There was an error from our side while finding the category by category id for just one product"
        })
        }
    )
}

exports.findall=(req,res)=>{
    const categoryid=req.params.id;
    let promise;
    if(categoryid){
        promise=Category.findAll({where:{id:category}})
    }
    else{
        promise=Category.findAll();
    }
    promise.then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            message:"There Was an error from our side while finding the all category"
        })
    })
}