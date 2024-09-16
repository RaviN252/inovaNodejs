const fs = require("fs");
let data = fs.readFileSync("./Example.txt", "utf-8");

if (data == "") {
  console.log("Not Found");
} else {
  console.log(data);
}
