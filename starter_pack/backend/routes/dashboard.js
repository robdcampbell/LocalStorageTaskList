const router = require("express").Router();
const pool = require("../config/db");
const authorization = require("../middleware/authorization");

// All todos and name

router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT * FROM users AS u LEFT JOIN todos AS t ON u.user_id = t.user_id WHERE u.user_id =$1",
      [req.user.id]
    );

    res.json(user.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error...");
  }
});

// Create a todo

router.post("/todos", authorization, async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (user_id, description) VALUES($1, $2) RETURNING *",
      [req.user.id, description]
    );
    res.status(200).json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Update a todo

// Delete a todo

module.exports = router;
