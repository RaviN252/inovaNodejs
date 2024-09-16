const fs = require();
const http = require();

const Home = fs.readFilesync("./Phome.html", "utf-8");
const Contact = fs.readFilesync("./Pcontact.html", "utf-8");
const port = 4000;

const server = http.createServer((req, res) => {
  const urlpath = req.url;

  if (urlpath === "/" || urlpath === "/home") {
    res.end(Home);
  } else if (urlpath === "/Contact") {
    res.end(Contact);
  }
});
