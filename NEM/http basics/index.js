
const http=require("http");
const fs= require("fs");

const server=http.createServer((req,res)=>{
    if(req.url==="/post"){
        try{
        const data=fs.readFileSync("./data.txt",{encoding:"utf-8"})
        res.end(data);
        }
        catch{
            res.end("try again");
        }
    }else if(req.url==="/comment"){
        res.end("Welcome to commnt")
    }else if(req.url==="/march"){
        const obj={
            name:"Deepak",
            age:"28",
            date:"18th Sep 2023"
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.end("Welcome to port 5050");
    }
    
})

server.listen(5050,()=>{
    console.log("hohohohohoh");
})
