const express = require("express");
const port = 8081;

const app = express();

// Set up body parser
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require("./routes/main.js");
app.use("/", mainRoutes);

app.listen(port, () => console.log("Listening to port: " + port));
