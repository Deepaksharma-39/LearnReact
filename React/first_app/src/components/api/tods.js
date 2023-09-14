import axios from "axios";

export const getTodos = () => {
    return axios("http://localhost:3000/task")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const addTodos = (todo) => {
    return axios.post("http://localhost:3000/task", todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
  export const toggleTodo = (id,newStatus) => {
    return axios.patch(`http://localhost:3000/task/${id}`, {status:newStatus}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const deleteTodo = (id) => {
    return axios.delete(`http://localhost:3000/task/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };