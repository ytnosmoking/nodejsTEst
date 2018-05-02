let http = require('http')
let fs = require('fs')
let url = require('url')
let querystring = require('querystring')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  switch (pathname) {
    case '/add':
      resAdd(res, req);
      break;
    default:
      resIndex(res);
      break
  }
}).listen(1337)


function resIndex(res) {
  let readPath = __dirname + '/' + url.parse('post.html').pathname
  let indexPage = fs.readFileSync(readPath)
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.end(indexPage)
}

function resAdd(res, req) {
  let postData = ""
  req.setEncoding('utf8')
  req.addListener('data', postDataChunk => {
    postData += postDataChunk;
  })
  req.addListener('end', () => {
    let param = querystring.parse(postData)
    console.log(postData)
    console.log(param)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('success')
  })
}