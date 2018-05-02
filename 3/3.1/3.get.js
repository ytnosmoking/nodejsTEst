let http = require('http')
let url = require('url')
let querystring = require('querystring')


http.createServer((req,res) => {
  let pathname = url.parse(req.url).pathname
  let query = url.parse(req.url).query

  let params = querystring.parse(query)
  console.log(pathname)
  console.log(query?query:'no')
  console.log(params)
  res.writeHead(200, {'Content-Type' :' text/plain'})
  res.end('success')

}).listen(1337)
console.log('server is running at 1337')