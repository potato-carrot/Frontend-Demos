let http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello')
}).listen(8000, '127.0.0.1')