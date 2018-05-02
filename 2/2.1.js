//  parse_dns_ex.js


let http = require('http'); // http service create
let dns = require('dns'); // dns www ip
let fs = require('fs') ;// file 
let url = require('url'); // file location
let querystring = require('querystring'); // string parse




http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  let pathname = url.parse(req.url).pathname
  req.setEncoding('utf8')

  router(res, req, pathname)

}).listen(1337, '127.0.0.1')


console.log('server is running!')

function router(req, res, pathname) {
  switch (pathname) {
    case '/parse':
    parseDns(res, req)
      break;
    default:
    goIndex(res, req)
  }
}

/**
 * @desc  定义响应html页面的函数
 * @params res http 请求对象
 * @params  req http 响应对象
 */
function goIndex(req, res) {
  /*获取 index.html 文件路径 */
  let readPath = __dirname+ '/' +url.parse('index.html').pathname;
  console.log(readPath)
  let indexPage = fs.readFileSync(readPath,'utf8');
  // console.log(indexPage)
  res.end(indexPage)
}

function parseDns (req, res) {
  let postData = '';
  req.addListener('data', postDataChunk => {
    postData += postDataChunk;
  })

  req.addListener('end', function(){
    let retData = getDns(postData, (domain, addresses) => {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(`<html>
        <head>
          <meta http-equiv="content-type" content="text/html"; charset ="utf-8">
        </head>
        <body>
          <div style="text-align:center">
            Domin:<span style="color:red">${domain}</span>
            IP:<span style="color:red">${addresses.join(',')}</span>
          </div>
        </body>
      </html>`)
    })
    return 
  })
}

function getDns (postData, callback) {
  console.log(postData)
  let domain = querystring.parse(postData).search_dns;
  console.log(domain)
  dns.resolve(domain, function(err, addresses){
    if(!addresses) {
      addresses = ['不存在域名'];
    }
    callback(domain, addresses)
  })
}


