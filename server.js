const http = require('http')
let port = 80
let server = http.createServer()

server.listen(port, ()=> console.log(`Listening at PORT ${port}`))