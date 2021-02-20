/* 
custom api for favoring books and trashing books
 will add books from recommendations and from permanent books... from our database

// hard-code bookshelf values so can display covers

// api route based on genre
// ex. api/books/genre/:{{genre}}

*/

const express = require("express");
const router = express.Router();

// Import the model (book.js) to use its database functions
const book = require("../models/book");

// Create all our api routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  book.selectAll((data) => {});
});

router.post("/api/favorite-books", (req, res) => {
  book.insertOne(
    ["title", "author", "genre"],
    [req.body.title, req.body.author, req.body.genre],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/favorite-books/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  book.updateOne(
    {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, the the ID must not exist, so 404 error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use
module.exports = router;

//(referenced unit13-activity17-catsController.js)
