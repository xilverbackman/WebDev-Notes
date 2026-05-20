const express = require("express");
const port = 8081;

const app = express();

const mainRoutes = require("./routes/main.js")

app.use("/", mainRoutes)

app.listen(port, () => console.log("Listening to port: " + port));
