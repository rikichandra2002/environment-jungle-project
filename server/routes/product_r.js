const exp=require("express")
const router=exp.Router();
const pc=require("../controller/product_controller")


router.post("/add",pc.addproduct);

router.get("/sel",pc.selproduct);

module.exports=router;
