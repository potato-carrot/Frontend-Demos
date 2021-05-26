let fork = require('child_process').fork
let cpus = require('os').cpus()
for (let i = 0; i < cpus.length; i++) {
    fork("./worker.js")
}