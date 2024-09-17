const fs = require("fs");
const http = require("http");

const Home = fs.readFileSync("./Phome.html", "utf-8");
const Contact = fs.readFileSync("./Pcontact.html", "utf-8");

const port = 4002;

const server = http.createServer((req, res) => {
  const urlpath = req.url;

  if (urlpath === "/" || urlpath === "/home") {
    res.end(Home);
  } else if (urlpath === "/Contact") {
    res.end(Contact);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("Server started on port " + port);
});
