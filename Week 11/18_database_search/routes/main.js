const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index.ejs", {
    title: "Home",
    header: "This is home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about.ejs", { header: "About page" });
});

router.get("/search", (req, res) => {
  res.render("search.ejs");
});

router.get("/search_result", (req, res, next) => {
  // Search database
  let sqlquery = "SELECT * FROM books WHERE name LIKE ?";

  // Execute SQL query
  console.log(req.body);
  let word = ["%" + req.query.search_text + "%"];

  db.query(sqlquery, word, (err, result) => {
    if (err) {
      next(err);
    } else if (result.length == 0) {
      res.send("No book matches the search term: " + word);
    } else {
      res.render("list.ejs", {
        availableBooks: result,
        topMessage: "Here is a list of books matching the word: " + word,
      });
    }
  });
});

router.get("/register", (req, res) => {
  res.render("../views/register.ejs");
});

router.post("/registered", (req, res) => {
  res.send(
    "Hello " +
      req.body.first +
      " " +
      req.body.last +
      ", you are now registered! We will send you an email to your email address: " +
      req.body.email,
  );
});

router.get("/list", (req, res, next) => {
  // Query database to get all the books
  let sqlquery = "SELECT * FROM books";

  // Execute SQL query
  db.query(sqlquery, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render("list.ejs", {
        availableBooks: result,
        topMessage: "Here is a list of the books we sell:",
      });
    }
  });
});

router.get("/bargainbooks", (req, res, next) => {
  let sqlquery = "SELECT * FROM books WHERE price < 40";

  db.query(sqlquery, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render("list.ejs", { availableBooks: result });
    }
  });
});

router.get("/addbooks", (req, res) => {
  res.render("addbook.ejs");
});

router.post("/bookadded", (req, res, next) => {
  let sqlquery = `INSERT INTO books(name, price) VALUE(?, ?)`;
  let newRecord = [req.body.bookName, req.body.price];

  db.query(sqlquery, newRecord, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(`
        <p>This book is added to database, name: ${req.body.bookName}, price: ${req.body.price}
        <p>Click <a href="/list">here</a> to view your list of books</p>
        `);
    }
  });
});

module.exports = router;
