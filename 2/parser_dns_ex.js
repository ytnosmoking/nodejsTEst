// import { goIndex } from './MainIndex';

let http = require('http')
let fs = require('fs')
let url = require('url')
let dns = require('dns')
let querystring = require('querystring')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  req.setEncoding('utf8')
  res.writeHead(200, { 'Content-Type': 'text/html'})
  router(res, req, pathname)
}).listen(3000, '127.0.0.1')

/**
 * 
 * @param {*} res 
 * @param {*} req 
 * @param {*} pathname 
 */
function router(res, req, pathname) {
  switch(pathname) {
    case '/parse':
    parseDns(res, req);
    break;
    default:
    goIndex(res, req);
  }
}

/**
 * @desc  dns 解析地址
 * @param {*} res 
 * @param {*} req 
 */
function parseDns (res, req) {
  let postData = '';
  req.addListener('data', postDataChunk => {
    postData += postDataChunk
  })

  req.addListener('end', () => {
    let retData = getDns(postData, (domain, address) => {
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(`
        <html>
          <head>
            <title> getDns</title>
            <meta http-equiv="content-type" content="text/html"; charset ="utf-8">
          </head>
          <body>
            <div style="text-align:center;">
              Domain:<span style="color:red"> ${domain}</span>
              IP:<span style="color:red">${address.join(",")}</span>
            </div>
          </body>
        </html>
      `)
    })
  })
}

/**
 * @desc 响应初始页面的html 函数
 * @param {*} res 
 * @param {*} req 
 */
function goIndex(res, req) {
  let readPath = __dirname + '/' +url.parse('index.html').pathname
  let indexPage = fs.readFileSync(readPath)
  console.log('index.html')
  res.end(indexPage)
}
/**
 * @desc  解析数据 回掉
 * @param {*} postData 
 * @param {*} callback 
 */
function getDns(postData, callback) {
  let domain = querystring.parse(postData).search_dns
  // 异步解析域名
  dns.resolve(domain, (err, address) => {
    if(err) throw err;
    if(!address) {
      address =['不存在域名']
    }
    callback(domain, address)
  })
}