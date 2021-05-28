import React from "react";

const Dashboard = ({ setAuth }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={(e) => setAuth(false)}>Log Out</button>
    </>
  );
};

export default Dashboard;
