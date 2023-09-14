import React, { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

import { addTodos, deleteTodo, getTodos, toggleTodo } from "../api/tods";


function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetTodos();
  }, []);



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
    getTodos()
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

  const handleToggle=(id,newStatus)=>{
    setLoading(true);
    toggleTodo(id,newStatus).then(res=>{
      handleGetTodos();
    }).catch(error=>{
      console.log(error)
      setLoading(false);
    })
  }

  const handleDelete=(id)=>{
    setLoading(true);
    deleteTodo(id).then(res=>{
      handleGetTodos();
    }).catch(error=>{
      console.log(error)
      setLoading(false);
    })
  }
  return (
    <div>
      <div>{loading && "Loading"}</div>
      <AddToDo handleAdd={handleAdd} />
      <h3>Pending</h3>
      {todos.filter(item=>!item.status).map((item) => (
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
{todos.filter(item=>item.status).map((item) => (
        <ToDoList
          key={item.id}
          title={item.title}
          status={item.status}
          id={item.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Todo;
