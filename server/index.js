const exp=require("express")
const app=exp()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ritwik:r123456@cluster0.jvrijp5.mongodb.net/nitproject?retryWrites=true&w=majority&appName=Cluster0")
const cors=require("cors")
const bodyParser=require("body-parser")
const ef=require("express-fileupload")

app.use(cors());
app.use(ef());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello node")
});
app.get("/about",(req,res)=>{
    res.send("Hello node About")
});
const pr=require("./routes/product_r");
app.use("/product",pr);

app.listen(2000)