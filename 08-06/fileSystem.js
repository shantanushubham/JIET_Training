var fs = require("fs");
var http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("fs1.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("The file was not found!");
        return res.end();
      }
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  })
  .listen(5000);
