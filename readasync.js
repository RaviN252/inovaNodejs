const fs = require("fs");

let data = fs.readFile("./Example.txt", "utf-8", (err, res) => {
  if (res) {
    console.log(res);
  } else {
    console.log(err);
  }
});
