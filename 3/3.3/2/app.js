let http = require('http');
let fs = require('fs');
let url = require('url');
let BASE_DIR = __dirname;

http.createServer((req, res) => {

  // let readPath = __dirname +'/' + url.parse('index.html').pathname
  // let readFile = fs.readFileSync(readPath)
  // res.writeHead(200, {'Content-Type': 'text/html'})
  // res.end(readFile)
  // ----------------------------------------------
  let pathname = url.parse(req.url).pathname;
  let readPath = __dirname + '/static' + pathname;
  if (pathname == '/favicon.ico') {
    return;
  } else if (pathname === '/index' || pathname === '/') {
    goIndex(res);
  } else {
    dealWithStatic(pathname, readPath, res);
  }
}).listen(1337);
console.log('server is running 1337');

/**
 * @desc 静态资源
 * @param pathname  请求路径
 * @param readPath  文件路径
 * @param res 响应对象res
 */
function dealWithStatic(pathname, readPath, res) {
  fs.exists(readPath, exists => {
    if (!exists) {
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write(`This request URL ${pathname} was not found on this server`);
      res.end();
    } else {
      let pointPosition = pathname.lastIndexOf('.'),
        mmieString = pathname.substring(pointPosition + 1),
        mimeType;
      switch (mmieString) {
        case 'css':
          mimeType = 'text/css';
          break;
        case 'png':
          mimeType = 'image/png';
          break;
        default:
          mimeType = 'text/plain';
      }
      fs.readFile(readPath, 'binary', (err, file) => {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain'
          });
          res.end(err);
        } else {
          res.writeHead(200, {
            'Content-Type': mimeType
          });
          res.write(file, 'binary');
          res.end();
        }
      });
    }
  });
}

// const goIndex = (req, res) => {
//   var readPath = __dirname + '/' + url.parse('index.html').pathname;
//   var indexPage = fs.readFileSync(readPath)
//   res.end(indexPage)
// }

function goIndex(res) {
  let readPath = __dirname + '/' + url.parse('index.html').pathname;
  let indexPage = fs.readFileSync(readPath);
  res.end(indexPage);
}