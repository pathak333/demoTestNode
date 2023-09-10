const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const DocSchema = new Schema({
    name:{type:String,default:""},
    price:{type:Number,default:0},
    isDeleted:{type:Boolean,default:false}
},{
    versionKey:false,
    timestamps:true
})

DocSchema.set("toJSON", {
    getters: true,
    virtuals: true,
    transform: function (doc, ret, opt) {
      delete ret["isDeleted"];
      return ret;
    },
  })


module.exports = mongoose.model("Item",DocSchema)
