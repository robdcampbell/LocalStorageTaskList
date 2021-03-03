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

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a todo

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    // desctucting from the json thats being sent from the body (we're pulling out the "description")
    const { description } = req.body;
    const newTodo = await pool.query(
      // "$1" is a variable, which is set by the next argument array (in this case [description])
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo

// Delete a todo

app.listen(5000, () => {
  console.log("server is started on port 5000");
});
