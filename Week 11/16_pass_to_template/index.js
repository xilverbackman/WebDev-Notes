// Import Express
const express = require("express");

// Import MySQL
const mysql = require("mysql2");

// Define database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlrootpassword321",
  database: "myBookshop",
});

// Connect to database
db.connect((err) => {
  if (err) {
    throw err
  }
  console.log("Connected to database");
});

global.db = db;

// Port number server will listen on
const port = 8081;

// Create Express app object
const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory
app.set("views", "./views");

// Parse URL-encoded form data from request bodies
app.use(express.urlencoded({ extended: true }));

// Import routes
const mainRoutes = require("./routes/main.js");

// Requests beginning with "/" are handled by mainRoutes
app.use("/", mainRoutes);

// Start server and begin listening for HTTP requests on port 8081
app.listen(port, () => {
  console.log("Listening to port: " + port);
});
