const fs = require('fs')
const stream = fs.createReadStream('not-found')

stream.on('error', err => {
    console.trace();
    console.log(err.stack);
})