const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    res.write('NODE is nice')
    res.end()
})

server.listen(8000)