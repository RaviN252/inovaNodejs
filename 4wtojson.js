const fs = require("fs");

const newData = {
  fname: "XXX",
  lname: "YYY",
  DOB: 2000,
};
const jsondata = JSON.stringify(newData);
fs.writeFileSync("./data2.json", jsondata);
console.log("Data Added");
