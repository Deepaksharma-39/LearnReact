import React, { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

import { addTodos, deleteTodo, getTodos, toggleTodo } from "../api/tods";
import Pagination from "./pagination";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleSortBy, setTitleSortBy] = useState("ASC");
  const [page, setpage] = useState(1);

  useEffect(() => {
    handleGetTodos();
  }, [titleSortBy,page]);

  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false,
    };
    setLoading(true);
    addTodos(item)
      .then((res) => {
        console.log(res.data); // Access response data using res.data
        handleGetTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetTodos = () => {
    setLoading(true);

    getTodos({ titleSortBy,page })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setTodos(res);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };

  const handleToggle = (id, newStatus) => {
    setLoading(true);
    toggleTodo(id, newStatus)
      .then((res) => {
        handleGetTodos();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteTodo(id)
      .then((res) => {
        handleGetTodos();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div>
      <div>{loading && "Loading"}</div>
      <AddToDo handleAdd={handleAdd} />
      <div>
        <button
          onClick={() =>
            setTitleSortBy((prev) => (prev === "ASC" ? "DESC" : "ASC"))
          }
        >
          {titleSortBy === "ASC" ? "ASCENDING" : "DESCENDING"}
        </button>
      </div>
      <h3>Pending</h3>
      {todos
        .filter((item) => !item.status)
        .map((item) => (
          <ToDoList
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}

      <h3>Completed</h3>
      {todos
        .filter((item) => item.status)
        .map((item) => (
          <ToDoList
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
        <div>
          <button onClick={()=>setpage(prev=>prev-1)} disabled={page===1}>Prev</button>
          <button>{page}</button>
          <button onClick={()=>setpage(prev=>prev+1)} disabled={page===10}>Next</button>
    </div>
    <Pagination total={10} current={page} onChange={(value)=>setpage(value)}/>
    </div>
  );
}

export default Todo;
