
let http = require('http'),
    jade = require('jade'),
    url = require('url');
fs = require('fs');
let staticModule = require('./static_module'); // 静态资源模块
let upload = require('./upload').upload // 上传图片模块
http.createServer((req, res) => {
    res.render = function (template, options) {
        let str = fs.readFileSync(template, 'utf8')
        let fn = jade.compile(str, {filename: template,pretty: true});
        let page = fn(options)
        res.writeHead(200, { "Content-Type" : 'text/html'})
        res.end(page)
    }
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname +'---19')
    if (pathname === '/favicon.ico') {
        return;
    } else if (pathname ==='/index' || pathname == '/') {
        goIndex(res);
    } else if (pathname === '/upload') {
        upload(req, res)
    } else {
        staticModule.getStaticFile(pathname, res, req);
    }

    

}).listen(1337);









/**
 * @desc 页面请求
 * @param {*} res 
 */
function goIndex(res) {
    // let readPath = __dirname + '/' + url.parse('index.html').pathname;
    // let indexPage = fs.readFileSync(readPath);
    // res.end(indexPage);
    res.render(__dirname+'/jade/index.jade', {"user":"123"})
}


