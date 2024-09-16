const fs = require("fs");
const http = require("http");

//reading data json file using post man

const jsondata = fs.readFileSync("./data2.json", "utf-8");

const server = http.createServer((req, res) => {
  res.end(jsondata);
});

server.listen(3009, "127.0.0.1", () => {
  console.log("server Started");
});
