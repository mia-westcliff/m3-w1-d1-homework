const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const requestedUrl = req.url;

  let filename;
  if (requestedUrl === '/') {
    filename = 'home.html';
  } else if (requestedUrl === '/about') {
    filename = 'about.html';
  } else if (requestedUrl === '/contact') {
    filename = 'contact.html';
  } else {
    res.statusCode = 404;
    res.end('<html><body><h1>Error 404: Invalid Request!</h1></body></html>');
    return;
  }

  fs.readFile(path.join(__dirname, filename), (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('<html><body><h1>Error 404: $(filename) not found</h1></body></html>');
      return;
    }
    res.end(data);
  });
});

server.listen(5000);
