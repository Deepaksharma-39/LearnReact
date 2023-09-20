const express =require("express")
const app=express();

const rounteTimer=(req,res,next)=>{
    const st= new Date().getTime();
    next();
    const et=new Date().getTime();
    const diff=et-st
    console.log(req.url+" "+diff+" miliseconds routing time")
}
app.use(rounteTimer);

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.listen(5000,()=>{
    console.log("inside server route 5000");
})