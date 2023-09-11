import { useState,useEffect } from "react";
function getData(page){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(res=>{
         return res.json()
})
}
function Post(){
    const [loading, setLoading]=useState(false);
const [posts,setPost]=useState([]);
const [page,setPage]=useState(1);

useEffect(()=>{
    handleFetchData(page);
},[page])

const handleFetchData=async(page=1)=>{
    try{
        setLoading(true);
        const data=await getData(page);
        console.log(data);
        setPost(data);
        setLoading(false);

    }
    catch(err){
        setLoading(true);
        console.log(err);
    }
}
console.log(posts);

const handlePageChange=(changeBy)=>setPage(page+changeBy);

if(loading){
    return(<h3>Loading</h3>)
}

return(
    <div>
        <h1>Posts</h1>
        
        <ul>
            {posts.map(item=><li key={item.id}>{item.id} {item.title}</li>)}
        </ul>
        <button onClick={()=>handlePageChange(-1) } disabled={page===1}>prev</button>
        <button >{page }</button>
        <button onClick={()=>handlePageChange(+1) } disabled={page===10}>next</button>
    </div>
)
}

export default Post;