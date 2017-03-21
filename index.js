var http = require('http');
http.createServer(function(req, res) {
	res.write("Server not found");
	res.end();
}).listen(8000);
