import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();
      setName(parsedResponse.user_name);
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
    getName();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Hello {name}!</h2>
      <button onClick={(e) => logout(e)}>logout</button>
    </>
  );
};

export default Dashboard;
