import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

async function getUsers({page=1,text=""}) {
  const res = await fetch(`https://reqres.in/api/users?page=${page}&q=${text}`);
  return await res.json();
}

function UserPage() {
  const [data, setData] = useState({});
  const [searchParams,setSearchParams]=useSearchParams();
  const [text,setText]= useState(searchParams.get("q")||"");
  const initalPage=Number(searchParams.get("page"))||1;
  const [page,setPage]=useState(initalPage);

useEffect(()=>{
  setSearchParams({page, q:text})
},[page,text,setSearchParams])

 
  useEffect(() => {
    getUsers({page}).then((daa) => {
      console.log(daa);
      setData(daa);
    });
  }, [page]);

  const navigate= useNavigate();
  return (
    <div>
      <h1>Users</h1>
<input placeholder="Search Users" value={text} onChange={(e)=>setText(e.target.value)}/>
<br/>

      <button onClick={()=>{navigate("/")}}> button with use Navigate</button>

      <Link to="/">
      <button> button with Link</button>
      </Link>

      <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <button  >{page}</button>
        <button disabled={page===2} onClick={()=>setPage(page+1)}>next</button>
      </div>
      {data?.data?.map((el) => (
        <div key={el.id}>
          <Link to={`/users/${el.id}`}><h4>Name : {`${el.first_name} ${el.last_name}`}</h4></Link>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
