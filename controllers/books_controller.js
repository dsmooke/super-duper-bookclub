const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions
const bookModel = require("../models/book");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  bookModel.selectAll((data) => {
    const bookObj = {
      books: data,
    };
    console.log(bookObj);
    res.render("index", {
      books: data,
    });
  });
});

router.post("/api/books", (req, res) => {
  bookModel.insertOne(
    ["title", "author", "author", "genre"],
    [req.body.title, req.body.author, req.body.genre],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/books/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  bookModel.updateOne(
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
