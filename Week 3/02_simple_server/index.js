var http = require("http"); // Imports require module

const port = 8081; // Define port that the app will listen for HTTP requests

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
})
.listen(port, function() {
    console.log(`Node server is running on port ${port}...`)
});
