const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello Bear, i am response')
}).listen(8181,'127.0.0.1');