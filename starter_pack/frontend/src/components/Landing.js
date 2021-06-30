import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing-form">
      <h1>Welcome.</h1>
      <p>Sign in and start buildng your list:</p>
      <div className="landing-nav">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </section>
  );
};

export default Landing;
