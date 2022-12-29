const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bbs",
});

app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (2)";
  db.query(sqlQuery, (err, result) => {
    console.log(err);
    res.send("success!");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
