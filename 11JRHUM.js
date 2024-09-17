// json response into html usinf map
const fs = require("fs");
const http = require("http");

const Products = JSON.parse(fs.readFileSync("./data3.json", "utf-8"));
const ProductFile = fs.readFileSync("./json.html", "utf-8");

let ProductArr = Products.map((e) => {
  let OutPut = ProductFile.replace("{{%USERID%}}", e.userId);
  OutPut = OutPut.replace("{{%ID%}}", e.id);
  OutPut = OutPut.replace("{{%TITLE%}}", e.title);
  OutPut = OutPut.replace("{{%BODY%}}", e.body);
  return OutPut;
});

const port = 4000;

const server = http.createServer((req, res) => {
  const urlpath = req.url;
  if (urlpath === "/" || urlpath === "products") {
    console.log(ProductArr);
    res.end(ProductArr.join(""));
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("Server Started On the Port Number " + port);
});
