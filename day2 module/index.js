// core module : it is given by nodejs (http,path,fs)  (fs: is readfile() async nature)
// third party module : (nodemon,espress,multer,ejs)
// local module : we can create this module

//   res.write(`sum of numbers is  ${sum(11, 5)}`)
//   res.write(`sub of number is ${sub(12,6 )} `)
//   res.write(`multiply of numbers is ${mul(2, 3)}`)



const http = require("http");
const { sum, sub, mul, div } = require("./math");

let PORT = 8080;

const server = http.createServer((req, res) => {
  res.write(
    `sum of numbers is  ${sum(1, 5)}  sub of number is ${sub(
      12,
      6
    )} multiply of numbers is ${mul(2, 3)}`
  );
     return res.end()
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  console.log(`server is running Port no ${PORT}`);
});