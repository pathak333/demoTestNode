const ItemModel = require("./model")


module.exports.AddItem = async (req,res,next)=>{
 let Item = await ItemModel.create(req.body);
 res.created("SuccessFully Created",Item)
}

module.exports.getAllItem = async (req,res,next)=>{
    let Item =  await ItemModel.find({isDeleted:false});
    res.success("Find All Data",Item);
}
module.exports.deleteItem = async (req,res,next)=>{
    let Item = await ItemModel.findByIdAndUpdate(req.query.id,{isDeleted:true});
    res.success("successfully deleted Item")
}