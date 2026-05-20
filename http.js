const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to the HTTP server!\n");
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
