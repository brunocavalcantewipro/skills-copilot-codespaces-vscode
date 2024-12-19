// Create web server
// 1. Create a web server
// 2. Read comments from file
// 3. Display comments on web page

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('./comments.json', 'utf-8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});

server.listen(3000, '