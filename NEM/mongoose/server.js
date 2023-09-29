const express= require("express");
const {connections,StudentModel}= require("./index");

const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Homepage");
})

app.get("/students",async (req,res)=>{
    console.log(req.query);
    const result= await StudentModel.find(req.query,{student_id:0,__v:0});
    res.send(result);
})

app.post("/students/create", async (req,res)=>{
    const student=await StudentModel.insertMany([req.body]);
    console.log(student)
    res.send("saved successfully")
})

app.listen(9000,async ()=>{

    try{
        await connections;
        console.log("connection Successfull")
    }catch{
        console.log("connection failed")
    }
    
    console.log("listening to port 9000");
})