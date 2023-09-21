const dns= require("dns");
const express= require("express");


const dnsRoutes=express.Router();
dnsRoutes.use(express.json())

dnsRoutes.post("/getmeip",(req,res)=>{
    const {website_name}=req.body;
    dns.lookup(website_name,(err,add)=>{
        if(err){
            res.send("something went wrong");
        }
        res.send(add)
    })
});

dnsRoutes.get("/about",(req,res,next)=>{
    res.send("DNS is a domain name syatem which is like a phone registry for ip address");
    next();
})

module.exports=dnsRoutes;