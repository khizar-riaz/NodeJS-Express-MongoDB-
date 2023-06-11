const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('servegggr started')
})

server.listen(8080)