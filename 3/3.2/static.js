// let BASE_DIR = __dirname;
// let CONF = BASE_DIR + '/conf/';
// let STATIC = BASE_DIR + '/static';
// let mmieConf;

// let sys = require('url'),
//     http = require('http'),
//     fs = require('fs'),
//     url = require('url'),
//     path = require('path');
// mmieConf = getUrlConf();
let  http = require('http'),
    url = require('url');
    fs = require('fs');
let staticModule = require('./static_module'); // 静态资源模块

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/favicon.ico') {
        return;
    } else if (pathname == '/index' || pathname == '/') {
        goIndex(res);
    } else {
        staticModule.getStaticFile(pathname, res, req);
    }
}).listen(1337);









/**
 * @desc 页面请求
 * @param {*} res 
 */
function goIndex(res) {
    let readPath = __dirname + '/' + url.parse('index.html').pathname;
    let indexPage = fs.readFileSync(readPath);
    res.end(indexPage);
}


