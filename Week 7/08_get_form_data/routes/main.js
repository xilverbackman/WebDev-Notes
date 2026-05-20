const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs", { title: "Home", header: "This is home page" });
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

module.exports = router;
