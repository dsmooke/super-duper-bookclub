const mysql = require("mysql");

const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    port: PORT,
    password: "password" || "Neverm0re!",
    database: "bookshelf_db",
  }
);

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to Database at port: ${PORT}`);
});

module.exports = connection;
