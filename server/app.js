var express=require("express");
const path=require("path");
var bodyparser = require("body-parser");
// var userrouter=require("./Routes/userrouter");
// var productrouter=require("./Routes/productrouter")

const app=express();


app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.listen("8080",function(req,res){
    console.log("Server Started Listening...")
})

app.get("/data",function(req,res){
    res.send({msg:'data from server'});
})

