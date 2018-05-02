let http = require('http'),
  fs = require('fs'),
  url = require('url');


http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)


  switch (pathname) {
    case '/index':
      resIndex(res);
      break;
    case '/img':
      resImage(res);
    default:
      resDefault(res)
      break;
  }
}).listen(1337);



/**
 * @desc resIndex 响应html 函数
 */
function resIndex(res) {
  let readPath = __dirname + '/' + url.parse('index.html').pathname
  let indexPage = fs.readFileSync(readPath)
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(indexPage)
}

/**
 * @desc resImage 响应image 函数
 */

function resImage(res) {
  let readPath = __dirname + '/' + url.parse('logo.png').pathname
  let indexPage = fs.readFileSync(readPath)
  res.writeHead(200, {
    'Content-Type': 'image/png'
  })
  res.end(indexPage)
}

/**
 * @desc resDefault 404 函数
 */
function resDefault(res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  })
  res.end(`can't find source`)
}