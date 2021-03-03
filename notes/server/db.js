const Pool = require("pg").Pool;

// configure where this database is at
const pool = new Pool({
  user: "postgres",
  password: "girl4yeah2",
  host: "localhost",
  database: "pernstack",
  port: 5432,
});

// what is used to run the queries
module.exports = pool;
