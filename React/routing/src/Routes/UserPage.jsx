import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getUsers() {
  const res = await fetch("https://reqres.in/api/users");
  return await res.json();
}

function UserPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    getUsers().then((daa) => {
      console.log(daa);
      setData(daa);
    });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {data?.data?.map((el) => (
        <div key={el.id}>
          <img src={el.avatar} alt="avatar" width="100px"></img>
          <h4>Name : {`${el.first_name} ${el.last_name}`}</h4>
          <Link to={`/users/${el.id}`}>show more details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
