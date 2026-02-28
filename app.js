const http = require("http");

const server = http.createServer((req, res) => {
  res.end("DevOps pipeline test successful!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});