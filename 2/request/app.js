let http = require('http')
let quertstring = require('querystring')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  
  if(req.method=="POST") {
    let postData = ''
    req.addListener('data', postDataChunk => {
      postData += postDataChunk
    })
    req.addListener('end', () => {
      let postStr = JSON.stringify(quertstring.parse(postData))
      res.end(`${postStr}\n${req.method}`)
    })
  }else {
    res.end('hello \n'+req.method)
  }
  
}).listen(1337, '127.0.0.1')
console.log('server running at 127.0.0.1:1337')