const express = require("express");

const app = express()
const port = 8081;

// Set rendering engine for Express to EJS
app.set("view engine", "ejs")

// Load route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

app.listen(port, () => console.log("Listening to port: " + port))