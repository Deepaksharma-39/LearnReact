const sum=function(a,b){
    console.log(a+b) ;
}

const mult=function(a,b){
    console.log(a*b) ;
}

const sub=function(a,b){
    console.log(a-b) ;
}

const div=function(a,b){
    console.log( a/b);
}

const obj={
    sum,mult,sub,div
}
module.exports=obj;