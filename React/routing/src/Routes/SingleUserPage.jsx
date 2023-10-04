import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

async function getUsers(id) {
  const res = await fetch("https://reqres.in/api/users/" + id);
  return await res.json();
}

function SinglePageUser() {
  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    getUsers(param.id).then((res) => {
      setData(res.data);
    });
  }, [param.id]);
  return (
    <div className="singleUserDetails">
      <h1>User ID :{param.id}</h1>
      {
        data && (
        <>
        <img src={data.avatar} alt="avatar" width="100px"></img>
      <h1>Name : {`${data.first_name} ${data.last_name}`}</h1>
      <h1>Email : {data.email}</h1>
        </>
        )
      }
      
      <Link to="/user">Go Back</Link>
    </div>
  );
}

export default SinglePageUser;
