import axios from "axios";

export const getTodos = (args) => {
  const {titleSortBy,page}= args;
    return axios(`http://localhost:3000/task?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=1`)
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