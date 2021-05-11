const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

// Middleware
app.use(express.json()); // allows access to req (req.body, req.params, etc...)
app.use(cors()); // allows cross domain resource sharing - proxing between ports 3000 and 5000 here

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Pterodactyl" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
