let http = require('http');
let dns = require('dns');
let fs  = require('fs');
let url = require('url');
let querystring = require('querystring');



http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    let pathname = url.parse(req.url).pathname;
    req.setEncoding("utf8")
    
    // let indexPage = fs.readFileSync(readPath)
    // res.end(indexPage)
    router(res, req, pathname)
}).listen(3001, '127.0.0.1')


const router = (req, res, pathname) => {
    switch (pathname) {
        case "/parse":
            parseDns(res, req);
            break;
            default:
            goIndex(res, req)
    }
}

const goIndex = (req, res) => {
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath)
    res.end(indexPage)
}


const parseDns = (req, res) => {
    let postData = '';
    req.addListener('data', postDataChunk => {
        postData += postDataChunk ;
    })
    /**http 响应 html页面信息 */
    req.addListener('end', () => {
        let retData = getDns(postData, (domain, address) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<html>
                <head>
                <meta http-equiv='content-type' content='text/html'; charset='utf-8'>
                </head>
                <div style='text-align:center'>
                    Domin:<span style='color:red'>${domain}</span>
                    IP: <span style='color:red'>${address.join(",")}</span>
                </div>
            </html>`);
        })
        return ;
    })
}

const getDns = (postData, callback) => {
    let domain = querystring.parse(postData).search_dns;
    dns.resolve(domain, function (err, address) {
        if(!address) {
            address = ['不存在域名'];
        }
        callback(domain, address)
    })
}