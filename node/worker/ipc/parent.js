const cp = require('child_process')
const n = cp.fork(__dirname + '/sub.js')

n.send({ hello: 'world' })

n.on('message', message => {
    console.log(message, "主进程收到消息");
})