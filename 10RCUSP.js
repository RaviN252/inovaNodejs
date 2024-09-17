// replace content using a single page
const fs = require("fs");
const http = require("http");

const HomeFile = fs.readFileSync("./Home.html", "utf-8");
const port = 4000;

const server = http.createServer((req, res) => {
  const urlpath = req.url;

  if (urlpath === "/" || urlpath === "/home") {
    res.end(HomeFile.replace("{{%CONTENT%}}", "this is Home Page"));
  } else if (urlpath === "/about") {
    res.end(HomeFile.replace("{{%CONTENT%}}", "this is About Page !!!!"));
  } else {
    res.writeHead(404);
    res.end("Page Not found");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log("Server Started On the port Number " + port);
});
