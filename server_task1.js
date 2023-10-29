const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Home Page.\n');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page.\n');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact Page.\n');
  } else {
    res.statusCode = 404;
    res.end('Invalid Request!\n');
  }
});

server.listen(5000);
