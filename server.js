const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 8000;

const requestListener = function (req, res) {
  let path = "";
  if ("/" == req.url) {
    path = "/index.html";
  } else {
    path = req.url;
  }
  fs.readFile(__dirname + "/docs" + path, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
