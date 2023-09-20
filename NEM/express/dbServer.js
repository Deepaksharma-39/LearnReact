const express= require("express");
const fs= require("fs")
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("in home Page")
})

app.get("/users",(req,res)=>{
    //read and store the file from database/db.json
    const data=fs.readFileSync("db.json","utf-8")
    // perform the operations if and when required
    console.log(data);
    const parsed_result=JSON.parse(data)

    const {user}=parsed_result;
    console.log(user);
    // send the appropriate response
    res.send(user)
})

app.post("/users",(req,res)=>{
    // read the content from req
    
    // const data=req.body
    const {body:data}=req

    const pre_data=fs.readFileSync("db.json","utf-8");

    // parse the json object in object

    const { user } = JSON.parse(pre_data);

    user.push(data)

    const latest_data=JSON.stringify({user})

    console.log(latest_data)
    
    // add the new file into db.json
    fs.writeFileSync("db.json",latest_data,"utf-8")
    res.send(data)
})

app.listen(5000,()=>{
    console.log("Listening on port 5000")
})