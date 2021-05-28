import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {
  return (
    <>
      <h1>Login</h1>
      <button onClick={(e) => setAuth(true)}>Authenticate</button>
    </>
  );
};

export default Login;
