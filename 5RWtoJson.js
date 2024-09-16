const fs = require("fs");

const NewData = [
  {
    name: "RAVI N",
    phone: 9686595916,
    collage: "Kalpataru Institue of Technology",
  },
  {
    name: "RAM N",
    phone: 96865,
    collage: "Kalpataru Institue of Technology",
  },
];
const jsondata = fs.readFileSync("./data2.json", "utf-8");
const objdata = JSON.parse(jsondata);
objdata.push(NewData); // thisb will push to Terminal

fs.writeFileSync("./data2.json", JSON.stringify(objdata));
console.log(objdata);
console.log("Data Added");
