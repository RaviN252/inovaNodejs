// run html file with node js

const fs = require("fs");
const http = require("http");

const Home = fs.readFileSync("./Phome.html", "utf-8");
const port = 4000;

const server = http.createServer((req, res) => {
  res.end(Home);
});

server.listen(port, "127.0.0.1", () => {
  console.log("server started on the port" + port);
});
