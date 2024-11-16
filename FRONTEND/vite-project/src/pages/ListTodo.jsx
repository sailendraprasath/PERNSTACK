import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  //Delete Todo function

  const deleteTodo = async (id) =>{
    try {
      const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`,{
        method: "DELETE"
      });
      
      setTodos(todos.filter(todo => todo.todo_id !== id))

    } catch (err) {
      console.error(err.message);
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(req.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <>
      <Fragment>
        <h1>ListTodo</h1>
        <table class="table" className="text-center mt-5">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo = {todo}/></td>
                <td>
                  <button
                    className="bg-red-500"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    </>
  );
};

export default ListTodo;
