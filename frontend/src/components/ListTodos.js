import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeTodo, setActiveTodo] = useState({});

  const fetchTodos = async () => {
    try {
      const data = await fetch("http://localhost:5000/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const allTodos = await data.json();
      // console.log(allTodos);

      setTodos(allTodos);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      // fetchTodos();
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
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
                    <button
                      onClick={(e) => {
                        console.log(todo.todo_id);
                        setShowModal(true);
                        setActiveTodo(todo);
                      }}
                    >
                      Edit
                    </button>
                    {showModal && (
                      <EditTodo
                        todo={activeTodo}
                        showModal={showModal}
                        setShowModal={setShowModal}
                      />
                    )}
                  </td>
                  <td>
                    <button onClick={(e) => deleteTodo(todo.todo_id)}>X</button>
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
