const router = require("express").Router();
const pool = require("../config/db.js");
const bcrypt = require("bcrypt");

// adding user to database
router.post("/register", async (req, res) => {
  try {
    // 1). destructure the req.body {email, name, password}

    const { name, email, password } = await req.body;

    // 2). Check if user exists (if yes, throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User Already Exists!");
    }

    // 3). Bcrypt the users password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = bcrypt.hash(password, salt);

    // 4). Enter the new user into Database

    // 5). Generating our JWT token
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error...");
  }
});

module.exports = router;
