const express= require("express");
const fs= require("fs")
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello App")
})

app.get("/posts",(req,res)=>{
    const post=fs.readFileSync("./pos.txt","utf-8");
    res.send(post)
})

app.post("/posts",(req,res)=>{
    const dataRecieved=JSON.stringify(req.body);
    fs.appendFileSync("pos.txt",dataRecieved,"utf-8")
    res.send("we got your data")
})

app.listen(5000,()=>{
    console.log("Listening on port 5000")
})