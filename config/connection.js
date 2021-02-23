// Dependencies
const Sequelize = require("sequelize");

const databaseConnection = {
  username: "root",
  password: "password",
  database: "bookshelf_db",
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
};

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize(process.env.JAWSDB_URL || databaseConnection);

module.exports = sequelize;
