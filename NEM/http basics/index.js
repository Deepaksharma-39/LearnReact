console.log("hi");

const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/post"){
        res.end("Welcome to posts")
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
        res.end("Welcome to hompage")
    }
    
})

server.listen(5050,()=>{
    console.log("hohohohohoh");
})
