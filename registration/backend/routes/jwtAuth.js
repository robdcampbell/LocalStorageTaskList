const router = require("express").Router();
const pool = require("../config/db.js");

// adding user to database
router.post("/", async (req, res) => {
  try {
    // 1). destructure the req.body {email, name, password}

    const { user_name, user_email, user_password } = await req.body;

    // 2). Check if user exists (if yes, throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      user_email,
    ]);
    console.log(user);

    if (user.rowCount > 0) {
      res.status(200).json({
        message: "Bob Saget@!",
      });
    }

    // 3). Bcrypt the users password
    // 4). Enter the new user into Database
    // 5). Generating our JWT token
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error...");
  }
});

module.exports = router;
