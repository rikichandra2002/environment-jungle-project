const mongoose=require("mongoose")
const ps=mongoose.Schema(
    {
    
      pname:String,
      pprice:Number,
      pimg:String,
      pdetails:String
     }
)

module.exports=mongoose.model("Product",ps);