var http = require('http');
http.createServer(function(req, res) {
	res.write("Hello, Yo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, Hola, hola2");
	res.end();
}).listen(3000);
