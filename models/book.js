// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
const Book = sequelize.define("bookshelf", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
});

const book1 = Book.create({
  title: "Jane",
  author: "Doe",
  genre: "mystery",
});
console.log("Jane's auto-generated ID:", sequelize.models.modelName);

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
