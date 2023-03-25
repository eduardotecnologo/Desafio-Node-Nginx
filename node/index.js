const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "edudeveloper",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "dbnode",
});

app.get("/", (req, res) => {
  var sql = "INSERT INTO People(people_name) VALUES('Eduardo')";
  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  connection.query("SELECT * FROM People", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        message: '<h1>Full Cycle Rocks!</h1>',
        rows,
      });
    }
  });
});

app.listen(3000, () => console.log("running on port 3000"));