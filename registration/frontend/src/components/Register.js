import React, { useState } from "react";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const changeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { email, password, name };

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      // SET USER TOKEN TO LOCAL STORAGE
      localStorage.setItem("token", parsedResponse.token);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form className="register__form" onSubmit={(e) => onSubmitForm(e)}>
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => changeInput(e)}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => changeInput(e)}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => changeInput(e)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
