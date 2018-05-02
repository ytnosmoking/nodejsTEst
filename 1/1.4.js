


let http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.end('<h1>you are so good \n</h1>')
}).listen(1337, "127.0.0.1")
console.log('server is Running')