const express =require("express")
const app=express();
const fs= require("fs");
const dnsRoutes = require("./dns/dns.routes");
const productRoutes = require("./dns/dns.products");

app.use(express.json())

const rounteTimer=(req,res,next)=>{
    const st= new Date().getTime();
    next();
    const et=new Date().getTime();
    const diff=et-st
    console.log(req.url+" "+diff+" miliseconds routing time")
}

app.use("/dns",dnsRoutes,rounteTimer)

app.use("/products",productRoutes);


const checkUser=(req,res,next)=>{
    const {user} =req.query;
    if(user==="admin"){
        next()
    }else{
        console.log("not authrised")
        res.send("you are not authorised to view this")
    }
}



app.get("/",(req,res)=>{
    res.send("Homepage")
})
// app.use(checkUser);

app.get("/about",(req,res)=>{
    const data=fs.readFileSync("about.txt","utf-8")
    res.send(data);
})

app.listen(5000,()=>{
    console.log("inside server route 5000");
})