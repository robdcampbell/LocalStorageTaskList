const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Simple Test Route:
app.get("/", (req, res) => {
  res.status(200).json("Alright Alright Alright");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
