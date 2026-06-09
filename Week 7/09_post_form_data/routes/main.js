const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index.ejs", { title: "Home", header: "This is home page" });
});

router.get("/about", (req, res) => {
  res.render("about.ejs", { header: "About page" });
});

router.get("/search", (req, res) => {
  res.render("search.ejs");
});

router.get("/search_result", (req, res) => {
  res.send("You searched for: " + req.query.search_text);
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

module.exports = router;
