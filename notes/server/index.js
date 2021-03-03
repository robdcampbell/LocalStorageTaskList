const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

// Middleware

// will allow localhost 3000 and 5000 to interact with each other.
app.use(cors());
// allows us to access the req.body (accessing data from the client side)
app.use(express.json());

// ROUTES
// Get all todos

// Get a todo

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1)",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo

// Delete a todo

app.listen(5000, () => {
  console.log("server is started on port 5000");
});
