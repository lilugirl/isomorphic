'use strict';

var http = require('http');
http.createServer(function (req, res) {
    console.log(req.path);
    res.writeHead(302, {'Location': 'http://1ke.co'});
    res.end();
}).listen(1377, '127.0.0.1');


var shared_redirect=function (url){
    if( typeof window !== 'undefined') {
        window.location.href = url;
    }else{
        this._res.writeHead(302,{'Location': url});
    }
    
};


module.exports = sharedre_direct;