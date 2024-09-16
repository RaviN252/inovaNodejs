//Posting Data From Postman To JsonFile

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (postmanData) => {
      body += postmanData;
    });

    req.on("end", () => {
      fs.writeFile("./data.json", body, (err, result) => {
        if (err) {
          res.end(err);
        } else {
          req.end("Data Posted");
          res.writeHead(201, { "Content-Type": "application/json" });
        }
      });
    });
  } else {
    res.end("Only POST method allowed");
  }
});

server.listen(3009, "127.0.0.1", () => {
  console.log("SERVER started on port 3009");
});
