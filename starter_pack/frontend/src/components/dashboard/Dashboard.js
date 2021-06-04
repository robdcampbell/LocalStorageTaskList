import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import InputTodo from "./todolist/InputTodo";
import ListTodos from "./todolist/ListTodos";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();
      // console.log(parsedResponse);
      //parsedResponse.forEach((item) => console.log(item.description));
      setName(parsedResponse[0].user_name);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    toast.success(`${name} successfully logged out!`);
    setAuth(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard__heading">
        <h1>Hello {name}!</h1>
        <button onClick={(e) => logout(e)}>logout</button>
      </header>

      <InputTodo />
      <ListTodos />
    </div>
  );
};

export default Dashboard;
