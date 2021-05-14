import React, { useState } from "react";

const EditTodo = ({ showModal, setShowModal, todo }) => {
  const [description, setDescription] = useState(todo.description);

  return (
    // <>
    //   <div>
    //     <h1 onClick={(e) => console.log(todo.todo_id)}>
    //       tests {todo.todo_id}{" "}
    //     </h1>
    //     <input type="text" placeholder={todo.description} />
    //   </div>
    // </>

    <div className="edit__modal">
      <div className="modal__content">
        <h1>Edit Todo {todo.todo_id}</h1>
        <input
          type="text"
          placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="modal__controls">
          <p>
            <span
              className="confirm__edit"
              onClick={(e) => setShowModal(false)}
            >
              Confirm Edit
            </span>
          </p>
          <p>
            <span
              className="confirm__edit"
              onClick={(e) => setShowModal(false)}
            >
              Close
            </span>
          </p>
        </div>

        <p>
          <span className="close__modal" onClick={(e) => setShowModal(false)}>
            X
          </span>
        </p>
      </div>
    </div>
  );
};

export default EditTodo;
