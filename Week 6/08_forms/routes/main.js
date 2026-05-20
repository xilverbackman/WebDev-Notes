const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index.ejs", {
    title: "Home",
    header: "Interesting header",
  });
});

router.get("/about", (req, res) => {
  res.render("../views/about.ejs", { header: "About" });
});

router.get("/search", (req, res) => {
  res.render("../views/search.ejs");
});

module.exports = router;
