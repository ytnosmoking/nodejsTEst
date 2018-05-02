let http = require('http');
let url = require('url');


// 路由模块加载
const router = require('./router.js')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  req.setEncoding('utf8')
  res.writeHead(200, { "Content-Type": 'text/html'});
  router.router(res, req, pathname)
}).listen(3001, "127.0.0.1")
console.log('server is running !~port 127.0.0.1')