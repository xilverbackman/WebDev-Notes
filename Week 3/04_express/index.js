const express = require("express"); // Imports Express module

const app = express(); // Creates app object
const port = 8081; // Define port that the app will listen for HTTP requests

app.get("/", (req, res) => res.send(
    "<h1>Hello World!</h1><p>This is my first Express program</p>"
)); // GET route handler; handles requests to "/"

app.listen(port, () =>
  console.log("Node server is running on port " + port + "..."),
); // Start listening for HTTP messages
