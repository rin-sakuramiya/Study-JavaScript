var http = require('http');
var server = http.createServer();

server.on('request', function handleRequest(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello World');
  res.end();
}).listen(8081);
