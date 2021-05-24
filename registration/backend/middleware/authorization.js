const jwt = require("jsonwebtoken");
require("dotenv").config();
// const bcrypt = require('bcrypt')

//before our routes are hit, the middleware is going to access to the Req and Res
module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!token) {
      return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
  } catch (error) {
    console.error(error.message);
    return res.status(403).json("Not Authorized");
  }
};
