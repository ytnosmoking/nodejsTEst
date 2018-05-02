
let querystring = require('querystring');
let dns = require('dns');


exports.parseDns = (res, req) => {
  let postData = '';
  req.addListener('data', postDataChunk => {
    postData += postDataChunk
  })

  // 响应 html 页面
  req.addListener('end', () => {
    console.log(1)
    console.log(postData)
    let retData = getDns( postData,(domain,address) => {
      console.log(domain)
      console.log(address)
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(`<html>
      <head>
        <meta http-equiv="content-type" content="text/html"; charset ="utf-8">
      </head>
      <body>
        <div style="text-align:center">
          Domin:<span style="color:red">${domain}</span>
          IP:<span style="color:red">${address.join(',')}</span>
        </div>
      </body>
    </html>`)
    })
    return 
  })
  
}

function getDns (postData, callback) {
  let domain = querystring.parse(postData).search_dns;
  dns.resolve(domain, (err, address) => {
    if(!address) {
      address = ['不存在域名']
    }
    callback(domain, address)
  })
}