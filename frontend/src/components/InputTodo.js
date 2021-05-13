import React, { useState, useRef } from "react";

const InputTodo = () => {
  //const [description, setDescription] = useState("");
  const description = useRef();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description: description.current.value };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
      description.current.value = "";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <h1>Input Todo</h1>
        <input
          type="text"
          placeholder="add todo"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          ref={description}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
