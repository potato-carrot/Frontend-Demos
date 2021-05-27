// 主进程发送句柄（这里是server对象）给工作进程
const child = require('child_process').fork('sub.js')
const server = require('net').createServer()
server.on('connection', socket => {
    socket.end('handle by parent\n')
})
server.listen(1337, () => {
    child.send('server', server)
})