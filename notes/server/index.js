const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
// will allow localhost 3000 and 5000 to interact with each other.
app.use(cors());
// allows us to access the req.body (accessing data from the client side)
app.use(express.json());

app.listen(5000, () => {
  console.log("server is started on port 5000");
});
