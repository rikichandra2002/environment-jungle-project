
var Product=require("../db/productdb");
module.exports={
    async addproduct(req,res){
      var objimg=req.files.pimg;
      objimg.mv("./public/product_img/"+objimg.name,async (err)=>{
        if(err){
          throw err;
        }else{
 var ins={
       
      pname:req.body.pname,
      pprice:req.body.pprice,
      pimg:objimg.name,
      pdetails:req.body.pdetails
        }
      await Product.create(ins);  
         res.json({msg:"Product Add"})
        }
      })
     },
      async selproduct(req,res){
        var data=await Product.find();
        res.json(data);
     }
}