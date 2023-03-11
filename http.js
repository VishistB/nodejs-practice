const http = require('http');

const serverPort = 8000

const server = http.createServer((req, res) => {
    console.log(req)
    res.write('NODE is noice')
    res.end()
})

server.listen(serverPort)
console.log(`listening on port ${serverPort}`)