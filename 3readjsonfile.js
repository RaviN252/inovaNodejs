const fs = require("fs");
const readJsonfile = fs.readFileSync("./data.json", "utf-8");

console.log(JSON.parse(readJsonfile));
