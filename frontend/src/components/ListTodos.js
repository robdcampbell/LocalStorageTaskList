import React, { useState, useEffect } from "react";
import axios from "axios";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const data = await fetch("http://localhost:5000/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const allTodos = await data.json();
      console.log(allTodos);

      setTodos(allTodos);

      // USING AXIOS
      // const allTodos = await axios.get("http://localhost:5000/todos");
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (e) => {
    const id = e.target.parentElement.parentElement.id;

    const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("Deleted!");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo_list">
      {!todos ? (
        <h3>Nothing to do yet!</h3>
      ) : (
        <>
          <table className="todo_table">
            <thead>
              <tr className="todo_row">
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr className="todo_card" key={todo.todo_id} id={todo.todo_id}>
                  <td>{todo.description}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button onClick={(e) => deleteTodo(e)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ListTodos;
