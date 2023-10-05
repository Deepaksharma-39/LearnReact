import express from "express";
import connection from "./config.js";
import userModel from "./models/User.model.js";
import { Jwt } from "jsonwebtoken";

const app=express();

app.use(express.json())




app.get("/",(req,res)=>{
    return res.send("On HomePage")
})

app.post("/signup",async (req,res)=>{
    const {name,email,password}=req.body;

    const user= new userModel({
        email,
        password,
        name
    })

    await user.save()
    res.send("signup successful")
})

app.post("/login",async(req,res)=>{

    const{email,password}= req.body;
    const token=jwt.sign({ foo: 'bar' }, 'shhhhh');
    const user= await userModel.find({email,password})
    console.log(user);
    if(user.length==0){
        return res.send("invalid credntials");
    }
    return res.send({user:user,token:token})
})


app.get("/profile/:id",async(req,res)=>{
    const token= req.query.token;
    if(Number(token)!==12345){
        res.send("Token expired");
    }
try{
    const user= await userModel.find({_id:req.params.id})
    return res.send(user)
}catch{
    res.send("User not found")
}
})

app.listen(5000,async ()=>{
    try{
        await connection
        console.log("db connected")
    }catch{
        console.log(failed)
    }
})