const fs = require("fs");

let data = fs.writeFile("./New.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Created");
  }
});
