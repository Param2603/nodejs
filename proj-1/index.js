const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  let fileName = "";

  switch (req.url) {
    case "/":
      fileName = "home.html";

      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact":
      fileName = "contact.html";
      break;
       case "/feature":
      fileName = "feature.html";
      break;

    default:
      break;
  }

  fs.readFile(fileName, (err, data) => {
    if (!err) {
      res.end(data);
    }
  });
  });

server.listen(8080, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  console.log("server is running");
});