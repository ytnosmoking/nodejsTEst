
let ParseDns = require('./ParseDns.js')
let MainIndex = require('./MainIndex.js')




exports.router = (res, req, pathname) => {
  switch(pathname) {
    case '/parse':
    ParseDns.parseDns(res, req) //  执行dns 解析
     break;
     default:
     MainIndex.goIndex(res, req) //  默认响应html 
  }
}