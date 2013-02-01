var http = require('http');
var util = require('util');

var port = (process.env.VMC_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

console.log("host="+host+" ; port="+port+":process.env.VMC_APP_PORT="+process.env.VMC_APP_PORT+" ; process.env.VMC_APP_PORT="+process.env.VMC_APP_PORT);

server.listen(port, host);
