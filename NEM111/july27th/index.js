const fs= require("fs");

const txt=fs.readFile("./info.txt",{encoding:"utf-8"},(x,y)=>{
    if(x){
        console.log(x);
    }else{
        console.log(y);
    }
})

console.log("this here is th end");