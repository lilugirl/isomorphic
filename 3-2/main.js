var http = require('http');
http.createServer(function (req, res) {
    console.log(req.path);
    res.writeHead(302, {'Location': 'http://1ke.co'});
    res.end();
}).listen(1377, '127.0.0.1');