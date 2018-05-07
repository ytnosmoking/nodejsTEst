

let http = require('http'),
  fs = require('fs'),
  url = require('url'),
  querystring = require('querystring'),
  jade = require('jade'),
  socket = require('socket.io');
let staticModule = require('./static_module'); // 静态资源模块
let upload = require('./upload').upload // 上传图片模块
let BASE_DIR = __dirname,
  filePath = BASE_DIR + '/static/test.txt';

var app = http.createServer((req, res) => {
  /* http 响应对象 res 新增jade模块解析方法*/
  res.render = (template, options) => {
    let str = fs.readFileSync(template, "utf8")
    let fn = jade.compile(str, {
      filename: template,
      pretty: true
    })
    let page = fn(options)
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(page)
  }
  /*获取用户url请求路径 并应用decodeURI解析url中的特殊字符和中字*/
  let pathname = decodeURI(url.parse(req.url).pathname);

  if (pathname == '/favicon.ico') {
    return;
  }
  //路由处理
  switch (pathname) {
    case "/":
      defaultIndex(res);
      break;
    case "/index":
      defaultIndex(res);
      break;
    case '/upload':
      upload(req, res);
      break;
    default:
      staticModule.getStaticFile(pathname, res, req);
      break;
  }
}).listen(1337)



/**
 * @desc 页面请求
 * @param {*} res 
 */
function defaultIndex(res) {
  res.render(__dirname + '/jade/index.jade', {
    "user": "123"
  })
}

let io = socket.listen(app)
io.sockets.on('connection', socket => {
  let message = fs.readFileSync(filePath, "utf8");
  // 监听 change_from_server 消息
  socket.emit('change_from_server', { msg: message });
  socket.on('success', data => {
    console.log(data.msg)
  })
  socket.on('data', data => {
    console.log(data)
    fs.writeFile(filePath, data.msg+"from client", () => {
      socket.emit('change_from_server', { msg: data.msg+'form server'});
    }) 
  })
})


