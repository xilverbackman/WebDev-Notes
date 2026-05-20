const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index.ejs", {
    title: "Static title",
    header: "Some header",
  });
});

router.get("/about", (req, res) => {
  res.render("../views/about.ejs", { header: "Some about information" });
});

module.exports = router;
