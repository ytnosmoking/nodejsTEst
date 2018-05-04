let http = require('http'),
  fs = require('fs'),
  url = require('url'),
  querystring = require('querystring'),
  jade = require('jade'),
  socket = require('socket.io');
let BASE_DIR = __dirname,
  filePath = BASE_DIR + '/test.txt';

http.createServer((req, res) => {
  /* http 响应对象 res 新增jade模块解析方法*/
  res.render = (template, options) => {
    let str = fs.readFileSync(template, "utf8")
    let fn = jade.compile(str, { filename: template, pretty: true})
    let page = fn(options)
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(page)
  }
  /*获取用户url请求路径 并应用decodeURI解析url中的特殊字符和中字*/
  let pathname = decodeURI(url.parse(req.url).pathname)
})