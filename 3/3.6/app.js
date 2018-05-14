/**
 * 设置路径  全局变量
 */

 global.BASE_DIR = __dirname;
 global.APP = BASE_DIR+ "/app/"
 global.CON = APP + "/controller/"
 global.CORE = App + "/core/"
 global.LIB = BASE_DIR + "/node_modules/"
 global.CONF = BASE_DIR + "/conf/"
 global.STATIC = BASE_DIR + "/static/"
 global.VIEW = BASE_DIR + "/view/"


/**
 * modules 引入
 */
global.lib = {
  http: require('http'),
  fs: require('fs'),
  url: require('url'),
  querystring: require('querystring'),
  httpParam: require(LIB + 'http_param'),
  staticModule: require(LIB + 'static_module'),
  router: require(CORE + 'router'),
  action: require(CORE + 'action'),
  jade: require('jade'),
  socket: require('socket.io'),
  path: require('path'),
  parseCookie: require('connect').utils.parseCookie,
  session: require(LIB + 'node_session'),
  util: require('util')
}

global.onlineList = [];
global.app = lib.http.createServer((req, res)=>{
  res.render = function() {
    let template = arguments[0],
    options = arguments[1],
    str = lib.fs.readFileeSync(template, 'utf8'),
    fn = lib.jade.compile(str, { filename: template, pretty: true}),
    page = fn(options);
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.end(page);
  }
  lib.router.router(res, req)
}).listen(8000)


global.io = lib.socket.listen(app);