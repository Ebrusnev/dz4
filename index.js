var http = require('http');
http.createServer(function(req, res) {
	res.write("Hello, Yo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, Hola");
	res.end();
}).listen(3000);
