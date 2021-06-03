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
router.put("/todos/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description=($1) WHERE todo_id=($2) AND user_id =$3 RETURNING *",
      [description, id, req.user.id]
    );

    if (updateTodo.rows.length === 0) {
      return res.json("This todo is not yours!");
    }

    res.status(200).json("Todo was updated!");
  } catch (error) {
    console.error(error);
  }
});

// Delete a todo

module.exports = router;
