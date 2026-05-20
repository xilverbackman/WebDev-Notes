const express = require("express"); // Import Express

const app = express(); // Creates app object
const port = 8081; // Set port that app will listen for HTTP requests

//get(path, middleware, handler)
app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("<h1>Hello World!</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>This is the about page</h1>");
});

app.listen(port, () => {
    console.log("Listening to port " + port)
});